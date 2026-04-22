import type { Metadata } from 'next';
import SayHello from '@/components/sections/say-hello';
import { absoluteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a project with Correct Pixel. Share your brand, website, or product UI goals and book a design and development sprint.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Correct Pixel',
    description:
      'Start a brand, website, or product UI project with Correct Pixel.',
    url: absoluteUrl('/contact'),
  },
};

export default function Contact() {
  return (
    <main className='font-josefin'>
      <section className='px-4 pb-2 pt-28 md:pt-32'>
        <div className='mx-auto max-w-7xl rounded-lg border-2 border-black bg-white p-5 shadow-[6px_6px_0_#111] md:p-8'>
          <div className='flex items-start justify-between gap-4'>
            <div>
              <p className='text-sm font-black uppercase tracking-[0.24em] text-neutral-500'>
                Contact
              </p>
              <h1 className='mt-4 text-5xl font-black leading-[0.9] tracking-tight md:text-7xl'>
                Get in touch with us.
              </h1>
            </div>
            <span className='rounded-md bg-black px-3 py-2 text-lg font-black text-white'>
              GO
            </span>
          </div>
        </div>
      </section>
      <SayHello />
    </main>
  );
}
