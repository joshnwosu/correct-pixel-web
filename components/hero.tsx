import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='relative min-h-screen overflow-hidden flex justify-center items-center gap-20'>
      <div className='absolute -top-10 -right-100 flex items-center justify-center z-5 px-10 opacity-20 backdrop-blur-md'>
        <h1 className='text-[200px] font-ultra tracking-wider text-muted-foreground blur-xs'>
          Correct
        </h1>
      </div>

      <div className='absolute -bottom-10 -left-50 flex items-center justify-center z-5 px-10 opacity-20 backdrop-blur-md'>
        <h1 className='text-[200px] font-ultra tracking-wider text-muted-foreground blur-xs'>
          Pixel
        </h1>
      </div>

      {/* Gradient Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100' />

      {/* Animated Gradient Orbs for depth */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse' />
        <div className='absolute top-40 right-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000' />
        <div className='absolute bottom-20 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000' />
      </div>

      {/* Glossy Blur Overlay */}
      <div className='absolute inset-0 backdrop-blur-[2px]'>
        <div className='absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/20' />
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent' />
      </div>

      {/* Noise texture for premium feel */}
      <div
        className='absolute inset-0 opacity-[0.02] mix-blend-overlay'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className='relative z-10 max-w-2xl space-y-12 p-4'>
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
              className='inline-block bg-amber-400 text-white px-6 rounded-xl shadow-2xl'
              style={{
                transform: 'perspective(500px) rotateY(-35deg) rotateZ(-1deg)',
                transformOrigin: 'left center',
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                boxShadow: '0 20px 40px rgba(251, 191, 36, 0.4)',
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
              }}
              alt='Hero slice 1'
              className='grayscale'
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
              }}
              alt='Hero slice 2'
              className='grayscale'
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
              }}
              alt='Hero slice 3'
              className='grayscale'
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
              }}
              alt='Hero slice 4'
              className='grayscale'
            />
          </div>
        </motion.div>
      </div>

      {/* Additional glossy overlay for premium finish */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent' />
      </div>
    </section>
  );
};

export default HeroSection;
