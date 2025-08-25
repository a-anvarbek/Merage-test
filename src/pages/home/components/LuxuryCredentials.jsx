import { Award, Shield, Users, Globe, Crown, Star } from 'lucide-react';

export default function LuxuryCredentials() {
  const credentials = [
    {
      icon: Award,
      title: "Luxury Travel Awards",
      subtitle: "Best Bespoke Travel 2023",
      description: "Recognized for exceptional personalized service",
    },
    {
      icon: Shield,
      title: "IATA Certified",
      subtitle: "International Standards",
      description: "Licensed luxury travel specialist",
    },
    {
      icon: Users,
      title: "Virtuoso Member",
      subtitle: "Elite Travel Network",
      description: "Exclusive access to luxury partnerships",
    },
    {
      icon: Globe,
      title: "JNTO Approved",
      subtitle: "Japan Tourism Authority",
      description: "Official cultural expertise certification",
    }
  ];

  const partnerships = [
    "Aman Resorts",
    "Four Seasons",
    "Peninsula Hotels",
    "Imperial Hotel Collection",
    "Rosewood",
    "Park Hyatt"
  ];

  return (
    <section className="relative bg-nippon-midnight section-padding overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Cpath d='M60 60L45 45v30h30zm30-30L75 45v30h30zM30 30L15 15v30h30zm60 60L75 75v30h30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto content-padding">
        {/* Section header */}
        <div className="text-center mb-16" data-scroll-reveal>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px w-16 bg-nippon-gold"></div>
            <Crown className="w-6 h-6 text-nippon-gold" />
            <div className="h-px w-16 bg-nippon-gold"></div>
          </div>
          
          <h2 className="text-nippon-pearl font-serif text-luxury-4xl mb-6">
            Luxury Credentials
          </h2>
          <p className="text-nippon-platinum-white/70 font-sans text-luxury-base max-w-3xl mx-auto leading-relaxed">
            Our expertise is recognized by the most prestigious organizations in luxury travel and Japanese hospitality
          </p>
        </div>

        {/* Credentials grid */}
        <div className="grid lg:grid-cols-4 gap-8 mb-20" data-scroll-reveal>
          {credentials.map((credential, index) => (
            <div 
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon with elegant frame */}
              <div className="mb-6">
                <div className="relative w-20 h-20 mx-auto">
                  {/* Outer decorative frame */}
                  <div className="absolute inset-0 border border-nippon-gold/30 rotate-45 transition-transform duration-500 group-hover:rotate-0"></div>
                  
                  {/* Inner icon container */}
                  <div className="absolute inset-2 bg-nippon-gold/10 border border-nippon-gold flex items-center justify-center transition-all duration-500 group-hover:bg-nippon-gold group-hover:scale-110">
                    <credential.icon className="w-8 h-8 text-nippon-gold group-hover:text-nippon-obsidian transition-colors duration-300" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-nippon-pearl font-serif text-luxury-xl">
                  {credential.title}
                </h3>
                <div className="text-nippon-rose-gold font-sans text-luxury-sm font-medium">
                  {credential.subtitle}
                </div>
                <p className="text-nippon-platinum-white/60 font-sans text-luxury-xs leading-relaxed">
                  {credential.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Luxury partnerships section */}
        <div className="text-center" data-scroll-reveal>
          <div className="mb-12">
            <h3 className="text-nippon-copper-gold font-serif text-luxury-2xl mb-4">
              Preferred Partners
            </h3>
            <div className="w-24 h-px bg-nippon-gold mx-auto mb-8"></div>
            <p className="text-nippon-platinum-white/70 font-sans text-luxury-base max-w-2xl mx-auto leading-relaxed">
              Exclusive relationships with Japan's most prestigious hotels and luxury experiences
            </p>
          </div>

          {/* Partners logos/names */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {partnerships.map((partner, index) => (
              <div 
                key={index}
                className="text-nippon-platinum-white/50 font-sans text-luxury-sm tracking-wider hover:text-nippon-rose-gold transition-colors duration-300 cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-nippon-gold/20" data-scroll-reveal>
          <div className="text-center">
            <div className="mb-4">
              <Shield className="w-12 h-12 text-nippon-gold mx-auto" />
            </div>
            <h4 className="text-nippon-pearl font-serif text-luxury-xl mb-2">Fully Insured</h4>
            <p className="text-nippon-platinum-white/60 font-sans text-luxury-sm">Comprehensive coverage for your peace of mind</p>
          </div>
          
          <div className="text-center">
            <div className="mb-4">
              <Users className="w-12 h-12 text-nippon-gold mx-auto" />
            </div>
            <h4 className="text-nippon-pearl font-serif text-luxury-xl mb-2">Expert Team</h4>
            <p className="text-nippon-platinum-white/60 font-sans text-luxury-sm">Cultural specialists with decades of experience</p>
          </div>
          
          <div className="text-center">
            <div className="mb-4">
              <Star className="w-12 h-12 text-nippon-gold mx-auto" />
            </div>
            <h4 className="text-nippon-pearl font-serif text-luxury-xl mb-2">24/7 Support</h4>
            <p className="text-nippon-platinum-white/60 font-sans text-luxury-sm">Round-the-clock concierge service</p>
          </div>
        </div>
      </div>
    </section>
  );
}