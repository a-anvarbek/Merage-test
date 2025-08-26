import { MapPin, Users, CheckCircle, Star, Award, Clock, ArrowRight, Compass, Calendar, Mountain, Heart, Camera } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import tokyoRainbowBridgeHero from 'figma:asset/9fcfb2c5e68356a22e81d907a680defc0313348c.png';
import tokyoTowerAerial from 'figma:asset/6907c13b1b87e286e8e9b7991380df3756161295.png';
import nikkoRedBridge from 'figma:asset/58dd20c0e49ae20333de7c7e3608b451af1b1975.png';
import kamakuraGreatBuddha from 'figma:asset/65362e46ad76230dbb004b1ec4a4962244494ba5.png';

export function SignatureDayEscapes() {
  const tours = [
    {
      id: 'tokyo-highlights',
      title: "Tokyo City Highlights",
      description: "Tradition, energy, and elegance across Japan's capital.",
      image: tokyoTowerAerial,
      icon: Users,
      culturalNote: "Urban elegance meets tradition"
    },
    {
      id: 'mt-fuji-escape',
      title: "Mt. Fuji Escape",
      description: "A day of iconic landscapes and serene culture.",
      image: "https://images.unsplash.com/photo-1683976886501-055f309e6eab?...",
      icon: Mountain,
      culturalNote: "Sacred mountain majesty"
    },
    {
      id: 'hakone-serenity',
      title: "Hakone Serenity Tour",
      description: "Onsen towns, mountain air, and lakeside beauty.",
      image: "https://images.unsplash.com/photo-1715134588078-4646f828b2ac?...",
      icon: Heart,
      culturalNote: "Tranquil hot springs await"
    },
    {
      id: 'nikko-cultural',
      title: "Nikko Cultural Discovery",
      description: "UNESCO shrines, forest trails, and sacred stillness.",
      image: nikkoRedBridge,
      icon: Star,
      culturalNote: "UNESCO world heritage"
    },
    {
      id: 'kamakura-heritage',
      title: "Kamakura Heritage Day Trip",
      description: "Zen temples, samurai history, and coastal charm.",
      image: kamakuraGreatBuddha,
      icon: Camera,
      culturalNote: "Ancient capital by the sea"
    },
    {
      id: 'custom-tour',
      title: "Create Your Own",
      description: "Design a personalized day journey with our concierge team.",
      image: "https://images.unsplash.com/photo-1720454206018-8d977e9e984a?...",
      icon: Compass,
      culturalNote: "Your journey, your way"
    }
  ];

  const benefits = [
    {
      title: "100% Private Vehicles Only",
      description: "No crowded buses. Travel in comfort with dedicated luxury transport."
    },
    {
      title: "Flexible Itineraries Adjusted to You",
      description: "Every tour adapts to your pace, interests, and preferences."
    },
    {
      title: "Optional Bilingual Guides",
      description: "Deep cultural insights from expert local guides when desired."
    },
    {
      title: "Expert Concierge Planning",
      description: "Pre-trip consultation ensures every detail aligns with your vision."
    }
  ];

  const handleTourInquiry = (tourId) => {
    document.getElementById('concierge-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTours = () => {
    document.getElementById('tour-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConciergeContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={tokyoRainbowBridgeHero}
            alt="Tokyo Rainbow Bridge at night"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: 'brightness(0.9) contrast(1.25) saturate(1.2)',
              animation: 'cinematicZoom 28s ease-in-out infinite alternate'
            }}
          />
        </div>
        <div className="relative z-20 max-w-6xl mx-auto px-8">
          <div className="max-w-4xl text-center">
            <h1 className="text-luxury-7xl lg:text-luxury-8xl text-nippon-warm-white font-serif mb-16">
              Private Day Tours
            </h1>
            <Button onClick={scrollToTours}>Explore Destinations</Button>
          </div>
        </div>
      </section>

      {/* Tour Grid */}
      <section id="tour-grid" className="relative bg-nippon-black section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div key={tour.id} onClick={() => handleTourInquiry(tour.id)}>
              <ImageWithFallback src={tour.image} alt={tour.title} />
              <h3>{tour.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="relative bg-nippon-warm-white section-padding">
        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Concierge CTA */}
      <section id="concierge-cta" className="relative bg-nippon-black section-padding text-center">
        <h2 className="text-luxury-4xl text-nippon-warm-white font-serif">Still Deciding?</h2>
        <Button onClick={handleConciergeContact}>Speak with Our Concierge</Button>
      </section>
    </div>
  );
}
