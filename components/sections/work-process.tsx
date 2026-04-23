import { workProcess } from '@/data/work-process';
import Image from 'next/image';
import CustomButton from '../custom-button';

const WorkProcess = () => {
  return (
    <section className='px-4 py-10 md:py-14' id='process'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-[0.85fr_1.15fr]'>
        <div className='rounded-lg border-2 border-black bg-white p-5 shadow-[6px_6px_0_#111] md:p-6'>
          <div className='mb-6 flex items-start justify-between gap-4 border-b-2 border-dashed border-black/20 pb-5'>
            <div>
              <h2 className='text-3xl font-black md:text-5xl'>Work Process</h2>
              <p className='mt-2 text-lg font-semibold italic text-neutral-500'>
                &quot;A practical path from first chat to shipped work&quot;
              </p>
            </div>
            <span className='rounded-md bg-black px-3 py-2 text-lg font-black text-white'>
              {workProcess.length}
            </span>
          </div>

          <p className='text-lg font-bold leading-relaxed text-neutral-600'>
            Strategy, design, and development move together, so decisions stay
            visible and the final product feels intentional.
          </p>

          <div className='mt-8'>
            <CustomButton text="Let's Talk" href='#contact' />
          </div>
        </div>

        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
          {workProcess.map((process, index) => (
            <article
              key={process.title}
              className='rounded-lg border-2 border-black bg-white p-5 shadow-[6px_6px_0_#111]'
            >
              <div className='mb-4 flex items-center justify-between'>
                <span className='font-mono text-sm font-black text-neutral-500'>
                  {index + 1}.
                </span>
                <div className='relative h-12 w-12 overflow-hidden rounded border-2 border-black bg-neutral-100'>
                  <Image
                    src={process.image}
                    alt=''
                    fill
                    sizes='48px'
                    className='h-full w-full object-cover grayscale'
                  />
                </div>
              </div>
              <h3 className='text-2xl font-black'>{process.title}</h3>
              <p className='mt-3 line-clamp-4 font-semibold italic leading-relaxed text-neutral-500'>
                &quot;{process.description}&quot;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
