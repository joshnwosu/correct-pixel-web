'use client';

import CaseStudy from '@/components/sections/case-study';
import Hero from '@/components/sections/hero';
import SayHello from '@/components/sections/say-hello';
import Services from '@/components/sections/services';
import Testimonials from '@/components/sections/testimonials';
import WorkProcess from '@/components/sections/work-process';

const HomePage = () => {
  return (
    <div className='font-josefin'>
      <Hero />
      <Services />
      <WorkProcess />
      <CaseStudy />
      <Testimonials />
      <SayHello />
    </div>
  );
};

export default HomePage;
