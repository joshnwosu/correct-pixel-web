'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CustomButton from '../custom-button';

const heroLinks = [
  ['Brand systems', 'Visual identity, voice, design rules'],
  ['Web builds', 'Landing pages, sites, product surfaces'],
  ['Product UI', 'Dashboards, portals, SaaS workflows'],
  ['Launch support', 'Copy, QA, handoff, iteration'],
];

const heroStats = [
  ['4.9/5', 'average client rating'],
  ['6wk', 'typical launch sprint'],
  ['35+', 'brand and web projects'],
];

const featuredStacks = [
  ['01', 'Strategy Sprint', 'Position the offer before design starts'],
  ['02', 'Interface Kit', 'Reusable components with a sharp visual system'],
  ['03', 'Launch Build', 'Fast responsive pages ready for real users'],
];

const serviceSlides = [
  {
    title: 'Brand System',
    subtitle: 'Identity, visual language, and launch-ready brand rules',
    code: 'BRD',
    accent: '#ffe45c',
  },
  {
    title: 'Web Build',
    subtitle: 'High-converting websites with responsive frontend craft',
    code: 'WEB',
    accent: '#9ef37f',
  },
  {
    title: 'Product UI',
    subtitle: 'Clean dashboards, portals, and product workflows',
    code: 'UI',
    accent: '#9fd6ff',
  },
  {
    title: 'Launch Support',
    subtitle: 'Copy, QA, handoff, and iteration after release',
    code: 'GO',
    accent: '#ff9bc8',
  },
];

