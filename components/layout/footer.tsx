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
    <footer className='w-full bg-black font-josefin'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 py-12 md:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12'>
          {/* Follow Us Section */}
          <div className='space-y-6 col-span-2'>
            <div>
              <h3 className='text-gray-200 font-bold text-lg'>Follow Us</h3>
              <div className='w-10 h-0.5 bg-gray-500' />
            </div>
            <p className='text-gray-400 text-lg max-w-xs w-full'>
              Stay connected with us on social media for latest updates
            </p>
            <div className='flex gap-3 pt-2'>
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className='w-10 h-10 bg-[#222222] rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200'
                  aria-label={social.name}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <social.icon className='w-5 h-5 text-white' />
                </Link>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className='space-y-6'>
            <div>
              <h3 className='text-gray-200 font-bold text-xl'>Services</h3>
              <div className='w-10 h-0.5 bg-gray-500' />
            </div>
            <ul className='space-y-6'>
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className='text-white hover:text-green-400 transition-colors duration-200 text-md'
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
              <h3 className='text-gray-200 font-bold text-xl'>Company</h3>
              <div className='w-10 h-0.5 bg-gray-500' />
            </div>
            <ul className='space-y-6'>
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-white hover:text-green-400 transition-colors duration-200 text-md'
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
              <h3 className='text-gray-200 font-bold text-xl'>Location</h3>
              <div className='w-10 h-0.5 bg-gray-500' />
            </div>
            <div className='space-y-3'>
              <div className='flex items-start gap-3'>
                <MapPin className='w-4 h-4 text-green-400 mt-1 flex-shrink-0' />
                <p className='text-gray-400 text-md'>
                  {contactInfo.address.street}
                  <br />
                  {contactInfo.address.city}
                  <br />
                  {contactInfo.address.country}
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <Phone className='w-4 h-4 text-green-400 flex-shrink-0' />
                <Link
                  href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                  className='text-gray-400 hover:text-green-400 transition-colors duration-200 text-md'
                >
                  {contactInfo.phone}
                </Link>
              </div>
              <div className='flex items-center gap-3'>
                <Mail className='w-4 h-4 text-green-400 flex-shrink-0' />
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className='text-gray-400 hover:text-green-400 transition-colors duration-200 text-md'
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
        <p className='text-sm text-gray-400'>
          &copy; {new Date().getFullYear()} Correct Pixel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
