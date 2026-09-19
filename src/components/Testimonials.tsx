import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useInView } from './useInView';

const testimonials = [
  {
    name: 'Mohammed Farooq',
    role: 'Business Traveler',
    text: 'TAJ Travels made our Umrah journey absolutely seamless. From visa processing to hotel arrangements in Mecca, everything was perfect. Highly recommended for anyone planning their pilgrimage.',
    rating: 5,
    location: 'Pondicherry',
  },
  {
    name: 'Priya Sharma',
    role: 'Family Vacation',
    text: 'We booked our Maldives honeymoon through TAJ International. The hotel, flights, everything was top-notch. Thajudeen sir personally ensured every detail was taken care of.',
    rating: 5,
    location: 'Sulthanpet',
  },
  {
    name: 'Abdul Rahman',
    role: 'UAE Property Buyer',
    text: 'The UAE business setup support from TAJ Travels was incredible. They guided me through every step of the freehold property purchase process. Truly professional service.',
    rating: 5,
    location: 'Pondicherry',
  },
  {
    name: 'Lakshmi Narayanan',
    role: 'Tour Group',
    text: 'Organized a group tour to Dubai with TAJ Travels. The visa processing was super quick and the itinerary was well planned. Will definitely book again for our next trip.',
    rating: 5,
    location: 'Villupuram',
  },
  {
    name: 'Ayesha Begum',
    role: 'Passport Service',
    text: 'Got my passport renewed through TAJ International. The process was smooth and much faster than I expected. Their team is very helpful and keeps you updated at every step.',
    rating: 5,
    location: 'Sulthanpet',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [ref, isInView] = useInView(0.1);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 diamond-pattern opacity-20" />

      {/* Large quote background */}
      <div className="absolute top-20 left-10 opacity-[0.03]">
        <Quote size={300} className="text-[#c9a84c]" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-[#c9a84c] text-sm tracking-[6px] uppercase font-light">Reviews</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mt-4 mb-6">
            Client <span className="gold-text">Testimonials</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Testimonial card */}
        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative bg-[#111]/80 rounded-3xl p-8 md:p-12 border border-[#c9a84c]/10">
            {/* Quote icon */}
            <div className="absolute -top-5 left-10">
              <div className="w-10 h-10 rounded-full bg-[#c9a84c] flex items-center justify-center">
                <Quote size={18} className="text-[#0a0a0a]" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} size={18} className="text-[#c9a84c] fill-[#c9a84c]" />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic mb-8 font-light">
              "{testimonials[current].text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#a07b28] flex items-center justify-center text-[#0a0a0a] font-bold text-lg">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonials[current].name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonials[current].role} • {testimonials[current].location}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-[#c9a84c]/30 flex items-center justify-center hover:bg-[#c9a84c]/10 transition-colors text-[#c9a84c]"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-[#c9a84c]/30 flex items-center justify-center hover:bg-[#c9a84c]/10 transition-colors text-[#c9a84c]"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2 justify-center mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-[#c9a84c]' : 'w-3 bg-[#c9a84c]/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
