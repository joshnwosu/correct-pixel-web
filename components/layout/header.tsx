'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 20);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Check initial scroll position
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full h-20 z-10 p-4 transition-all duration-300 ${
        hasScrolled ? 'bg-white/35 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className='flex justify-between items-center p-4 w-full h-full max-w-7xl mx-auto top-0 z-10 text-black font-josefin'>
        <h1 className='text-2xl font-josefin text-black font-bold'>
          <span className='mr-0.5'>Correct</span>
          <span className='px-2 pb-1.5 rounded-sm text-purple-600'>pixel.</span>
        </h1>

        <ul className='flex gap-8 font-medium text-lg'>
          <li>
            <Link
              href='/'
              className='hover:text-purple-600 transition-colors duration-200'
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              className='hover:text-purple-600 transition-colors duration-200'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href='/services'
              className='hover:text-purple-600 transition-colors duration-200'
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className='hover:text-purple-600 transition-colors duration-200'
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
