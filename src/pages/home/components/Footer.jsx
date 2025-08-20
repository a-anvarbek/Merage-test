import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-nippon-black text-nippon-warm-white">
      {/* Main footer content with generous spacing */}
      <div className="max-w-7xl mx-auto content-padding section-padding">
        <div className="grid lg:grid-cols-4 gap-16">
          
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-luxury-4xl text-nippon-gold font-serif mb-4 text-with-gold-glow">
                Nippon Imperial
              </h3>
              <div className="gold-divider h-px w-24 mb-6"></div>
              <p className="text-luxury-lg text-nippon-gray-light leading-relaxed font-sans max-w-md">
                Curating extraordinary luxury experiences across Japan with uncompromising attention to detail and authentic cultural immersion.
              </p>
            </div>

            {/* Contact information with clean layout */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 border border-nippon-gold flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-nippon-gold" />
                </div>
                <div className="text-nippon-gray-light font-sans">
                  <p className="text-luxury-base">Japan, Tokyo</p>
                  <p className="text-luxury-base">Ginza 1-1-1</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 border border-nippon-gold flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-nippon-gold" />
                </div>
                <p className="text-nippon-warm-white font-sans text-luxury-lg">+8 80 1234 7777</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 border border-nippon-gold flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-nippon-gold" />
                </div>
                <p className="text-nippon-warm-white font-sans text-luxury-lg">contact@nipponimperial.com</p>
              </div>
            </div>
          </div>

          {/* Services section */}
          <div className="space-y-8">
            <h4 className="text-luxury-2xl text-nippon-warm-white font-serif text-with-elegant-shadow">
              Services
            </h4>
            <ul className="space-y-4">
              {[
                'Premium Chauffeur',
                'VIP Cultural Tours',
                'Personal Concierge',
                'Private Experiences',
                'Luxury Accommodation',
                'Event Planning'
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-nippon-gray-light hover:text-nippon-gold transition-colors duration-300 font-sans text-luxury-base"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company section */}
          <div className="space-y-8">
            <h4 className="text-luxury-2xl text-nippon-warm-white font-serif text-with-elegant-shadow">
              Company
            </h4>
            <ul className="space-y-4">
              {[
                'About Us',
                'Our Story',
                'Privacy Policy',
                'Terms of Service',
                'Careers',
                'Press Kit'
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-nippon-gray-light hover:text-nippon-gold transition-colors duration-300 font-sans text-luxury-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social media section with clean spacing */}
        <div className="mt-20 pt-12 border-t border-nippon-gold/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            
            {/* Social icons with gold accents */}
            <div className="flex items-center space-x-6">
              <span className="text-nippon-gray-light font-sans text-luxury-base mr-4">Follow Us:</span>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Twitter, label: 'Twitter' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label={social.label}
                    className="w-12 h-12 border border-nippon-gold/30 flex items-center justify-center hover:bg-nippon-gold hover:border-nippon-gold group transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-nippon-gold group-hover:text-nippon-black transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter signup */}
            <div className="text-center md:text-right">
              <p className="text-nippon-gray-light font-sans text-luxury-sm mb-2">
                Subscribe to our exclusive updates
              </p>
              <div className="flex max-w-sm">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-nippon-black-light border border-nippon-gold/30 px-4 py-2 text-nippon-warm-white font-sans text-luxury-sm focus:border-nippon-gold focus:outline-none"
                />
                <button className="bg-nippon-gold text-nippon-black px-6 py-2 font-sans text-luxury-sm hover:bg-nippon-gold-dark transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with minimal design */}
      <div className="border-t border-nippon-gold/20 bg-nippon-black-light">
        <div className="max-w-7xl mx-auto content-padding py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-nippon-gray-light font-sans text-luxury-sm">
              © {currentYear} Nippon Imperial. All rights reserved.
            </p>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-nippon-gray-light hover:text-nippon-gold transition-colors duration-300 font-sans text-luxury-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-nippon-gray-light hover:text-nippon-gold transition-colors duration-300 font-sans text-luxury-sm">
                Terms of Service
              </a>
              <a href="#" className="text-nippon-gray-light hover:text-nippon-gold transition-colors duration-300 font-sans text-luxury-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}