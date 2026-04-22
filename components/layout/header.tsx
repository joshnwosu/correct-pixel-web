'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '@/data/navigation';
import Link from 'next/link';

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollPositionRef = useRef(0);

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
      // Save current scroll position to ref
      scrollPositionRef.current = window.scrollY;

      // Apply styles to prevent scrolling while maintaining position
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.height = '100%';
    } else {
      // Reset styles first
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.height = '';

      // Restore scroll position after styles are reset
      if (scrollPositionRef.current > 0) {
        window.scrollTo(0, scrollPositionRef.current);
      }
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.height = '';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 font-josefin ${
          hasScrolled || isMobileMenuOpen ? 'py-3' : 'py-5'
        }`}
      >
        <nav className='flex justify-between items-center mx-4 max-w-7xl xl:mx-auto rounded-lg border-2 border-black bg-white px-4 h-16 shadow-[5px_5px_0_#111]'>
          {/* Logo */}
          <Link
            href='/'
            className='text-lg md:text-xl text-black font-black z-50 tracking-tight uppercase'
          >
            <span className='mr-0.5'>Correct</span>
            <span className='px-1.5 md:px-2 py-1 rounded bg-[#ffe45c] border-2 border-black'>
              Pixel.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex items-center gap-1 font-black text-sm uppercase'>
            {navigationItems.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className='block rounded px-3 py-2 hover:bg-black hover:text-white transition-colors duration-200'
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href='/#contact'
            className='hidden md:inline-flex h-10 items-center rounded-md border-2 border-black bg-[#9ef37f] px-4 text-xs font-black uppercase tracking-wide shadow-[3px_3px_0_#111] transition-transform hover:-translate-y-0.5'
          >
            Start a Project
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className='md:hidden z-50 p-2 rounded border-2 border-black bg-white transition-colors relative'
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
        className={`fixed top-24 left-4 right-4 bottom-4 rounded-lg border-2 border-black bg-white md:hidden transition-all duration-300 z-40 font-alegreya shadow-[6px_6px_0_#111] ${
          isMobileMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div className='flex flex-col h-full'>
          {/* Menu Items */}
          <div className='flex-1 flex items-center justify-center'>
            <ul className='flex flex-col items-center gap-4 text-4xl font-black'>
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
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className='block hover:text-green-600 transition-colors duration-200 px-8 py-3'
                  >
                    {link.name}
                  </Link>
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
              © {new Date().getFullYear()} Correct Pixel. All rights reserved.
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
