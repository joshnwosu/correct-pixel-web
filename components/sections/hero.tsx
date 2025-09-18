import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const [activeSlice, setActiveSlice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlice((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative overflow-hidden pb-10'>
      {/* Your existing hero content */}

      {/* Gradient Background */}
      {/* <div className='absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100' /> */}

      {/* Animated Gradient Orbs for depth */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse' />
        <div className='absolute top-40 right-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000' />
        <div className='absolute bottom-20 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000' />
      </div>

      {/* Glossy Blur Overlay */}
      <div className='absolute inset-0 backdrop-blur-[2px]'>
        <div className='absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/20' />
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent' />
      </div>

      <div className='relative flex justify-center items-center gap-20 pt-40 pb-20'>
        <div className='absolute -top-10 -right-100 flex items-center justify-center z-5 px-10 opacity-10 backdrop-blur-md'>
          <h1 className='text-[200px] font-ultra tracking-wider text-muted-foreground blur-xs'>
            Correct
          </h1>
        </div>

        <div className='absolute -bottom-10 -left-50 flex items-center justify-center z-5 px-10 opacity-10 backdrop-blur-md'>
          <h1 className='text-[200px] font-ultra tracking-wider text-muted-foreground blur-xs'>
            Pixel
          </h1>
        </div>

        <div className='relative z-10 max-w-3xl space-y-12 p-4'>
          <h1 className='relative z-10 text-black font-ultra font-medium text-7xl text-left'>
            <span className='inline-block'>We Build</span>
            <br />
            <span className='inline-flex items-center'>
              <motion.span
                className='text-stroke font-ultra font-extralight inline-block italic'
                style={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  WebkitTextStroke: '2px black',
                  WebkitTextFillColor: 'transparent',
                }}
                initial={{ width: 0 }}
                animate={{ width: 'auto' }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              >
                Brands <span className='inline-block'></span>
              </motion.span>
              <span
                className='inline-block text-white px-6 rounded-xl shadow-2xl inset-0 bg-gradient-to-l from-purple-600  to-purple-300'
                style={{
                  transform:
                    'perspective(500px) rotateY(-35deg) rotateZ(-1deg)',
                  transformOrigin: 'left center',
                }}
              >
                that
              </span>
            </span>
            <br /> <span className='inline-block'>Stand Out!</span>
          </h1>

          <p className='text-2xl font-josefin font-normal'>
            Crafting pixel-perfect web experiences and stunning UI designs that
            captivate audiences and drive results. Your vision, executed
            flawlessly.
          </p>
        </div>

        {/* Sliced Image Grid */}
        <SlicedImageGrid activeSlice={activeSlice} />

        {/* Additional glossy overlay for premium finish */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent' />
        </div>
      </div>
    </section>
  );
};

export default Hero;

const SlicedImageGrid = ({ activeSlice }: any) => {
  return (
    <div className='relative z-5 grid grid-cols-2 gap-4 w-[420px] h-[420px]'>
      {/* Top Left Slice */}
      <motion.div
        className='relative overflow-hidden rounded-2xl'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className='absolute inset-0  z-10' />
        <div className='relative w-full h-full'>
          <Image
            src='/hero.png'
            fill
            style={{
              objectFit: 'cover',
              objectPosition: '0% 0%',
              transform: 'scale(2)',
              transformOrigin: 'top left',
              filter: activeSlice === 0 ? 'grayscale(0%)' : 'grayscale(100%)',
              transition: 'filter 0.5s ease-in-out',
            }}
            alt='Hero slice 1'
          />
        </div>
      </motion.div>

      {/* Top Right Slice */}
      <motion.div
        className='relative overflow-hidden rounded-2xl'
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className='absolute inset-0 z-10' />
        <div className='relative w-full h-full'>
          <Image
            src='/hero.png'
            fill
            style={{
              objectFit: 'cover',
              objectPosition: '100% 0%',
              transform: 'scale(2)',
              transformOrigin: 'top right',
              filter: activeSlice === 1 ? 'grayscale(0%)' : 'grayscale(100%)',
              transition: 'filter 0.5s ease-in-out',
            }}
            alt='Hero slice 2'
          />
        </div>
      </motion.div>

      {/* Bottom Left Slice */}
      <motion.div
        className='relative overflow-hidden rounded-2xl'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className='absolute inset-0 z-10' />
        <div className='relative w-full h-full'>
          <Image
            src='/hero.png'
            fill
            style={{
              objectFit: 'cover',
              objectPosition: '0% 100%',
              transform: 'scale(2)',
              transformOrigin: 'bottom left',
              filter: activeSlice === 3 ? 'grayscale(0%)' : 'grayscale(100%)',
              transition: 'filter 0.5s ease-in-out',
            }}
            alt='Hero slice 3'
          />
        </div>
      </motion.div>

      {/* Bottom Right Slice */}
      <motion.div
        className='relative overflow-hidden rounded-2xl'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className='absolute inset-0 z-10' />
        <div className='relative w-full h-full'>
          <Image
            src='/hero.png'
            fill
            style={{
              objectFit: 'cover',
              objectPosition: '100% 100%',
              transform: 'scale(2)',
              transformOrigin: 'bottom right',
              filter: activeSlice === 2 ? 'grayscale(0%)' : 'grayscale(100%)',
              transition: 'filter 0.5s ease-in-out',
            }}
            alt='Hero slice 4'
          />
        </div>
      </motion.div>
    </div>
  );
};
