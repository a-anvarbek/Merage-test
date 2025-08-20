import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SeasonalExperiences() {
  const [activeSeason, setActiveSeason] = useState(0);

  const experiences = [
    {
      id: 'spring',
      season: 'Spring',
      kanji: '春',
      title: 'Cherry Blossom Imperial',
      description:
        'Experience hanami season with exclusive access to private imperial gardens and centuries-old viewing traditions.',
      highlights: [
        'Private dawn viewing at Shinjuku Gyoen',
        'Traditional kaiseki beneath ancient sakura',
        'Personal poetry master for hanami composition',
        'Helicopter tour of Mount Fuji cherry groves',
      ],
      availability: 'March 20 - May 5',
      exclusivity: 'Limited to 8 guests annually',
      imageQuery: 'cherry blossom japan temple',
    },
    {
      id: 'summer',
      season: 'Summer',
      kanji: '夏',
      title: 'Festival of Illumination',
      description:
        "Immerse in Japan's vibrant summer festivals with VIP access to the most prestigious matsuri celebrations.",
      highlights: [
        'Gion Matsuri private viewing pavilion',
        'Fireworks from exclusive Tokyo Bay yacht',
        'Master craftsman yukata fitting',
        'Temple blessing ceremonies',
      ],
      availability: 'June 15 - August 31',
      exclusivity: 'By invitation only',
      imageQuery: 'japan summer festival lanterns',
    },
    {
      id: 'autumn',
      season: 'Autumn',
      kanji: '秋',
      title: 'Maple Meditation Retreat',
      description:
        'Witness the transformation of Japanese landscapes in a journey of contemplation and artistic inspiration.',
      highlights: [
        'Private temple stays in Kyoto',
        'Guided meditation with zen masters',
        'Traditional art workshops',
        'Exclusive momiji viewing locations',
      ],
      availability: 'September 20 - December 1',
      exclusivity: 'Maximum 6 participants',
      imageQuery: 'japanese autumn temple red maple',
    },
    {
      id: 'winter',
      season: 'Winter',
      kanji: '冬',
      title: 'Snow Country Serenity',
      description:
        "Discover the profound beauty of Japan's winter landscapes through luxury ryokan experiences and cultural immersion.",
      highlights: [
        'Private onsen in Hakone mountains',
        'Kaiseki dining in snow gardens',
        'Traditional pottery with master artisans',
        'Exclusive snow monkey encounters',
      ],
      availability: 'December 15 - March 15',
      exclusivity: 'Family groups of 4-8',
      imageQuery: 'japanese winter snow temple hot spring',
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-nippon-charcoal/20 via-nippon-black to-nippon-dusk/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20" data-scroll-reveal>
          <div className="text-nippon-gold-muted text-sm tracking-imperial uppercase mb-4 font-sans">
            Seasonal Exclusives
          </div>
          <h2 className="text-luxury-4xl lg:text-luxury-5xl font-serif text-nippon-white mb-6">
            Four Seasons of Imperial Experiences
          </h2>
          <p className="text-nippon-gray text-lg max-w-3xl mx-auto leading-relaxed">
            Each season reveals unique facets of Japanese culture, accessible
            only through our curated seasonal experiences that honor traditional
            timing and natural rhythms.
          </p>
        </div>

        {/* Season Navigation */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-4 gap-4 p-2 floating-card rounded-none">
            {experiences.map((experience, index) => (
              <button
                key={experience.id}
                onClick={() => setActiveSeason(index)}
                className={`px-6 py-4 transition-all duration-300 relative group ${
                  index === activeSeason
                    ? 'text-nippon-gold'
                    : 'text-nippon-gray hover:text-nippon-gold-muted'
                }`}
              >
                <div className="text-2xl font-serif mb-1">{experience.kanji}</div>
                <div className="text-sm uppercase tracking-wide">
                  {experience.season}
                </div>
                {index === activeSeason && (
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-nippon-gold"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Content */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`transition-all duration-1000 ${
                index === activeSeason
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-luxury-3xl font-serif text-nippon-white mb-4">
                      {experience.title}
                    </h3>
                    <p className="text-nippon-gray text-lg leading-relaxed mb-8">
                      {experience.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-nippon-gold text-lg font-sans tracking-refined uppercase mb-4">
                      Experience Highlights
                    </h4>
                    <ul className="space-y-3">
                      {experience.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-nippon-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-nippon-gray">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Availability & Exclusivity */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-nippon-gold-muted/20">
                    <div>
                      <div className="text-nippon-gold-muted text-sm uppercase tracking-wide mb-2">
                        Availability
                      </div>
                      <div className="text-nippon-white">
                        {experience.availability}
                      </div>
                    </div>
                    <div>
                      <div className="text-nippon-gold-muted text-sm uppercase tracking-wide mb-2">
                        Exclusivity
                      </div>
                      <div className="text-nippon-white">
                        {experience.exclusivity}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-6">
                    <button className="imperial-button">
                      Reserve {experience.season} Experience
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/5] overflow-hidden bg-nippon-charcoal/50">
                    <ImageWithFallback
                      src={`https://images.unsplash.com/photo-1493634154191-b6d049c19157?auto=format&fit=crop&w=800&q=80`}
                      alt={`${experience.title} - Seasonal luxury experience in Japan`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/60 via-transparent to-transparent"></div>
                  </div>

                  {/* Floating Season Character */}
                  <div className="absolute top-8 right-8 w-16 h-16 floating-card rounded-full flex items-center justify-center">
                    <span className="text-nippon-gold text-2xl font-serif">
                      {experience.kanji}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Limited Availability Notice */}
        <div className="mt-20 text-center">
          <div className="floating-card p-8 max-w-2xl mx-auto">
            <div className="text-nippon-gold text-sm uppercase tracking-imperial mb-4">
              Exclusive Availability
            </div>
            <p className="text-nippon-gray leading-relaxed">
              Our seasonal experiences honor traditional Japanese timing and
              natural cycles. Each offering is carefully limited to preserve
              authenticity and ensure the most intimate cultural immersion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
