import { Award, Users, Globe, Shield } from 'lucide-react';
import TAJMark from './TAJMark';
import { useInView } from './useInView';

export default function About() {
  const [ref, isInView] = useInView(0.15);

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a] diamond-pattern" />
      
      {/* Gold accent line on left */}
      <div className="absolute left-0 top-20 bottom-20 w-[2px] bg-gradient-to-b from-transparent via-[#c9a84c]/30 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-[#c9a84c] text-sm tracking-[6px] uppercase font-light">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mt-4 mb-6">
            Your Trusted <span className="gold-text">Travel Partner</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className={`transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl gold-border-glow">
                <img
                  src="https://images.pexels.com/photos/32550610/pexels-photo-32550610.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
                  alt="Pondicherry Promenade"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-[#c9a84c] text-sm tracking-wider">Based in</span>
                  <div className="text-xl font-bold font-['Playfair_Display']">Pondicherry, India</div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 md:-right-6 bg-[#c9a84c] text-[#0a0a0a] rounded-2xl p-5 shadow-2xl">
                <div className="text-3xl font-bold font-['Playfair_Display']">15+</div>
                <div className="text-xs font-semibold tracking-wider uppercase">Years</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`transition-all duration-700 delay-400 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-2xl font-bold font-['Playfair_Display'] mb-6">
              <TAJMark /> International Tours & Travels
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Founded and led by <span className="text-[#c9a84c] font-medium">U Thajudeen</span>, 
              TAJ International Tours & Travels has been serving travelers from Sulthanpet and 
              Pondicherry with exceptional travel services for over 15 years. We are your one-stop 
              solution for all travel needs — from flight bookings and visa processing to Umrah 
              packages and holiday tours.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our commitment to excellence and personalized service has made us the most trusted 
              travel agency in the region. We also provide specialized services for UAE business 
              setup and freehold property purchase support.
            </p>

            {/* Feature boxes */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, title: 'Premium Service', desc: 'Best-in-class quality' },
                { icon: Users, title: 'Expert Team', desc: 'Experienced professionals' },
                { icon: Globe, title: 'Global Reach', desc: '50+ destinations covered' },
                { icon: Shield, title: 'Trusted Agency', desc: 'Licensed & certified' },
              ].map((item, i) => (
                <div key={i} className="service-card rounded-xl p-4 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{item.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
