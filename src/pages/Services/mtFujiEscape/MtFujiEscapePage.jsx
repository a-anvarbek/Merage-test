// App.jsx

import React from "react";
import { SmoothScroll } from "./components/SmoothScroll";
import { ScrollReveal } from "./components/ScrollReveal";
import { MtFujiEscape } from "./components/MtFujiEscape";
import { Footer } from "./components/Footer";

export default function MtFujiEscapePage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Mt. Fuji Escape - Individual Tour Page */}
          <MtFujiEscape />

          {/* Footer */}
          <Footer />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}
