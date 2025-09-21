import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

export const navigationItems = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/our-team' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

// Footer data organized in arrays
export const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
];

export const serviceLinks = [
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'UI/UX Design', href: '/services/ui-ux-design' },
  { name: 'Mobile Apps', href: '/services/mobile-apps' },
  { name: 'Digital Marketing', href: '/services/digital-marketing' },
  { name: 'Brand Strategy', href: '/services/brand-strategy' },
];

export const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'Privacy Policy', href: '/privacy' },
];

export const contactInfo = {
  address: {
    street: '123 Design Street',
    city: 'Creative City, CC 12345',
    country: 'United States',
  },
  phone: '+1 (234) 567-890',
  email: 'hello@correctpixel.com',
};
