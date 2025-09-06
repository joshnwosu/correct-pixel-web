'use client';

import { animate, createScope } from 'animejs';
import { JSX, useEffect, useRef } from 'react';

interface ScopeInstance {
  revert: () => void;
}

const SimpleTypographyAnimation: React.FC = () => {
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<ScopeInstance | null>(null);

  useEffect(() => {
    if (!root.current) return;

    scope.current = createScope({ root: root.current }).add(() => {
      // Initial state - hide all letters
      animate('.letter', {
        opacity: 0,
        translateY: 50,
        duration: 0,
      });

      // Simple entrance animation
      const mainAnimation = setTimeout(() => {
        animate('.letter', {
          opacity: [0, 1],
          translateY: [50, 0],
          duration: 800,
          delay: (_el: any, i: number) => i * 100,
          ease: 'out(3)',
        });
      }, 500);

      return () => {
        clearTimeout(mainAnimation);
      };
    });

    return () => {
      scope.current?.revert();
    };
  }, []);

  // Split text into individual letters with spans
  const renderText = (text: string): JSX.Element[] => {
    return text.split('').map((char: string, index: number) => (
      <span
        key={index}
        className='letter inline-block'
        style={{
          display: char === ' ' ? 'inline' : 'inline-block',
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div
      ref={root}
      className='min-h-screen bg-black flex items-center justify-center p-8'
    >
      {/* Main Typography */}
      <div className='text-center'>
        <h1
          className='text-8xl md:text-9xl font-bold'
          style={{
            WebkitTextStroke: '2px white',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
          }}
        >
          {renderText('Correct Pixel')}
        </h1>
      </div>
    </div>
  );
};

export default SimpleTypographyAnimation;
