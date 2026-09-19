import { MapPin, ArrowRight } from 'lucide-react';
import { useInView } from './useInView';

const destinations = [
  {
    name: 'Dubai & UAE',
    country: 'United Arab Emirates',
    image: 'https://images.pexels.com/photos/30554306/pexels-photo-30554306.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400',
    tag: 'Popular',
  },
  {
    name: 'Mecca',
    country: 'Saudi Arabia',
    image: 'https://images.pexels.com/photos/38546883/pexels-photo-38546883.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400',
    tag: 'Umrah',
  },
  {
    name: 'Maldives',
    country: 'Indian Ocean',
    image: 'https://images.pexels.com/photos/14923418/pexels-photo-14923418.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400',
    tag: 'Honeymoon',
  },
  {
    name: 'Mauritius',
    country: 'East Africa',
    image: 'https://images.pexels.com/photos/3485360/pexels-photo-3485360.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400',
    tag: 'Holiday',
  },
  {
    name: 'Pondicherry',
    country: 'India',
    image: 'https://images.pexels.com/photos/32661287/pexels-photo-32661287.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400',
    tag: 'Domestic',
  },
  {
    name: 'Luxury Resort',
    country: 'Worldwide',
    image: 'https://images.pexels.com/photos/3011575/pexels-photo-3011575.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400',
    tag: 'Premium',
  },
];

export default function Destinations() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="destinations" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 diamond-pattern opacity-20" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-[#c9a84c] text-sm tracking-[6px] uppercase font-light">Explore</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mt-4 mb-6">
            Popular <span className="gold-text">Destinations</span>
          </h2>
          <div className="section-divider" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Discover the world's most beautiful destinations with TAJ International. 
            We curate premium travel experiences for every kind of traveler.
          </p>
        </div>

        {/* Destinations grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className={`destination-card group cursor-pointer transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden rounded-2xl">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
                
                {/* Tag */}
                <div className="absolute top-4 right-4 bg-[#c9a84c]/90 text-[#0a0a0a] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {dest.tag}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-[#c9a84c]/80 text-sm mb-1">
                    <MapPin size={14} />
                    <span>{dest.country}</span>
                  </div>
                  <h3 className="text-xl font-bold font-['Playfair_Display'] text-white">
                    {dest.name}
                  </h3>
                  
                  {/* Hover reveal */}
                  <div className="mt-3 flex items-center gap-2 text-[#c9a84c] text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span>Explore</span>
                    <ArrowRight size={14} />
                  </div>
                </div>

                {/* Gold border on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[#c9a84c]/0 group-hover:border-[#c9a84c]/40 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a href="#contact" className="btn-outline-gold rounded-full text-sm inline-flex items-center gap-2 no-underline">
            View All Destinations
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
