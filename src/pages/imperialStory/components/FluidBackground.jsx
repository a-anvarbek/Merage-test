import { useEffect, useState } from 'react';

export default function FluidBackground({ children }) {
  const [currentBgColor, setCurrentBgColor] = useState('#000000');

  useEffect(() => {
    // Define section color mapping with scroll positions
    const sectionColors = [
      { start: 0, end: 0.25, color: '#000000' }, // Hero - nippon-black
      { start: 0.25, end: 0.5, color: '#1e2a3a' }, // Our Story - nippon-dusk-navy  
      { start: 0.5, end: 0.65, color: '#000000' }, // Our Principles - nippon-black
      { start: 0.65, end: 0.85, color: '#1a2332' }, // You Are Our Story - nippon-charcoal
      { start: 0.85, end: 1, color: '#1a2332' }, // CTA - nippon-charcoal
    ];

    let ticking = false;

    const updateBackgroundColor = () => {
      if (ticking) return;

      requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = Math.min(scrollTop / documentHeight, 1);

        // Find current section based on scroll progress
        let targetColor = '#000000';
        let currentSection = null;
        let nextSection = null;

        for (let i = 0; i < sectionColors.length; i++) {
          const section = sectionColors[i];
          if (scrollProgress >= section.start && scrollProgress <= section.end) {
            currentSection = section;
            nextSection = sectionColors[i + 1];
            break;
          }
        }

        if (currentSection) {
          if (nextSection && scrollProgress > currentSection.start) {
            // Calculate transition progress within current section
            const sectionProgress =
              (scrollProgress - currentSection.start) / (currentSection.end - currentSection.start);

            // Smooth transition between colors
            if (sectionProgress > 0.7) {
              const transitionProgress = (sectionProgress - 0.7) / 0.3;
              targetColor = interpolateColors(currentSection.color, nextSection.color, transitionProgress);
            } else {
              targetColor = currentSection.color;
            }
          } else {
            targetColor = currentSection.color;
          }
        }

        setCurrentBgColor(targetColor);
        ticking = false;
      });

      ticking = true;
    };

    // Color interpolation function
    const interpolateColors = (color1, color2, factor) => {
      const rgb1 = hexToRgb(color1);
      const rgb2 = hexToRgb(color2);

      if (!rgb1 || !rgb2) return color1;

      const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * factor);
      const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * factor);
      const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * factor);

      return `rgb(${r}, ${g}, ${b})`;
    };

    // Helper function to convert hex to RGB
    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
    };

    // Throttled scroll handler
    const handleScroll = () => {
      updateBackgroundColor();
    };

    // Initial call
    updateBackgroundColor();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="min-h-screen transition-colors duration-1000 ease-out"
      style={{
        backgroundColor: currentBgColor,
        backgroundImage: `radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.03) 0%, transparent 50%),
                         radial-gradient(circle at 80% 20%, rgba(197, 163, 87, 0.02) 0%, transparent 50%),
                         radial-gradient(circle at 40% 40%, rgba(26, 35, 50, 0.4) 0%, transparent 50%)`,
      }}
    >
      {children}
    </div>
  );
}
