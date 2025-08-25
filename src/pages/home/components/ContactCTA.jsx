import { Button } from './ui/button';
import { Phone, Mail, ArrowRight, Crown, Calendar, Shield, MessageSquare, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function ContactCTA() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-nippon-black section-padding overflow-hidden">
      {/* Cinematic background with subtle texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 matte-texture opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-nippon-black via-nippon-black-light to-nippon-black"></div>
        
        {/* Floating gold accents */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-nippon-gold opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-nippon-gold opacity-40 animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-1.5 h-1.5 bg-nippon-gold opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto content-padding text-center">
        {/* Exclusive invitation badge */}
        <div className="mb-12" data-scroll-reveal>
          <div className="inline-flex items-center space-x-4 bg-nippon-gold/10 border border-nippon-gold/30 px-8 py-4 backdrop-blur-sm">
            <div className="w-3 h-3 border border-nippon-gold rotate-45"></div>
            <span className="text-nippon-gold font-sans text-luxury-sm tracking-widest uppercase">
              Exclusive Consultation Invitation
            </span>
            <div className="w-3 h-3 border border-nippon-gold rotate-45"></div>
          </div>
        </div>

        {/* Enhanced main content */}
        <div className="space-y-8 mb-16" data-scroll-reveal>
          {/* Japanese accent */}
          <div className="text-nippon-gold/50 font-serif text-luxury-2xl mb-6">始まり</div>
          
          <h2 className="text-nippon-warm-white font-serif text-luxury-6xl lg:text-luxury-7xl leading-tight text-with-elegant-shadow">
            Your Journey
            <br />
            <span className="text-nippon-gold">Begins Here</span>
          </h2>
          
          {/* Ornamental divider */}
          <div className="flex items-center justify-center space-x-12 my-12">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-nippon-gold to-transparent"></div>
            <Crown className="w-8 h-8 text-nippon-gold" />
            <div className="h-px w-32 bg-gradient-to-l from-transparent via-nippon-gold to-transparent"></div>
          </div>
          
          <p className="text-nippon-warm-white/80 font-serif text-luxury-2xl lg:text-luxury-3xl max-w-4xl mx-auto leading-relaxed italic">
            Experience Japan through eyes that understand both its ancient soul and contemporary elegance.
          </p>
          
          <div className="max-w-3xl mx-auto space-y-6 pt-8">
            <p className="text-nippon-warm-white/70 font-sans text-luxury-lg leading-relaxed">
              We invite a select few each year to discover Japan's most extraordinary experiences. Our bespoke approach ensures every detail reflects your preferences while honoring the timeless principles of Japanese hospitality.
            </p>
            
            <p className="text-nippon-warm-white/60 font-sans text-luxury-base leading-relaxed">
              From private temple ceremonies to exclusive cultural encounters, your journey will be unlike any other—crafted with the precision and care that has earned the trust of executives, diplomats, and cultural connoisseurs worldwide.
            </p>
          </div>
        </div>

        {/* Enhanced call-to-action */}
        <div className="space-y-8" data-scroll-reveal>
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Primary CTA */}
            <Button
              onClick={scrollToContact}
              className="group relative overflow-hidden bg-nippon-gold text-nippon-obsidian font-sans text-luxury-lg px-16 py-6 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-3 hover:bg-nippon-gold-light"
            >
              <span className="relative flex items-center space-x-4 text-nippon-obsidian">
                <Crown className="w-6 h-6 text-nippon-obsidian" />
                <span className="tracking-wider font-medium text-nippon-obsidian">Begin Your Private Consultation</span>
                <ArrowRight className="w-5 h-5 text-nippon-obsidian transform group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            
            {/* Secondary CTA */}
            <Button
              onClick={scrollToContact}
              className="group relative overflow-hidden bg-transparent border-2 border-nippon-warm-white/40 text-nippon-warm-white hover:text-nippon-obsidian font-sans text-luxury-lg px-16 py-6 transition-all duration-500 hover:bg-nippon-warm-white hover:border-nippon-warm-white transform hover:-translate-y-2"
            >
              <span className="relative flex items-center space-x-4 text-nippon-warm-white group-hover:text-nippon-obsidian">
                <Calendar className="w-5 h-5 text-nippon-warm-white group-hover:text-nippon-obsidian" />
                <span className="tracking-wider font-medium text-nippon-warm-white group-hover:text-nippon-obsidian">Schedule Discovery Call</span>
              </span>
            </Button>
          </div>
          
          {/* Luxury guarantee */}
          <div className="pt-12 border-t border-nippon-gold/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-nippon-gold" />
              <span className="text-nippon-gold font-sans text-luxury-base tracking-wider uppercase">
                Luxury Guarantee
              </span>
            </div>
            <p className="text-nippon-warm-white/60 font-sans text-luxury-sm italic">
              Every experience is crafted to exceed expectations. Your complete satisfaction is our commitment to excellence.
            </p>
          </div>
        </div>

        {/* Exclusive contact indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-nippon-gold/20" data-scroll-reveal>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 border border-nippon-gold mx-auto flex items-center justify-center">
              <Phone className="w-6 h-6 text-nippon-gold" />
            </div>
            <div className="text-nippon-warm-white font-serif text-luxury-base">Private Line</div>
            <div className="text-nippon-warm-white/60 font-sans text-luxury-sm">Available 24/7 for our clients</div>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 border border-nippon-gold mx-auto flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-nippon-gold" />
            </div>
            <div className="text-nippon-warm-white font-serif text-luxury-base">Secure Consultation</div>
            <div className="text-nippon-warm-white/60 font-sans text-luxury-sm">Confidential planning process</div>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 border border-nippon-gold mx-auto flex items-center justify-center">
              <Globe className="w-6 h-6 text-nippon-gold" />
            </div>
            <div className="text-nippon-warm-white font-serif text-luxury-base">Global Access</div>
            <div className="text-nippon-warm-white/60 font-sans text-luxury-sm">Worldwide concierge support</div>
          </div>
        </div>
      </div>
    </section>
  );
}