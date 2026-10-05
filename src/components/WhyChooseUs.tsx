import { Clock, ThumbsUp, Headphones, BadgeCheck, CreditCard, Heart } from 'lucide-react';
import TAJMark from './TAJMark';
import { useInView } from './useInView';

const reasons = [
  {
    icon: Clock,
    title: 'Quick Processing',
    desc: 'Fast visa processing, instant flight bookings, and rapid service delivery with minimal wait times.',
    number: '01',
  },
  {
    icon: ThumbsUp,
    title: 'Best Prices',
    desc: 'Competitive pricing across all services. We ensure you get the best deals for flights, hotels, and tours.',
    number: '02',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Round-the-clock customer support to assist you before, during, and after your travel journey.',
    number: '03',
  },
  {
    icon: BadgeCheck,
    title: 'Licensed Agency',
    desc: 'Fully licensed and government-authorized travel agency with proven track record of excellence.',
    number: '04',
  },
  {
    icon: CreditCard,
    title: 'Easy Payments',
    desc: 'Flexible payment options including EMI, online transfers, and cash payments for your convenience.',
    number: '05',
  },
  {
    icon: Heart,
    title: 'Personal Touch',
    desc: 'Every trip is personalized to your preferences. We care about making your travel experience special.',
    number: '06',
  },
];

export default function WhyChooseUs() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="whyus" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
      <div className="absolute inset-0 diamond-pattern opacity-20" />

      {/* Decorative elements */}
      <div className="absolute left-0 top-0 w-80 h-80 bg-[#c9a84c]/5 rounded-full blur-[100px]" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#c9a84c]/5 rounded-full blur-[100px]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-[#c9a84c] text-sm tracking-[6px] uppercase font-light">Why Us</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mt-4 mb-6">
            Why Choose <span className="gold-text"><TAJMark /> Travels</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`relative group transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative p-8 rounded-2xl bg-[#111]/80 border border-[#c9a84c]/10 hover:border-[#c9a84c]/30 transition-all duration-500 group-hover:transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(201,168,76,0.1)]">
                {/* Large number */}
                <div className="absolute top-4 right-6 text-6xl font-bold text-[#c9a84c]/5 font-['Playfair_Display']">
                  {reason.number}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 flex items-center justify-center mb-6 group-hover:from-[#c9a84c]/30 group-hover:to-[#c9a84c]/10 transition-all">
                  <reason.icon size={24} className="text-[#c9a84c]" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#c9a84c] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
