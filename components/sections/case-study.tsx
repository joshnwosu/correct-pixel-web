import { caseStudies } from '@/data/case-study';
import { ArrowUpRight } from 'lucide-react';
import CustomButton from '../custom-button';

const CaseStudy = () => {
  return (
    <section className='py-12 md:py-24'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12 md:mb-16'>
          <div className='flex items-center gap-2 text-green-600'>
            <div className='w-1.5 h-1.5 rounded-full bg-green-600' />
            <p className='text-base md:text-lg font-medium'>Case Study</p>
          </div>

          <div>
            <p className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-relaxed'>
              See Our{' '}
              <span className='italic text-muted-foreground'>All latest</span>
              <br className='hidden md:block' /> Creative Work
            </p>

            <CustomButton text='View All' />
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className='space-y-6 md:space-y-8'>
          {/* Mobile: Stack all items */}
          <div className='block md:hidden space-y-6'>
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className='group cursor-pointer bg-gray-100 rounded-lg overflow-hidden duration-300 p-3'
              >
                <div className='relative h-64 overflow-hidden'>
                  <img
                    src={study.image}
                    alt={study.title}
                    className='w-full h-full rounded-t-md object-cover grayscale hover:grayscale-0 transition-all duration-300'
                  />
                </div>
                <div className='flex justify-between items-center mt-4 px-2'>
                  <div className='flex-1'>
                    <p className='text-sm text-muted-foreground font-medium'>
                      {study.category}
                    </p>
                    <h3 className='text-xl font-bold'>{study.title}</h3>
                  </div>

                  <button className='w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white'>
                    <ArrowUpRight className='w-5 h-5' />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet: 2 columns equal width */}
          <div className='hidden md:grid lg:hidden grid-cols-2 gap-6'>
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className='group cursor-pointer bg-gray-100 rounded-lg overflow-hidden duration-300 p-3'
              >
                <div className='relative h-72 overflow-hidden'>
                  <img
                    src={study.image}
                    alt={study.title}
                    className='w-full h-full rounded-t-md object-cover grayscale hover:grayscale-0 transition-all duration-300'
                  />
                </div>
                <div className='flex justify-between items-center mt-4 px-2'>
                  <div className='flex-1'>
                    <p className='text-sm text-muted-foreground font-medium'>
                      {study.category}
                    </p>
                    <h3 className='text-xl font-bold'>{study.title}</h3>
                  </div>

                  <button className='w-11 h-11 rounded-full bg-green-600 flex items-center justify-center text-white'>
                    <ArrowUpRight className='w-5 h-5' />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Alternating 2-1 and 1-2 pattern */}
          <div className='hidden lg:block space-y-8'>
            {Array.from(
              { length: Math.ceil(caseStudies.length / 2) },
              (_, i) => {
                const firstIndex = i * 2;
                const secondIndex = firstIndex + 1;
                const isEvenRow = i % 2 === 0;

                return (
                  <div key={i} className='grid grid-cols-3 gap-8'>
                    {isEvenRow ? (
                      // Pattern: 2 1 (larger on left)
                      <>
                        <div className='col-span-2'>
                          {caseStudies[firstIndex] && (
                            <div className='group cursor-pointer bg-gray-100 rounded-lg overflow-hidden duration-300 p-3 h-full'>
                              <div className='relative h-96 overflow-hidden'>
                                <img
                                  src={caseStudies[firstIndex].image}
                                  alt={caseStudies[firstIndex].title}
                                  className='w-full h-full rounded-t-md object-cover grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105'
                                />
                              </div>
                              <div className='flex justify-between items-center mt-4 px-2'>
                                <div>
                                  <p className='text-sm text-muted-foreground font-medium'>
                                    {caseStudies[firstIndex].category}
                                  </p>
                                  <h3 className='text-2xl font-bold'>
                                    {caseStudies[firstIndex].title}
                                  </h3>
                                </div>

                                <button className='w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white group-hover:bg-green-600 transition-colors'>
                                  <ArrowUpRight />
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className='col-span-1'>
                          {caseStudies[secondIndex] && (
                            <div className='group cursor-pointer bg-gray-100 rounded-lg overflow-hidden duration-300 p-3 h-full'>
                              <div className='relative h-96 overflow-hidden'>
                                <img
                                  src={caseStudies[secondIndex].image}
                                  alt={caseStudies[secondIndex].title}
                                  className='w-full h-full rounded-t-md object-cover grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105'
                                />
                              </div>
                              <div className='flex justify-between items-center mt-4 px-2'>
                                <div>
                                  <p className='text-sm text-muted-foreground font-medium'>
                                    {caseStudies[secondIndex].category}
                                  </p>
                                  <h3 className='text-2xl font-bold'>
                                    {caseStudies[secondIndex].title}
                                  </h3>
                                </div>

                                <button className='w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition-colors'>
                                  <ArrowUpRight />
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      // Pattern: 1 2 (larger on right)
                      <>
                        <div className='col-span-1'>
                          {caseStudies[firstIndex] && (
                            <div className='group cursor-pointer bg-gray-100 rounded-lg overflow-hidden duration-300 p-3 h-full'>
                              <div className='relative h-96 overflow-hidden'>
                                <img
                                  src={caseStudies[firstIndex].image}
                                  alt={caseStudies[firstIndex].title}
                                  className='w-full h-full rounded-t-md object-cover grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105'
                                />
                              </div>
                              <div className='flex justify-between items-center mt-4 px-2'>
                                <div>
                                  <p className='text-sm text-muted-foreground font-medium'>
                                    {caseStudies[firstIndex].category}
                                  </p>
                                  <h3 className='text-2xl font-bold'>
                                    {caseStudies[firstIndex].title}
                                  </h3>
                                </div>

                                <button className='w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition-colors'>
                                  <ArrowUpRight />
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className='col-span-2'>
                          {caseStudies[secondIndex] && (
                            <div className='group cursor-pointer bg-gray-100 rounded-lg overflow-hidden duration-300 p-3 h-full'>
                              <div className='relative h-96 overflow-hidden'>
                                <img
                                  src={caseStudies[secondIndex].image}
                                  alt={caseStudies[secondIndex].title}
                                  className='w-full h-full rounded-t-md object-cover grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105'
                                />
                              </div>
                              <div className='flex justify-between items-center mt-4 px-2'>
                                <div>
                                  <p className='text-sm text-muted-foreground font-medium'>
                                    {caseStudies[secondIndex].category}
                                  </p>
                                  <h3 className='text-2xl font-bold'>
                                    {caseStudies[secondIndex].title}
                                  </h3>
                                </div>

                                <button className='w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white group-hover:bg-green-600 transition-colors'>
                                  <ArrowUpRight />
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
