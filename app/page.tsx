'use client';

import CaseStudy from '@/components/sections/case-study';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Testimonials from '@/components/sections/testimonials';
import WorkProcess from '@/components/sections/work-process';

const HomePage = () => {
  return (
    <div className='font-alegreya'>
      <Hero />
      <Services />
      <WorkProcess />
      <CaseStudy />
      <Testimonials />
    </div>
  );
};

export default HomePage;
