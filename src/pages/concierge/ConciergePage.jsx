import SmoothScroll from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import Concierge from './components/Concierge';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function ConciergePage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Concierge Page - Enhanced luxury landing page showcasing authentic Japanese experiences */}
          <Concierge />
          
          {/* Contact & CTA Section - Sophisticated contact methods */}
          <ContactCTA />
          
          {/* Footer */}
          <Footer />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}
