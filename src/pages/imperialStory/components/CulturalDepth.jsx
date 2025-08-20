import { ImageWithFallback } from './figma/ImageWithFallback';


export function CulturalDepth() {
  const principles = [
    {
      japanese: 'おもてなし',
      romanji: 'Omotenashi',
      english: 'Heartfelt Hospitality',
      description: 'The art of anticipating needs without expectation of recognition or reward.',
      application: 'Every detail of your journey is anticipated and prepared before you realize you need it.',
      imageQuery: 'japanese tea ceremony hands'
    },
    {
      japanese: '侘寂',
      romanji: 'Wabi-Sabi',
      english: 'Perfect Imperfection',
      description: 'Finding profound beauty in transience, imperfection, and incomplete things.',
      application: 'Our experiences embrace authentic moments that cannot be replicated or commoditized.',
      imageQuery: 'japanese zen garden stones'
    },
    {
      japanese: '間',
      romanji: 'Ma',
      english: 'Purposeful Space',
      description: 'The powerful use of emptiness and pause to create meaning and depth.',
      application: 'Your itinerary includes sacred pauses for reflection and genuine cultural absorption.',
      imageQuery: 'minimalist japanese architecture'
    },
    {
      japanese: '一期一会',
      romanji: 'Ichigo Ichie',
      english: 'Once in a Lifetime',
      description: 'Treasuring unrepeatable encounters and the preciousness of each moment.',
      application: 'Every experience is crafted as a unique, irreplaceable encounter with Japanese culture.',
      imageQuery: 'japanese calligraphy brush ink'
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-nippon-black via-nippon-warm-taupe/10 to-nippon-black">
      {/* Cultural Texture Background */}
      <div className="absolute inset-0 washi-texture opacity-30"></div>
      <div className="absolute inset-0 silk-texture"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Introduction */}
        <div className="text-center mb-24" data-scroll-reveal>
          <div className="text-nippon-gold-muted text-sm tracking-imperial uppercase mb-4 font-sans">
            Cultural Foundation
          </div>
          <h2 className="text-luxury-4xl lg:text-luxury-5xl font-serif text-nippon-white mb-8">
            The Philosophy Behind Our Service
          </h2>
          <p className="text-nippon-gray text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Our approach to luxury travel is rooted in timeless Japanese principles that transform 
            mere experiences into profound cultural encounters.
          </p>
          <div className="text-nippon-gold text-2xl font-serif tracking-luxury">
            文化の深さ (bunka no fukasa)
          </div>
        </div>

        {/* Principles Grid */}
        <div className="space-y-24">
          {principles.map((principle, index) => (
            <div 
              key={principle.romanji}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              data-scroll-reveal
            >
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div>
                  {/* Japanese Characters */}
                  <div className="text-nippon-gold text-6xl lg:text-7xl font-serif mb-4 leading-none">
                    {principle.japanese}
                  </div>
                  
                  {/* Romanization */}
                  <div className="text-nippon-gold-refined text-xl font-sans tracking-luxury uppercase mb-2">
                    {principle.romanji}
                  </div>
                  
                  {/* English Translation */}
                  <h3 className="text-luxury-2xl lg:text-luxury-3xl font-serif text-nippon-white mb-6">
                    {principle.english}
                  </h3>
                </div>

                {/* Description */}
                <div className="space-y-6">
                  <p className="text-nippon-gray text-lg leading-relaxed">
                    {principle.description}
                  </p>
                  
                  <div className="border-l-2 border-nippon-gold-muted pl-6">
                    <div className="text-nippon-gold-muted text-sm uppercase tracking-wide mb-2">
                      In Practice
                    </div>
                    <p className="text-nippon-ivory leading-relaxed">
                      {principle.application}
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="aspect-[4/5] overflow-hidden bg-nippon-charcoal/30">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1672758688257-a110c93de407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHplbiUyMGdhcmRlbiUyMHN0b25lc3xlbnwxfHx8fDE3NTUyNDk3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt={`${principle.english} - Japanese cultural principle in practice`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nippon-black/20 to-nippon-black/60"></div>
                </div>
                
                {/* Floating Japanese Character */}
                <div className="absolute -top-4 -right-4 w-20 h-20 floating-card rounded-full flex items-center justify-center border-2 border-nippon-gold/30">
                  <span className="text-nippon-gold text-xl font-serif">
                    {principle.japanese.charAt(0)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Commitment */}
        <div className="mt-32 text-center" data-scroll-reveal>
          <div className="floating-card p-12 lg:p-16 max-w-4xl mx-auto">
            <div className="text-nippon-gold text-4xl font-serif mb-6">
              約束 (yakusoku)
            </div>
            <h3 className="text-luxury-2xl font-serif text-nippon-white mb-6">
              Our Cultural Promise
            </h3>
            <p className="text-nippon-gray text-lg leading-relaxed mb-8">
              These principles are not mere concepts to us—they are the foundation of every interaction, 
              every planned moment, and every spontaneous encounter. Through them, we ensure that your 
              journey transcends tourism to become a genuine cultural bridge.
            </p>
            <div className="w-24 h-px luxury-divider mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}