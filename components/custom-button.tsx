'use client';

import { ArrowRight, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { MouseEventHandler } from 'react';

interface CustomButtonProps {
  text?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  href?: string;
  icon?: LucideIcon;
  className?: string;
  variant?: 'solid' | 'light';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text = 'View All',
  onClick,
  href,
  icon: Icon = ArrowRight,
  className = '',
  variant = 'solid',
}) => {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      className={`inline-flex h-12 w-full items-center justify-between gap-3 rounded-md border-2 border-black px-5 text-sm font-black uppercase tracking-wide shadow-[4px_4px_0_#111] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#111] sm:w-fit sm:justify-center ${
        variant === 'light' ? 'bg-white text-black' : 'bg-[#ffe45c] text-black'
      } ${className}`}
      onClick={onClick}
      href={href}
      type={href ? undefined : 'button'}
    >
      <span>{text}</span>
      <Icon className='h-4 w-4 shrink-0' />
    </Component>
  );
};

export default CustomButton;
