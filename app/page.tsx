'use client';

import CaseStudy from '@/components/sections/case-study';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Team from '@/components/sections/team';
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
      <Team />
      <div className='w-full min-h-screen bg-white' />
    </div>
  );
};

export default HomePage;
