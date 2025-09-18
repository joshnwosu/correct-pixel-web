'use client';

import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import WorkProcess from '@/components/sections/work-process';

const HomePage = () => {
  return (
    <div className='font-josefin'>
      <Hero />
      <Services />
      <WorkProcess />
      <div className='w-full min-h-screen bg-white' />
    </div>
  );
};

export default HomePage;
