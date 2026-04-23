import type { Metadata } from 'next';
import Image from 'next/image';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import SocialIconLink from '@/components/social-icon-link';
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
  const socialIcons = [
    { key: 'x', label: 'X', icon: Twitter },
    { key: 'instagram', label: 'Instagram', icon: Instagram },
    { key: 'linkedin', label: 'LinkedIn', icon: Linkedin },
  ] as const;

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
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className='rounded-lg border-2 border-black bg-white p-5 shadow-[6px_6px_0_#111]'
            >
              <div className='flex items-start gap-5'>
                <div className='relative h-24 w-24 shrink-0 overflow-hidden rounded-md border-2 border-black bg-neutral-100 shadow-[4px_4px_0_#111] md:h-32 md:w-32 md:shadow-[5px_5px_0_#111]'>
                  <Image
                    src={member.image}
                    alt=''
                    fill
                    sizes='(min-width: 768px) 128px, 96px'
                    className='h-full w-full object-cover grayscale'
                  />
                </div>
                <div>
                  <h2 className='text-2xl font-black'>{member.name}</h2>
                  <p className='font-semibold italic text-neutral-500'>
                    {member.role}
                  </p>
                  <div className='mt-4 flex items-center gap-3'>
                    {socialIcons.map((social) => {
                      const href = member.socials?.[social.key];

                      if (!href) return null;

                      return (
                        <SocialIconLink
                          key={social.key}
                          href={href}
                          label={`${member.name} on ${social.label}`}
                          icon={social.icon}
                        />
                      );
                    })}
                  </div>
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
