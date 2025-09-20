import { teamMembers } from '@/data/team';

const Team = () => {
  return (
    <section className='py-12 md:py-24'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20'>
          {/* Header Section */}
          <div className='space-y-4 lg:flex-shrink-0'>
            <div className='flex items-center gap-2 text-green-600'>
              <div className='w-1.5 h-1.5 rounded-full bg-green-600' />
              <p className='text-base md:text-lg font-medium'>Leadership</p>
            </div>

            <p className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-relaxed'>
              Meet the <br className='hidden md:block' /> Leadership
            </p>
          </div>

          {/* Team Members Section */}
          <div className='flex-1'>
            <div className='space-y-12 md:space-y-16 lg:space-y-8'>
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8'
                >
                  {/* Text Content - Mobile/Tablet: Order 2, Desktop: Order 1 */}
                  <div className='space-y-4 md:space-y-6 flex-1 max-w-full md:max-w-md order-2 md:order-1 text-center md:text-left'>
                    <div className='space-y-1'>
                      <p className='text-xl md:text-2xl font-bold'>
                        {member.name}
                      </p>
                      <p className='text-sm text-green-600 font-medium'>
                        {member.role}
                      </p>
                    </div>

                    <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
                      {member.description}
                    </p>
                  </div>

                  {/* Image with Flower Shape - Mobile/Tablet: Order 1, Desktop: Order 2 */}
                  <div className='relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 flex-shrink-0 order-1 md:order-2'>
                    {/* Mobile: Circle shape */}
                    <div className='md:hidden w-full h-full rounded-full overflow-hidden'>
                      <img
                        src={member.image || 'https://via.placeholder.com/400'}
                        alt={member.name}
                        className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
                      />
                    </div>

                    {/* Tablet/Desktop: Flower shape */}
                    <svg
                      className='hidden md:block w-full h-full'
                      viewBox='0 0 200 200'
                    >
                      <defs>
                        <clipPath id={`flower-clip-${index}`}>
                          {/* Create 6 petals around a center */}
                          {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
                            <ellipse
                              key={i}
                              cx='100'
                              cy='50'
                              rx='30'
                              ry='50'
                              transform={`rotate(${rotation} 100 100)`}
                            />
                          ))}
                          {/* Center circle */}
                          <circle cx='100' cy='100' r='40' />
                        </clipPath>

                        {/* Grayscale filter */}
                        <filter id={`grayscale-${index}`}>
                          <feColorMatrix
                            type='matrix'
                            values='0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 1 0'
                          />
                        </filter>
                      </defs>

                      {/* Clipped image */}
                      <image
                        href={member.image || 'https://via.placeholder.com/400'}
                        x='0'
                        y='0'
                        width='200'
                        height='200'
                        preserveAspectRatio='xMidYMid slice'
                        clipPath={`url(#flower-clip-${index})`}
                        filter={`url(#grayscale-${index})`}
                        className='hover:filter-none transition-all duration-300'
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
