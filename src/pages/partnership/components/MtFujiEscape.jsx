import { useState } from "react";
import {
  MapPin,
  Users,
  CheckCircle,
  Star,
  Award,
  Clock,
  ArrowRight,
  Compass,
  Calendar,
  Mountain,
  Heart,
  Camera,
} from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import tokyoRainbowBridgeHero from "figma:asset/9fcfb2c5e68356a22e81d907a680defc0313348c.png";
import tokyoTower from "figma:asset/f2dbf52b7fa0f4b3617e9f6d275a86c218bc50df.png";
import fujiView from "figma:asset/b324a8af4cba8d0fbb47e299aeaa9ac50629a883.png";
import culturalExperience from "figma:asset/268493f68c98f1cbec40f4100a6b3164c8ebbd4e.png";
import hotSpring from "figma:asset/2e1c4c8e44254a3a4e460db2998edc6d67d3fa2d.png";
import tokyoSkytree from "figma:asset/3f8ab54048bdfc14d93b9c7bdb24b5486fbd37d0.png";

export function MtFujiEscape() {
  const [selectedImage, setSelectedImage] = useState(null);

  const itinerary = [
    {
      day: "Day 1",
      title: "Tokyo Arrival",
      description: "Check into luxury hotel, evening visit to Tokyo Tower.",
      icon: MapPin,
      image: tokyoTower,
    },
    {
      day: "Day 2",
      title: "Mt. Fuji Adventure",
      description:
        "Private helicopter tour and lakeside cultural experiences.",
      icon: Mountain,
      image: fujiView,
    },
    {
      day: "Day 3",
      title: "Cultural Immersion",
      description:
        "Traditional tea ceremony and private hot spring relaxation.",
      icon: Heart,
      image: hotSpring,
    },
    {
      day: "Day 4",
      title: "Tokyo Exploration",
      description:
        "VIP shopping experience and visit to Tokyo Skytree.",
      icon: Compass,
      image: tokyoSkytree,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={tokyoRainbowBridgeHero}
            alt="Tokyo Rainbow Bridge"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Mt. Fuji Escape
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Experience Japan&apos;s perfect balance of modern luxury and
            natural wonder
          </p>
          <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-100">
            Begin Your Journey
          </Button>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Your Exclusive Itinerary
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Four days of unparalleled experiences
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {itinerary.map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 text-purple-300 mb-2">
                      <item.icon className="h-5 w-5" />
                      <span className="text-sm">{item.day}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl mx-auto p-4">
            <ImageWithFallback
              src={selectedImage}
              alt="Selected Itinerary"
              className="rounded-xl max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
