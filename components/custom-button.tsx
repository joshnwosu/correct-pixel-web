import { ArrowUpRight, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { MouseEventHandler } from 'react';

interface CustomButtonProps {
  text?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  href?: string;
  icon?: LucideIcon;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text = 'View All',
  onClick,
  href,
  icon: Icon = ArrowUpRight,
  className = '',
}) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <motion.div
      className={`relative inline-flex items-center cursor-pointer group ${className}`}
      onClick={handleClick}
      whileHover='hover'
      initial='initial'
      style={{ width: 'fit-content' }}
    >
      {/* SVG filter for gooey effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id='gooey'>
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='10'
              result='blur'
            />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10'
              result='gooey'
            />
          </filter>
        </defs>
      </svg>

      {/* LAYER 1: Gooey background shapes ONLY - no text */}
      <div
        className='absolute inset-0 flex items-center'
        style={{ filter: 'url(#gooey)', pointerEvents: 'none' }}
      >
        {/* Background shape for text button */}
        <motion.div
          className='bg-purple-500 rounded-full h-12'
          style={{ width: '140px' }}
          variants={{
            initial: { x: 0 },
            hover: { x: -5 },
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />

        {/* Connector blob - reduced height */}
        <motion.div
          className='bg-purple-500'
          variants={{
            initial: { width: '20px', height: '8px', x: -18 },
            hover: { width: '30px', height: '16px', x: -12 },
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />

        {/* Background shape for icon button */}
        <motion.div
          className='w-12 h-12 bg-purple-500 rounded-full'
          style={{ marginLeft: '-16px' }}
          variants={{
            initial: { x: 0 },
            hover: { x: 5 },
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      </div>

      {/* LAYER 2: Text and icon WITHOUT filter - completely separate */}
      <div
        className='relative flex items-center'
        style={{ pointerEvents: 'none' }}
      >
        {/* Text - no background, just text */}
        <motion.div
          className='px-8 h-12 flex items-center justify-center font-bold text-white'
          variants={{
            initial: { x: 0 },
            hover: { x: -5 },
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          {text}
        </motion.div>

        {/* Smaller spacer to match the reduced connector */}
        <div className='w-2' />

        {/* Icon - no background, just icon */}
        <motion.div
          className='w-12 h-12 flex items-center justify-center text-white'
          variants={{
            initial: { x: 0, rotate: 0 },
            hover: { x: 5, rotate: 45 },
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          <Icon className='w-5 h-5' />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CustomButton;
