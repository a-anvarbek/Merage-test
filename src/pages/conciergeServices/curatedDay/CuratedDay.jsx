import SmoothScroll from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import CuratedDayExperiences from './components/CuratedDayExperiences';
import Footer from './components/Footer';

export default function CuratedDay() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Curated Day Experiences Subpage - Second of 7 Concierge Service Pages */}
          <CuratedDayExperiences />
          
          {/* Footer */}
          <Footer />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}