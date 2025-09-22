export default function About() {
  return (
    <section className='py-30 sm:py-50 font-josefin'>
      <div className='max-w-7xl mx-auto px-4 space-y-6 sm:space-y-16'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold capitalize leading-tight'>
          What makes us <br />{' '}
          <span className='text-muted-foreground'>Different</span>
        </h1>
        <div className='flex justify-start sm:justify-end'>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl w-full max-w-full sm:max-w-xl lg:max-w-2xl font-normal leading-relaxed md:leading-snug'>
            This is where we shine bright. We are CorrectPixel, a team of ninja
            warrior mercenaries creatively disguised as designers, developers,
            and engineers, whose sole aim is to build for those who dare to
            believe.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 h-[50vh]'>
          <div className='col-span-2 rounded-4xl bg-accent'></div>
          <div className='rounded-3xl bg-accent'></div>
        </div>
      </div>
    </section>
  );
}
