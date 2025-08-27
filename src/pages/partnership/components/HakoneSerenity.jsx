import { useState, useEffect } from "react";
import {
  MapPin,
  Users,
  CheckCircle,
  Star,
  Award,
  Clock,
  ArrowRight,
  Map as MapIcon,
  Shield,
  Phone,
  Mail,
  Globe,
  ChevronDown,
  ChevronUp,
  CreditCard,
  X,
  Calendar,
  Car,
  Waves,
  Building2,
  Cable,
  Ship,
  Palette,
} from "lucide-react";

import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

// Local images referenced by original file
import sClassImage from "figma/f77a1955b16c68feb7cfeaa3e2cd043382d997c2.png";
import vClassImage from "figma/1abec3c99661c35bd51190c4ecccb5e06be8eaf9.png";
import alphardImage from "figma/10f096718853d26c3e0b44de94b9b54501853194.png";
import hiaceImage from "figma/d28d3e789c7a5e943af014e9dfb7bd39c9bd8ab6.png";
import hakoneCheckpointImage from "figma/00202f769d275aca382a311bfad2444cafe827e1.png";
import hakoneShrineImage from "figma/5d5e0816d45839801de54e65cd5feea1d256ff00.png";
import gotembaOutletsImage from "figma/69bb16328ec2d6bddc312340099441c76e66584e.png";
import hakoneRopewayImage from "figma/a6e678013da8bfe1da83ab4762459dac08277215.png";
import hakoneOnsenImage from "figma/1393f976217d8280df3e3d21270fb7cf2668309f.png";
import hakoneOpenAirImage from "figma/7352287d54eb3eb9bceb0f3c7b678f7d6cc8dd25.png";