const Hero = () => {
  const [selectedService, setSelectedService] = useState(0);
  const activeService = serviceSlides[selectedService];

  const goToPreviousService = () => {
    setSelectedService((current) =>
      current === 0 ? serviceSlides.length - 1 : current - 1
    );
  };

  const goToNextService = () => {
    setSelectedService((current) => (current + 1) % serviceSlides.length);
  };

  return (
    <section id='home' className='px-4 pb-10 pt-28 md:pb-14 md:pt-32'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-[1.05fr_0.95fr]'>
        <div className='flex flex-col rounded-lg border-2 border-black bg-white p-5 shadow-[6px_6px_0_#111] md:p-8'>
          <div className='flex items-start justify-between gap-4 border-b-2 border-dashed border-black/20 pb-6'>
            <div>
              <p className='text-sm font-black uppercase tracking-[0.24em] text-neutral-500'>
                Digital design studio
              </p>
              <h1 className='mt-4 max-w-3xl text-4xl font-black leading-[0.92] tracking-tight md:text-6xl lg:text-7xl [text-shadow:0.5px_0_0_currentColor]'>
                Correct Pixel makes brands worth clicking.
              </h1>
            </div>
            <span
              className='rounded-md bg-black px-3 py-2 text-lg font-black text-white'
              aria-label='Client rating 4.9 out of 5'
            >
              4.9
            </span>
          </div>

          <div className='flex flex-1 flex-col justify-between'>
            <div className='py-7'>
              <p className='max-w-2xl text-xl font-bold leading-relaxed text-neutral-600'>
                A compact studio for identity, product UI, and websites with
                enough personality to be remembered and enough structure to
                convert.
              </p>

              <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                <CustomButton text="Let's Talk" href='#contact' />
                <CustomButton text='View Work' href='#work' variant='light' />
              </div>
            </div>

            <div className='border-t-2 border-dashed border-black/20 pt-5'>
              <div className='mb-4 flex items-center justify-between'>
                <p className='font-black uppercase tracking-[0.18em] text-sm text-neutral-500'>
                  Studio signals
                </p>
                <span className='rounded bg-[#9ef37f] border-2 border-black px-2 py-1 text-xs font-black'>
                  LIVE
                </span>
              </div>

              <div className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
                {heroStats.map(([value, label], index) => (
                  <div
                    key={label}
                    className='rounded-md border-2 border-black bg-[#fbfbfa] p-3'
                  >
                    <div className='flex items-start justify-between gap-2'>
                      <p className='text-2xl font-black'>{value}</p>
                      <span className='font-mono text-xs font-black text-neutral-400'>
                        {index + 1}.
                      </span>
                    </div>
                    <p className='mt-1 text-sm font-semibold italic text-neutral-500'>
                      &quot;{label}&quot;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='grid gap-5'>
          <div className='overflow-hidden rounded-lg border-2 border-black bg-white shadow-[6px_6px_0_#111]'>
            <div className='border-b-2 border-black px-5 py-3 text-center font-mono text-lg font-black uppercase tracking-[0.24em] text-blue-500'>
              Select Service
            </div>
            <div className='bg-[repeating-linear-gradient(0deg,#e9e9e6_0,#e9e9e6_1px,#f8f8f4_1px,#f8f8f4_4px)] p-5'>
              <div className='flex items-center justify-center gap-4'>
                <button
                  type='button'
                  onClick={goToPreviousService}
                  className='flex h-11 w-11 shrink-0 items-center justify-center rounded border-2 border-black bg-white shadow-[3px_3px_0_#111] transition-transform hover:-translate-y-0.5'
                  aria-label='Previous service'
                >
                  <ChevronLeft className='h-6 w-6' />
                </button>

                <div className='mx-auto flex aspect-square w-full max-w-[260px] flex-col items-center justify-center rounded border-2 border-black bg-white p-5 text-center'>
                  <div
                    className='mb-5 rounded-md border-2 border-black px-3 py-1 font-mono text-sm font-black uppercase shadow-[3px_3px_0_#111]'
                    style={{ backgroundColor: activeService.accent }}
                  >
                    {activeService.code}
                  </div>
                  <Image
                    src='/icon-512.png'
                    alt='Correct Pixel logo'
                    width={96}
                    height={96}
                    className='h-24 w-24 object-contain'
                  />
                  <p className='mt-5 font-mono text-xs font-black uppercase tracking-[0.2em] text-neutral-500'>
                    Studio Mode
                  </p>
                  <h2 className='mt-2 text-2xl font-black'>
                    {activeService.title}
                  </h2>
                  <p className='mt-2 line-clamp-2 text-sm font-semibold italic text-neutral-500'>
                    &quot;{activeService.subtitle}&quot;
                  </p>
                </div>

                <button
                  type='button'
                  onClick={goToNextService}
                  className='flex h-11 w-11 shrink-0 items-center justify-center rounded border-2 border-black bg-[#ffe45c] shadow-[3px_3px_0_#111] transition-transform hover:-translate-y-0.5'
                  aria-label='Next service'
                >
                  <ChevronRight className='h-6 w-6' />
                </button>
              </div>
              <div className='mt-4 flex items-center justify-center gap-2'>
                {serviceSlides.map((service, index) => (
                  <button
                    key={service.title}
                    type='button'
                    onClick={() => setSelectedService(index)}
                    className={`h-3 w-3 rounded-full border border-black transition-transform hover:scale-125 ${
                      index === selectedService ? 'bg-black' : 'bg-neutral-300'
                    }`}
                    aria-label={`Select ${service.title}`}
                  />
                ))}
              </div>
            </div>
            <div className='flex items-center justify-between border-t-2 border-black bg-[#f3f3f0] px-5 py-3 font-mono text-sm font-black uppercase text-neutral-500'>
              <button
                type='button'
                onClick={() => setSelectedService(0)}
                className='rounded border-2 border-neutral-400 px-3 py-1 transition-colors hover:border-black hover:text-black'
              >
                Reset
              </button>
              <span>{String(selectedService + 1).padStart(2, '0')} / 04</span>
              <span className='text-green-600'>1P</span>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
            {featuredStacks.map(([number, title, description]) => (
              <article
                key={title}
                className='rounded-lg border-2 border-black bg-white p-5 shadow-[5px_5px_0_#111]'
              >
                <div className='mb-4 flex items-center justify-between'>
                  <span className='font-mono text-sm font-black text-neutral-500'>
                    {number}.
                  </span>
                  <span className='rounded bg-black px-2 py-1 text-xs font-black text-white'>
                    ON
                  </span>
                </div>
                <h2 className='text-2xl font-black'>{title}</h2>
                <p className='mt-2 font-semibold italic text-neutral-500'>
                  &quot;{description}&quot;
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className='mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-5 md:mt-14 md:grid-cols-4'>
        {heroLinks.map(([title, description], index) => (
          <a
            key={title}
            href='#services'
            className='group rounded-lg border-2 border-black bg-white p-4 shadow-[4px_4px_0_#111] transition-transform hover:-translate-y-1'
          >
            <div className='flex items-center gap-4'>
              <span className='font-mono text-sm font-black text-neutral-500'>
                {index + 1}.
              </span>
              <div>
                <p className='font-black'>{title}</p>
                <p className='line-clamp-1 text-sm font-semibold italic text-neutral-500'>
                  {description}
                </p>
              </div>
              <span className='ml-auto text-neutral-300 group-hover:text-black'>
                &gt;
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
