import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { workProcess } from '@/data/work-process';
import CustomButton from '../custom-button';

const WorkProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Function to reset the interval
  const resetInterval = () => {
    // Clear existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Set new interval
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % workProcess.length);
    }, 10000);
  };

  // Setup initial interval
  useEffect(() => {
    resetInterval();

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleItemClick = (index: React.SetStateAction<number>) => {
    setActiveIndex(index);
    resetInterval(); // Reset the 10-second timer when user clicks
  };

  // Calculate stack positions for images
  const getStackStyle = (index: number) => {
    const diff =
      (index - activeIndex + workProcess.length) % workProcess.length;
    const isActive = diff === 0;
    const zIndex = workProcess.length - diff;

    // Calculate offset and scale based on position in stack
    const offset = diff * 15; // pixels to offset each card
    const scale = 1 - diff * 0.05; // scale down cards further back
    const rotation = diff * 10; // slight rotation for depth effect

    return {
      zIndex,
      transform: `translateX(${offset}px) translateY(${offset}px) scale(${scale}) rotate(${rotation}deg)`,
      opacity: diff < 3 ? 1 : 0, // Only show top 3 cards
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <section className='py-24'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-4'>
            <div className='flex items-center gap-2 text-purple-600'>
              <div className='w-1.5 h-1.5 rounded-full bg-purple-600' />
              <p className='text-lg font-medium'>Work Process</p>
            </div>

            <p className='text-5xl font-bold leading-relaxed'>
              Our Process design, and Deliver Simplified
            </p>
          </div>

          <div className='space-y-6'>
            <p className='text-muted-foreground text-lg leading-relaxed'>
              We follow a simple, result driven process to bring your vision to
              life. From understanding your goals to designing and developing
              delivering real impact-on time and on point.
            </p>

            <CustomButton text="Let's Talk" className='mt-10 -rotate-15' />
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20'>
          <div className='space-y-4'>
            {workProcess.map((process, index) => (
              <motion.div
                key={index}
                className='cursor-pointer relative overflow-hidden'
                onClick={() => handleItemClick(index)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Background gradient for active item */}
                {activeIndex === index && (
                  <motion.div
                    className='absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent rounded-lg -z-10'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                <div className='flex items-start gap-4 relative p-4'>
                  {/* Vertical progress indicator on the left */}
                  <div className='relative'>
                    <motion.span
                      className={`text-2xl font-bold transition-colors duration-300 ${
                        activeIndex === index
                          ? 'text-purple-600'
                          : 'text-gray-300'
                      }`}
                      animate={{ scale: activeIndex === index ? 1.1 : 1 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.span>

                    {activeIndex === index && (
                      <motion.div
                        className='absolute left-0 top-10 w-1 h-20 bg-gray-200 rounded-full overflow-hidden'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.div
                          className='w-full bg-purple-600'
                          initial={{ height: '0%' }}
                          animate={{ height: '100%' }}
                          transition={{ duration: 10, ease: 'linear' }}
                          key={`progress-${index}-${Date.now()}`}
                        />
                      </motion.div>
                    )}
                  </div>

                  <div className='flex-1'>
                    <h3
                      className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                        activeIndex === index
                          ? 'text-gray-900'
                          : 'text-gray-600'
                      }`}
                    >
                      {process.title}
                    </h3>

                    <AnimatePresence mode='wait'>
                      {activeIndex === index && (
                        <motion.p
                          className='text-gray-600 leading-relaxed'
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: 'auto',
                            opacity: 1,
                            transition: {
                              height: { duration: 0.4, ease: 'easeOut' },
                              opacity: { duration: 0.3, delay: 0.1 },
                            },
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: { duration: 0.3, ease: 'easeIn' },
                              opacity: { duration: 0.2 },
                            },
                          }}
                        >
                          {process.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Section - Shuffle Stack */}
          <div className='relative h-[500px] flex items-center justify-center'>
            <div className='relative w-full max-w-md h-[400px]'>
              {workProcess.map((process, index) => {
                const stackStyle = getStackStyle(index);
                const isActive = index === activeIndex;

                return (
                  <motion.div
                    key={index}
                    className='absolute inset-0 bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer'
                    style={{
                      ...stackStyle,
                      transformOrigin: 'center center',
                    }}
                    onClick={() => handleItemClick(index)}
                    whileHover={isActive ? { scale: 1.02 } : {}}
                  >
                    {process.image ? (
                      <img
                        src={process.image}
                        alt={process.title}
                        className='w-full h-full object-cover grayscale'
                      />
                    ) : (
                      <div className='w-full h-full bg-gradient-to-br from-purple-600/10 to-blue-600/10 flex items-center justify-center'>
                        <div className='text-center'>
                          <motion.div
                            className='text-6xl font-bold text-purple-600/30 mb-4'
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
                          <h3 className='text-xl font-semibold text-gray-700'>
                            {process.title}
                          </h3>
                          <p className='text-sm text-gray-500 mt-2 px-8'>
                            Click to view details
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Card label */}
                    <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4'>
                      <p className='text-white font-semibold'>
                        {process.title}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Dots indicator */}
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2'>
              {workProcess.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleItemClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'w-8 bg-purple-600'
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