export function HakoneSerenity() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [expandedItinerary, setExpandedItinerary] = useState(null);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tourDate: "",
    pickupAddress: "",
    guestCount: "",
    luggageCount: "",
    specialNotes: "",
  });

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const vehicles = [
    {
      id: "sclass",
      name: "Mercedes S-Class",
      image: sClassImage,
      guests: "1-3 guests",
      rate: "From ¥150,000",
      basePrice: 150000,
      description: "Ultimate luxury sedan with premium comfort",
      features: [
        "Premium leather seats",
        "Climate control",
        "Wi-Fi",
        "Bottled water",
        "Phone chargers",
      ],
    },
    {
      id: "vclass",
      name: "Mercedes V-Class",
      image: vClassImage,
      guests: "4-6 guests",
      rate: "From ¥105,000",
      basePrice: 105000,
      description: "Spacious luxury van for families and groups",
      features: [
        "Captain seats",
        "Extra legroom",
        "Privacy glass",
        "Entertainment system",
        "Refreshments",
      ],
    },
    {
      id: "alphard",
      name: "Toyota Alphard",
      image: alphardImage,
      guests: "4-7 guests",
      rate: "From ¥90,000",
      basePrice: 90000,
      description: "Japanese luxury MPV with captain seats",
      features: [
        "Massage seats",
        "Premium sound",
        "Mood lighting",
        "Sliding doors",
        "Japanese hospitality",
      ],
    },
    {
      id: "hiace",
      name: "Toyota HiAce Premium",
      image: hiaceImage,
      guests: "6-9 guests",
      rate: "From ¥105,000",
      basePrice: 105000,
      description: "Premium minivan for larger groups",
      features: [
        "Spacious interior",
        "Multiple seating configs",
        "Group communication",
        "Ample storage",
        "Comfort features",
      ],
    },
  ];

  // Price calculation
  useEffect(() => {
    if (selectedVehicle && formData.guestCount) {
      const basePrice =
        vehicles.find((v) => v.id === selectedVehicle)?.basePrice || 150000;
      const guestMultiplier = parseInt(formData.guestCount, 10) > 4 ? 1.2 : 1;
      setEstimatedPrice(Math.round(basePrice * guestMultiplier));
    } else {
      setEstimatedPrice(0);
    }
  }, [selectedVehicle, formData.guestCount]);

  const itineraryHighlights = [
    {
      icon: Palette,
      title: "Hakone Open-Air Museum",
      description:
        "Sculptures and modern art set in a garden of trees and mountains.",
      detailedDescription:
        "Immerse yourself in Japan's premier open-air art museum, where contemporary sculptures and installations blend with the natural landscape.",
      duration: "90 minutes",
      highlights: [
        "Modern Sculpture Garden",
        "Picasso Pavilion",
        "Mountain Art Views",
        "Interactive Installations",
      ],
      image: hakoneOpenAirImage,
    },
    {
      icon: Ship,
      title: "Lake Ashi Cruise (Pirate Ship)",
      description:
        "Peaceful lake ride across a volcanic crater — with Fuji views on clear days.",
      detailedDescription:
        "Embark on a unique pirate ship cruise across the pristine waters of Lake Ashi. On clear days, Mt. Fuji reflects on the lake surface.",
      duration: "45 minutes",
      highlights: [
        "Volcanic Crater Lake",
        "Mt. Fuji Views",
        "Pirate Ship Experience",
        "Lake Photography",
      ],
      image:
        "https://images.unsplash.com/photo-1726456357343-95137bd8a065?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: Cable,
      title: "Hakone Ropeway",
      description:
        "Soar above Owakudani's steaming terrain in a scenic cable car ride.",
      detailedDescription:
        "Experience breathtaking aerial views as you glide above Hakone's volcanic landscape on the famous ropeway.",
      duration: "60 minutes",
      highlights: [
        "Aerial Mountain Views",
        "Owakudani Steam Vents",
        "Engineering Marvel",
        "Panoramic Photography",
      ],
      image: hakoneRopewayImage,
    },
    {
      icon: Building2,
      title: "Hakone Shrine (Torii Gate)",
      description:
        "A lakeside Shinto sanctuary with a red gate that rises from the water.",
      detailedDescription:
        "Visit the iconic vermillion torii gate appearing to float on Lake Ashi, surrounded by towering cedar trees.",
      duration: "75 minutes",
      highlights: [
        "Iconic Floating Torii",
        "Ancient Cedar Forest",
        "Spiritual Sanctuary",
        "Cultural Heritage",
      ],
      image: hakoneShrineImage,
    },
    {
      icon: Building2,
      title: "Hakone Checkpoint Museum",
      description:
        "Step back into Edo-era Japan at this preserved travel checkpoint.",
      detailedDescription:
        "Discover Japan's history at this meticulously preserved Edo-period checkpoint along the historic Tokaido route.",
      duration: "60 minutes",
      highlights: [
        "Edo Period Architecture",
        "Historical Artifacts",
        "Tokaido Route History",
        "Cultural Immersion",
      ],
      image: hakoneCheckpointImage,
    },
    {
      icon: Building2,
      title: "Gotemba Premium Outlets (Optional)",
      description: "Luxury shopping with a backdrop of Mt. Fuji.",
      detailedDescription:
        "Indulge in world-class shopping at Japan's premier outlet destination, featuring 200+ luxury and designer brands.",
      duration: "2 hours",
      highlights: [
        "200+ Luxury Brands",
        "Mt. Fuji Backdrop",
        "Designer Outlets",
        "Japanese Crafts",
      ],
      image: gotembaOutletsImage,
    },
    {
      icon: Waves,
      title: "Private Onsen (Optional)",
      description:
        "End the day with a reserved hot spring experience — for body and mind.",
      detailedDescription:
        "Soak in mineral-rich thermal waters while surrounded by natural beauty to rejuvenate body and spirit.",
      duration: "90 minutes",
      highlights: [
        "Therapeutic Hot Springs",
        "Natural Mineral Waters",
        "Mountain Views",
        "Complete Relaxation",
      ],
      image: hakoneOnsenImage,
    },
  ];

  const included = [
    "Private luxury vehicle with professional chauffeur (round-trip from Tokyo)",
    "Hotel pick-up and drop-off within Tokyo",
    "Bottled water and in-car Wi-Fi",
    "Fuel, tolls, and insurance",
    "Concierge support before and during the tour",
    "Flexible itinerary adjustments",
  ];

  const notIncluded = [
    "Meals and refreshments",
    "Entrance tickets (e.g., ropeway, museum, onsen)",
    "Licensed guide (available on request)",
    "Gratuities (optional but appreciated)",
  ];

  const handleVehicleSelect = (vehicleId) => {
    setSelectedVehicle(vehicleId);
    setShowBookingModal(true);
    setBookingStep(1);
  };

  const handleVehicleChange = () => {
    setSelectedVehicle(null);
    setShowBookingModal(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      tourDate: "",
      pickupAddress: "",
      guestCount: "",
      luggageCount: "",
      specialNotes: "",
    });
  };

  const handleNextStep = () => setBookingStep((s) => Math.min(3, s + 1));
  const handlePreviousStep = () => setBookingStep((s) => Math.max(1, s - 1));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (bookingStep < 3) {
      handleNextStep();
    } else {
      console.log("Form submitted:", formData);
    }
  };

  const scrollToVehicles = () => {
    const el = document.getElementById("vehicle-selection");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleItinerary = (index) => {
    setExpandedItinerary(expandedItinerary === index ? null : index);
  };

  const selectedVehicleData = vehicles.find((v) => v.id === selectedVehicle);

  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-nippon-black/20">
        <div
          className="h-full bg-gradient-to-r from-nippon-gold via-nippon-gold-bright to-nippon-gold transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Booking Modal */}
      <Dialog open={showBookingModal} onOpenChange={setShowBookingModal}>
        <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto p-0 bg-nippon-warm-white">
          <div className="relative">
            {/* Sticky Header */}
            <div className="sticky top-0 z-20 bg-nippon-warm-white border-b border-nippon-border shadow-sm">
              <div className="px-6 py-4">
                <DialogHeader>
                  <DialogTitle className="text-luxury-xl text-nippon-black font-serif text-left">
                    Book Your Hakone Serenity Experience
                  </DialogTitle>
                  <DialogDescription className="text-luxury-sm text-nippon-gray font-sans text-left">
                    Complete your booking details below
                  </DialogDescription>
                </DialogHeader>

                {/* Vehicle & Price Summary */}
                {selectedVehicleData && (
                  <div className="mt-4 bg-nippon-gold/10 px-4 py-3 rounded border-l-4 border-nippon-gold">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Car className="w-4 h-4 text-nippon-gold" />
                        <div>
                          <span className="text-luxury-sm text-nippon-black font-serif">
                            {selectedVehicleData.name}
                          </span>
                          <span className="text-luxury-xs text-nippon-gray font-sans ml-2">
                            • Hakone Serenity
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {estimatedPrice > 0 && (
                          <span className="text-luxury-lg text-nippon-gold font-serif">
                            ¥{estimatedPrice.toLocaleString()}
                          </span>
                        )}
                        <Button
                          type="button"
                          onClick={handleVehicleChange}
                          className="p-1 bg-transparent hover:bg-nippon-gray/10 text-nippon-gray hover:text-nippon-black transition-colors"
                          title="Change vehicle selection"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Form Area */}
            <div className="p-6">
              <form
                onSubmit={handleFormSubmit}
                className="max-w-3xl mx-auto space-y-6"
              >
                {/* Tour Details */}
                <div className="bg-nippon-beige/30 p-6 rounded-lg border border-nippon-border space-y-4">
                  <div className="border-b border-nippon-gold/20 pb-3">
                    <h3 className="text-luxury-xl text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Tour Details
                    </h3>
                    <p className="text-luxury-sm text-nippon-gray font-sans">
                      Basic information for your Hakone Serenity experience
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="tourDate"
                        className="text-nippon-black font-serif flex items-center"
                      >
                        Tour Date{" "}
                        <span className="text-nippon-gold ml-1">*</span>
                      </Label>
                      <Input
                        id="tourDate"
                        type="date"
                        value={formData.tourDate}
                        onChange={(e) =>
                          setFormData({ ...formData, tourDate: e.target.value })
                        }
                        className="enhanced-luxury-input"
                        required
                      />
                      <p className="text-luxury-xs text-nippon-gray font-sans">
                        Select your preferred tour date
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="guestCount"
                        className="text-nippon-black font-serif flex items-center"
                      >
                        Number of Guests{" "}
                        <span className="text-nippon-gold ml-1">*</span>
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          setFormData({ ...formData, guestCount: value })
                        }
                      >
                        <SelectTrigger className="enhanced-luxury-input">
                          <SelectValue placeholder="Select number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} Guest{num > 1 ? "s" : ""}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <p className="text-luxury-xs text-nippon-gray font-sans">
                        Used to validate vehicle capacity
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="luggageCount"
                      className="text-nippon-black font-serif"
                    >
                      Number of Luggage
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, luggageCount: value })
                      }
                    >
                      <SelectTrigger className="enhanced-luxury-input">
                        <SelectValue placeholder="Select luggage count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">No luggage</SelectItem>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} bag{num > 1 ? "s" : ""}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-luxury-xs text-nippon-gray font-sans">
                      For vehicle loading coordination
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-nippon-warm-white/80 p-6 rounded-lg border border-nippon-border space-y-4">
                  <div className="border-b border-nippon-gold/20 pb-3">
                    <h3 className="text-luxury-xl text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Contact Information
                    </h3>
                    <p className="text-luxury-sm text-nippon-gray font-sans">
                      For reservation and confirmation purposes
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-nippon-black font-serif flex items-center"
                      >
                        Full Name{" "}
                        <span className="text-nippon-gold ml-1">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="enhanced-luxury-input"
                        placeholder="Your full name"
                        required
                      />
                      <p className="text-luxury-xs text-nippon-gray font-sans">
                        For reservation and confirmation purposes
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-nippon-black font-serif flex items-center"
                      >
                        Email Address{" "}
                        <span className="text-nippon-gold ml-1">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="enhanced-luxury-input"
                        placeholder="your@email.com"
                        required
                      />
                      <p className="text-luxury-xs text-nippon-gray font-sans">
                        Used for confirmation, updates, and concierge follow-up
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-nippon-black font-serif flex items-center"
                    >
                      Phone Number{" "}
                      <span className="text-nippon-gray-light text-luxury-xs ml-1">
                        (optional)
                      </span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="enhanced-luxury-input"
                      placeholder="+81 90-1234-5678 (international format supported)"
                    />
                    <p className="text-luxury-xs text-nippon-gray font-sans">
                      Optional field - helpful for day-of contact if needed
                    </p>
                  </div>
                </div>

                {/* Pickup Information */}
                <div className="bg-nippon-beige/30 p-6 rounded-lg border border-nippon-border space-y-4">
                  <div className="border-b border-nippon-gold/20 pb-3">
                    <h3 className="text-luxury-xl text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Pickup Information
                    </h3>
                    <p className="text-luxury-sm text-nippon-gray font-sans">
                      Where should we meet you?
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="pickupAddress"
                      className="text-nippon-black font-serif flex items-center"
                    >
                      Pickup Location (Hotel or Address in Tokyo){" "}
                      <span className="text-nippon-gold ml-1">*</span>
                    </Label>
                    <Input
                      id="pickupAddress"
                      value={formData.pickupAddress}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pickupAddress: e.target.value,
                        })
                      }
                      className="enhanced-luxury-input"
                      placeholder="Hotel name or precise location for morning pickup"
                      required
                    />
                    <p className="text-luxury-xs text-nippon-gray font-sans">
                      Enter hotel name or precise location for morning pickup
                    </p>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="bg-nippon-warm-white/80 p-6 rounded-lg border border-nippon-border space-y-4">
                  <div className="border-b border-nippon-gold/20 pb-3">
                    <h3 className="text-luxury-xl text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Special Requests
                    </h3>
                    <p className="text-luxury-sm text-nippon-gray font-sans">
                      Any special requirements for your tour?
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="specialNotes"
                      className="text-nippon-black font-serif flex items-center"
                    >
                      Special Requests / Notes{" "}
                      <span className="text-nippon-gray-light text-luxury-xs ml-1">
                        (optional)
                      </span>
                    </Label>
                    <Textarea
                      id="specialNotes"
                      value={formData.specialNotes}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          specialNotes: e.target.value,
                        })
                      }
                      className="enhanced-luxury-input min-h-[120px]"
                      placeholder="Include onsen experience, skip museum, mobility concerns, dietary preferences, celebration occasions, etc."
                    />
                    <p className="text-luxury-xs text-nippon-gray font-sans">
                      Open-ended field for any special requests or requirements
                    </p>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-nippon-gold/5 p-6 rounded-lg border-2 border-nippon-gold/20 space-y-3">
                  <div className="border-b border-nippon-gold/20 pb-2">
                    <h3 className="text-luxury-lg text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Tour Summary
                    </h3>
                    <p className="text-luxury-xs text-nippon-gray font-sans">
                      Automatically filled based on your selections
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-nippon-warm-white p-4 rounded border border-nippon-gold/30">
                      <Label className="text-luxury-sm text-nippon-black font-serif">
                        Selected Vehicle
                      </Label>
                      <p className="text-luxury-sm text-nippon-black font-sans mt-1">
                        {selectedVehicleData?.name || "-"}
                      </p>
                    </div>

                    <div className="bg-nippon-warm-white p-4 rounded border border-nippon-gold/30">
                      <Label className="text-luxury-sm text-nippon-black font-serif">
                        Tour Name
                      </Label>
                      <p className="text-luxury-sm text-nippon-black font-sans mt-1">
                        Hakone Serenity
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                {estimatedPrice > 0 && selectedVehicleData && (
                  <div className="bg-nippon-gold/10 p-4 rounded border border-nippon-gold">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-luxury-lg text-nippon-black font-serif">
                        Pricing Summary
                      </h4>
                      <span className="text-luxury-xl text-nippon-gold font-serif">
                        ¥{estimatedPrice.toLocaleString()}
                      </span>
                    </div>

                    <div className="space-y-2 text-luxury-sm">
                      <div className="flex justify-between">
                        <span className="text-nippon-gray font-sans">
                          Base price ({selectedVehicleData.name})
                        </span>
                        <span className="text-nippon-black font-sans">
                          ¥{selectedVehicleData.basePrice.toLocaleString()}
                        </span>
                      </div>

                      {parseInt(formData.guestCount || "0", 10) > 4 && (
                        <div className="flex justify-between">
                          <span className="text-nippon-gray font-sans">
                            Group surcharge (5+ guests)
                          </span>
                          <span className="text-nippon-black font-sans">
                            +20%
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between">
                        <span className="text-nippon-gray font-sans">
                          Taxes & fees
                        </span>
                        <span className="text-nippon-black font-sans">
                          Included
                        </span>
                      </div>
                    </div>

                    <p className="text-luxury-xs text-nippon-gray font-sans text-center mt-3">
                      Final price confirmed after booking review. No hidden
                      fees.
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="pt-4 space-y-3">
                  <Button
                    type="submit"
                    disabled={
                      !formData.name ||
                      !formData.email ||
                      !formData.tourDate ||
                      !formData.guestCount ||
                      !formData.pickupAddress
                    }
                    className="group relative overflow-hidden w-full bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-6 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2"
                    style={{
                      backdropFilter: "blur(20px)",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    <span className="relative flex items-center justify-center space-x-2">
                      <CreditCard className="w-4 h-4" />
                      <span className="tracking-wider font-medium">
                        Proceed to Payment
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>

                  <p className="text-luxury-xs text-nippon-gray font-sans text-center">
                    Payment collected at time of booking. You'll receive an
                    auto-confirmation email with all tour details.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1726456357343-95137bd8a065?auto=format&fit=crop&w=1920&q=80"
            alt="Lake Ashi with torii gate and Mt. Fuji in the distance"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.7) contrast(1.1) saturate(1.2)" }}
          />

          {/* Overlay effects */}
          <div
            className="absolute inset-0 w-full h-full opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at 40% 60%, rgba(212, 175, 55, 0.15) 0%, rgba(26, 26, 45, 0.1) 40%, transparent 80%)",
            }}
          ></div>
        </div>

        <div className="absolute inset-0 bg-nippon-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/50 via-nippon-black/20 to-nippon-black/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-nippon-black/40 via-transparent to-nippon-black/30 z-10"></div>

        <div
          className="relative z-20 max-w-6xl mx-auto px-8"
          data-scroll-reveal
        >
          <div className="max-w-4xl text-center">
            <h1 className="text-luxury-7xl lg:text-luxury-8xl text-nippon-warm-white font-serif mb-16 leading-none tracking-tight">
              Hakone Serenity Tour
            </h1>

            <div className="h-px w-48 mb-16 bg-gradient-to-r from-transparent via-nippon-gold to-transparent shadow-gold mx-auto"></div>

            <div className="space-y-12 max-w-3xl mx-auto">
              <p className="text-luxury-2xl text-nippon-warm-white font-serif italic leading-relaxed text-center">
                A gentle journey through hot springs, mountain air, art museums,
                and lakeside landscapes — curated for calm and cultural depth.
              </p>

              <div className="grid grid-cols-3 gap-8 py-8">
                <div className="text-center">
                  <div className="text-luxury-3xl text-nippon-gold font-serif mb-2">
                    7
                  </div>
                  <div className="text-luxury-sm text-nippon-warm-white font-sans">
                    Cultural Destinations
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-luxury-3xl text-nippon-gold font-serif mb-2">
                    10
                  </div>
                  <div className="text-luxury-sm text-nippon-warm-white font-sans">
                    Hours Duration
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-luxury-3xl text-nippon-gold font-serif mb-2">
                    100%
                  </div>
                  <div className="text-luxury-sm text-nippon-warm-white font-sans">
                    Private Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="mt-20 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToVehicles}
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2"
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-3">
                  <Car className="w-4 h-4" />
                  <span className="tracking-wider font-medium">
                    Choose Your Vehicle
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>

              <Button
                onClick={() =>
                  document
                    .getElementById("itinerary")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2"
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-3">
                  <MapIcon className="w-4 h-4" />
                  <span className="tracking-wider font-medium">
                    View Itinerary
                  </span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Introduction */}
      <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
        <div
          className="relative z-10 max-w-4xl mx-auto content-padding text-center"
          data-scroll-reveal
        >
          <div className="space-y-12">
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="h-px w-16 bg-nippon-gold"></div>
              <Waves className="w-8 h-8 text-nippon-gold" />
              <div className="h-px w-16 bg-nippon-gold"></div>
            </div>

            <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans max-w-3xl mx-auto">
              Retreat into Hakone — a beloved escape for Tokyoites and travelers
              alike. This full-day experience weaves together volcanic
              landscapes, forested paths, cable cars, and calming water views.
              With the option to include onsen, art, and premium shopping, this
              is the day to slow down in style.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <Shield className="w-8 h-8 text-nippon-gold mx-auto mb-3" />
                <div className="text-luxury-sm text-nippon-black font-serif">
                  Licensed & Insured
                </div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-nippon-gold mx-auto mb-3" />
                <div className="text-luxury-sm text-nippon-black font-serif">
                  5-Star Rated
                </div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-nippon-gold mx-auto mb-3" />
                <div className="text-luxury-sm text-nippon-black font-serif">
                  1500+ Guests
                </div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-nippon-gold mx-auto mb-3" />
                <div className="text-luxury-sm text-nippon-black font-serif">
                  24/7 Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Itinerary */}
      <section
        id="itinerary"
        className="relative bg-nippon-black section-padding overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto content-padding">
          <div className="text-center space-y-8 mb-16" data-scroll-reveal>
            <h2 className="text-luxury-5xl text-nippon-warm-white font-serif leading-tight">
              Interactive Itinerary
            </h2>
            <p className="text-luxury-xl text-nippon-gray-light font-sans leading-relaxed max-w-2xl mx-auto">
              Click on each location to explore detailed information and
              highlights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {itineraryHighlights.map((highlight, index) => (
              <div
                key={index}
                className={
                  `group relative bg-nippon-warm-white shadow-luxury transition-all duration-500 overflow-hidden border-l-4 border-nippon-gold cursor-pointer ` +
                  (expandedItinerary === index
                    ? "col-span-full md:col-span-2"
                    : "")
                }
                data-scroll-reveal
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => toggleItinerary(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/40 via-nippon-black/10 to-transparent"></div>

                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-nippon-gold to-nippon-gold-dark backdrop-blur-sm flex items-center justify-center shadow-gold border border-nippon-gold-light rounded-sm">
                      {highlight.icon ? (
                        <highlight.icon className="w-5 h-5 text-nippon-black" />
                      ) : null}
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-nippon-gold text-nippon-black text-luxury-xs">
                      {highlight.duration}
                    </Badge>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-luxury-base text-nippon-black font-serif leading-tight">
                      {highlight.title}
                    </h3>
                    {expandedItinerary === index ? (
                      <ChevronUp className="w-5 h-5 text-nippon-gold" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-nippon-gold" />
                    )}
                  </div>

                  <p className="text-luxury-sm text-nippon-gray leading-relaxed font-sans">
                    {expandedItinerary === index
                      ? highlight.detailedDescription
                      : highlight.description}
                  </p>

                  {expandedItinerary === index && (
                    <div className="mt-4 space-y-3 border-t border-nippon-border pt-4">
                      <h4 className="text-luxury-sm text-nippon-black font-serif">
                        Highlights Include
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {highlight.highlights.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-nippon-gold flex-shrink-0" />
                            <span className="text-luxury-xs text-nippon-gray font-sans">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" data-scroll-reveal>
            <p className="text-luxury-base text-nippon-gray-light font-sans italic leading-relaxed max-w-2xl mx-auto">
              <MapPin className="w-4 h-4 inline mr-2" />
              Your guide and driver will adapt the route to your pace,
              interests, and weather conditions for optimal experience.
            </p>
          </div>
        </div>
      </section>

      {/* Tour Details */}
      <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
        <div
          className="relative z-10 max-w-6xl mx-auto content-padding"
          data-scroll-reveal
        >
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-8">
              <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight">
                Tour Details
              </h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-nippon-gold" />
                  <div>
                    <p className="text-luxury-lg text-nippon-black font-serif">
                      Duration
                    </p>
                    <p className="text-luxury-base text-nippon-gray font-sans">
                      8–10 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Users className="w-6 h-6 text-nippon-gold" />
                  <div>
                    <p className="text-luxury-lg text-nippon-black font-serif">
                      Perfect For
                    </p>
                    <p className="text-luxury-base text-nippon-gray font-sans">
                      Wellness travelers, design lovers, couples, nature seekers
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Calendar className="w-6 h-6 text-nippon-gold" />
                  <div>
                    <p className="text-luxury-lg text-nippon-black font-serif">
                      Availability
                    </p>
                    <p className="text-luxury-base text-nippon-gray font-sans">
                      Daily, weather dependent (advance booking required)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-luxury-2xl text-nippon-black font-serif">
                What's Included
              </h3>
              <div className="space-y-3">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-nippon-gold mt-0.5 flex-shrink-0" />
                    <p className="text-luxury-base text-nippon-gray font-sans">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-luxury-2xl text-nippon-black font-serif">
                What's Not Included
              </h3>
              <div className="space-y-3">
                {notIncluded.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-nippon-gray mt-0.5 flex-shrink-0" />
                    <p className="text-luxury-base text-nippon-gray font-sans">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Selection */}
      <section
        id="vehicle-selection"
        className="relative bg-nippon-black section-padding overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto content-padding">
          <div className="text-center space-y-8 mb-16" data-scroll-reveal>
            <h2 className="text-luxury-5xl text-nippon-warm-white font-serif leading-tight">
              Choose Your Luxury Vehicle
            </h2>
            <p className="text-luxury-xl text-nippon-gray-light font-sans leading-relaxed max-w-2xl mx-auto">
              Select your preferred vehicle to start the booking process with
              instant pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicles.map((vehicle, index) => (
              <Card
                key={vehicle.id}
                className="group relative bg-nippon-warm-white transition-all duration-500 overflow-hidden border-l-4 border-nippon-gold cursor-pointer"
                data-scroll-reveal
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => handleVehicleSelect(vehicle.id)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/40 via-nippon-black/10 to-transparent"></div>

                  <div className="absolute top-4 right-4">
                    <Badge className="bg-nippon-gold text-nippon-black text-luxury-sm font-medium">
                      {vehicle.rate}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <CardHeader className="p-0">
                    <CardTitle className="text-luxury-xl text-nippon-black font-serif leading-tight">
                      {vehicle.name}
                    </CardTitle>
                    <p className="text-luxury-sm text-nippon-gray font-sans italic">
                      {vehicle.description}
                    </p>
                  </CardHeader>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-nippon-gold" />
                      <span className="text-luxury-sm text-nippon-gray font-sans">
                        {vehicle.guests}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-luxury-sm text-nippon-black font-serif">
                      Premium Features
                    </h4>
                    {vehicle.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-nippon-gold flex-shrink-0" />
                        <span className="text-luxury-xs text-nippon-gray font-sans">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="group relative overflow-hidden w-full bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-sm px-4 py-3 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2"
                    style={{
                      backdropFilter: "blur(10px)",
                      backgroundColor: "rgba(248, 246, 240, 0.1)",
                    }}
                  >
                    <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    <span className="relative flex items-center justify-center space-x-2">
                      <span className="tracking-wider font-medium">
                        Select Vehicle
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto content-padding">
          <div className="text-center space-y-8 mb-16" data-scroll-reveal>
            <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight">
              What Our Guests Say
            </h2>
            <p className="text-luxury-lg text-nippon-gray font-sans leading-relaxed max-w-2xl mx-auto">
              Real experiences from travelers who've discovered Hakone's
              serenity with Nippon Imperial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Santos",
                location: "Madrid",
                rating: 5,
                text: "The Hakone Serenity tour was pure magic. The combination of art, nature, and relaxation at the onsen created the perfect day. Our driver was knowledgeable about the best photography spots and timing.",
                avatar:
                  "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
              },
              {
                name: "Robert Chen",
                location: "Singapore",
                rating: 5,
                text: "Absolutely stunning experience. The pirate ship cruise and ropeway offered incredible views of Mt. Fuji. The flexibility to include shopping and onsen made it perfect for our family's diverse interests.",
                avatar:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
              },
              {
                name: "Emily Johnson",
                location: "London",
                rating: 5,
                text: "The spiritual atmosphere at Hakone Shrine combined with the modern art museum created such a balanced cultural experience. The hot springs were the perfect ending to our mountain adventure.",
                avatar:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-nippon-warm-white border-l-4 border-nippon-gold shadow-luxury transition-all duration-500"
                data-scroll-reveal
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-nippon-gold text-nippon-gold"
                      />
                    ))}
                  </div>

                  <p className="text-luxury-base text-nippon-gray font-sans leading-relaxed italic">
                    “{testimonial.text}”
                  </p>

                  <div className="flex items-center space-x-3 pt-4 border-t border-nippon-border">
                    <ImageWithFallback
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-luxury-base text-nippon-black font-serif">
                        {testimonial.name}
                      </p>
                      <p className="text-luxury-sm text-nippon-gray font-sans">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative bg-nippon-black section-padding overflow-hidden">
        <div
          className="relative z-10 max-w-4xl mx-auto content-padding text-center"
          data-scroll-reveal
        >
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-luxury-4xl text-nippon-warm-white font-serif leading-tight">
                Need Assistance?
              </h2>

              <p className="text-luxury-xl text-nippon-gray-light font-sans leading-relaxed max-w-2xl mx-auto">
                Our concierge team is available 24/7 to customize your Hakone
                experience and answer any questions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-nippon-gold mx-auto mb-4" />
                <p className="text-luxury-base text-nippon-warm-white font-serif">
                  Call Us
                </p>
                <p className="text-luxury-sm text-nippon-gray-light font-sans">
                  +81 3-1234-5678
                </p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-nippon-gold mx-auto mb-4" />
                <p className="text-luxury-base text-nippon-warm-white font-serif">
                  Email Us
                </p>
                <p className="text-luxury-sm text-nippon-gray-light font-sans">
                  hakone@nipponimperial.com
                </p>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-nippon-gold mx-auto mb-4" />
                <p className="text-luxury-base text-nippon-warm-white font-serif">
                  Live Chat
                </p>
                <p className="text-luxury-sm text-nippon-gray-light font-sans">
                  Available on website
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HakoneSerenity;
