import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import BrandLogo from './BrandLogo';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Destinations', href: '#destinations' },
  { name: 'Why Us', href: '#whyus' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-[#0a0a0a] border-b border-[#c9a84c]/10 py-2 relative z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+918220286541" className="flex items-center gap-2 text-gray-400 hover:text-[#c9a84c] transition-colors">
              <Phone size={14} />
              <span>+91 82202 86541</span>
            </a>
            <a href="mailto:tajtravelspondy@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-[#c9a84c] transition-colors">
              <Mail size={14} />
              <span>tajtravelspondy@gmail.com</span>
            </a>
          </div>
          <div className="text-gray-400 text-xs tracking-wider">
            Sulthanpet & Pondicherry
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`fixed top-0 md:top-[40px] left-0 right-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'nav-blur bg-[#0a0a0a]/90 shadow-lg shadow-black/50 md:top-0' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" aria-label="TAJ International Tours & Travels home" className="flex items-center gap-3 group">
            <BrandLogo variant="mark" className="w-10 h-12 md:w-11 md:h-14" alt="" />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold tracking-[3px] text-gray-200 uppercase">International</div>
              <div className="text-[10px] tracking-[2px] text-gray-400 uppercase">Tours & Travels</div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-300 hover:text-[#c9a84c] transition-colors relative group tracking-wide"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9a84c] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-4">
            <a href="tel:+918220286541" className="hidden md:inline-block btn-gold text-sm !py-2.5 !px-6 rounded-full no-underline">
              Book Now
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#c9a84c] p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-[#0a0a0a]/95 nav-blur border-t border-[#c9a84c]/10 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-gray-300 hover:text-[#c9a84c] transition-colors border-b border-gray-800/50 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <a href="tel:+918220286541" className="block mt-4 btn-gold text-center text-sm !py-3 rounded-full no-underline">
              Book Now
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
