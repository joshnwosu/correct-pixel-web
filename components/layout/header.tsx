'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '@/data/navigation';

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Close mobile menu when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full h-16 md:h-20 z-50 transition-all duration-300 font-josefin ${
        hasScrolled ? 'bg-white/35 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className='flex justify-between items-center px-4 md:px-6 lg:px-8 w-full h-full max-w-7xl mx-auto'>
        {/* Logo */}
        <h1 className='text-xl md:text-2xl font-josefin text-black font-bold z-50'>
          <span className='mr-0.5'>Correct</span>
          <span className='px-1.5 md:px-2 pb-1 md:pb-1.5 rounded-sm text-purple-600'>
            pixel.
          </span>
        </h1>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex gap-6 lg:gap-8 font-medium text-base lg:text-lg'>
          {navigationItems.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className='hover:text-purple-600 transition-colors duration-200'
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          className='md:hidden z-50 p-2 rounded-lg hover:bg-gray-100/20 transition-colors'
          aria-label='Toggle mobile menu'
        >
          {isMobileMenuOpen ? (
            <X className='w-6 h-6 text-black' />
          ) : (
            <Menu className='w-6 h-6 text-black' />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-lg md:hidden transition-all duration-300 ${
            isMobileMenuOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible pointer-events-none'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={`flex flex-col items-center justify-center h-full transition-transform duration-300 ${
              isMobileMenuOpen ? 'translate-y-0' : 'translate-y-10'
            }`}
          >
            <ul className='flex flex-col items-center gap-8 text-2xl font-medium'>
              {navigationItems.map((link, index) => (
                <li
                  key={link.href}
                  className={`transition-all duration-300 ${
                    isMobileMenuOpen
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${index * 100}ms`
                      : '0ms',
                  }}
                >
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className='hover:text-purple-600 transition-colors duration-200 px-6 py-2'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Footer */}
            <div
              className={`absolute bottom-10 text-center transition-all duration-300 ${
                isMobileMenuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? '400ms' : '0ms',
              }}
            >
              <p className='text-sm text-gray-600'>
                © 2024 Correct Pixel. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
