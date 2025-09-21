import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CustomButton from '../custom-button';

const Hero = () => {
  const [activeSlice, setActiveSlice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlice((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative overflow-hidden pb-10 py-20'>
      {/* Background Text Elements */}
      <div className='font-ultra'>
        <div className='absolute -top-10 -right-10 md:-right-20 lg:-right-100 flex items-center justify-center z-5 px-4 md:px-10 opacity-10 backdrop-blur-md'>
          <h1 className='text-[80px] md:text-[140px] lg:text-[200px] tracking-wider text-muted-foreground blur-xs'>
            Correct
          </h1>
        </div>

        <div className='absolute bottom-0 md:-bottom-10 -left-10 md:-left-20 lg:-left-50 flex items-center justify-center z-5 px-4 md:px-10 opacity-10 backdrop-blur-md'>
          <h1 className='text-[80px] md:text-[140px] lg:text-[200px] tracking-wider text-muted-foreground blur-xs'>
            Pixel
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className='relative flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 pt-20 md:pt-32 lg:pt-40 pb-20 px-4'>
        {/* Text Content */}
        <div className='relative z-10 w-full max-w-full lg:max-w-3xl space-y-4 md:space-y-6 p-0 md:p-4'>
          <h1 className='relative z-10 text-black font-medium text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center lg:text-left font-playwrite'>
            <span className='inline-block'>We Build</span>
            <br />
            <span className='inline-flex flex-wrap justify-center lg:justify-start items-center gap-2 md:gap-3 pb-3'>
              <motion.span
                className='text-stroke font-extralight inline-block italic text-4xl md:text-5xl lg:text-6xl xl:text-7xl pr-2 font-ultra'
                style={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  WebkitTextStroke: '2px black',
                  WebkitTextFillColor: 'transparent',
                }}
                // initial={{ width: 0 }}
                // animate={{ width: 'auto' }}
                // transition={{ duration: 2, ease: 'easeInOut' }}
              >
                Brands
              </motion.span>
              that
            </span>{' '}
            <br />
            <span className='inline-block'>Stand Out!</span>
          </h1>

          <p className='text-base md:text-xl lg:text-2xl font-normal mt-6 md:mt-8 lg:mt-12 text-center lg:text-left max-w-2xl mx-auto lg:mx-0'>
            Crafting pixel-perfect web experiences and stunning UI designs that
            captivate audiences and drive results. Your vision, executed
            flawlessly.
          </p>

          <div className='flex justify-center lg:justify-start'>
            <CustomButton text="Let's Talk" />
          </div>
        </div>

        {/* Sliced Image Grid */}
        <SlicedImageGrid activeSlice={activeSlice} />
      </div>
    </section>
  );
};

const SlicedImageGrid = ({ activeSlice }: any) => {
  return (
    <div className='relative z-5 grid grid-cols-2 gap-2 md:gap-3 lg:gap-4 w-[280px] md:w-[360px] lg:w-[420px] h-[280px] md:h-[360px] lg:h-[420px] mx-auto lg:mx-0'>
      {/* Top Left Slice */}
      <motion.div
        className='relative overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className='absolute inset-0 z-10' />
        <div className='relative w-full h-full bg-gray-200'>
          <div
            className='w-full h-full'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&h=800&fit=crop)',
              backgroundSize: '200%',
              backgroundPosition: '0% 0%',
              filter: activeSlice === 0 ? 'grayscale(0%)' : 'grayscale(100%)',
              transition: 'filter 0.5s ease-in-out',
            }}
          />
        </div>
      </motion.div>

      {/* Top Right Slice */}
      <motion.div
        className='relative overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl'
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className='absolute inset-0 z-10' />
        <div className='relative w-full h-full bg-gray-200'>
          <div
            className='w-full h-full'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&h=800&fit=crop)',
              backgroundSize: '200%',
              backgroundPosition: '100% 0%',
              filter: activeSlice === 1 ? 'grayscale(0%)' : 'grayscale(100%)',
              transition: 'filter 0.5s ease-in-out',
            }}
          />
        </div>
      </motion.div>

      {/* Bottom Left Slice */}
      <motion.div
        className='relative overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className='absolute inset-0 z-10' />
        <div className='relative w-full h-full bg-gray-200'>
          <div
            className='w-full h-full'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&h=800&fit=crop)',
              backgroundSize: '200%',
              backgroundPosition: '0% 100%',
              filter: activeSlice === 3 ? 'grayscale(0%)' : 'grayscale(100%)',
              transition: 'filter 0.5s ease-in-out',
            }}
          />
        </div>
      </motion.div>

      {/* Bottom Right Slice */}
      <motion.div
        className='relative overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className='absolute inset-0 z-10' />
        <div className='relative w-full h-full bg-gray-200'>
          <div
            className='w-full h-full'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&h=800&fit=crop)',
              backgroundSize: '200%',
              backgroundPosition: '100% 100%',
              filter: activeSlice === 2 ? 'grayscale(0%)' : 'grayscale(100%)',
              transition: 'filter 0.5s ease-in-out',
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
