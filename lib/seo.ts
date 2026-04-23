export const siteConfig = {
  name: 'Correct Pixel',
  shortName: 'Correct Pixel',
  url: 'https://www.correctpixel.com',
  email: 'hello@correctpixel.com',
  phone: '+2347016000160',
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
    instagram: 'https://instagram.com/correctpixel',
    linkedin: 'https://linkedin.com/company/correctpixel',
    twitter: 'https://x.com/correctpixel',
  },
};

export const absoluteUrl = (path = '/') => new URL(path, siteConfig.url).toString();
