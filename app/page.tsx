'use client';

import CaseStudy from '@/components/sections/case-study';
import Hero from '@/components/sections/hero';
import SayHello from '@/components/sections/say-hello';
import Services from '@/components/sections/services';
import Testimonials from '@/components/sections/testimonials';
import WorkProcess from '@/components/sections/work-process';

const HomePage = () => {
  return (
    <div className='font-josefin relative'>
      {/* Background Pattern Overlay */}
      <div className='absolute inset-0 opacity-5 z-0 pointer-events-none'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
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
