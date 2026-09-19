import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { useInView } from './useInView';

export default function Contact() {
  const [ref, isInView] = useInView(0.1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = `Hello TAJ Travels!%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/918220286541?text=${msg}`, '_blank');
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
      <div className="absolute inset-0 diamond-pattern opacity-20" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-[#c9a84c] text-sm tracking-[6px] uppercase font-light">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mt-4 mb-6">
            Contact <span className="gold-text">Us</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-[#111]/80 rounded-3xl p-8 border border-[#c9a84c]/10 h-full">
              <h3 className="text-2xl font-bold font-['Playfair_Display'] mb-2">
                TAJ International
              </h3>
              <p className="text-[#c9a84c] text-sm tracking-wider mb-8">Tours & Travels</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">Our Locations</div>
                    <div className="text-sm text-gray-400">Sulthanpet & Pondicherry</div>
                    <div className="text-sm text-gray-400">Tamil Nadu, India</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">Phone</div>
                    <a href="tel:+918220286541" className="text-sm text-gray-400 hover:text-[#c9a84c] transition-colors">
                      +91 82202 86541
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">Email</div>
                    <a href="mailto:tajtravelspondy@gmail.com" className="text-sm text-gray-400 hover:text-[#c9a84c] transition-colors break-all">
                      tajtravelspondy@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">Working Hours</div>
                    <div className="text-sm text-gray-400">Mon - Sat: 9:00 AM - 8:00 PM</div>
                    <div className="text-sm text-gray-400">Sunday: By Appointment</div>
                  </div>
                </div>
              </div>

              {/* Proprietor badge */}
              <div className="mt-8 p-4 rounded-xl bg-[#c9a84c]/5 border border-[#c9a84c]/10">
                <div className="text-xs text-[#c9a84c]/60 tracking-wider uppercase mb-1">Proprietor</div>
                <div className="text-lg font-bold font-['Playfair_Display'] text-white">U Thajudeen</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-400 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-[#111]/80 rounded-3xl p-8 border border-[#c9a84c]/10">
              <h3 className="text-xl font-bold font-['Playfair_Display'] mb-6">Send Us a Message</h3>
              
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle size={60} className="text-[#c9a84c] mb-4" />
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-gray-400">We'll get back to you shortly via WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#0a0a0a] border border-[#c9a84c]/15 rounded-xl px-4 py-3 text-white text-sm focus:border-[#c9a84c]/50 focus:outline-none transition-colors placeholder-gray-600"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0a0a0a] border border-[#c9a84c]/15 rounded-xl px-4 py-3 text-white text-sm focus:border-[#c9a84c]/50 focus:outline-none transition-colors placeholder-gray-600"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0a0a0a] border border-[#c9a84c]/15 rounded-xl px-4 py-3 text-white text-sm focus:border-[#c9a84c]/50 focus:outline-none transition-colors placeholder-gray-600"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Service Required *</label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#0a0a0a] border border-[#c9a84c]/15 rounded-xl px-4 py-3 text-white text-sm focus:border-[#c9a84c]/50 focus:outline-none transition-colors appearance-none"
                      >
                        <option value="" className="text-gray-600">Select a service</option>
                        <option value="Flight Booking">Flight Booking</option>
                        <option value="Visa Services">Visa Services</option>
                        <option value="Umrah Packages">Umrah Packages</option>
                        <option value="Hotel Booking">Hotel Booking</option>
                        <option value="Train & Bus">Train & Bus</option>
                        <option value="Insurance">Insurance</option>
                        <option value="Passport">Passport</option>
                        <option value="Holiday Tours">Holiday Tours</option>
                        <option value="Certificate Attestation">Certificate Attestation</option>
                        <option value="UAE Business Setup">UAE Business Setup</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Your Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-[#c9a84c]/15 rounded-xl px-4 py-3 text-white text-sm focus:border-[#c9a84c]/50 focus:outline-none transition-colors resize-none placeholder-gray-600"
                      placeholder="Tell us about your travel plans..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold rounded-full text-sm w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Send via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map embed */}
        <div className={`mt-12 transition-all duration-700 delay-500 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="rounded-2xl overflow-hidden gold-border-glow h-64 md:h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62373.73847844!2d79.7868!3d11.9416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361ab8e49cfcf%3A0xcc6bd326d2f0b04e!2sPondicherry%2C%20Puducherry!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) brightness(0.6)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TAJ Travels Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
