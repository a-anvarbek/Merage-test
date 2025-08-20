export default function TextureBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Japanese Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="washi-texture" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <rect width="200" height="200" fill="none" />
              <path d="M0,0 L200,200 M0,200 L200,0" stroke="#F8F7F4" strokeWidth="0.3" opacity="0.1" />
              <circle cx="50" cy="50" r="1" fill="#F8F7F4" opacity="0.05" />
              <circle cx="150" cy="150" r="1.5" fill="#F8F7F4" opacity="0.03" />
              <circle cx="100" cy="175" r="0.8" fill="#F8F7F4" opacity="0.07" />
            </pattern>
            
            <pattern id="asanoha-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect width="60" height="60" fill="none" />
              <g stroke="#D4AF37" strokeWidth="0.2" fill="none" opacity="0.08">
                <path d="M30,0 L45,25 L30,50 L15,25 Z" />
                <path d="M0,25 L15,0 L30,25 L15,50 Z" />
                <path d="M60,25 L45,0 L30,25 L45,50 Z" />
              </g>
            </pattern>

            <pattern id="seigaiha-pattern" x="0" y="0" width="100" height="50" patternUnits="userSpaceOnUse">
              <rect width="100" height="50" fill="none" />
              <g stroke="#C5A357" strokeWidth="0.15" fill="none" opacity="0.06">
                <path d="M0,50 Q25,25 50,50 Q75,25 100,50" />
                <path d="M0,40 Q25,15 50,40 Q75,15 100,40" />
                <path d="M0,30 Q25,5 50,30 Q75,5 100,30" />
              </g>
            </pattern>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#washi-texture)" />
        </svg>
      </div>

      {/* Subtle Cultural Patterns */}
      <div className="absolute inset-0 opacity-[0.008]">
        <svg width="100%" height="100%" className="w-full h-full">
          <rect width="100%" height="100%" fill="url(#asanoha-pattern)" />
        </svg>
      </div>

      {/* Wave Pattern (Seigaiha) */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-[0.012]">
        <svg width="100%" height="100%" className="w-full h-full">
          <rect width="100%" height="100%" fill="url(#seigaiha-pattern)" />
        </svg>
      </div>

      {/* Environmental Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-nippon-dusk/5 via-transparent to-nippon-charcoal/10"></div>
      
      {/* Seasonal Time Awareness */}
      <div className="absolute inset-0 bg-gradient-radial from-nippon-gold/[0.001] via-transparent to-nippon-dusk/[0.002]"></div>
    </div>
  );
}
