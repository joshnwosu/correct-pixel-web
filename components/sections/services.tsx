import { services } from '@/data/service';

const Services = () => {
  return (
    <section className='py-24'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-2 gap-4 items-start'>
          <div className='flex items-center gap-2 text-purple-600'>
            <div className='w-1.5 h-1.5 rounded-full bg-purple-500' />
            <p className='text-lg font-medium'>Services</p>
          </div>

          <p className='text-4xl font-bold leading-relaxed text-muted-foreground'>
            <span className='text-foreground'>We Deliver</span> - Comprehensive
            Solutions to help businesses Grow and thrive.
          </p>
        </div>

        <div className='mt-16 space-y-20'>
          {services.map((service, index) => (
            <div key={index} className='grid grid-cols-3 gap-4'>
              <div className='col-span-1 space-y-4'>
                <div className='w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold'>
                  {`0${index + 1}`}
                </div>
                <p className='text-5xl font-extrabold'>{service.title}</p>
              </div>
              <div className='col-span-2 rounded-md flex gap-4'>
                <div className='w-md h-64 bg-accent rounded-md flex-shrink-0 overflow-hidden'>
                  <img
                    src={service.image}
                    alt={service.title}
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-300 grayscale'
                  />
                </div>
                <div className='flex-1 flex flex-col justify-end'>
                  <div className='space-y-4'>
                    <div className='flex items-center gap-4'>
                      <div className='flex items-center'>
                        <div className='w-20 h-0.5 bg-purple-500' />
                        <div className='w-3 h-3 rotate-45 bg-purple-500' />
                      </div>
                      <p className='text-md font-playwrite'>
                        {service.featureTitle}
                      </p>
                    </div>

                    <ul className='list-disc list-inside space-y-2 pl-22'>
                      {service.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className='text-md text-muted-foreground'
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
