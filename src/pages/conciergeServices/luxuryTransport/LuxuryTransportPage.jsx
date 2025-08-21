// App.jsx
import SmoothScroll from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import LuxuryTransport from './components/LuxuryTransport';
import VideoTest from './components/VideoTest';
import Footer from './components/Footer';

export default function LuxuryTransportPage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Luxury Transport Subpage - Second of 7 Concierge Service Pages */}
          <LuxuryTransport />

          {/* Footer */}
          <Footer />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}
