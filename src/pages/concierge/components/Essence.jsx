import { ImageWithFallback } from './figma/ImageWithFallback';

const culturalValues = [
  { char: "心", title: "Heart", subtitle: "Kokoro" },
  { char: "和", title: "Harmony", subtitle: "Wa" },
  { char: "礼", title: "Respect", subtitle: "Rei" },
];

export function Essence() {
  return (
    <section className="relative bg-nippon-black section-padding overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-nippon-gold opacity-20 blur-3xl"
          data-scroll-parallax
          data-scroll-speed="0.1"
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-nippon-gold opacity-30 blur-3xl"
          data-scroll-parallax
          data-scroll-speed="-0.05"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto content-padding">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column */}
          <div className="space-y-12" data-scroll-reveal>
            <header>
              <h2 className="text-luxury-6xl text-nippon-warm-white font-serif mb-8 text-with-gold-glow">
                The Essence of{" "}
                <span className="block text-nippon-gold">Omotenashi</span>
              </h2>
              <div className="gold-divider h-px w-24 mb-8" />
            </header>

            <div className="space-y-8">
              <p className="text-luxury-xl text-nippon-warm-white font-sans leading-relaxed text-with-elegant-shadow">
                Omotenashi represents the pinnacle of Japanese hospitality—a
                philosophy that anticipates needs before they are expressed,
                creating experiences that transcend expectations.
              </p>

              <p className="text-luxury-lg text-nippon-gray-light font-sans leading-relaxed">
                At Nippon Imperial, we embody this ancient wisdom through modern
                luxury. Every moment of your journey is carefully orchestrated,
                from the gentle bow of greeting to the seamless transition
                between experiences.
              </p>

              <p className="text-luxury-lg text-nippon-gray-light font-sans leading-relaxed">
                This is not merely service—it is an art form practiced with
                devotion, precision, and an unwavering commitment to your
                complete satisfaction and wonder.
              </p>
            </div>

            {/* Cultural values */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {culturalValues.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 border-2 border-nippon-gold mx-auto mb-4 flex items-center justify-center gold-glow">
                    <span className="text-nippon-gold font-serif text-luxury-2xl">
                      {item.char}
                    </span>
                  </div>
                  <p className="text-nippon-warm-white font-sans text-luxury-sm">
                    {item.title}
                  </p>
                  <p className="text-nippon-gray font-sans text-luxury-xs">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative" data-scroll-reveal>
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Delicate cherry blossoms in traditional Japanese garden"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/30 via-transparent to-transparent" />
                <div className="absolute inset-0 border border-nippon-gold/20 pointer-events-none" />
              </div>

              {/* Floating accents */}
              <div className="absolute -top-8 -right-8 w-32 h-32 border border-nippon-gold/30 bg-nippon-black/20 backdrop-blur-sm" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 border border-nippon-gold/30 bg-nippon-black/20 backdrop-blur-sm" />
            </div>

            <blockquote className="absolute bottom-8 left-8 right-8">
              <p className="text-nippon-warm-white/90 font-serif text-luxury-sm italic text-with-elegant-shadow">
                "Beauty in simplicity, perfection in detail"
              </p>
            </blockquote>
          </div>
        </div>

        {/* Divider Section */}
        <div
          className="mt-32 pt-16 border-t border-nippon-gold/20 text-center max-w-4xl mx-auto"
          data-scroll-reveal
        >
          <h3 className="text-luxury-4xl text-nippon-gold font-serif mb-8 text-with-gold-glow">
            Beyond Expectations
          </h3>
          <p className="text-luxury-xl text-nippon-warm-white font-sans leading-relaxed text-with-elegant-shadow">
            Every detail is considered, every moment is crafted, and every
            experience becomes a cherished memory that will resonate long after
            your journey ends.
          </p>
        </div>
      </div>
    </section>
  );
}
