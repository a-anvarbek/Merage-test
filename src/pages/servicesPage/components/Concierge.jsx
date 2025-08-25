import { Car, Crown, MapPin, Calendar, Sparkles, Users, Compass } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import consultationImage from '../assets/home.png';
import guideImage from '../assets/home.png';
import luxuryCarImage from '../assets/home.png';

export function Concierge() {
  const services = [
    {
      icon: MapPin,
      title: "Luxury Accommodations",
      subtitle: "Ryokan & Premium Hotels",
      description: "Exceptional stays in Japan's finest traditional ryokan and contemporary luxury hotels, each selected for their unparalleled service and cultural authenticity.",
      image: "https://images.unsplash.com/photo-1706058358041-19f10e95a89a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBKYXBhbmVzZSUyMHJ5b2thbiUyMGludGVyaW9yJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzU1MjQ4Mzk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      cta: "Book Your Stay",
      culturalNote: "Omotenashi hospitality awaits"
    },
    {
      icon: Crown,
      title: "Fine Dining Reservations", 
      subtitle: "Michelin Stars & Hidden Gems",
      description: "Exclusive access to Japan's most coveted restaurants, from intimate sushi counters to centuries-old kaiseki masters and innovative culinary artists.",
      image: "https://images.unsplash.com/photo-1678129456271-f37da2c63e56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBKYXBhbmVzZSUyMHNha2UlMjB0YXN0aW5nJTIwcHJpdmF0ZXxlbnwxfHx8fDE3NTUyNDg0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      cta: "Reserve Your Table",
      culturalNote: "Seasonal omakase experiences"
    },
    {
      icon: Car,
      title: "Private Transportation",
      subtitle: "Chauffeur & Luxury Vehicles",
      description: "Premium chauffeur services in luxury vehicles with English-speaking drivers, ensuring seamless travel between cities and destinations throughout Japan.",
      image: luxuryCarImage,
      cta: "Arrange Transport",
      culturalNote: "Tokyo to Kyoto in comfort"
    },
    {
      icon: Calendar,
      title: "Curated Day Experiences",
      subtitle: "Cultural Tours & Seasonal Activities",
      description: "Thoughtfully designed day tours and seasonal experiences, from cherry blossom ceremonies to private temple visits, timed to Japan's natural rhythms.",
      image: "https://images.unsplash.com/photo-1705990775020-ec23afbba2e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXBhbmVzZSUyMGdhcmRlbiUyMHplbiUyMHRlbXBsZSUyMGx1eHVyeXxlbnwxfHx8fDE3NTUyNDg0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      cta: "Plan Your Experience",
      culturalNote: "Seasonal beauty & traditions"
    },
    {
      icon: Sparkles,
      title: "Exclusive Experiences",
      subtitle: "Private Access & VIP Services",
      description: "Once-in-a-lifetime experiences including private Mount Fuji helicopter tours, exclusive tea ceremonies with grand masters, and VIP cultural encounters.",
      image: "https://images.unsplash.com/photo-1495554698253-681539e9ea84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb250JTIwRnVqaSUyMGx1eHVyeSUyMHZpZXclMjBoZWxpY29wdGVyJTIwcHJpdmF0ZXxlbnwxfHx8fDE3NTUyNDg0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      cta: "Create Your Moment",
      culturalNote: "Unforgettable encounters"
    },
    {
      icon: Users,
      title: "Private Tour Guides",
      subtitle: "Expert Cultural Specialists",
      description: "Licensed private guides fluent in your language and passionate about Japanese culture, providing insider access and deep cultural insights throughout your journey.",
      image: guideImage,
      cta: "Meet Your Guide",
      culturalNote: "Cultural fluency guaranteed"
    }
  ];

  const flagshipService = {
    icon: Compass,
    title: "Complete Journey Planning",
    subtitle: "Bespoke Travel Consultation",
    description: "Comprehensive travel planning service where our Japan specialists create your perfect itinerary through detailed consultation and cultural expertise.",
    expandedDescription: "Our certified Japan travel specialists work closely with you to design a completely personalized itinerary that matches your interests, pace, and travel style. From cultural immersion to luxury relaxation, we handle every detail while ensuring authentic Japanese experiences throughout your journey.",
    image: consultationImage,
    philosophy: "Like Japanese artisans who perfect their craft over generations, we approach your journey with the same dedication to excellence and attention to detail.",
    features: [
      "Private consultation with certified Japan travel specialists",
      "Completely customized multi-city travel itinerary", 
      "24/7 dedicated support throughout your entire trip",
      "Exclusive access to our network of premium partners",
      "Pre-travel cultural briefing and practical guidance",
      "Real-time itinerary adjustments based on your preferences"
    ],
    cta: "Start Planning Your Journey",
    stats: {
      journeys: "800+",
      support: "24/7",
      experience: "18+"
    }
  };

  const handleServiceDiscover = (serviceTitle) => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('concierge-services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Bu joyda sen xohlagancha UI kodlarni davom ettirishing mumkin */}
    </div>
  );
}
