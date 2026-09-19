import { 
  Plane, FileText, Moon, Hotel, Bus, Shield, 
  BookOpen, Wrench, Palmtree, FileCheck, Building2, MoreHorizontal 
} from 'lucide-react';
import { useInView } from './useInView';

const services = [
  {
    icon: Plane,
    title: 'Flight Booking',
    desc: 'Domestic & international flight reservations at competitive prices with all major airlines.',
    color: '#c9a84c',
  },
  {
    icon: FileText,
    title: 'Visa Services',
    desc: 'Complete visa processing for all countries including tourist, business, and work visas.',
    color: '#c9a84c',
  },
  {
    icon: Moon,
    title: 'Umrah Packages',
    desc: 'Specially curated Umrah packages with premium accommodations and guided tours.',
    color: '#c9a84c',
  },
  {
    icon: Hotel,
    title: 'Hotel Booking',
    desc: 'From budget to luxury, we find the perfect stay for your travel needs worldwide.',
    color: '#c9a84c',
  },
  {
    icon: Bus,
    title: 'Train & Bus',
    desc: 'Convenient train and bus ticket bookings across India and international routes.',
    color: '#c9a84c',
  },
  {
    icon: Shield,
    title: 'Insurance',
    desc: 'Comprehensive travel insurance to ensure your journey is safe and worry-free.',
    color: '#c9a84c',
  },
  {
    icon: BookOpen,
    title: 'Passport',
    desc: 'New passport applications, renewals, and all passport-related services handled smoothly.',
    color: '#c9a84c',
  },
  {
    icon: Palmtree,
    title: 'Holiday Tours',
    desc: 'Customized holiday packages for families, couples, and groups to dream destinations.',
    color: '#c9a84c',
  },
  {
    icon: FileCheck,
    title: 'Certificate Attestation',
    desc: 'Document attestation and apostille services for educational and personal certificates.',
    color: '#c9a84c',
  },
  {
    icon: Wrench,
    title: 'Utilities',
    desc: 'Foreign exchange, SIM cards, travel accessories, and essential utility services.',
    color: '#c9a84c',
  },
  {
    icon: Building2,
    title: 'UAE Business Setup',
    desc: 'Freehold property purchase & own business setup support in UAE for aspiring entrepreneurs.',
    color: '#c9a84c',
  },
  {
    icon: MoreHorizontal,
    title: 'More Services',
    desc: 'And many more travel-related services tailored to your specific needs. Just ask!',
    color: '#c9a84c',
  },
];

export default function Services() {
  const [ref, isInView] = useInView(0.05);

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
      <div className="absolute inset-0 diamond-pattern opacity-30" />

      {/* Gold line accents */}
      <div className="absolute right-0 top-20 bottom-20 w-[2px] bg-gradient-to-b from-transparent via-[#c9a84c]/20 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-[#c9a84c] text-sm tracking-[6px] uppercase font-light">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mt-4 mb-6">
            Our <span className="gold-text">Services</span>
          </h2>
          <div className="section-divider" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            From flight bookings to business setup in UAE, we offer comprehensive 
            travel solutions to make your journey seamless and memorable.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service-card rounded-2xl p-6 group transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center mb-5 group-hover:bg-[#c9a84c]/20 transition-colors">
                <service.icon size={24} className="text-[#c9a84c]" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-[#c9a84c] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* UAE special banner */}
        <div className={`mt-16 transition-all duration-700 delay-500 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative overflow-hidden rounded-2xl gold-border-glow">
            <div className="absolute inset-0">
              <img
                src="https://images.pexels.com/photos/19664340/pexels-photo-19664340.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=1200"
                alt="Dubai skyline"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/70" />
            </div>
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="text-[#c9a84c] text-sm tracking-[4px] uppercase mb-2">Special Service</div>
                <h3 className="text-2xl md:text-3xl font-bold font-['Playfair_Display'] mb-3">
                  UAE Business & Property Support
                </h3>
                <p className="text-gray-400 max-w-xl">
                  Free hold property purchase & own business setup support in UAE. 
                  Let us help you establish your presence in the Emirates with expert guidance.
                </p>
              </div>
              <a href="#contact" className="btn-gold rounded-full text-sm whitespace-nowrap no-underline">
                Get Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
