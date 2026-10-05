import { useEffect, useState } from 'react';
import { ChevronDown, MapPin, Plane, Globe } from 'lucide-react';
import BrandLogo from './BrandLogo';

const heroImages = [
  'https://images.pexels.com/photos/30554306/pexels-photo-30554306.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600',
  'https://images.pexels.com/photos/35332382/pexels-photo-35332382.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600',
  'https://images.pexels.com/photos/23696838/pexels-photo-23696838.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600',
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background images with transition */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[2000ms]"
          style={{ opacity: currentImage === i ? 1 : 0 }}
        >
          <img
            src={img}
            alt="Travel destination"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]/95" />

      {/* Gold diagonal strips */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-1 h-[600px] bg-gradient-to-b from-transparent via-[#c9a84c]/20 to-transparent rotate-[25deg]" />
        <div className="absolute -top-20 left-[15%] w-[2px] h-[700px] bg-gradient-to-b from-transparent via-[#c9a84c]/15 to-transparent rotate-[25deg]" />
        <div className="absolute -top-20 right-[10%] w-1 h-[600px] bg-gradient-to-b from-transparent via-[#c9a84c]/20 to-transparent rotate-[25deg]" />
        <div className="absolute -top-20 right-[25%] w-[2px] h-[500px] bg-gradient-to-b from-transparent via-[#c9a84c]/10 to-transparent rotate-[25deg]" />
      </div>

      {/* Diamond pattern overlay */}
      <div className="absolute inset-0 diamond-pattern opacity-40" />

      {/* Floating elements */}
      <div className="absolute top-32 left-10 opacity-20 float-animation" style={{ animationDelay: '0s' }}>
        <Plane size={40} className="text-[#c9a84c]" />
      </div>
      <div className="absolute top-48 right-16 opacity-15 float-animation" style={{ animationDelay: '2s' }}>
        <Globe size={50} className="text-[#c9a84c]" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-10 float-animation" style={{ animationDelay: '4s' }}>
        <MapPin size={35} className="text-[#c9a84c]" />
      </div>

      {/* Main content */}
      <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* TAJ logo mark from the supplied brand reference */}
        <div className="mb-4">
          <BrandLogo
            variant="mark"
            className="w-32 sm:w-36 md:w-40 mx-auto"
            alt="TAJ Arabic calligraphy with T, A and J stacked beside it"
          />
        </div>

        {/* Subtitle */}
        <div className="mb-4">
          <span className="text-[#c9a84c]/80 text-sm md:text-base tracking-[8px] uppercase font-light">
            International
          </span>
        </div>

        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold font-['Playfair_Display'] mb-6 leading-tight">
          <span className="text-white">Tours &</span>{' '}
          <span className="gold-text">Travels</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-light leading-relaxed">
          Your gateway to extraordinary journeys. Premium travel services from 
          Sulthanpet & Pondicherry to destinations worldwide.
        </p>

        {/* Proprietor info */}
        <div className="mb-10">
          <p className="text-[#c9a84c]/60 text-sm tracking-widest uppercase">
            Prop. U Thajudeen
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#services" className="btn-gold rounded-full text-sm no-underline">
            Explore Services
          </a>
          <a href="#contact" className="btn-outline-gold rounded-full text-sm no-underline">
            Contact Us
          </a>
        </div>

        {/* Quick stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '15+', label: 'Years Experience' },
            { value: '10K+', label: 'Happy Clients' },
            { value: '50+', label: 'Destinations' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gold-text font-['Playfair_Display']">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs mt-1 tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#c9a84c]/60 hover:text-[#c9a84c] transition-colors no-underline">
        <span className="text-xs tracking-[3px] uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>

      {/* Bottom gradient blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
