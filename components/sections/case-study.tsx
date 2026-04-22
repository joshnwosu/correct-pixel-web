import { caseStudies } from '@/data/case-study';
import CustomButton from '../custom-button';

const CaseStudy = () => {
  return (
    <section className='px-4 py-10 md:py-14' id='work'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-5 rounded-lg border-2 border-black bg-white p-5 shadow-[6px_6px_0_#111] md:p-6'>
          <div className='flex items-start justify-between gap-4'>
            <div>
              <h2 className='text-3xl font-black md:text-5xl'>Selected Work</h2>
              <p className='mt-2 text-lg font-semibold italic text-neutral-500'>
                &quot;Recent brand, product, and web systems&quot;
              </p>
            </div>
            <span className='rounded-md bg-black px-3 py-2 text-lg font-black text-white'>
              {caseStudies.length}
            </span>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
          {caseStudies.map((study, index) => (
            <article
              key={study.id}
              className='group overflow-hidden rounded-lg border-2 border-black bg-white shadow-[6px_6px_0_#111] transition-transform hover:-translate-y-1'
            >
              <div className='h-48 border-b-2 border-black bg-neutral-100'>
                <img
                  src={study.image}
                  alt={study.title}
                  className='h-full w-full object-cover grayscale transition-all group-hover:grayscale-0'
                />
              </div>
              <div className='p-5'>
                <div className='mb-3 flex items-center justify-between'>
                  <span className='font-mono text-sm font-black text-neutral-500'>
                    {index + 1}.
                  </span>
                  <span className='rounded bg-black px-2 py-1 text-xs font-black text-white'>
                    CASE
                  </span>
                </div>
                <p className='text-sm font-semibold italic text-neutral-500'>
                  &quot;{study.category}&quot;
                </p>
                <h3 className='mt-2 text-2xl font-black'>{study.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className='mt-5 flex justify-center'>
          <CustomButton text='Start Yours' href='#contact' />
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
