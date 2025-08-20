import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    id: 1,
    name: "Victoria Hartwell",
    title: "CEO, Fortune 500 Company",
    location: "London, UK",
    rating: 5,
    text: "Nippon Imperial transformed our executive retreat into an extraordinary cultural immersion. Every detail was meticulously orchestrated, from private temple ceremonies at dawn to exclusive kaiseki experiences with master chefs. Their understanding of both luxury and cultural authenticity is simply unparalleled in the industry.",
    experience: "Executive Cultural Immersion",
    clientType: "C-Suite Executive"
  },
  {
    id: 2,
    name: "The Morrison Family",
    title: "Private Art Collectors",
    location: "Beverly Hills, USA",
    rating: 5,
    text: "Our multigenerational family journey through Japan exceeded every expectation we had. Nippon Imperial's team anticipated our diverse needs—from our teenage children's interests to our grandparents' accessibility requirements. The private access to cultural sites and master artisans created memories that will resonate for generations.",
    experience: "Multigenerational Heritage Tour",
    clientType: "High Net Worth Family"
  },
  {
    id: 3,
    name: "Ambassador James Richardson",
    title: "Former UK Ambassador to Japan",
    location: "Edinburgh, UK", 
    rating: 5,
    text: "Having spent decades in diplomatic service in Japan, I believed I knew the country intimately. Nippon Imperial revealed hidden depths and exclusive experiences that even someone with my connections had never encountered. Their cultural sensitivity and diplomatic finesse are exceptional—truly understanding the nuance of Japanese hospitality.",
    experience: "Diplomatic Excellence Program",
    clientType: "Diplomatic VIP"
  },
  {
    id: 4,
    name: "Dr. Elena Nakamura",
    title: "International Museum Director",
    location: "Zurich, Switzerland",
    rating: 5,
    text: "As someone who demands perfection in cultural presentation, Nippon Imperial's attention to authenticity and detail is extraordinary. Their exclusive connections to master craftsmen, private collections, and cultural institutions provided access to Japan's most carefully guarded artistic treasures. An experience that influenced my curatorial perspective permanently.",
    experience: "Cultural Arts & Heritage Immersion",
    clientType: "Cultural Institution Leader"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative bg-nippon-rich-charcoal section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Enhanced section header */}
        <div className="text-center mb-20" data-scroll-reveal>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-16 bg-nippon-pure-gold"></div>
            <Quote className="w-8 h-8 text-nippon-pure-gold" />
            <div className="h-px w-16 bg-nippon-pure-gold"></div>
          </div>
          
          <h2 className="text-nippon-pearl font-serif mb-6">
            Distinguished Testimonials
          </h2>
          <p className="text-nippon-platinum-white/70 max-w-3xl mx-auto leading-relaxed">
            Exclusive experiences shared by our carefully selected clientele—executives, diplomats, cultural leaders, and distinguished families who choose Nippon Imperial for the most important journeys
          </p>
        </div>

        {/* Testimonial Carousel with enhanced design */}
        <div className="relative" data-scroll-reveal>
          <div className="max-w-5xl mx-auto">
            {/* Main Testimonial - Pure white with luxury shadows */}
            <div className="relative bg-nippon-pearl shadow-luxury-hover p-12 lg:p-20 min-h-[600px] flex flex-col justify-center">
              {/* Luxury quote marks */}
              <div className="absolute top-8 left-8">
                <div className="w-16 h-16 border-2 border-nippon-pure-gold flex items-center justify-center">
                  <Quote className="w-8 h-8 text-nippon-pure-gold opacity-40" />
                </div>
              </div>

              {/* Client type badge */}
              <div className="flex justify-center mb-6">
                <div className="bg-nippon-pure-gold/10 border border-nippon-pure-gold/30 px-6 py-2">
                  <span className="text-nippon-copper-gold font-sans text-luxury-sm tracking-wider uppercase">
                    {testimonials[currentIndex].clientType}
                  </span>
                </div>
              </div>

              {/* Rating Stars with elegant spacing */}
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-6 h-6 text-nippon-pure-gold fill-current mx-1" 
                  />
                ))}
              </div>

              {/* Enhanced testimonial text */}
              <blockquote className="text-center mb-12">
                <p className="text-nippon-obsidian text-luxury-xl lg:text-luxury-2xl leading-relaxed font-serif italic mb-8 max-w-4xl mx-auto">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="space-y-4">
                  <div className="text-nippon-copper-gold text-luxury-lg font-serif font-medium">
                    {testimonials[currentIndex].experience}
                  </div>
                  
                  <div className="w-24 h-px bg-nippon-pure-gold mx-auto"></div>
                </div>
              </blockquote>

              {/* Enhanced client info */}
              <div className="text-center">
                <div className="space-y-3">
                  <div className="text-nippon-obsidian font-serif text-luxury-2xl font-medium">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-nippon-midnight font-sans text-luxury-lg">
                    {testimonials[currentIndex].title}
                  </div>
                  <div className="text-nippon-soft-charcoal font-sans text-luxury-base">
                    {testimonials[currentIndex].location}
                  </div>
                </div>
              </div>

              {/* Luxury navigation arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                <Button
                  onClick={prevTestimonial}
                  className="pointer-events-auto bg-nippon-champagne hover:bg-nippon-pure-gold border border-nippon-pure-gold text-nippon-pure-gold hover:text-nippon-obsidian p-4 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 transform hover:-translate-y-1"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  onClick={nextTestimonial}
                  className="pointer-events-auto bg-nippon-champagne hover:bg-nippon-pure-gold border border-nippon-pure-gold text-nippon-pure-gold hover:text-nippon-obsidian p-4 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 transform hover:-translate-y-1"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </div>

            {/* Enhanced indicators */}
            <div className="flex justify-center mt-12 space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`relative transition-all duration-500 ${
                    index === currentIndex 
                      ? 'w-12 h-3 bg-nippon-pure-gold' 
                      : 'w-3 h-3 bg-nippon-platinum-white/30 hover:bg-nippon-pure-gold/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced trust indicators with luxury positioning */}
        <div className="mt-24 pt-20 border-t border-nippon-pure-gold/20" data-scroll-reveal>
          <div className="text-center mb-12">
            <h3 className="text-nippon-rose-gold font-serif text-luxury-2xl mb-4">
              By the Numbers
            </h3>
            <p className="text-nippon-platinum-white/60 max-w-2xl mx-auto leading-relaxed">
              The foundation of trust built through years of exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-nippon-pure-gold font-serif text-luxury-4xl font-medium">12</div>
              <div className="text-nippon-platinum-white font-sans text-luxury-base">Select Clients Annually</div>
              <div className="text-nippon-platinum-white/60 font-sans text-luxury-xs italic">By invitation only</div>
            </div>
            <div className="space-y-4">
              <div className="text-nippon-pure-gold font-serif text-luxury-4xl font-medium">15+</div>
              <div className="text-nippon-platinum-white font-sans text-luxury-base">Years of Excellence</div>
              <div className="text-nippon-platinum-white/60 font-sans text-luxury-xs italic">Established 2009</div>
            </div>
            <div className="space-y-4">
              <div className="text-nippon-pure-gold font-serif text-luxury-4xl font-medium">100%</div>
              <div className="text-nippon-platinum-white font-sans text-luxury-base">Client Satisfaction</div>
              <div className="text-nippon-platinum-white/60 font-sans text-luxury-xs italic">Every journey exceeds expectations</div>
            </div>
            <div className="space-y-4">
              <div className="text-nippon-pure-gold font-serif text-luxury-4xl font-medium">98%</div>
              <div className="text-nippon-platinum-white font-sans text-luxury-base">Return Rate</div>
              <div className="text-nippon-platinum-white/60 font-sans text-luxury-xs italic">Clients become lifelong partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}