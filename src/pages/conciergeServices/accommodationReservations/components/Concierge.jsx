import { Car, Crown, MapPin, Calendar, Sparkles, Users, Compass, ArrowRight, CheckCircle, Star, Award, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import consultationImage from 'figma:asset/e654dcd247d0b6bca931259a67b2c604ee0ad2aa.png';
import guideImage from 'figma:asset/ac87db3b62b60e6f679a297949b3130f64b8384b.png';
import luxuryCarImage from 'figma:asset/bbf3cb046228cd4944c5a70eaaf77e4c846fc311.png';
import dayEscapeImage from 'figma:asset/f7797fdb3ea663fe5713c9244846f0ccc7e9b267.png';

export function Concierge() {
  const services = [
    {
      icon: MapPin,
      title: "Accommodation Reservations",
      description: "Curated stays in Japan's finest hotels, ryokan and hidden retreats, aligned precisely with your rhythm and privacy.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      cta: "Reserve Your Sanctuary"
    },
    {
      icon: Crown,
      title: "Restaurant & Nightlife Bookings",
      description: "Access to hidden sushi counters, Michelin-level kaiseki and intimate bars curated to your palate and occasion.",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      cta: "Secure Your Table"
    },
    {
      icon: Car,
      title: "Luxury Transport",
      description: "Chauffeur-driven cars, minivans and luxury transfers arranged at any time, ensuring your journey is as comfortable as your destination.",
      image: luxuryCarImage,
      cta: "Arrange Your Ride"
    },
    {
      icon: Calendar,
      title: "Signature Day Escapes",
      description: "Immersive one-day itineraries designed around seasons and interests, with every logistic handled discreetly.",
      image: dayEscapeImage,
      cta: "Design Your Escape"
    },
    {
      icon: Sparkles,
      title: "Special Experiences",
      description: "Private yachts, helicopters and serene spa escapes arranged around your moments, reflecting the height of exclusivity and possibility.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      cta: "Create Magic"
    },
    {
      icon: Users,
      title: "Private Guide Arrangements",
      description: "Licensed private guides matched to your interests and language, unlocking Japan's stories through personal connections and insider access.",
      image: guideImage,
      cta: "Meet Your Guide"
    }
  ];

  const flagshipService = {
    icon: Compass,
    title: "Travel Consultation & Custom Journeys",
    subtitle: "The Ultimate Experience",
    description: "A bespoke itinerary shaped around your desires, interests and pace—one conversation, endless possibilities.",
    expandedDescription: "From intimate cultural immersions to once-in-a-lifetime adventures, our master consultants craft journeys that transcend ordinary travel. Each itinerary is meticulously designed to reflect your personal vision of Japan, whether you seek the tranquility of temple gardens, the thrill of exclusive access, or the perfect balance of both.",
    image: consultationImage,
    features: [
      "One-on-one consultation with Japan specialists",
      "Completely personalized multi-day itineraries", 
      "24/7 support throughout your entire journey",
      "Access to all our exclusive services and partnerships",
      "Pre-arrival briefing and cultural preparation",
      "Real-time adjustments based on your preferences"
    ],
    cta: "Begin Your Journey"
  };

  const handleServiceDiscover = (serviceTitle) => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('concierge-services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=90')`,
              filter: 'brightness(0.5) contrast(1.15) saturate(1.1)',
              animation: 'cinematicZoom 18s ease-in-out infinite alternate'
            }}
          ></div>
          {/* Other background layers omitted for brevity (same as above) */}
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-8" data-scroll-reveal>
          <div className="max-w-4xl">
            <h1 className="text-luxury-7xl lg:text-luxury-8xl text-nippon-warm-white font-serif mb-16 leading-none tracking-tight"
                style={{
                  textShadow: '0 4px 12px rgba(0, 0, 0, 0.9), 0 2px 6px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.5)'
                }}>
              Your life, seamlessly arranged.
            </h1>

            <div className="mt-20">
              <Button
                onClick={scrollToServices}
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
                style={{
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                }}
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-3">
                  <span className="tracking-wider font-medium">Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="concierge-services" className="relative bg-nippon-warm-white section-padding overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto content-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-nippon-white shadow-luxury hover:shadow-luxury-hover transition-all duration-500 overflow-hidden" data-scroll-reveal>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-nippon-black/30 group-hover:bg-nippon-black/20 transition-colors duration-500"></div>
                  <div className="absolute top-6 right-6">
                    <div className="w-14 h-14 bg-nippon-gold/95 backdrop-blur-sm flex items-center justify-center shadow-gold border border-nippon-gold-dark">
                      <service.icon className="w-7 h-7 text-nippon-black" />
                    </div>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <h3 className="text-luxury-2xl text-nippon-black font-serif leading-tight">{service.title}</h3>
                  <p className="text-luxury-base text-nippon-gray leading-relaxed font-sans">{service.description}</p>
                  <div className="pt-4">
                    <Button
                      onClick={() => handleServiceDiscover(service.title)}
                      className="group/btn relative overflow-hidden w-full bg-transparent border border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-sm px-6 py-3 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
                    >
                      <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></span>
                      <span className="relative flex items-center justify-center space-x-2">
                        <span className="tracking-wider font-medium">{service.cta}</span>
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
