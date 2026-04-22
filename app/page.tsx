import type { Metadata } from 'next';
import CaseStudy from '@/components/sections/case-study';
import Hero from '@/components/sections/hero';
import SayHello from '@/components/sections/say-hello';
import Services from '@/components/sections/services';
import Testimonials from '@/components/sections/testimonials';
import WhyUs from '@/components/sections/why-us';
import WorkProcess from '@/components/sections/work-process';
import { absoluteUrl, siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Brand, Product UI, and Website Studio',
  description:
    'Correct Pixel creates memorable brand identities, useful product interfaces, and conversion-focused websites for ambitious teams.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Correct Pixel | Brand, Product UI, and Website Studio',
    description:
      'Memorable brand identities, useful product interfaces, and conversion-focused websites for ambitious teams.',
    url: siteConfig.url,
    images: [
      {
        url: absoluteUrl('/opengraph-image'),
        width: 1200,
        height: 630,
        alt: 'Correct Pixel studio preview',
      },
    ],
  },
  twitter: {
    title: 'Correct Pixel | Brand, Product UI, and Website Studio',
    description:
      'Memorable brand identities, useful product interfaces, and conversion-focused websites for ambitious teams.',
    images: [absoluteUrl('/twitter-image')],
  },
};

const HomePage = () => {
  return (
    <div className='font-josefin relative'>
      <Hero />
      <WhyUs />
      <Services />
      <WorkProcess />
      <CaseStudy />
      <Testimonials />
      <SayHello />
    </div>
  );
};

export default HomePage;
