'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import CustomButton from '../custom-button';

const SayHello = () => {
  const [budget, setBudget] = useState([25000]);

  const formatBudget = (value: number) => {
    if (value >= 50000) return '$50,000+';
    return `$${value.toLocaleString()}`;
  };

  return (
    <section className='px-4 py-10 md:py-14' id='contact'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-[0.85fr_1.15fr]'>
        <div className='rounded-lg border-2 border-black bg-white p-5 shadow-[6px_6px_0_#111] md:p-6'>
          <div className='mb-6 flex items-start justify-between gap-4 border-b-2 border-dashed border-black/20 pb-5'>
            <div>
              <h2 className='text-3xl font-black md:text-5xl'>Start a Project</h2>
              <p className='mt-2 text-lg font-semibold italic text-neutral-500'>
                &quot;Tell us what you need built, fixed, or launched&quot;
              </p>
            </div>
            <span className='rounded-md bg-black px-3 py-2 text-lg font-black text-white'>
              GO
            </span>
          </div>

          <p className='text-lg font-bold leading-relaxed text-neutral-600'>
            Share the project shape, timeline, and what success looks like. We
            will help turn it into a clear next step.
          </p>

          <div className='mt-8'>
            <CustomButton
              text='Email Us'
              href='mailto:hello@correctpixel.com'
              variant='light'
            />
          </div>
        </div>

        <form
          className='rounded-lg border-2 border-black bg-white p-5 shadow-[6px_6px_0_#111] md:p-6'
          action='mailto:hello@correctpixel.com'
          method='post'
          encType='text/plain'
        >
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='space-y-2'>
              <Label htmlFor='fullname' className='font-black'>
                Full Name
              </Label>
              <Input
                id='fullname'
                name='fullname'
                type='text'
                placeholder='Jane Smith'
                required
                className='h-12 rounded-md border-2 border-black'
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='phone' className='font-black'>
                Phone
              </Label>
              <Input
                id='phone'
                name='phone'
                type='tel'
                placeholder='(+1) 2345 678 901'
                className='h-12 rounded-md border-2 border-black'
              />
            </div>
          </div>

          <div className='mt-5 space-y-2'>
            <div className='flex justify-between'>
              <Label htmlFor='budget' className='font-black'>
                Project Budget
              </Label>
              <span className='rounded bg-black px-2 py-1 text-xs font-black text-white'>
                {formatBudget(budget[0])}
              </span>
            </div>
            <Slider
              id='budget'
              min={1000}
              max={50000}
              step={2000}
              value={budget}
              onValueChange={setBudget}
              className='py-4'
            />
            <div className='flex justify-between font-mono text-xs font-black text-neutral-500'>
              <span>$1k</span>
              <span>$25k</span>
              <span>$50k+</span>
            </div>
          </div>

          <div className='mt-5 space-y-2'>
            <Label htmlFor='message' className='font-black'>
              Message
            </Label>
            <Textarea
              id='message'
              name='message'
              placeholder='Tell us about your project'
              required
              className='min-h-[150px] resize-none rounded-md border-2 border-black'
            />
          </div>

          <Button
            type='submit'
            className='mt-5 h-12 rounded-md border-2 border-black bg-[#ffe45c] px-6 font-black uppercase tracking-wide text-black shadow-[4px_4px_0_#111] hover:bg-[#ffe45c]'
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SayHello;
