import { MapPin, Phone, Mail, ArrowUp, Plane } from 'lucide-react';
import BrandLogo from './BrandLogo';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Destinations', href: '#destinations' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Flight Booking',
  'Visa Services',
  'Umrah Packages',
  'Hotel Booking',
  'Passport Services',
  'Holiday Tours',
  'Certificate Attestation',
  'UAE Business Setup',
];

export default function Footer() {
  return (
    <footer className="relative bg-[#080808] pt-20 pb-8 overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" />

      {/* Diamond pattern */}
      <div className="absolute inset-0 diamond-pattern opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <BrandLogo
                variant="lockup"
                className="w-36 sm:w-40"
                alt="TAJ International Tours & Travels"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted travel partner for domestic and international journeys. 
              Premium service from Sulthanpet & Pondicherry.
            </p>
            <div className="text-sm text-gray-500">
              <span className="text-[#c9a84c]/60">Prop.</span>{' '}
              <span className="text-white">U Thajudeen</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-6 flex items-center gap-2">
              <div className="w-8 h-[1px] bg-[#c9a84c]" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#c9a84c] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[#c9a84c] group-hover:w-3 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-6 flex items-center gap-2">
              <div className="w-8 h-[1px] bg-[#c9a84c]" />
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 text-sm hover:text-[#c9a84c] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[#c9a84c] group-hover:w-3 transition-all" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-6 flex items-center gap-2">
              <div className="w-8 h-[1px] bg-[#c9a84c]" />
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Sulthanpet & Pondicherry, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#c9a84c] flex-shrink-0" />
                <a href="tel:+918220286541" className="text-gray-400 text-sm hover:text-[#c9a84c] transition-colors">
                  +91 82202 86541
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#c9a84c] flex-shrink-0" />
                <a href="mailto:tajtravelspondy@gmail.com" className="text-gray-400 text-sm hover:text-[#c9a84c] transition-colors break-all">
                  tajtravelspondy@gmail.com
                </a>
              </div>
            </div>

            {/* Call to action */}
            <a
              href="tel:+918220286541"
              className="mt-6 inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-xl px-4 py-3 text-[#c9a84c] text-sm hover:bg-[#c9a84c]/20 transition-colors no-underline"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} TAJ International Tours & Travels. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Plane size={14} className="text-[#c9a84c]" />
            <span>Your Journey, Our Passion</span>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full border border-[#c9a84c]/30 flex items-center justify-center hover:bg-[#c9a84c]/10 transition-colors text-[#c9a84c]"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
