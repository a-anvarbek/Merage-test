"use client";

import React from "react";
import { MapPin, CheckCircle, ArrowRight, Star, Car, Shield, Route, Crown, Zap } from "lucide-react";
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import images
import mercedesHero from 'figma:asset/83ecb49154d5d0287182c782e6c53348c51b4c9d.png';
import premiumFleetImage from 'figma:asset/d730ccd50738654d0059df5329457cf9ee960bf9.png';
import professionalChauffeurImage from 'figma:asset/9b3497750eb2468951e3bbe3e801e498b160f112.png';
import vipExperienceImage from 'figma:asset/4999a6474b686d14ed943c947892e44b77e1bb15.png';
import customRoutesImage from 'figma:asset/86a7534bf5cd9fbb25212cfe4de73e31b89feea0.png';

export function LuxuryTransport() {
  const highlights = [
    { icon: Car, title: "Premium Fleet", description: "Mercedes S-Class, V-Class, and Toyota Alphard executive vehicles", image: premiumFleetImage, premium: "Executive Grade" },
    { icon: Shield, title: "Professional Chauffeurs", description: "Multilingual, trained professionals with local expertise", image: professionalChauffeurImage, premium: "Security Cleared" },
    { icon: Route, title: "Custom Routes", description: "Flexible scheduling and personalized journey planning", image: customRoutesImage, premium: "Bespoke Service" },
    { icon: Crown, title: "VIP Experience", description: "Discreet, punctual transport for executives and dignitaries", image: vipExperienceImage, premium: "Diplomatic Grade" }
  ];

  const processSteps = [
    { step: "01", title: "Share Your Plans", description: "Tell us your pickup and drop-off locations, preferred vehicle type, and any special requirements.", icon: MapPin, timeframe: "Immediate response" },
    { step: "02", title: "We Arrange Your Journey", description: "Your concierge confirms availability, route optimization, and vehicle specifications.", icon: Star, timeframe: "Within 30 minutes" },
    { step: "03", title: "Enjoy the Ride", description: "Relax in supreme comfort while your professional chauffeur handles all logistics.", icon: CheckCircle, timeframe: "On arrival" }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Luxury transport inquiry submitted');
  };

  const scrollToForm = () => {
    document.getElementById('transport-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${mercedesHero})`, filter: 'brightness(0.8)' }}></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 max-w-6xl mx-auto px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/20 px-6 py-2 mb-12 rounded">
            <Zap className="w-4 h-4 text-yellow-500"/>
            <span className="text-yellow-500 font-serif">Trusted by Diplomatic Missions</span>
          </div>
          <h1 className="text-6xl lg:text-8xl text-white font-serif mb-16">Every Journey, First Class.</h1>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">Experience Japan's finest luxury transport — where every mile is a testament to excellence.</p>
          <Button onClick={scrollToForm} className="px-10 py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all">
            Arrange Your Transport <ArrowRight className="w-5 h-5 ml-2"/>
          </Button>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="relative bg-white py-24">
        <div className="max-w-6xl mx-auto px-8 text-center mb-20">
          <h2 className="text-4xl font-serif mb-8">More Than Getting From A to B</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Luxury transport is a seamless experience that blends comfort, privacy, and impeccable service.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-8">
          {highlights.map((highlight, i) => (
            <div key={i} className="group bg-gray-50 shadow-md hover:shadow-xl transition-all rounded overflow-hidden">
              <div className="relative aspect-[4/3]">
                <ImageWithFallback src={highlight.image} alt={highlight.title} className="w-full h-full object-cover"/>
                <div className="absolute top-4 right-4 bg-yellow-500 p-3 rounded-full"><highlight.icon className="w-6 h-6 text-black"/></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif mb-2">{highlight.title}</h3>
                <p className="text-gray-500 text-base mb-1">{highlight.description}</p>
                {highlight.premium && <p className="text-yellow-500 font-medium">{highlight.premium}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="relative bg-black py-24 text-white">
        <div className="max-w-6xl mx-auto px-8 text-center mb-20">
          <h2 className="text-4xl font-serif mb-4">How It Works</h2>
          <div className="h-px w-24 mx-auto bg-yellow-500"></div>
        </div>
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto px-8">
          {processSteps.map((step, i) => (
            <div key={i} className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-yellow-500 flex items-center justify-center rounded-full text-black font-serif text-2xl">{step.step}</div>
              <div className="mx-auto w-14 h-14 bg-white/10 flex items-center justify-center rounded-full"><step.icon className="w-7 h-7 text-yellow-500"/></div>
              <h3 className="text-2xl font-serif">{step.title}</h3>
              <p className="text-gray-400 max-w-sm mx-auto">{step.description}</p>
              {step.timeframe && <p className="text-yellow-500 font-medium">{step.timeframe}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="transport-form" className="relative bg-white py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Let Us Arrange Your Luxury Transport</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Share your transport requirements and we'll ensure every journey exceeds your expectations.</p>
          </div>
          <div className="bg-gray-50 shadow-md p-12 rounded">
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" type="text" required placeholder="Your full name"/>
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required placeholder="your@email.com"/>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567"/>
                </div>
                <div>
                  <Label htmlFor="passengers">Number of Passengers *</Label>
                  <Input id="passengers" type="number" min="1" required placeholder="2"/>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="pickup">Pickup Location *</Label>
                  <Input id="pickup" type="text" required placeholder="e.g., Haneda Airport"/>
                </div>
                <div>
                  <Label htmlFor="dropoff">Drop-off Location *</Label>
                  <Input id="dropoff" type="text" required placeholder="e.g., Shibuya district"/>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="service-date">Service Date *</Label>
                  <Input id="service-date" type="date" required/>
                </div>
                <div>
                  <Label htmlFor="service-time">Service Time *</Label>
                  <Input id="service-time" type="time" required/>
                </div>
              </div>
              <div>
                <Label htmlFor="vehicle-preference">Vehicle Preference</Label>
                <Input id="vehicle-preference" type="text" placeholder="Mercedes S-Class, Toyota Alphard"/>
              </div>
              <div>
                <Label htmlFor="special-requests">Special Requests & Requirements</Label>
                <Textarea id="special-requests" className="min-h-[120px]" placeholder="Child seats, accessibility, multiple stops, etc."/>
              </div>
              <Button type="submit" className="w-full px-8 py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all">
                Submit Transport Request <ArrowRight className="w-5 h-5 ml-2"/>
              </Button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
