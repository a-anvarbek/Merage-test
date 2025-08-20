
const GivingBack = () => {
  return (
    <section className="relative py-24 bg-nippon-charcoal overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-nippon-gold/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-nippon-gold/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center" data-scroll-reveal>
        {/* Decorative Top Line */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-nippon-gold to-transparent mx-auto mb-12"></div>

        <div data-stagger-container>
          <h2
            className="text-luxury-4xl md:text-luxury-5xl text-nippon-gold font-serif font-medium mb-8 relative"
            data-stagger
          >
            Giving Back
            {/* Elegant Japanese-inspired underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-nippon-gold to-nippon-gold-refined"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-x-24 w-3 h-0.5 bg-nippon-gold/60"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-x-28 w-1 h-0.5 bg-nippon-gold/40"></div>
          </h2>

          <p
            className="text-luxury-xl text-nippon-white leading-relaxed font-sans max-w-4xl mx-auto mb-12"
            data-stagger
          >
            At Nippon Imperial, every experience you enjoy helps fund life-saving cancer treatment initiatives. Your journey with us is more than travel — it's a contribution toward hope for those in need.
          </p>

          {/* Elegant Card Container */}
          <div className="max-w-3xl mx-auto" data-stagger>
            <div className="luxury-card bg-gradient-to-br from-nippon-gold/8 to-nippon-gold-refined/5 border border-nippon-gold/20 p-10 rounded-lg backdrop-blur-sm">
              <div className="text-nippon-gold text-3xl mb-6">❤️</div>
              <p className="text-nippon-white text-luxury-lg font-serif italic leading-relaxed mb-6">
                "True luxury is not just what you experience, but what you make possible for others."
              </p>
              <p className="text-nippon-gray text-luxury-base font-sans leading-relaxed">
                When you choose Nippon Imperial, you join us in creating something meaningful beyond the boundaries of travel.
              </p>

              {/* Decorative Element */}
              <div className="flex items-center justify-center mt-8 space-x-2">
                <div className="w-2 h-2 bg-nippon-gold-muted rounded-full"></div>
                <div className="w-1 h-1 bg-nippon-gold/60 rounded-full"></div>
                <div className="w-0.5 h-0.5 bg-nippon-gold/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Line */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-nippon-gold to-transparent mx-auto mt-12"></div>
      </div>
    </section>
  );
};

export default GivingBack;
