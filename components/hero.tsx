import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  const [activeSlice, setActiveSlice] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);
  const currentTranslateRef = useRef(0);
  const targetTranslateRef = useRef(0);

  // Sample card data - customize these to match your brand
  const cards = [
    {
      id: 1,
      image:
        'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg',
    },
    {
      id: 2,
      image:
        'https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg',
    },
    {
      id: 3,
      image:
        'https://cdn.pixabay.com/photo/2015/06/24/15/45/hands-820272_1280.jpg',
    },
    {
      id: 4,
      image:
        'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg',
    },
    {
      id: 5,
      image:
        'https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg',
    },
    {
      id: 6,
      image:
        'https://cdn.pixabay.com/photo/2015/06/24/15/45/hands-820272_1280.jpg',
    },
    {
      id: 7,
      image:
        'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlice((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let isAnimating = false;

    const smoothAnimation = () => {
      if (!cardsRef.current) return;

      // Smooth easing - adjust the 0.1 for different smoothness levels
      // Lower = smoother but slower to catch up, Higher = more responsive
      const ease = 0.08;
      currentTranslateRef.current +=
        (targetTranslateRef.current - currentTranslateRef.current) * ease;

      // Apply the transform
      cardsRef.current.style.transform = `translateX(${currentTranslateRef.current}px)`;

      // Continue animation if we haven't reached the target
      if (
        Math.abs(targetTranslateRef.current - currentTranslateRef.current) > 0.1
      ) {
        animationFrameRef.current = requestAnimationFrame(smoothAnimation);
      } else {
        isAnimating = false;
      }
    };

    const handleScroll = () => {
      if (!containerRef.current || !cardsRef.current) return;

      const container = containerRef.current;
      const cards = cardsRef.current;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Check if container is in viewport
      if (rect.top <= viewportHeight && rect.bottom >= 0) {
        // Calculate scroll progress
        const scrolled = viewportHeight - rect.top;
        const scrollRange = viewportHeight + containerHeight;
        const progress = Math.max(0, Math.min(1, scrolled / scrollRange));

        // Calculate the maximum scroll distance
        const cardsWidth = cards.scrollWidth;
        const containerWidth = cards.offsetWidth;
        const maxScroll = cardsWidth - containerWidth + 100; // Add some padding

        // Calculate target position with easing curve
        // Using a power curve for more interesting motion
        const easedProgress = Math.pow(progress, 1.2); // Adjust power for different curves
        targetTranslateRef.current = -easedProgress * maxScroll;

        // Start animation if not already running
        if (!isAnimating) {
          isAnimating = true;
          smoothAnimation();
        }
      }
    };

    // Initial setup
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section className='relative overflow-hidden pb-10'>
      {/* Your existing hero content */}

      {/* Gradient Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100' />

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

      {/* Noise texture for premium feel */}
      <div
        className='absolute inset-0 opacity-[0.02] mix-blend-overlay'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className='relative flex justify-center items-center gap-20 py-40'>
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
                  filter:
                    activeSlice === 0 ? 'grayscale(0%)' : 'grayscale(100%)',
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
                  filter:
                    activeSlice === 1 ? 'grayscale(0%)' : 'grayscale(100%)',
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
                  filter:
                    activeSlice === 3 ? 'grayscale(0%)' : 'grayscale(100%)',
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
                  filter:
                    activeSlice === 2 ? 'grayscale(0%)' : 'grayscale(100%)',
                  transition: 'filter 0.5s ease-in-out',
                }}
                alt='Hero slice 4'
              />
            </div>
          </motion.div>
        </div>

        {/* Additional glossy overlay for premium finish */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent' />
        </div>
      </div>

      {/* HORIZONTAL SCROLL CARDS SECTION WITH EXTRA SMOOTH SCROLLING */}
      <div ref={containerRef} className='relative w-full z-10 py-20'>
        {/* Cards Container */}
        <div className='overflow-hidden w-full px-8'>
          <div
            ref={cardsRef}
            className='flex gap-6 items-center pl-[10vw]'
            style={{
              willChange: 'transform',
            }}
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className={`relative flex-shrink-0 w-[30vw] ${
                  index % 2 === 0 ? 'h-[20vw]' : 'h-[25vw]'
                } rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer shadow-xl`}
                style={{
                  transform: `translateY(${
                    index % 2 === 0 ? -20 : 20
                  }px) rotateZ(${index % 2 === 0 ? -2 : 2}deg)`,
                }}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              >
                <Image
                  src={card.image}
                  alt={`Card ${card.id}`}
                  fill
                  priority
                  className='object-cover transition-transform duration-700 ease-out grayscale'
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
