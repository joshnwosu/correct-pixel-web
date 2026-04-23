import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type SocialIconLinkProps = {
  href: string;
  label: string;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
};

export default function SocialIconLink({
  href,
  label,
  icon: Icon,
  className,
  iconClassName,
}: SocialIconLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-md border-2 border-black bg-white shadow-[3px_3px_0_#111] transition-transform hover:-translate-y-0.5 hover:bg-[#ffe45c]',
        className
      )}
      aria-label={label}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Icon className={cn('h-5 w-5 text-black', iconClassName)} />
    </Link>
  );
}
