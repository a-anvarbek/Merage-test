import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Navigation Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-nippon-black/95 backdrop-blur-md border-b border-nippon-gold/20 shadow-luxury' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group"
            >
              <div className="flex flex-col">
                <span className="text-nippon-warm-white font-serif text-luxury-2xl font-medium tracking-wide group-hover:text-nippon-gold transition-colors duration-300">
                  Nippon Imperial
                </span>
                <div className="h-px bg-nippon-gold w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              <button 
                onClick={() => navigate("/services")}
                className="text-nippon-warm-white hover:text-nippon-gold font-sans text-luxury-base font-medium tracking-wide transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('essence')}
                className="text-nippon-warm-white hover:text-nippon-gold font-sans text-luxury-base font-medium tracking-wide transition-colors duration-300"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('difference')}
                className="text-nippon-warm-white hover:text-nippon-gold font-sans text-luxury-base font-medium tracking-wide transition-colors duration-300"
              >
                Excellence
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-nippon-warm-white hover:text-nippon-gold font-sans text-luxury-base font-medium tracking-wide transition-colors duration-300"
              >
                Process
              </button>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <a 
                href="tel:+81-3-XXXX-XXXX" 
                className="flex items-center space-x-2 text-nippon-warm-white hover:text-nippon-gold transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="font-sans text-luxury-sm font-medium">+81 3 XXXX XXXX</span>
              </a>
              <Button
                onClick={() => scrollToSection('contact-form')}
                className="luxury-button-gold bg-transparent border-2 border-nippon-gold text-nippon-gold hover:bg-nippon-gold hover:text-nippon-black px-8 py-3 font-sans text-luxury-sm font-medium tracking-wide"
              >
                Begin Journey
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-nippon-warm-white hover:text-nippon-gold transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-nippon-black/98 backdrop-blur-md border-b border-nippon-gold/20">
            <div className="px-8 py-8 space-y-6">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-nippon-warm-white hover:text-nippon-gold font-sans text-luxury-lg font-medium tracking-wide transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('essence')}
                className="block w-full text-left text-nippon-warm-white hover:text-nippon-gold font-sans text-luxury-lg font-medium tracking-wide transition-colors duration-300"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('difference')}
                className="block w-full text-left text-nippon-warm-white hover:text-nippon-gold font-sans text-luxury-lg font-medium tracking-wide transition-colors duration-300"
              >
                Excellence
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left text-nippon-warm-white hover:text-nippon-gold font-sans text-luxury-lg font-medium tracking-wide transition-colors duration-300"
              >
                Process
              </button>
              
              <div className="pt-6 border-t border-nippon-gold/20">
                <a 
                  href="tel:+81-3-XXXX-XXXX" 
                  className="flex items-center space-x-3 mb-6 text-nippon-warm-white hover:text-nippon-gold transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-sans text-luxury-base font-medium">+81 3 XXXX XXXX</span>
                </a>
                <Button
                  onClick={() => scrollToSection('contact-form')}
                  className="w-full luxury-button-gold bg-transparent border-2 border-nippon-gold text-nippon-gold hover:bg-nippon-gold hover:text-nippon-black py-4 font-sans text-luxury-base font-medium tracking-wide"
                >
                  Begin Your Journey
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}