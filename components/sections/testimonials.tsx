import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { testimonials } from '@/data/testimonial';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handlePrevious = () => {
    if (isTransitioning) return;

    setIsAutoPlaying(false);
    setIsTransitioning(true);

    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

    setTimeout(() => {
      setIsTransitioning(false);
      setIsAutoPlaying(true);
    }, 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handleNavigateNext = () => {
    if (isTransitioning) return;

    setIsAutoPlaying(false);
    handleNext();

    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Calculate progress bar width
  const progressWidth = ((currentIndex + 1) / testimonials.length) * 100;

  // Extended array for infinite scroll effect (desktop)
  const getExtendedTestimonials = () => {
    const extended = [];
    // Add enough cards to ensure smooth scrolling
    for (let i = 0; i < testimonials.length + 2; i++) {
      extended.push(testimonials[i % testimonials.length]);
    }
    return extended;
  };

  const extendedTestimonials = getExtendedTestimonials();

  return (
    <section className='py-12'>
      {!isMobile && (
        <Marquee speed={20} className='pb-2'>
          <div className='text-7xl md:text-9xl font-black whitespace-nowrap py-10'>
            <span>Web Development</span>
            <span className='mx-20 whitespace-nowrap [-webkit-text-stroke:2px_black] [-webkit-text-fill-color:transparent]'>
              ✱
            </span>
            <span className='text-muted-foreground/20'>UI/UX Design</span>
            <span className='mx-20'>✱</span>
            <span>App Development</span>
            <span className='mx-20 whitespace-nowrap [-webkit-text-stroke:2px_black] [-webkit-text-fill-color:transparent]'>
              ✱
            </span>
            <span className='text-muted-foreground/20'>Branding</span>
            <span className='mx-20'>✱</span>
          </div>
        </Marquee>
      )}

      <div className='max-w-7xl mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <p className='text-3xl md:text-5xl font-bold'>
            Trusted by Brands Backed <br />
            by Stories
          </p>
        </div>

        {/* Slider container */}
        <div className='relative overflow-hidden mb-8'>
          {/* Desktop view - 3 cards */}
          <div
            className='hidden md:flex transition-transform duration-500 ease-in-out'
            style={{
              transform: `translateX(-${(currentIndex * 100) / 3}%)`,
            }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div
                key={`desktop-${testimonial.id}-${index}`}
                className='w-1/3 flex-shrink-0 px-3'
              >
                <div className='bg-gray-100 rounded-lg p-8 h-full flex flex-col'>
                  {/* Quote icon */}
                  <div className='text-muted-foreground text-4xl mb-4 font-ultra'>
                    "
                  </div>

                  {/* Content */}
                  <p className='text-gray-600 mb-6 line-clamp-4 flex-1'>
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
                        <div className='w-full h-full bg-gray-200' />
                      )}
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        {testimonial.name}
                      </h4>
                      <p className='text-sm text-gray-500'>
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile view - single card */}
          <div
            className='flex md:hidden transition-transform duration-500 ease-in-out'
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={`mobile-${testimonial.id}`}
                className='w-full flex-shrink-0 px-3'
              >
                <div className='bg-gray-100 rounded-lg p-8'>
                  {/* Quote icon */}
                  <div className='text-muted-foreground text-4xl mb-4 font-ultra'>
                    "
                  </div>

                  {/* Content */}
                  <p className='text-gray-600 mb-6'>{testimonial.content}</p>

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
                        <div className='w-full h-full bg-gray-200' />
                      )}
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        {testimonial.name}
                      </h4>
                      <p className='text-sm text-gray-500'>
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider navigation and progress */}
        <div className='flex items-center gap-6'>
          {/* Slider navigation buttons */}
          <div className='flex items-center gap-4'>
            <button
              onClick={handlePrevious}
              className='w-12 h-12 flex justify-center items-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50'
              aria-label='Previous testimonial'
              disabled={isTransitioning}
            >
              <ArrowLeft className='w-5 h-5' />
            </button>
            <button
              onClick={handleNavigateNext}
              className='w-12 h-12 flex justify-center items-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50'
              aria-label='Next testimonial'
              disabled={isTransitioning}
            >
              <ArrowRight className='w-5 h-5' />
            </button>
          </div>

          {/* Slider progress bar */}
          <div className='flex-1 h-1 bg-purple-100 rounded-full overflow-hidden'>
            <div
              className='bg-green-600 h-full transition-all duration-500 ease-out'
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
