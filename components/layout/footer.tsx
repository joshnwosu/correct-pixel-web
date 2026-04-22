import { MapPin, Phone, Mail } from 'lucide-react';
import {
  companyLinks,
  contactInfo,
  serviceLinks,
  socialLinks,
} from '@/data/navigation';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-full bg-transparent font-josefin text-black px-4 pb-6'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto rounded-lg border-2 border-black bg-white px-5 py-10 md:px-8 md:py-12 shadow-[6px_6px_0_#111]'>
        <div className='mb-10 border-b-2 border-dashed border-black/20 pb-8'>
          <p className='text-black font-black tracking-[0.2em] uppercase text-xs'>
            Correct Pixel
          </p>
          <h2 className='mt-3 max-w-4xl text-3xl md:text-5xl lg:text-6xl font-black tracking-tight'>
            Useful websites, sharp identities, and digital products built to
            move.
          </h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12'>
          {/* Follow Us Section */}
          <div className='space-y-6 col-span-2'>
            <div>
              <h3 className='text-black font-black text-lg'>Follow Us</h3>
              <div className='w-10 h-0.5 bg-black' />
            </div>
            <p className='text-neutral-600 text-lg max-w-xs w-full'>
              Follow the studio for launches, process notes, and design scraps
              worth keeping.
            </p>
            <div className='flex gap-3 pt-2'>
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className='w-10 h-10 bg-white border-2 border-black rounded-md flex items-center justify-center hover:bg-[#ffe45c] transition-colors duration-200'
                  aria-label={social.name}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <social.icon className='w-5 h-5 text-black' />
                </Link>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className='space-y-6'>
            <div>
              <h3 className='text-black font-black text-xl'>Services</h3>
              <div className='w-10 h-0.5 bg-black' />
            </div>
            <ul className='space-y-6'>
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className='text-neutral-700 hover:text-black transition-colors duration-200 text-md font-bold'
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className='space-y-6'>
            <div>
              <h3 className='text-black font-black text-xl'>Company</h3>
              <div className='w-10 h-0.5 bg-black' />
            </div>
            <ul className='space-y-6'>
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-neutral-700 hover:text-black transition-colors duration-200 text-md font-bold'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Section */}
          <div className='space-y-6'>
            <div>
              <h3 className='text-black font-black text-xl'>Location</h3>
              <div className='w-10 h-0.5 bg-black' />
            </div>
            <div className='space-y-3'>
              <div className='flex items-start gap-3'>
                <MapPin className='w-4 h-4 text-black mt-1 flex-shrink-0' />
                <p className='text-neutral-600 text-md'>
                  {contactInfo.address.street}
                  <br />
                  {contactInfo.address.city}
                  <br />
                  {contactInfo.address.country}
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <Phone className='w-4 h-4 text-black flex-shrink-0' />
                <Link
                  href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                  className='text-neutral-600 hover:text-black transition-colors duration-200 text-md'
                >
                  {contactInfo.phone}
                </Link>
              </div>
              <div className='flex items-center gap-3'>
                <Mail className='w-4 h-4 text-black flex-shrink-0' />
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className='text-neutral-600 hover:text-black transition-colors duration-200 text-md'
                >
                  {contactInfo.email}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section - Your existing footer content */}
      <div className='w-full py-6 flex items-center justify-center'>
        <p className='text-sm text-neutral-600 font-bold'>
          &copy; {new Date().getFullYear()} Correct Pixel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
