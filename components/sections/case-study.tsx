import { caseStudies } from '@/data/case-study';
import { ArrowBigUp, ArrowUpRight } from 'lucide-react';

const CaseStudy = () => {
  return (
    <section className='py-24'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-2 gap-4 items-start mb-16'>
          <div className='flex items-center gap-2 text-purple-600'>
            <div className='w-1.5 h-1.5 rounded-full bg-purple-600' />
            <p className='text-lg font-medium'>Case Study</p>
          </div>

          <p className='text-4xl font-bold leading-relaxed'>
            See Our{' '}
            <span className='italic text-muted-foreground'>All latest</span>
            <br /> Creative Work
          </p>
        </div>

        <div className='space-y-8'>
          {/* Group items in pairs for the alternating layout */}
          {Array.from({ length: Math.ceil(caseStudies.length / 2) }, (_, i) => {
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
                        <div className='group cursor-pointer bg-gray-100 rounded-lg overflow-hidden duration-300 p-3'>
                          <div className='relative h-90 overflow-hidden'>
                            <img
                              src={caseStudies[firstIndex].image}
                              alt={caseStudies[firstIndex].title}
                              className='w-full h-full rounded-t-md object-cover grayscale'
                            />
                          </div>
                          <div className='flex justify-between items-center mt-4 px-2'>
                            <div className=''>
                              <p className='text-sm text-muted-foreground font-medium'>
                                {caseStudies[firstIndex].category}
                              </p>
                              <h3 className='text-2xl font-bold'>
                                {caseStudies[firstIndex].title}
                              </h3>
                            </div>

                            <button className='w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white'>
                              <ArrowUpRight />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className='col-span-1'>
                      {caseStudies[secondIndex] && (
                        <div className='group cursor-pointer bg-gray-100 rounded-lg overflow-hidden duration-300 p-3'>
                          <div className='relative h-90 overflow-hidden'>
                            <img
                              src={caseStudies[secondIndex].image}
                              alt={caseStudies[secondIndex].title}
                              className='w-full h-full rounded-t-md object-cover grayscale'
                            />
                          </div>
                          <div className='flex justify-between items-center mt-4 px-2'>
                            <div className=''>
                              <p className='text-sm text-muted-foreground font-medium'>
                                {caseStudies[secondIndex].category}
                              </p>
                              <h3 className='text-2xl font-bold'>
                                {caseStudies[secondIndex].title}
                              </h3>
                            </div>

                            <button className='w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center'>
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
                        <div className='group cursor-pointer bg-gray-100 rounded-lg overflow-hidden duration-300 p-3'>
                          <div className='relative h-90 overflow-hidden'>
                            <img
                              src={caseStudies[firstIndex].image}
                              alt={caseStudies[firstIndex].title}
                              className='w-full h-full rounded-t-md object-cover grayscale'
                            />
                          </div>
                          <div className='flex justify-between items-center mt-4 px-2'>
                            <div className=''>
                              <p className='text-sm text-muted-foreground font-medium'>
                                {caseStudies[firstIndex].category}
                              </p>
                              <h3 className='text-2xl font-bold'>
                                {caseStudies[firstIndex].title}
                              </h3>
                            </div>

                            <button className='w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center'>
                              <ArrowUpRight />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className='col-span-2'>
                      {caseStudies[secondIndex] && (
                        <div className='group cursor-pointer bg-gray-100 rounded-lg overflow-hidden duration-300 p-3'>
                          <div className='relative h-90 overflow-hidden'>
                            <img
                              src={caseStudies[secondIndex].image}
                              alt={caseStudies[secondIndex].title}
                              className='w-full h-full rounded-t-md object-cover grayscale'
                            />
                          </div>
                          <div className='flex justify-between items-center mt-4 px-2'>
                            <div className=''>
                              <p className='text-sm text-muted-foreground font-medium'>
                                {caseStudies[secondIndex].category}
                              </p>
                              <h3 className='text-2xl font-bold'>
                                {caseStudies[secondIndex].title}
                              </h3>
                            </div>

                            <button className='w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white'>
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
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
