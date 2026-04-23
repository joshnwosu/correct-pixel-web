'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { RefreshCcw, X } from 'lucide-react';

type UpdateAvailableProps = {
  currentVersion: string;
};

export default function UpdateAvailable({
  currentVersion,
}: UpdateAvailableProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dismissedVersion = useRef<string | null>(null);

  const checkForUpdate = useCallback(async () => {
    try {
      const response = await fetch(`/api/version?t=${Date.now()}`, {
        cache: 'no-store',
      });

      if (!response.ok) return;

      const data = (await response.json()) as { version?: string };
      const nextVersion = data.version;

      if (
        nextVersion &&
        nextVersion !== currentVersion &&
        dismissedVersion.current !== nextVersion
      ) {
        setIsVisible(true);
      }
    } catch {
      // Ignore transient network failures and check again later.
    }
  }, [currentVersion]);

  useEffect(() => {
    const intervalId = window.setInterval(checkForUpdate, 60000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        void checkForUpdate();
      }
    };

    const handleFocus = () => {
      void checkForUpdate();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
    };
  }, [checkForUpdate]);

  const handleDismiss = async () => {
    try {
      const response = await fetch(`/api/version?t=${Date.now()}`, {
        cache: 'no-store',
      });

      if (response.ok) {
        const data = (await response.json()) as { version?: string };
        dismissedVersion.current = data.version ?? null;
      }
    } catch {
      dismissedVersion.current = null;
    }

    setIsVisible(false);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    window.location.reload();
  };

  if (!isVisible) return null;

  return (
    <div className='fixed inset-x-4 bottom-4 z-[90] md:inset-x-auto md:right-4 md:w-full md:max-w-sm'>
      <div className='rounded-lg border-2 border-black bg-white p-4 shadow-[6px_6px_0_#111]'>
        <div className='flex items-start justify-between gap-3'>
          <div>
            <p className='text-xs font-black uppercase tracking-[0.2em] text-neutral-500'>
              Update ready
            </p>
            <p className='mt-2 text-base font-black leading-tight text-black'>
              A newer version of Correct Pixel is available.
            </p>
            <p className='mt-2 text-sm font-semibold italic text-neutral-500'>
              Refresh to load the latest changes.
            </p>
          </div>
          <button
            type='button'
            onClick={handleDismiss}
            className='flex h-9 w-9 shrink-0 items-center justify-center rounded-md border-2 border-black bg-white shadow-[3px_3px_0_#111] transition-transform hover:-translate-y-0.5 hover:bg-[#ffe45c]'
            aria-label='Dismiss update prompt'
          >
            <X className='h-4 w-4' />
          </button>
        </div>

        <button
          type='button'
          onClick={handleRefresh}
          className='mt-4 inline-flex h-11 w-full items-center justify-between rounded-md border-2 border-black bg-[#ffe45c] px-4 text-sm font-black uppercase tracking-wide shadow-[4px_4px_0_#111] transition-transform hover:-translate-y-0.5'
        >
          <span>{isRefreshing ? 'Refreshing' : 'Refresh now'}</span>
          <RefreshCcw className='h-4 w-4 shrink-0' />
        </button>
      </div>
    </div>
  );
}
