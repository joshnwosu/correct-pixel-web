'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import CustomButton from '../custom-button';

const SayHello = () => {
  const [budget, setBudget] = useState([25000]);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle'
  );
  const [statusMessage, setStatusMessage] = useState('');

  const formatBudget = (value: number) => {
    if (value >= 50000) return '$50,000+';
    return `$${value.toLocaleString()}`;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          budget: formatBudget(budget[0]),
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Unable to send your message.');
      }

      setStatus('success');
      setStatusMessage(data.message);
      setFullName('');
      setEmail('');
      setPhone('');
      setBudget([25000]);
      setMessage('');
    } catch (error) {
      setStatus('error');
      setStatusMessage(
        error instanceof Error
          ? error.message
          : 'Unable to send your message right now.'
      );
    }
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
              text='Use Form'
              href='#contact-form'
              variant='light'
            />
          </div>
        </div>

        <form
          id='contact-form'
          className='rounded-lg border-2 border-black bg-white p-5 shadow-[6px_6px_0_#111] md:p-6'
          onSubmit={handleSubmit}
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
                autoComplete='name'
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                required
                className='h-12 rounded-md border-2 border-black'
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='email' className='font-black'>
                Email
              </Label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='jane@example.com'
                autoComplete='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className='h-12 rounded-md border-2 border-black'
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='phone' className='font-black'>
                Phone <span className='text-neutral-400'>(optional)</span>
              </Label>
              <Input
                id='phone'
                name='phone'
                type='tel'
                placeholder='(+1) 2345 678 901'
                autoComplete='tel'
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
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
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              className='min-h-[150px] resize-none rounded-md border-2 border-black'
            />
          </div>

          {statusMessage && (
            <p
              className={`mt-5 rounded-md border-2 border-black px-4 py-3 font-bold ${
                status === 'success'
                  ? 'bg-[#9ef37f] text-black'
                  : 'bg-[#ffe45c] text-black'
              }`}
              role='status'
            >
              {statusMessage}
            </p>
          )}

          <Button
            type='submit'
            disabled={status === 'sending'}
            className='mt-5 h-12 rounded-md border-2 border-black bg-[#ffe45c] px-6 font-black uppercase tracking-wide text-black shadow-[4px_4px_0_#111] hover:bg-[#ffe45c]'
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SayHello;
