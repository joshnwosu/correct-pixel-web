import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 2,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 2.4,
        ease: 'easeOut',
      },
    },
  };

  // Create slices with different heights for organic look
  const slices = [
    { height: '85%', delay: 0.1 },
    { height: '95%', delay: 0.2 },
    { height: '75%', delay: 0.15 },
    { height: '90%', delay: 0.25 },
    { height: '80%', delay: 0.3 },
    { height: '88%', delay: 0.35 },
    { height: '92%', delay: 0.4 },
    { height: '78%', delay: 0.45 },
    { height: '85%', delay: 0.5 },
    { height: '90%', delay: 0.55 },
  ];

  return (
    <section className='relative min-h-screen bg-black overflow-hidden'>
      {/* Animated Background */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.4)_0%,transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.3)_0%,transparent_50%)]' />
      </div>

      <div className='relative z-10 container mx-auto px-4 py-8 min-h-screen flex items-center'>
        <div className='grid lg:grid-cols-2 gap-16 items-center w-full'>
          {/* Content Section */}
          <div className='space-y-8 lg:order-1 order-2'>
            <motion.div
              variants={textVariants}
              initial='hidden'
              animate={isLoaded ? 'visible' : 'hidden'}
              className='space-y-6'
            >
              <div className='inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10'>
                <span className='text-cyan-400 text-sm font-medium'>
                  ✨ Revolutionary Design
                </span>
              </div>

              <h1 className='text-5xl lg:text-7xl font-bold text-white leading-tight'>
                Visual
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400'>
                  Fragments
                </span>
                Reimagined
              </h1>

              <p className='text-xl text-slate-300 leading-relaxed max-w-lg'>
                Experience the future of visual storytelling with dynamic slice
                animations that bring your content to life through cutting-edge
                CSS masking techniques.
              </p>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              initial='hidden'
              animate={isLoaded ? 'visible' : 'hidden'}
              className='flex flex-wrap gap-4'
            >
              <motion.button
                className='group relative overflow-hidden bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className='relative z-10 flex items-center gap-2'>
                  Explore Now{' '}
                  <ChevronRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </span>
              </motion.button>

              <motion.button
                className='group flex items-center gap-2 text-white px-6 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className='w-5 h-5' />
                Watch Demo
              </motion.button>
            </motion.div>
          </div>

          {/* CSS Mask Slice Animation Section */}
          <div className='relative lg:order-2 order-1'>
            <div className='relative w-full max-w-2xl mx-auto'>
              {/* Main Image Container with Slices */}
              <div className='relative h-96 rounded-3xl overflow-hidden'>
                {/* Base flowing gradient background */}
                <div className='absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 opacity-90' />

                {/* Animated flowing overlay */}
                <div className='absolute inset-0'>
                  <div
                    className='w-full h-full'
                    style={{
                      background: `
                        radial-gradient(circle at 20% 30%, rgba(0, 255, 255, 0.8) 0%, transparent 40%),
                        radial-gradient(circle at 80% 70%, rgba(255, 0, 150, 0.8) 0%, transparent 40%),
                        radial-gradient(circle at 50% 50%, rgba(100, 50, 255, 0.6) 0%, transparent 50%),
                        linear-gradient(45deg, rgba(0, 255, 200, 0.4), rgba(255, 100, 200, 0.4))
                      `,
                    }}
                  />
                </div>

                {/* Slice Masks Container */}
                <div className='absolute inset-0 flex gap-1'>
                  {slices.map((slice, index) => (
                    <motion.div
                      key={index}
                      className='flex-1 relative overflow-hidden rounded-t-full'
                      initial={{
                        scaleY: 0,
                        opacity: 0,
                        transformOrigin: 'bottom',
                      }}
                      animate={
                        isLoaded
                          ? {
                              scaleY: 1,
                              opacity: 1,
                            }
                          : {}
                      }
                      transition={{
                        duration: 1,
                        delay: slice.delay,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      {/* Individual slice gradient */}
                      <div
                        className='w-full h-full'
                        style={{
                          background: `
                            linear-gradient(${135 + index * 25}deg, 
                              hsl(${180 + index * 20}, 80%, 60%) 0%, 
                              hsl(${280 + index * 15}, 70%, 55%) 30%,
                              hsl(${320 + index * 10}, 85%, 65%) 60%,
                              hsl(${200 + index * 18}, 75%, 50%) 100%
                            )
                          `,
                        }}
                      />

                      {/* Slice highlight effect */}
                      <div
                        className='absolute inset-0 opacity-30'
                        style={{
                          background: `linear-gradient(to right, 
                            transparent 0%, 
                            rgba(255,255,255,0.4) 50%, 
                            transparent 100%
                          )`,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Overlay blur effects for depth */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10' />

                {/* Animated light streaks */}
                <motion.div
                  className='absolute inset-0 opacity-60'
                  animate={{
                    background: [
                      'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                      'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 60%, transparent 80%)',
                      'linear-gradient(45deg, transparent 20%, rgba(255,255,255,0.1) 40%, transparent 60%)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className='absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/30 to-purple-600/30 blur-xl'
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.div
                className='absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-br from-pink-500/20 to-cyan-500/20 blur-2xl'
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Rotating border elements */}
              <motion.div
                className='absolute -inset-8 border border-cyan-500/20 rounded-3xl'
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              <motion.div
                className='absolute -inset-12 border border-pink-500/15 rounded-3xl'
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ transitionDelay: '3s' }}
      >
        <div className='flex flex-col items-center gap-2 text-white/60'>
          <span className='text-sm'>Discover more</span>
          <ArrowDown className='w-5 h-5' />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
