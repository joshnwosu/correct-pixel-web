const WorkProcess = () => {
  return (
    <section className='py-24'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='max-w-lg space-y-4'>
          <div className='flex items-center gap-2 text-purple-600'>
            <div className='w-1.5 h-1.5 rounded-full bg-purple-600' />
            <p className='text-lg font-medium'>Work Process</p>
          </div>

          <p className='text-4xl font-bold leading-relaxed'>
            Our Process design, and Deliver Simplified
          </p>
        </div>

        <div className='grid grid-cols-3 mt-20'>
          <div className='col-span-2'>
            <p>Hello world</p>
          </div>
          <div className='col-span-1 h-[500px] bg-accent rounded-lg'></div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
