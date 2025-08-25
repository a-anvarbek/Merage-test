export default function SectionTransition() {
  return (
    <div className="relative h-24 -mb-12">
      {/* Subtle transition gradient */}
      <div className="absolute inset-0 section-transition-gradient"></div>
      
      {/* Elegant gold divider */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="gold-divider h-px w-32"></div>
      </div>
    </div>
  );
}