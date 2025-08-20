export function GuidingPrinciples() {
  const principles = [
    {
      title: "Cultural Responsibility",
      description: "We honor Japan's heritage through authentic experiences, partnering with local artisans, masters, and communities who have preserved traditions for generations. Every journey we craft deepens cultural understanding while respecting the profound legacy of Japanese craftsmanship.",
      icon: "⛩️",
      details: [
        "Authentic partnerships with traditional craftspeople",
        "Preservation of cultural practices through tourism",
        "Respectful engagement with sacred and historical sites",
        "Supporting local communities and economies"
      ]
    },
    {
      title: "Unwavering Standards",
      description: "Excellence is not negotiable. From the selection of our partners to the execution of every detail, we maintain the highest standards of luxury service. Our commitment to perfection ensures that every Imperial experience exceeds expectations.",
      icon: "👑",
      details: [
        "Rigorous vetting of all service providers",
        "Continuous quality monitoring and improvement",
        "Personal attention to every client preference",
        "Zero compromise on safety and comfort"
      ]
    }
  ];

  return (
    <section className="relative py-24 bg-nippon-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-nippon-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-nippon-gold-refined/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-nippon-gold-muted/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20" data-scroll-reveal>
          <div data-stagger-container>
            <h2 className="text-luxury-5xl md:text-luxury-6xl text-nippon-gold font-serif font-medium mb-8" data-stagger>
              Guiding Principles
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-nippon-gold to-transparent mx-auto mb-12" data-stagger></div>
            <p className="text-luxury-xl text-nippon-ivory max-w-4xl mx-auto leading-relaxed font-serif italic" data-stagger>
              The unwavering foundations that define our commitment to excellence and cultural stewardship
            </p>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {principles.map((principle, index) => (
            <div key={index} className="relative group" data-scroll-reveal>
              {/* Main Card */}
              <div className="luxury-card bg-gradient-to-br from-nippon-gold/5 to-nippon-gold-refined/10 border border-nippon-gold/20 p-10 rounded-lg backdrop-blur-sm hover:border-nippon-gold/40 transition-all duration-500">
                {/* Icon */}
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {principle.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-luxury-3xl text-nippon-gold font-serif font-medium mb-6 text-center">
                  {principle.title}
                </h3>
                
                {/* Description */}
                <p className="text-nippon-ivory text-luxury-lg leading-relaxed font-sans mb-8 text-center">
                  {principle.description}
                </p>
                
                {/* Details */}
                <div className="space-y-4">
                  {principle.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-nippon-gold rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-nippon-gray text-luxury-base leading-relaxed font-sans">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-nippon-gold/30"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-nippon-gold/30"></div>
            </div>
          ))}
        </div>

        {/* Shared Vision Statement */}
        <div className="text-center py-16" data-scroll-reveal>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-nippon-gold/10 to-nippon-gold-refined/10 border border-nippon-gold/20 rounded-lg p-12 backdrop-blur-sm">
              <h3 className="text-luxury-3xl text-nippon-gold font-serif font-medium mb-8">
                A Shared Vision
              </h3>
              <p className="text-luxury-xl text-nippon-ivory leading-relaxed font-serif italic mb-6">
                Together, these principles form the cornerstone of the Nippon Imperial experience—where cultural reverence meets uncompromising luxury, creating journeys that honor the past while embracing the extraordinary.
              </p>
              <div className="w-24 h-px bg-nippon-gold mx-auto opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Floating Accent Elements */}
        <div className="absolute top-20 left-10 w-1 h-1 bg-nippon-gold rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-nippon-gold-refined rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-nippon-gold-muted rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-nippon-gold rounded-full opacity-35 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
    </section>
  );
}