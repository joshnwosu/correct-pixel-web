import CustomButton from '../custom-button';
import { services } from '@/data/service';

const Services = () => {
  return (
    <section className='px-4 py-10 md:py-14' id='services'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-5 rounded-lg border-2 border-black bg-white p-5 shadow-[6px_6px_0_#111] md:p-6'>
          <div className='flex items-start justify-between gap-4'>
            <div>
              <h2 className='text-3xl font-black md:text-5xl'>Services</h2>
              <p className='mt-2 text-lg font-semibold italic text-neutral-500'>
                &quot;Creative and technical builds for sharper launches&quot;
              </p>
            </div>
            <span className='rounded-md bg-black px-3 py-2 text-lg font-black text-white'>
              {services.length}
            </span>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-5 lg:grid-cols-3'>
          {services.map((service, index) => (
            <article
              key={service.title}
              className='rounded-lg border-2 border-black bg-white p-5 shadow-[6px_6px_0_#111]'
            >
              <div className='mb-5 flex items-center justify-between border-b-2 border-dashed border-black/20 pb-4'>
                <div className='flex items-center gap-4'>
                  <span className='font-mono text-sm font-black text-neutral-500'>
                    {index + 1}.
                  </span>
                  <div className='h-10 w-10 overflow-hidden rounded border-2 border-black'>
                    <img
                      src={service.image}
                      alt=''
                      className='h-full w-full object-cover grayscale'
                    />
                  </div>
                  <h3 className='text-2xl font-black'>{service.title}</h3>
                </div>
                <span className='text-neutral-300'>&gt;</span>
              </div>

              <p className='mb-5 min-h-12 font-semibold italic text-neutral-500'>
                &quot;{service.description}&quot;
              </p>

              <ol className='space-y-3'>
                {service.features.slice(0, 5).map((feature, featureIndex) => (
                  <li key={feature} className='flex items-center gap-3'>
                    <span className='w-7 font-mono text-sm font-black text-neutral-400'>
                      {featureIndex + 1}.
                    </span>
                    <span className='font-black'>{feature}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>

        <div className='mt-5 flex justify-center'>
          <CustomButton text='Start With One' href='#contact' />
        </div>
      </div>
    </section>
  );
};

export default Services;
