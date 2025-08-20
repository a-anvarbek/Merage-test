import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'story', label: 'Story', kanji: '物語' },
    { id: 'services', label: 'Services', kanji: '服務' },
    { id: 'essence', label: 'Essence', kanji: '本質' },
    { id: 'difference', label: 'Difference', kanji: '違い' },
    { id: 'process', label: 'Process', kanji: '過程' },
    { id: 'contact', label: 'Contact', kanji: '連絡' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-nippon-black/95 backdrop-blur-lg border-b border-nippon-gold-muted/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Imperial Logo/Brand */}
          <div className="flex flex-col items-center">
            <div className="text-nippon-gold font-serif tracking-luxury text-xl">
              NIPPON IMPERIAL
            </div>
            <div className="text-nippon-gold-muted text-xs tracking-imperial mt-1">
              帝国の旅
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative py-2"
              >
                <div className="text-nippon-ivory hover:text-nippon-gold transition-colors duration-300 font-sans text-sm tracking-refined uppercase">
                  {item.label}
                </div>
                <div className="text-nippon-gold-muted/60 text-xs tracking-wide group-hover:text-nippon-gold-muted transition-colors duration-300">
                  {item.kanji}
                </div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-nippon-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <div className="w-6 h-5 flex flex-col justify-between cursor-pointer group">
              <div className="w-full h-px bg-nippon-gold group-hover:bg-nippon-gold-refined transition-colors duration-300"></div>
              <div className="w-full h-px bg-nippon-gold group-hover:bg-nippon-gold-refined transition-colors duration-300"></div>
              <div className="w-full h-px bg-nippon-gold group-hover:bg-nippon-gold-refined transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
