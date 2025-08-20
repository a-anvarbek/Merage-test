import { MessageSquare, Calendar, Star, Crown } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      step: "01",
      title: "Initial Consultation",
      description: "Share your vision and preferences with our expert concierge team through a detailed consultation.",
      details: [
        "Personal preferences assessment",
        "Travel dates and duration",
        "Special interests and requirements",
        "Budget and accommodation preferences"
      ]
    },
    {
      icon: Calendar,
      step: "02", 
      title: "Bespoke Planning",
      description: "We craft a personalized itinerary with exclusive access and seamless logistics coordination.",
      details: [
        "Custom itinerary design",
        "Premium reservations secured",
        "Private access arrangements",
        "Transportation coordination"
      ]
    },
    {
      icon: Star,
      step: "03",
      title: "Experience Curation",
      description: "Every detail is refined and perfected to ensure your journey exceeds all expectations.",
      details: [
        "Final itinerary approval",
        "Welcome briefing materials",
        "24/7 concierge contact",
        "Emergency support protocols"
      ]
    },
    {
      icon: Crown,
      step: "04",
      title: "Flawless Execution",
      description: "Experience Japan through our carefully orchestrated luxury journey with continuous support.",
      details: [
        "Real-time assistance",
        "Seamless transitions",
        "Unexpected delights",
        "Memory preservation"
      ]
    }
  ];

  return (
    <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-nippon-gold opacity-2 blur-3xl" data-scroll-parallax data-scroll-speed="0.1"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-nippon-gold opacity-3 blur-3xl" data-scroll-parallax data-scroll-speed="-0.05"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto content-padding">
        {/* Section header with refined typography */}
        <div className="text-center mb-20" data-scroll-reveal>
          <h2 className="text-luxury-4xl text-nippon-black font-serif mb-6">
            How It Works
          </h2>
          <div className="gold-divider h-px w-32 mx-auto mb-8"></div>
          <p className="text-luxury-base text-nippon-gray-dark max-w-3xl mx-auto leading-relaxed font-sans">
            From initial consultation to flawless execution, our process ensures every aspect of your journey is perfected.
          </p>
        </div>

        {/* Steps with clean, vertical flow */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              data-scroll-reveal
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Content side */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                {/* Step indicator with gold accent */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-nippon-gold flex items-center justify-center shadow-gold">
                    <span className="text-nippon-black font-serif text-luxury-xl tracking-wider">
                      {step.step}
                    </span>
                  </div>
                  <div className="h-px w-20 bg-nippon-gold"></div>
                </div>

                <h3 className="text-luxury-3xl text-nippon-black font-serif">
                  {step.title}
                </h3>

                <p className="text-luxury-base text-nippon-gray-dark leading-relaxed font-sans">
                  {step.description}
                </p>

                {/* Step details with clean spacing */}
                <div className="space-y-3 pt-3">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-nippon-gold flex-shrink-0"></div>
                      <span className="text-nippon-gray-dark font-sans text-luxury-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Icon side with elegant presentation */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative">
                  {/* Large icon container - slightly smaller */}
                  <div className="w-64 h-64 mx-auto relative">
                    {/* Background circles for depth */}
                    <div className="absolute inset-0 rounded-full border border-nippon-gold/20"></div>
                    <div className="absolute inset-3 rounded-full border border-nippon-gold/30"></div>
                    <div className="absolute inset-6 rounded-full border border-nippon-gold/40"></div>
                    
                    {/* Central icon with gold accent */}
                    <div className="absolute inset-12 rounded-full bg-nippon-gold/10 backdrop-blur-sm border-2 border-nippon-gold flex items-center justify-center gold-glow">
                      <step.icon className="w-16 h-16 text-nippon-gold" />
                    </div>
                  </div>

                  {/* Floating accent elements */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 border border-nippon-gold/40 bg-nippon-gold/10"></div>
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 border border-nippon-gold/40 bg-nippon-gold/10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connection lines between steps (desktop only) */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-nippon-gold/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}