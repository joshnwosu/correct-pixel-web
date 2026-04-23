import {
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

export const navigationItems = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Work', href: '/#work' },
  { name: 'Services', href: '/#services' },
  { name: 'Contact', href: '/contact' },
];

// Footer data organized in arrays
export const socialLinks = [
  { name: 'X', icon: Twitter, href: 'https://x.com/correctpixel' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/correctpixel' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/correctpixel' },
];

export const serviceLinks = [
  { name: 'Web Development', href: '/#services' },
  { name: 'UI/UX Design', href: '/#services' },
  { name: 'Mobile Apps', href: '/#services' },
  { name: 'Brand Strategy', href: '/#services' },
];

export const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Work', href: '/#work' },
  { name: 'Services', href: '/#services' },
  { name: 'Contact', href: '/contact' },
];

export const contactInfo = {
  address: {
    street: 'Remote studio',
    city: 'Lagos and global',
    country: 'Available worldwide',
  },
  phone: '+234 701 6000 160',
  email: 'hello@correctpixel.com',
};
