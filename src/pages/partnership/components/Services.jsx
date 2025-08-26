import { Car, MapPin, Plane, Calendar, CheckCircle, Star, Award, Clock, ArrowRight, Users, Compass } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import airportTransferImage from 'figma:asset/fbaefe2825955d470e77f68a4dd84d68d962599b.png';
import luxuryChauffeurHeroImage from 'figma:asset/ea905dca512369d220aa435547b190500ef27c06.png';
import privateChauffeurImage from 'figma:asset/eb71a45bb9f3d08ace63ec47b966c8b0f5dcbed1.png';

export function Services() {
  const coreServices = [
    {
      icon: Car,
      title: "Private Chauffeur Services",
      description: "Travel Japan in elegance with a professional driver and luxury vehicle — available by the hour or for full-day hire.",
      image: privateChauffeurImage,
      culturalNote: "Tokyo to Kyoto in elegance"
    },
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Seamless VIP pickups and drop-offs with meet & greet, flight tracking, and discreet service between airport and hotel.",
      image: airportTransferImage,
      culturalNote: "Arrival perfected"
    },
    {
      icon: MapPin,
      title: "Signature Day Escapes",
      description: "One-day private tours to Mt. Fuji, Hakone, Nikko, and more — guided, customizable, and beautifully paced.",
      image: "https://images.unsplash.com/photo-1713001206325-fa191927c2a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXBhbiUyMG11bHRpJTIwZGF5JTIwdG91ciUyMGl0aW5lcmFyeXxlbnwxfHx8fDE3NTUzMzU2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      culturalNote: "Cultural immersion awaits"
    },
    {
      icon: Calendar,
      title: "Signature Multi-Day Tours",
      description: "Curated multi-day journeys through Japan's iconic regions — including transport, accommodation, and cultural experiences.",
      image: "https://images.unsplash.com/photo-1551560231-c37681ebbd77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXBhbiUyMHByaXZhdGUlMjB0b3VyJTIwZ3VpZGUlMjBjdWx0dXJhbHxlbnwxfHx8fDE3NTUzMzU2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      culturalNote: "Japan, completely unveiled"
    }
  ];

  const trustIndicators = {
    journeys: "800+",
    support: "24/7",
    experience: "18+"
  };

  const handleServiceInquiry = (serviceTitle) => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('core-services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConciergeContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Hero Section with Luxury Chauffeur Background - "Crafted for Your Journey" */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={luxuryChauffeurHeroImage}
            alt="Luxury chauffeur service"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: 'brightness(0.7) contrast(1.1) saturate(1.0)',
              animation: 'cinematicZoom 25s ease-in-out infinite alternate'
            }}
          />
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: `url('${privateChauffeurImage}')`,
              filter: 'brightness(0.4) blur(1px)',
              animation: 'cinematicFloat 28s ease-in-out infinite alternate-reverse'
            }}
          ></div>
          <div 
            className="absolute inset-0 w-full h-full opacity-5"
            style={{
              background: 'radial-gradient(circle at 40% 30%, rgba(212, 175, 55, 0.15) 0%, transparent 60%)',
              animation: 'gradientMove 35s ease-in-out infinite'
            }}
          ></div>
        </div>

        <div className="absolute inset-0 bg-nippon-black/30 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/40 via-nippon-black/20 to-nippon-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-nippon-black/30 via-transparent to-nippon-black/20 z-10"></div>

        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-nippon-gold opacity-2 blur-3xl z-10"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-nippon-gold opacity-1 blur-3xl z-10"></div>

        <div className="relative z-20 max-w-6xl mx-auto px-8" data-scroll-reveal>
          <div className="max-w-4xl text-center">
            <h1 className="text-luxury-7xl lg:text-luxury-8xl text-nippon-warm-white font-serif mb-16 leading-none tracking-tight"
                style={{
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.9), 0 2px 10px rgba(0, 0, 0, 0.8), 0 0 40px rgba(212, 175, 55, 0.5)'
                }}>
              Crafted for Your Journey
            </h1>

            <div className="h-px w-48 mb-16 bg-gradient-to-r from-transparent via-nippon-gold to-transparent shadow-gold mx-auto"></div>

            <div className="text-left space-y-12 max-w-3xl mx-auto">
              <p className="text-luxury-2xl text-nippon-warm-white font-serif italic leading-relaxed text-center"
                 style={{
                   textShadow: '0 4px 16px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.8)'
                 }}>
                Seamless transport. Curated exploration. Discreet lifestyle assistance — tailored entirely to you.
              </p>
            </div>

            <div className="mt-20">
              <Button
                onClick={scrollToServices}
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
                style={{
                  backdropFilter: 'blur(15px)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
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

      {/* ... qolgani ham xuddi shu tartibda davom etadi */}
    </div>
  );
}
