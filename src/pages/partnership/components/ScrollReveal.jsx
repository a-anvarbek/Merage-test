import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children }) {
  const observerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll reveal
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    // Observe all elements with data-scroll-reveal
    const revealElements = document.querySelectorAll('[data-scroll-reveal]');
    revealElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    // Parallax elements
    const parallaxElements = document.querySelectorAll('[data-scroll-parallax]');

    const handleScroll = () => {
      const scrolled = window.pageYOffset;

      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-scroll-speed') || '0.1');
        const yPos = -(scrolled * speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return <>{children}</>;
}
