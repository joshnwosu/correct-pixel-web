import { teamMembers } from '@/data/team';

const Team = () => {
  return (
    <section className='py-24'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex gap-20'>
          <div className='space-y-4'>
            <div className='flex items-center gap-2 text-purple-600'>
              <div className='w-1.5 h-1.5 rounded-full bg-purple-600' />
              <p className='text-lg font-medium'>Leadership</p>
            </div>

            <p className='text-5xl font-bold leading-relaxed'>
              Meet the <br /> Leadership
            </p>
          </div>

          <div className='flex-1'>
            <div className='space-y-8'>
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className='flex justify-between items-center gap-8'
                >
                  <div className='space-y-6 flex-1 max-w-md'>
                    <div className='space-y-1'>
                      <p className='text-2xl font-bold'>{member.name}</p>
                      <p className='text-sm text-purple-600 font-medium'>
                        {member.role}
                      </p>
                    </div>

                    <p className='text-gray-600 leading-relaxed'>
                      {member.description}
                    </p>
                  </div>

                  <div className='relative w-64 h-64 flex-shrink-0'>
                    {/* SVG mask for better flower shape */}
                    <svg
                      className='absolute inset-0 w-full h-full grayscale'
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
                      </defs>

                      {/* Clipped image */}
                      <image
                        href={member.image || '/placeholder.jpg'}
                        x='0'
                        y='0'
                        width='200'
                        height='200'
                        preserveAspectRatio='xMidYMid slice'
                        clipPath={`url(#flower-clip-${index})`}
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
