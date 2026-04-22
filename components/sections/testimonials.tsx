'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { testimonials } from '@/data/testimonial';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section className='px-4 py-10 md:py-14' id='testimonials'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-[1fr_1.25fr]'>
        <div className='rounded-lg border-2 border-black bg-white p-5 shadow-[6px_6px_0_#111] md:p-6'>
          <div className='mb-6 flex items-start justify-between gap-4 border-b-2 border-dashed border-black/20 pb-5'>
            <div>
              <h2 className='text-3xl font-black md:text-5xl'>Testimonials</h2>
              <p className='mt-2 text-lg font-semibold italic text-neutral-500'>
                &quot;Notes from teams we have helped launch&quot;
              </p>
            </div>
            <span className='rounded-md bg-black px-3 py-2 text-lg font-black text-white'>
              {testimonials.length}
            </span>
          </div>

          <div className='flex items-center gap-3'>
            <button
              onClick={handlePrevious}
              className='flex h-11 w-11 items-center justify-center rounded-md border-2 border-black bg-white shadow-[3px_3px_0_#111]'
              aria-label='Previous testimonial'
            >
              <ArrowLeft className='h-5 w-5' />
            </button>
            <button
              onClick={handleNext}
              className='flex h-11 w-11 items-center justify-center rounded-md border-2 border-black bg-[#ffe45c] shadow-[3px_3px_0_#111]'
              aria-label='Next testimonial'
            >
              <ArrowRight className='h-5 w-5' />
            </button>
            <p className='ml-auto font-mono text-sm font-black text-neutral-500'>
              {String(currentIndex + 1).padStart(2, '0')} /{' '}
              {String(testimonials.length).padStart(2, '0')}
            </p>
          </div>
        </div>

        <article className='rounded-lg border-2 border-black bg-white p-5 shadow-[6px_6px_0_#111] md:p-8'>
          <div className='mb-8 flex items-center gap-4 border-b-2 border-dashed border-black/20 pb-5'>
            <div className='flex h-14 w-14 items-center justify-center rounded-md border-2 border-black bg-[#9ef37f] text-xl font-black'>
              {activeTestimonial.name
                .split(' ')
                .map((part) => part[0])
                .join('')
                .slice(0, 2)}
            </div>
            <div>
              <h3 className='text-2xl font-black'>{activeTestimonial.name}</h3>
              <p className='font-semibold italic text-neutral-500'>
                {activeTestimonial.position}
              </p>
            </div>
          </div>

          <p className='text-2xl font-black leading-relaxed md:text-4xl'>
            &quot;{activeTestimonial.content}&quot;
          </p>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
