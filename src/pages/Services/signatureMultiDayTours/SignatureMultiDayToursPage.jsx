import SmoothScroll from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import SignatureMultiDayTours from './components/SignatureMultiDayTours';
import Footer from './components/Footer';

export default function SignatureMultiDayToursPage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Signature Multi-Day Tours Page */}
          <SignatureMultiDayTours />

          {/* Footer */}
          <Footer />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}
