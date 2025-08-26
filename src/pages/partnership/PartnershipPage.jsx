import SmoothScroll from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import Navigation from './components/Navigation';
import Partnership from './components/Partnership';
import Footer from './components/Footer';

export default function PartnershipPage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Navigation */}
          <Navigation />
          
          {/* Partnership Page */}
          <Partnership />
          
          {/* Footer */}
          <Footer />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}