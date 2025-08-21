import SmoothScroll from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import ExclusiveExperiences from './components/ExclusiveExperiences';
import Footer from './components/Footer';

export default function ExclusivePage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Exclusive Experiences Subpage - Third of 7 Concierge Service Pages */}
          <ExclusiveExperiences />
          
          {/* Footer */}
          <Footer />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}