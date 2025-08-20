import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function NipponDifference() {
  const [isGivingBackModalOpen, setIsGivingBackModalOpen] = useState(false);
  const values = [
    {
      icon: "🎭",
      title: "Authenticity",
      description: "We honour Japanese culture, working with local artisans, chefs and historians to ensure every experience is genuine and respectful."
    },
    {
      icon: "🤫",
      title: "Discretion",
      description: "Our clients' privacy is paramount. Whether arranging a private tea ceremony or securing a chauffeured car, your comfort and confidentiality are assured."
    },
    {
      icon: "⭐",
      title: "Excellence",
      description: "Attention to detail defines us—from the cleanliness of our vehicles to the warmth of our greetings."
    },
    {
      icon: "💝",
      title: "Philanthropy",
      description: "True luxury carries responsibility. We donate a percentage of our profits to cancer treatment initiatives, ensuring every journey contributes to hope and healing."
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description: "We partner with eco‑friendly operators and offset our carbon footprint to ensure that Japan's beauty can be cherished for generations."
    }
  ];

  return (
    <section className="relative py-24 bg-nippon-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20" data-scroll-reveal>
          <div data-stagger-container>
            <h2 className="text-luxury-4xl md:text-luxury-5xl text-nippon-black font-serif font-medium mb-6" data-stagger>
              Our Values
            </h2>
            <div className="w-24 h-px bg-nippon-gold mx-auto mb-8" data-stagger></div>
            <p className="text-luxury-lg text-nippon-charcoal max-w-3xl mx-auto leading-relaxed font-sans" data-stagger>
              Five foundational principles guide every decision we make and every experience we create for our distinguished clients.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Hero Image */}
          <div className="relative" data-scroll-reveal>
            <div className="relative overflow-hidden rounded-lg shadow-luxury">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Master craftsman representing our commitment to authenticity and excellence"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Quote Card */}
            <div className="absolute -bottom-8 -right-8 bg-nippon-white/95 backdrop-blur-sm p-6 rounded-lg shadow-floating max-w-sm border border-nippon-gold/20">
              <p className="text-nippon-charcoal text-luxury-base font-serif italic leading-relaxed">
                "Values are not what we say, but what we consistently do."
              </p>
            </div>
          </div>

          {/* Content */}
          <div data-scroll-reveal>
            <div data-stagger-container className="space-y-8">
              <div data-stagger>
                <div className="relative">
                  <h3 className="text-luxury-2xl text-nippon-gold font-serif font-medium mb-4 relative">
                    Guiding Principles
                    {/* Elegant Japanese-inspired underline */}
                    <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-nippon-gold to-nippon-gold-refined"></div>
                    <div className="absolute -bottom-1 left-20 w-2 h-0.5 bg-nippon-gold/60"></div>
                    <div className="absolute -bottom-1 left-24 w-1 h-0.5 bg-nippon-gold/40"></div>
                  </h3>
                </div>
                <p className="text-nippon-charcoal text-luxury-base leading-relaxed font-sans">
                  Our values aren't abstract concepts—they're living principles that shape every interaction, every arrangement, and every moment of your journey with us.
                </p>
              </div>

              <div data-stagger>
                <div className="relative">
                  <h3 className="text-luxury-2xl text-nippon-gold font-serif font-medium mb-4 relative">
                    Cultural Responsibility
                    {/* Elegant Japanese-inspired underline */}
                    <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-nippon-gold to-nippon-gold-refined"></div>
                    <div className="absolute -bottom-1 left-20 w-2 h-0.5 bg-nippon-gold/60"></div>
                    <div className="absolute -bottom-1 left-24 w-1 h-0.5 bg-nippon-gold/40"></div>
                  </h3>
                </div>
                <p className="text-nippon-charcoal text-luxury-base leading-relaxed font-sans">
                  We understand that luxury travel carries responsibility. Our commitment to authenticity, sustainability, and cultural respect ensures that our clients experience Japan's true essence while preserving it for future generations.
                </p>
              </div>

              <div data-stagger>
                <div className="relative">
                  <h3 className="text-luxury-2xl text-nippon-gold font-serif font-medium mb-4 relative">
                    Unwavering Standards
                    {/* Elegant Japanese-inspired underline */}
                    <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-nippon-gold to-nippon-gold-refined"></div>
                    <div className="absolute -bottom-1 left-20 w-2 h-0.5 bg-nippon-gold/60"></div>
                    <div className="absolute -bottom-1 left-24 w-1 h-0.5 bg-nippon-gold/40"></div>
                  </h3>
                </div>
                <p className="text-nippon-charcoal text-luxury-base leading-relaxed font-sans">
                  Excellence and discretion aren't optional extras—they're the foundation upon which every service is built. These values ensure your complete confidence in our care.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-24">
          {values.map((value, index) => (
            <div key={index} className="text-center" data-scroll-reveal>
              <div className="luxury-card bg-nippon-beige/30 p-8 rounded-lg border border-nippon-gold/20 hover:border-nippon-gold/40 transition-all duration-500">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-luxury-lg text-nippon-black font-serif font-medium mb-4">
                  {value.title}
                </h4>
                <p className="text-nippon-charcoal text-luxury-sm leading-relaxed font-sans">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Giving Back - One Line with Learn More */}
        <div className="text-center pt-8 border-t border-nippon-gold/20" data-scroll-reveal>
          <div className="flex items-center justify-center space-x-4" data-stagger-container>
            <span className="text-nippon-gold text-lg" data-stagger>❤️</span>
            <p className="text-luxury-base text-nippon-charcoal font-sans" data-stagger>
              Every journey with us contributes to life-saving cancer treatment initiatives
            </p>
            <Dialog open={isGivingBackModalOpen} onOpenChange={setIsGivingBackModalOpen}>
              <DialogTrigger asChild>
                <button className="text-nippon-gold text-luxury-sm font-sans underline hover:text-nippon-gold-refined transition-colors duration-300" data-stagger>
                  Learn More
                </button>
              </DialogTrigger>
              
              {/* Giving Back Details Modal */}
              <DialogContent className="max-w-2xl bg-nippon-white border border-nippon-gold/20 p-0 overflow-hidden">
                <div className="p-8 md:p-12">
                  <DialogHeader className="text-center mb-8">
                    <div className="text-nippon-gold text-4xl mb-4">❤️</div>
                    <DialogTitle className="text-nippon-black text-luxury-3xl font-serif font-medium mb-4">
                      Giving Back
                    </DialogTitle>
                    <DialogDescription className="text-nippon-charcoal text-luxury-base font-sans leading-relaxed">
                      At Nippon Imperial, we believe true luxury carries a responsibility to give back.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <div className="luxury-card bg-nippon-beige/30 p-8 rounded-lg border border-nippon-gold/20">
                      <p className="text-nippon-charcoal text-luxury-lg font-serif italic leading-relaxed mb-6">
                        "True luxury is not just what you experience, but what you make possible for others."
                      </p>
                      
                      <p className="text-nippon-charcoal text-luxury-base font-sans leading-relaxed mb-4">
                        At Nippon Imperial, every experience you enjoy helps fund life-saving cancer treatment initiatives. Your journey with us is more than travel — it's a contribution toward hope for those in need.
                      </p>
                      
                      <p className="text-nippon-charcoal text-luxury-base font-sans leading-relaxed">
                        We donate a percentage of our profits to cancer treatment initiatives, ensuring that every journey we craft also contributes to hope, healing, and a better future. When you choose Nippon Imperial, you join us in creating something meaningful beyond the boundaries of travel.
                      </p>
                    </div>
                    
                    {/* Decorative Element */}
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-nippon-gold rounded-full"></div>
                      <div className="w-1 h-1 bg-nippon-gold/60 rounded-full"></div>
                      <div className="w-0.5 h-0.5 bg-nippon-gold/40 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}