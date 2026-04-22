import type { Metadata } from 'next';
import { teamMembers } from '@/data/team';
import { absoluteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Correct Pixel, a compact design and development studio building clear brand identities, thoughtful interfaces, and useful web experiences.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Correct Pixel',
    description:
      'A compact design and development studio for brands that need clear identity, thoughtful interfaces, and useful web experiences.',
    url: absoluteUrl('/about'),
  },
};

export default function About() {
  return (
    <main className='px-4 pb-12 pt-28 font-josefin md:pt-32'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.1fr]'>
        <section className='rounded-lg border-2 border-black bg-white p-5 shadow-[6px_6px_0_#111] md:p-8'>
          <div className='mb-8 flex items-start justify-between gap-4 border-b-2 border-dashed border-black/20 pb-6'>
            <div>
              <p className='text-sm font-black uppercase tracking-[0.24em] text-neutral-500'>
                About the studio
              </p>
              <h1 className='mt-4 text-5xl font-black leading-[0.9] tracking-tight md:text-7xl'>
                Small team. Sharp output.
              </h1>
            </div>
            <span className='rounded-md bg-black px-3 py-2 text-lg font-black text-white'>
              03
            </span>
          </div>

          <p className='text-xl font-bold leading-relaxed text-neutral-600'>
            Correct Pixel is a compact design and development studio for brands
            that need clear identity, thoughtful interfaces, and web builds that
            feel alive without becoming noisy.
          </p>
        </section>

        <section className='grid grid-cols-1 gap-5'>
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className='rounded-lg border-2 border-black bg-white p-5 shadow-[6px_6px_0_#111]'
            >
              <div className='flex items-start gap-4'>
                <span className='font-mono text-sm font-black text-neutral-500'>
                  {index + 1}.
                </span>
                <div className='h-14 w-14 overflow-hidden rounded border-2 border-black bg-neutral-100'>
                  <img
                    src={member.image}
                    alt=''
                    className='h-full w-full object-cover grayscale'
                  />
                </div>
                <div>
                  <h2 className='text-2xl font-black'>{member.name}</h2>
                  <p className='font-semibold italic text-neutral-500'>
                    {member.role}
                  </p>
                </div>
              </div>
              <p className='mt-4 font-bold leading-relaxed text-neutral-600'>
                {member.description}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
