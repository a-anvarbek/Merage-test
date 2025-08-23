import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Car,
  Star,
  Award,
  Shield,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Footer({ onSectionChange }) {
  const handleNavigation = (section) => {
    if (onSectionChange) {
      onSectionChange(section);
    }
  };

  return (
    <footer className="relative bg-nippon-black text-nippon-warm-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-luxury-2xl text-nippon-gold font-serif mb-4 tracking-wider">
                Nippon Imperial
              </h3>
              <p className="text-luxury-base text-nippon-gray-light leading-relaxed">
                Curating extraordinary luxury travel experiences across Japan
                with imperial elegance and cultural authenticity.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-nippon-gold" />
                <span className="text-luxury-sm text-nippon-gray-light">
                  Licensed
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-nippon-gold" />
                <span className="text-luxury-sm text-nippon-gray-light">
                  5-Star
                </span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-6">
            <h4 className="text-luxury-lg text-nippon-warm-white font-serif">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                {
                  label: "Signature Day Escapes",
                  id: "day-escapes",
                  key: "services-day-escapes",
                },
                {
                  label: "Multi-Day Tours",
                  id: "multi-day-tours",
                  key: "services-multi-day",
                },
                {
                  label: "Tokyo Experiences",
                  id: "tokyo-highlights",
                  key: "services-tokyo",
                },
                {
                  label: "Mt. Fuji Tours",
                  id: "mt-fuji-escape",
                  key: "services-fuji",
                },
                {
                  label: "Cultural Immersion",
                  id: "nikko-cultural",
                  key: "services-cultural",
                },
                {
                  label: "Concierge Services",
                  id: "contact",
                  key: "services-concierge",
                },
              ].map((service) => (
                <li key={service.key}>
                  <button
                    onClick={() => handleNavigation(service.id)}
                    className="text-luxury-base text-nippon-gray-light hover:text-nippon-gold transition-colors duration-300 font-sans"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="text-luxury-lg text-nippon-warm-white font-serif">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Our Story", id: "our-story", key: "company-story" },
                { label: "Essence", id: "essence", key: "company-essence" },
                { label: "Contact Us", id: "contact", key: "company-contact" },
                {
                  label: "Travel Guidelines",
                  id: "contact",
                  key: "company-guidelines",
                },
                {
                  label: "Sustainability",
                  id: "essence",
                  key: "company-sustainability",
                },
                {
                  label: "Partnerships",
                  id: "contact",
                  key: "company-partnerships",
                },
              ].map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => handleNavigation(link.id)}
                    className="text-luxury-base text-nippon-gray-light hover:text-nippon-gold transition-colors duration-300 font-sans"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-luxury-lg text-nippon-warm-white font-serif">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-nippon-gold flex-shrink-0" />
                <span className="text-luxury-base text-nippon-gray-light">
                  Tokyo, Japan
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-nippon-gold flex-shrink-0" />
                <span className="text-luxury-base text-nippon-gray-light">
                  +81 3-1234-5678
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-nippon-gold flex-shrink-0" />
                <span className="text-luxury-base text-nippon-gray-light">
                  concierge@nipponimperial.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-nippon-gold flex-shrink-0" />
                <span className="text-luxury-base text-nippon-gray-light">
                  Available 24/7
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-nippon-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-luxury-sm text-nippon-gray-light font-sans">
              © 2024 Nippon Imperial. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-nippon-black-light hover:bg-nippon-gold transition-colors duration-300 flex items-center justify-center group"
                >
                  <social.icon className="w-4 h-4 text-nippon-gray-light group-hover:text-nippon-black" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-luxury-sm text-nippon-gray-light">
              <button className="hover:text-nippon-gold transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-nippon-gold transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
