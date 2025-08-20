import { useState, useEffect } from 'react';

export default function TestimonialsShowcase() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: '1',
      quote:
        "Nippon Imperial transformed our family's understanding of Japan. The level of cultural immersion and personal attention exceeded our highest expectations.",
      author: "M. Wellington",
      title: "CEO, Wellington Holdings",
      location: "London",
      experience: "Private Imperial Garden Tour",
      kanji: "至上",
    },
    {
      id: '2',
      quote:
        "Every detail was orchestrated with precision reminiscent of traditional Japanese craftsmanship. An unparalleled luxury experience.",
      author: "Dr. C. Pemberton",
      title: "Chairman, Pemberton Foundation",
      location: "New York",
      experience: "Executive Cultural Immersion",
      kanji: "完璧",
    },
    {
      id: '3',
      quote:
        "The synthesis of modern luxury with authentic Japanese tradition created memories that will influence our family for generations.",
      author: "Ambassador R. Sterling",
      title: "Former Ambassador to Japan",
      location: "Washington D.C.",
      experience: "Diplomatic Heritage Experience",
      kanji: "伝統",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative py-32 bg-gradient-to-b from-nippon-black via-nippon-charcoal/30 to-nippon-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20" data-scroll-reveal>
          <div className="text-nippon-gold-muted text-sm tracking-imperial uppercase mb-4 font-sans">
            Voices of Excellence
          </div>
          <h2 className="text-luxury-4xl lg:text-luxury-5xl font-serif text-nippon-white mb-6">
            Testimonials from Distinguished Guests
          </h2>
          <div className="text-nippon-gold text-lg tracking-luxury font-serif">
            証言 (shōgen)
          </div>
        </div>

        {/* Testimonial Display */}
        <div className="relative">
          <div className="bg-nippon-beige rounded-none p-12 lg:p-16 min-h-[400px] flex flex-col justify-center border border-nippon-gold/10 shadow-luxury">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-12 lg:inset-16 transition-all duration-1000 ${
                  index === activeTestimonial
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-8"
                }`}
              >
                <div className="text-center">
                  {/* Japanese Character */}
                  <div className="text-nippon-gold text-6xl font-serif mb-8 opacity-20">
                    {testimonial.kanji}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-luxury-xl lg:text-luxury-2xl font-serif italic text-nippon-black leading-relaxed mb-12 max-w-4xl mx-auto">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Attribution */}
                  <div className="space-y-2">
                    <div className="text-nippon-gold-refined text-lg font-sans tracking-refined">
                      {testimonial.author}
                    </div>
                    <div className="text-nippon-charcoal text-sm">
                      {testimonial.title}
                    </div>
                    <div className="text-nippon-charcoal text-sm">
                      {testimonial.location} • {testimonial.experience}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? "bg-nippon-gold scale-125"
                    : "bg-nippon-gold-muted/30 hover:bg-nippon-gold-muted/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-12 border-t border-nippon-gold-muted/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div data-scroll-reveal>
              <div className="text-nippon-gold text-3xl font-serif mb-2">
                50+
              </div>
              <div className="text-nippon-gray text-sm uppercase tracking-wide">
                Distinguished Families Served
              </div>
            </div>
            <div data-scroll-reveal>
              <div className="text-nippon-gold text-3xl font-serif mb-2">
                15+
              </div>
              <div className="text-nippon-gray text-sm uppercase tracking-wide">
                Years of Excellence
              </div>
            </div>
            <div data-scroll-reveal>
              <div className="text-nippon-gold text-3xl font-serif mb-2">
                100%
              </div>
              <div className="text-nippon-gray text-sm uppercase tracking-wide">
                Privacy & Discretion
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
