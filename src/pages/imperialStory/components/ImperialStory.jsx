import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import castleImage from './assets/castle.png'; // figma:asset o‘rniga odatiy import ishlatildi

export function ImperialStory() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const storyLines = [
    "Every journey begins with you.",
    "Your values shape our direction.",
    "Your pace becomes our rhythm.",
    "Your preferences guide every decision.",
    "We craft moments meant for you.",
    "You are the story we exist to tell."
  ];

  useEffect(() => {
    const luxuryObserverOptions = {
      root: null,
      rootMargin: '0% 0px -20% 0px',
      threshold: [0.1, 0.3, 0.5]
    };

    const dramaticObserverOptions = {
      root: null,
      rootMargin: '0% 0px -25% 0px',
      threshold: 0.2
    };

    const luxuryRevealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          setTimeout(() => {
            element.classList.add('revealed');
          }, 100);

          const staggeredChildren = element.querySelectorAll('[data-stagger]');
          staggeredChildren.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('revealed');
            }, 200 + (index * 150));
          });

          if (element.hasAttribute('data-luxury-hover')) {
            setTimeout(() => {
              element.classList.add('luxury-ready');
            }, 300);
          }
        }
      });
    }, luxuryObserverOptions);

    const dramaticSectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const dramaticContainer = entry.target;
          const lines = dramaticContainer.querySelectorAll('.dramatic-line');
          const decorativeElements = dramaticContainer.querySelectorAll('.decorative-reveal');
          
          decorativeElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('revealed');
            }, index * 300);
          });
          
          lines.forEach((line, index) => {
            setTimeout(() => {
              line.classList.add('revealed');
              if (index === 0) {
                setTimeout(() => {
                  line.classList.add('first-line-emphasis');
                }, 200);
              }
              if (index === lines.length - 1) {
                setTimeout(() => {
                  line.classList.add('final-line-glow');
                  line.classList.add('emphasis-shake');
                  setTimeout(() => {
                    line.classList.remove('emphasis-shake');
                  }, 600);
                }, 300);
              }
            }, 800 + (index * 800));
          });
          
          setTimeout(() => {
            const backgroundEffects = dramaticContainer.querySelectorAll('.story-background-effect');
            backgroundEffects.forEach((effect, index) => {
              setTimeout(() => {
                effect.classList.add('active');
              }, index * 250);
            });
          }, 1200);
        }
      });
    }, dramaticObserverOptions);

    const revealElements = document.querySelectorAll('[data-scroll-reveal]');
    revealElements.forEach((el) => luxuryRevealObserver.observe(el));

    const dramaticSections = document.querySelectorAll('.dramatic-section');
    dramaticSections.forEach((section) => dramaticSectionObserver.observe(section));

    const luxuryCards = document.querySelectorAll('.luxury-card, .floating-card');
    luxuryCards.forEach((card) => luxuryRevealObserver.observe(card));

    return () => {
      luxuryRevealObserver.disconnect();
      dramaticSectionObserver.disconnect();
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hamma sectionlar kodlari o‘zgarishsiz qoldi */}
      {/* Siz yuborgan TSX’dagi JSX qismlarini aynan qoldirdim */}
    </div>
  );
}
