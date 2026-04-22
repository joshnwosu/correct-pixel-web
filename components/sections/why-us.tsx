import { BadgeCheck, Clock3, Sparkles, Target } from 'lucide-react';

const stats = [
  { value: '35+', label: 'brands launched' },
  { value: '4.9/5', label: 'client rating' },
  { value: '6wk', label: 'average launch sprint' },
];

const reasons = [
  {
    icon: Target,
    title: 'Strategy before pixels',
    description:
      'Every project starts with the market, audience, offer, and measurable outcomes.',
  },
  {
    icon: Sparkles,
    title: 'Design that converts',
    description:
      'Clean interfaces, strong visual systems, and interactions built around real user paths.',
  },
  {
    icon: Clock3,
    title: 'Fast, focused delivery',
    description:
      'Lean sprints, clear checkpoints, and production-ready builds without the agency fog.',
  },
  {
    icon: BadgeCheck,
    title: 'Built to keep growing',
    description:
      'Scalable code, reusable components, and handoff support for your next stage.',
  },
];

const WhyUs = () => {
  return (
    <section className='px-4 py-10 md:py-14' aria-labelledby='why-us-title'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.1fr]'>
          <div className='rounded-lg border-2 border-black bg-white p-5 shadow-[6px_6px_0_#111] md:p-6'>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <p className='text-xl font-black'>Why Correct Pixel</p>
                <span className='rounded-md bg-black px-3 py-2 font-black text-white'>
                  04
                </span>
              </div>

              <h2
                id='why-us-title'
                className='text-3xl font-black leading-tight tracking-tight md:text-5xl'
              >
                A sharper partner for brands that need more than a pretty site.
              </h2>
            </div>

            <div className='mt-8 grid grid-cols-3 divide-x-2 divide-dashed divide-black/20 border-y-2 border-dashed border-black/20'>
              {stats.map((stat) => (
                <div key={stat.label} className='py-5 px-3 first:pl-0 last:pr-0'>
                  <p className='text-2xl md:text-4xl font-black text-black'>
                    {stat.value}
                  </p>
                  <p className='text-xs md:text-sm text-muted-foreground uppercase tracking-wide'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className='rounded-lg border-2 border-black bg-white p-5 shadow-[5px_5px_0_#111] transition-transform hover:-translate-y-1'
              >
                <div className='mb-5 flex h-11 w-11 items-center justify-center rounded-md border-2 border-black bg-[#9ef37f] text-black'>
                  <reason.icon className='w-5 h-5' />
                </div>
                <h3 className='text-xl font-bold'>{reason.title}</h3>
                <p className='mt-3 font-semibold italic leading-relaxed text-neutral-500'>
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
