import { absoluteUrl, siteConfig } from '@/lib/seo';

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': absoluteUrl('/#organization'),
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl('/icon-512.png'),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: siteConfig.email,
        contactType: 'sales',
        availableLanguage: ['English'],
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: {
      '@id': absoluteUrl('/#organization'),
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': absoluteUrl('/#studio'),
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl('/hero.png'),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: ['Worldwide', 'Nigeria', 'United States', 'United Kingdom'],
    priceRange: '$$',
    serviceType: [
      'Brand identity design',
      'UI/UX design',
      'Website development',
      'Product interface design',
      'Landing page design',
    ],
  },
];

const StructuredData = () => {
  return (
    <script
      type='application/ld+json'
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
