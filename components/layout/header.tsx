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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Also prevent iOS bounce
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'auto';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'auto';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMenu = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full h-16 md:h-20 z-50 transition-all duration-300 font-josefin ${
          hasScrolled || isMobileMenuOpen
            ? 'bg-white/70 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <nav className='flex justify-between items-center px-4 md:px-6 lg:px-8 w-full h-full max-w-7xl mx-auto'>
          {/* Logo */}
          <h1 className='text-xl md:text-2xl font-josefin text-black font-bold z-50'>
            <span className='mr-0.5'>Correct</span>
            <span className='px-1.5 md:px-2 pb-1 md:pb-1.5 rounded-sm text-purple-600'>
              Pixel.
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
            onClick={toggleMenu}
            className='md:hidden z-50 p-2 rounded-lg hover:bg-gray-100/20 transition-colors relative'
            aria-label='Toggle mobile menu'
            aria-expanded={isMobileMenuOpen}
          >
            <div className='relative w-6 h-6'>
              <Menu
                className={`w-6 h-6 text-black absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? 'opacity-0 rotate-90'
                    : 'opacity-100 rotate-0'
                }`}
              />
              <X
                className={`w-6 h-6 text-black absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? 'opacity-100 rotate-0'
                    : 'opacity-0 -rotate-90'
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Menu - Positioned below header */}
      <div
        className={`fixed top-16 left-0 right-0 bottom-0 bg-white/70 backdrop-blur-md md:hidden transition-all duration-300 z-40 font-josefin ${
          isMobileMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div className='flex flex-col h-full'>
          {/* Menu Items */}
          <div className='flex-1 flex items-center justify-center'>
            <ul className='flex flex-col items-center gap-4 text-5xl font-bold'>
              {navigationItems.map((link, index) => (
                <li
                  key={link.href}
                  className={`transition-all duration-500 ${
                    isMobileMenuOpen
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${100 + index * 75}ms`
                      : '0ms',
                  }}
                >
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className='block hover:text-purple-600 transition-colors duration-200 px-8 py-3'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Footer */}
          <div
            className={`pb-10 text-center transition-all duration-500 ${
              isMobileMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{
              transitionDelay: isMobileMenuOpen
                ? `${100 + navigationItems.length * 75}ms`
                : '0ms',
            }}
          >
            <p className='text-sm text-gray-500'>
              © 2024 Correct Pixel. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      <div
        className={`fixed inset-0 bg-black/20 md:hidden transition-opacity duration-300 z-30 ${
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
