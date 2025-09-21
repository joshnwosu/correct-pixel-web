import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { workProcess } from '@/data/work-process';
import CustomButton from '../custom-button';

const WorkProcess: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Check if mobile
  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Function to reset the interval
  const resetInterval = (): void => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % workProcess.length);
    }, 10000);
  };

  // Setup initial interval - only on desktop
  useEffect(() => {
    // Only auto-rotate on desktop
    if (!isMobile) {
      resetInterval();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isMobile]);

  const handleItemClick = (index: number): void => {
    setActiveIndex(index);
    // Only reset interval on desktop
    if (!isMobile) {
      resetInterval();
    }
  };

  // Calculate stack positions for images
  const getStackStyle = (index: number): React.CSSProperties => {
    const diff =
      (index - activeIndex + workProcess.length) % workProcess.length;
    const zIndex = workProcess.length - diff;
    const offset = isMobile ? diff * 8 : diff * 15;
    const scale = 1 - diff * 0.05;
    const rotation = isMobile ? diff * 2 : diff * 5;

    return {
      zIndex,
      transform: `translateX(${offset}px) translateY(${offset}px) scale(${scale}) rotate(${rotation}deg)`,
      opacity: diff < 3 ? 1 : 0,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <section className='py-12 md:py-24'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4'>
          <div className='space-y-4'>
            <div className='flex items-center gap-2 text-green-600'>
              <div className='w-1.5 h-1.5 rounded-full bg-green-600' />
              <p className='text-base md:text-lg font-medium'>Work Process</p>
            </div>

            <p className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-relaxed'>
              Our Process design, and Deliver Simplified
            </p>
          </div>

          <div className='space-y-6'>
            <p className='text-muted-foreground text-base md:text-lg leading-relaxed'>
              We follow a simple, result driven process to bring your vision to
              life. From understanding your goals to designing and developing
              delivering real impact-on time and on point.
            </p>

            <CustomButton text="Let's Talk" className='mt-6 md:mt-10' />
          </div>
        </div>

        {/* Process Content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 md:mt-20 items-start'>
          {/* Image Section - Fixed Height Container */}
          <div className='relative h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center md:block order-1'>
            <div className='relative w-full max-w-[280px] md:max-w-sm lg:max-w-md h-[250px] md:h-[350px] lg:h-[400px]'>
              {workProcess.map((process, index) => {
                const stackStyle = getStackStyle(index);
                const isActive = index === activeIndex;

                return (
                  <motion.div
                    key={index}
                    className='absolute inset-0 bg-white rounded-lg shadow-lg md:shadow-xl overflow-hidden cursor-pointer'
                    style={{
                      ...stackStyle,
                      transformOrigin: 'center center',
                    }}
                    onClick={() => handleItemClick(index)}
                    whileHover={isActive && !isMobile ? { scale: 1.02 } : {}}
                  >
                    {process.image ? (
                      <img
                        src={process.image}
                        alt={process.title}
                        className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
                      />
                    ) : (
                      <div className='w-full h-full bg-gradient-to-br from-green-600/10 to-blue-600/10 flex items-center justify-center'>
                        <div className='text-center px-4'>
                          <motion.div
                            className='text-3xl md:text-5xl lg:text-6xl font-bold text-green-600/30 mb-2 md:mb-4'
                            animate={
                              isActive
                                ? {
                                    y: [0, -10, 0],
                                    transition: {
                                      duration: 2,
                                      repeat: Infinity,
                                      ease: 'easeInOut',
                                    },
                                  }
                                : {}
                            }
                          >
                            {String(index + 1).padStart(2, '0')}
                          </motion.div>
                          <h3 className='text-base md:text-xl font-semibold text-gray-700'>
                            {process.title}
                          </h3>
                          <p className='text-xs md:text-sm text-gray-500 mt-1 md:mt-2 px-2 md:px-8'>
                            Click to view details
                          </p>
                        </div>
                      </div>
                    )}

                    <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 md:p-4'>
                      <p className='text-white font-semibold text-sm md:text-base'>
                        {process.title}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Dots indicator */}
            <div className='absolute -bottom-6 md:bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2'>
              {workProcess.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleItemClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'w-8 bg-green-600'
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Process List - Fixed Height with Overflow */}
          <div className='order-2'>
            {workProcess.map((process, index) => (
              <div
                key={index}
                className='cursor-pointer relative overflow-hidden mb-2 md:mb-4'
                onClick={() => handleItemClick(index)}
              >
                {/* Background gradient for active item */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-green-50 to-transparent rounded-lg -z-10 transition-opacity duration-300 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className='flex items-start gap-3 md:gap-4 relative p-3 md:p-4'>
                  {/* Progress indicator */}
                  <div className='relative flex-shrink-0'>
                    <span
                      className={`text-xl md:text-2xl font-bold transition-all duration-300 inline-block ${
                        activeIndex === index
                          ? 'text-green-600 scale-110'
                          : 'text-gray-300 scale-100'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Progress bars */}
                    {activeIndex === index && (
                      <>
                        {/* Mobile progress bar */}
                        <div className='md:hidden absolute left-0 -bottom-1 w-8 h-0.5 bg-gray-200 rounded-full overflow-hidden'>
                          <motion.div
                            className='h-full bg-green-600'
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 10, ease: 'linear' }}
                            key={`progress-mobile-${index}-${Date.now()}`}
                          />
                        </div>

                        {/* Desktop progress bar */}
                        <div className='hidden md:block absolute left-0 top-10 w-1 h-20 bg-gray-200 rounded-full overflow-hidden'>
                          <motion.div
                            className='w-full bg-green-600'
                            initial={{ height: '0%' }}
                            animate={{ height: '100%' }}
                            transition={{ duration: 10, ease: 'linear' }}
                            key={`progress-desktop-${index}-${Date.now()}`}
                          />
                        </div>
                      </>
                    )}
                  </div>

                  <div className='flex-1 min-w-0'>
                    <h3
                      className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                        activeIndex === index
                          ? 'text-gray-900'
                          : 'text-gray-600'
                      }`}
                    >
                      {process.title}
                    </h3>

                    {/* Always render description with opacity transition */}
                    <p
                      className={`text-sm md:text-base text-gray-600 leading-relaxed mt-1 md:mt-2 transition-all duration-300 ${
                        activeIndex === index
                          ? 'opacity-100 max-h-40'
                          : 'opacity-0 max-h-0 overflow-hidden'
                      }`}
                    >
                      {process.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
