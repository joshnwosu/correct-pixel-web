import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import CustomButton from '../custom-button';
import { Label } from '../ui/label';
import { useState } from 'react';

const SayHello = () => {
  const [budget, setBudget] = useState([25000]);

  // Format budget value for display
  const formatBudget = (value: number) => {
    if (value >= 100000) return '$100,000+';
    return `${value.toLocaleString()}`;
  };

  return (
    <section className='py-12 md:py-24 relative overflow-hidden'>
      {/* Background element - responsive height */}
      <div className='hidden lg:block bg-black w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[600px] absolute bottom-0 left-0 z-10' />

      {/* Main content container */}
      <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto px-4 z-20'>
        {/* Left column - Text content */}
        <div className='space-y-6 pt-4 md:pt-8 lg:pt-12 order-2 lg:order-1 lg:mt-40'>
          <div>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black lg:text-white mb-4'>
              Have a Project in Mind?
              <br /> - Let's Talk
            </h2>

            <p className='text-gray-600 lg:text-gray-300 text-base md:text-lg leading-relaxed max-w-lg'>
              Let's discuss your next project and bring your ideas to life.
              We're here to help you create something amazing.
            </p>
          </div>

          <CustomButton text='Get in Touch' />
        </div>

        {/* Right column - Contact Form Card */}
        <div className='order-1 lg:order-2'>
          <div className='h-auto bg-white rounded-lg md:rounded-xl lg:shadow-2xl border p-10 lg:p-10'>
            <div className='h-full flex flex-col'>
              <h3 className='text-xl font-bold text-gray-900 mb-6'>
                Schedule a Free Consultation
              </h3>

              {/* Contact Form Fields */}
              <div className='flex-1 flex flex-col space-y-4 mt-4'>
                <div className='space-y-2'>
                  <Label htmlFor='fullname' className='text-gray-700'>
                    Full Name
                  </Label>
                  <Input
                    name='fullname'
                    type='text'
                    placeholder='Jane Smith'
                    className='h-10 md:h-11'
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='phone' className='text-gray-700'>
                    Phone
                  </Label>
                  <Input
                    name='phone'
                    type='tel'
                    placeholder='(+1) 2345 678 901'
                    className='h-10 md:h-11'
                  />
                </div>

                <div className='space-y-2'>
                  <div className='flex justify-between items-center'>
                    <Label htmlFor='budget'>Project Budget</Label>
                    <span className='text-sm font-semibold text-green-600'>
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
                  <div className='flex justify-between text-xs text-gray-500'>
                    <span>$1k</span>
                    <span>$25k</span>
                    <span>$50k+</span>
                  </div>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='message' className='text-gray-700'>
                    Message
                  </Label>
                  <Textarea
                    name='message'
                    placeholder='Tell us about your project'
                    className='flex-1 min-h-[120px] resize-none'
                  />
                </div>

                <div>
                  <Button className='w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-2.5 md:py-3 h-auto rounded-full cursor-pointer'>
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SayHello;
