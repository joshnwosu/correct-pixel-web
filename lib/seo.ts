export const siteConfig = {
  name: 'Correct Pixel',
  shortName: 'Correct Pixel',
  url: 'https://correctpixel.com',
  email: 'hello@correctpixel.com',
  phone: '+2340000000000',
  locale: 'en_US',
  description:
    'Correct Pixel is a compact design and development studio for brand identity, product UI, and high-performing websites.',
  keywords: [
    'Correct Pixel',
    'brand identity studio',
    'web design studio',
    'product UI design',
    'UI UX design agency',
    'website development',
    'landing page design',
    'digital product design',
    'Lagos design studio',
    'frontend development studio',
  ],
  social: {
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
};

export const absoluteUrl = (path = '/') => new URL(path, siteConfig.url).toString();
