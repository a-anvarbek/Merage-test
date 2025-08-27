import SmoothScroll from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import Partnership from './components/Partnership';
import Footer from './components/Footer';

export default function PartnershipPage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">          
          {/* Partnership Page */}
          <Partnership />
          
          {/* Footer */}
          <Footer />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}