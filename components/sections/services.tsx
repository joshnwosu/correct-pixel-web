import { services } from '@/data/service';

const Services = () => {
  return (
    <section className='py-12 md:py-24'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header Section */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 items-start'>
          <div className='flex items-center gap-2 text-green-600'>
            <div className='w-1.5 h-1.5 rounded-full bg-green-600' />
            <p className='text-base md:text-lg font-medium'>Services</p>
          </div>

          <p className='lg:col-span-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-relaxed text-muted-foreground'>
            <span className='text-foreground'>We Deliver</span> - Comprehensive
            Solutions to help businesses Grow and thrive.
          </p>
        </div>

        {/* Services List */}
        <div className='mt-12 md:mt-16 space-y-12 md:space-y-20'>
          {services.map((service, index) => (
            <div key={index} className='space-y-6'>
              {/* Mobile Layout */}
              <div className='block lg:hidden'>
                {/* Service Number and Title */}
                <div className='space-y-4 mb-6'>
                  <div className='w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm'>
                    {`0${index + 1}`}
                  </div>
                  <p className='text-3xl md:text-4xl font-extrabold'>
                    {service.title}
                  </p>
                </div>

                {/* Image */}
                <div className='w-full h-64 md:h-80 bg-accent rounded-md overflow-hidden mb-6'>
                  <img
                    src={service.image}
                    alt={service.title}
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0'
                  />
                </div>

                {/* Features */}
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                      <div className='w-12 md:w-20 h-0.5 bg-green-600' />
                      <div className='w-3 h-3 rotate-45 bg-green-600' />
                    </div>
                    <p className='text-sm md:text-base font-medium'>
                      {service.featureTitle}
                    </p>
                  </div>

                  <ul className='list-disc list-inside space-y-2 pl-4 md:pl-8'>
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className='text-sm md:text-base text-muted-foreground'
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Desktop Layout (lg and above) */}
              <div className='hidden lg:grid lg:grid-cols-3 gap-4'>
                <div className='col-span-1 space-y-4'>
                  <div className='w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold'>
                    {`0${index + 1}`}
                  </div>
                  <p className='text-4xl xl:text-5xl font-extrabold'>
                    {service.title}
                  </p>
                </div>

                <div className='col-span-2 rounded-md flex gap-4'>
                  <div className='w-72 xl:w-md h-64 bg-accent rounded-md flex-shrink-0 overflow-hidden'>
                    <img
                      src={service.image}
                      alt={service.title}
                      className='w-full h-full object-cover hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0'
                    />
                  </div>

                  <div className='flex-1 flex flex-col justify-end'>
                    <div className='space-y-4'>
                      <div className='flex items-center gap-4'>
                        <div className='flex items-center'>
                          <div className='w-20 h-0.5 bg-green-600' />
                          <div className='w-3 h-3 rotate-45 bg-green-600' />
                        </div>
                        <p className='text-base font-medium'>
                          {service.featureTitle}
                        </p>
                      </div>

                      <ul className='list-disc list-inside space-y-2 pl-24'>
                        {service.features.map((feature, fIndex) => (
                          <li
                            key={fIndex}
                            className='text-base text-muted-foreground'
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
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
