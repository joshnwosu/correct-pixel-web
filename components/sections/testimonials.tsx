import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { testimonials } from '@/data/testimonial';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    // Resume auto-play after manual navigation
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleNavigateNext = () => {
    setIsAutoPlaying(false);
    handleNext();
    // Resume auto-play after manual navigation
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Calculate which testimonials to show (current, previous, next)
  const getVisibleTestimonials = () => {
    const prev =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    const next = (currentIndex + 1) % testimonials.length;

    return [testimonials[prev], testimonials[currentIndex], testimonials[next]];
  };

  const visibleTestimonials = getVisibleTestimonials();

  // Calculate progress bar width
  const progressWidth = ((currentIndex + 1) / testimonials.length) * 100;

  return (
    <section className='py-24'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <p className='text-5xl font-bold'>
            Trusted by Brands Backed <br />
            by Stories
          </p>
        </div>

        {/* Slider images/cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className={`bg-gray-100 rounded-lg p-8 transition-all duration-500 ${
                index === 1 ? 'scale-105 opacity-100' : 'scale-95 opacity-60'
              }`}
            >
              {/* Quote icon */}
              <div className='text-muted-foreground text-4xl mb-4 font-ultra'>
                "
              </div>

              {/* Content */}
              <p className='text-gray-600 mb-6 line-clamp-4'>
                {testimonial.content}
              </p>

              {/* Author info */}
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-gray-300 rounded-full overflow-hidden'>
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className='w-full h-full object-cover'
                    />
                  ) : (
                    <div className='w-full h-full bg-gradient-to-br from-purple-400 to-purple-600' />
                  )}
                </div>
                <div className='mt-4'>
                  <h4 className='font-semibold text-gray-900'>
                    {testimonial.name}
                  </h4>
                  <p className='text-sm text-gray-500'>
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider navigation and progress */}
        <div className='flex items-center gap-6'>
          {/* Slider navigation buttons */}
          <div className='flex items-center gap-4'>
            <button
              onClick={handlePrevious}
              className='w-15 h-15 flex justify-center items-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors'
              aria-label='Previous testimonial'
            >
              <ArrowLeft className='w-5 h-5' />
            </button>
            <button
              onClick={handleNavigateNext}
              className='w-15 h-15 flex justify-center items-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors'
              aria-label='Next testimonial'
            >
              <ArrowRight className='w-5 h-5' />
            </button>
          </div>

          {/* Slider progress bar */}
          <div className='flex-1 h-1 bg-purple-100 rounded-full overflow-hidden'>
            <div
              className='bg-purple-500 h-full transition-all duration-500 ease-out'
              style={{ width: `${progressWidth}%` }}
            />
          </div>

          {/* Slide counter */}
          <div className='text-sm text-gray-500'>
            <span className='font-semibold text-gray-900'>
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            {' / '}
            <span>{String(testimonials.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
