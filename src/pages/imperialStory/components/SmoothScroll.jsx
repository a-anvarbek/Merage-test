// /src/components/SmoothScroll.jsx
import { useEffect } from "react";

function SmoothScroll({ children }) {
  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;
    let scrollVelocity = 0;

    const updateScrollVelocity = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      scrollVelocity = (currentScrollY - lastScrollY) * 0.1;
      lastScrollY = currentScrollY;
    };

    const updateScrollElements = () => {
      if (ticking) return;

      requestAnimationFrame(() => {
        const viewportHeight = window.innerHeight;

        // velocity
        updateScrollVelocity();

        // parallax
        document.querySelectorAll("[data-scroll-parallax]").forEach((element) => {
          const rect = element.getBoundingClientRect();
          const speed = parseFloat(element.getAttribute("data-scroll-parallax") || "0");
          if (rect.bottom >= -200 && rect.top <= viewportHeight + 200) {
            const parallaxOffset = rect.top * speed;
            element.style.transform = `translate3d(0, ${parallaxOffset.toFixed(2)}px, 0)`;
          }
        });

        // fade
        document.querySelectorAll("[data-scroll-fade]").forEach((element) => {
          const rect = element.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distanceFromCenter = Math.abs(elementCenter - viewportHeight / 2);
          const maxDistance = viewportHeight;
          let opacity = 1 - distanceFromCenter / maxDistance;
          opacity = Math.max(0, Math.min(1, opacity));
          element.style.opacity = opacity.toFixed(3);
        });

        // scale
        document.querySelectorAll("[data-scroll-scale]").forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.bottom >= 0 && rect.top <= viewportHeight) {
            const elementCenter = rect.top + rect.height / 2;
            const distanceFromCenter = Math.abs(elementCenter - viewportHeight / 2);
            const maxDistance = viewportHeight / 2;
            const scale = 1 - (distanceFromCenter / maxDistance) * 0.02;
            const clamped = Math.max(0.98, Math.min(1, scale));
            element.style.transform = `scale(${clamped.toFixed(3)})`;
          }
        });

        // rotate (velocity-based)
        document.querySelectorAll("[data-scroll-rotate]").forEach((element) => {
          const maxRotation = parseFloat(element.getAttribute("data-scroll-rotate") || "0");
          const rotation = scrollVelocity * maxRotation * 0.02;
          const clamped = Math.max(-maxRotation, Math.min(maxRotation, rotation));
          element.style.transform = `rotate(${clamped.toFixed(2)}deg)`;
        });

        // blur (depth)
        document.querySelectorAll("[data-scroll-blur]").forEach((element) => {
          const rect = element.getBoundingClientRect();
          const maxBlur = parseFloat(element.getAttribute("data-scroll-blur") || "0");
          if (rect.bottom >= 0 && rect.top <= viewportHeight) {
            const elementCenter = rect.top + rect.height / 2;
            const distanceFromCenter = Math.abs(elementCenter - viewportHeight / 2);
            const normalized = distanceFromCenter / (viewportHeight / 2);
            const blur = Math.max(0, Math.min(maxBlur, normalized * maxBlur));
            element.style.filter = `blur(${blur.toFixed(1)}px)`;
          }
        });

        // brightness
        document.querySelectorAll("[data-scroll-brightness]").forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.bottom >= 0 && rect.top <= viewportHeight) {
            const elementCenter = rect.top + rect.height / 2;
            const distanceFromCenter = Math.abs(elementCenter - viewportHeight / 2);
            const maxDistance = viewportHeight / 2;
            const brightness = 1 - (distanceFromCenter / maxDistance) * 0.3;
            const clamped = Math.max(0.7, Math.min(1, brightness));
            element.style.filter = `brightness(${clamped.toFixed(2)})`;
          }
        });

        ticking = false;
      });

      ticking = true;
    };

    const handleScrollCore = () => {
      updateScrollElements();
    };

    // IntersectionObservers
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            const staggeredChildren = entry.target.querySelectorAll("[data-stagger]");
            staggeredChildren.forEach((child, index) => {
              setTimeout(() => child.classList.add("revealed"), index * 150);
            });
          }
        });
      },
      { root: null, rootMargin: "20% 0px", threshold: [0, 0.1, 0.3, 0.5, 0.7, 1] }
    );

    const dramaticObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const container = entry.target;
            const lines = container.querySelectorAll(".dramatic-line");
            lines.forEach((line, index) => {
              setTimeout(() => {
                line.classList.add("revealed");
                if (index === 0) setTimeout(() => line.classList.add("first-line-emphasis"), 200);
                if (index === lines.length - 1)
                  setTimeout(() => line.classList.add("final-line-glow"), 300);
              }, index * 800);
            });
          }
        });
      },
      { root: null, rootMargin: "0% 0px -25% 0px", threshold: 0.2 }
    );

    const luxuryCardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("luxury-ready");
        });
      },
      { root: null, rootMargin: "10% 0px", threshold: 0.1 }
    );

    const initializeElements = () => {
      document
        .querySelectorAll("[data-scroll-reveal]:not(.revealed)")
        .forEach((el) => revealObserver.observe(el));
      document
        .querySelectorAll(".dramatic-section")
        .forEach((section) => dramaticObserver.observe(section));
      document
        .querySelectorAll(".luxury-card, .floating-card")
        .forEach((card) => luxuryCardObserver.observe(card));
      updateScrollElements();
    };

    // resize
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => updateScrollElements(), 150);
    };

    // performance monitor (Vite)
    let frameCount = 0;
    let lastTime = performance.now();
    const monitorPerformance = () => {
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        if (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.MODE === "development") {
          // eslint-disable-next-line no-console
          console.log(`Scroll FPS: ${frameCount}`);
        }
        frameCount = 0;
        lastTime = now;
      }
    };

    const addLuxuryScrollEffects = () => {
      document.querySelectorAll("[data-scroll-momentum]").forEach((element) => {
        const momentum = parseFloat(element.getAttribute("data-scroll-momentum") || "1");
        const adjusted = scrollVelocity * momentum;
        element.style.transform = `translateY(${adjusted.toFixed(2)}px)`;
      });

      document.querySelectorAll(".gold-dust-particle").forEach((particle, index) => {
        const offset = Math.sin((scrollVelocity + index) * 0.1) * 2;
        particle.style.transform = `translateX(${offset}px)`;
      });
    };

    // single scroll handler so we can remove it
    const handleWindowScroll = () => {
      handleScrollCore();
      addLuxuryScrollEffects();
      monitorPerformance();
    };

    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    setTimeout(initializeElements, 100);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
      window.removeEventListener("resize", handleResize);
      revealObserver.disconnect();
      dramaticObserver.disconnect();
      luxuryCardObserver.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, []);

  return <div className="smooth-scroll-wrapper">{children}</div>;
}

export default SmoothScroll;
