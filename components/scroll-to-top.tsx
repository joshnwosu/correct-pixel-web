'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type='button'
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 z-[80] flex h-12 w-12 items-center justify-center rounded-md border-2 border-black bg-[#ffe45c] text-black shadow-[4px_4px_0_#111] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#111] ${
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      aria-label='Scroll to top'
    >
      <ArrowUp className='h-5 w-5 shrink-0' />
    </button>
  );
}
