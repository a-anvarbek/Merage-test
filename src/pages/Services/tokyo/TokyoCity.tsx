import SmoothScroll from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import TokyoCityHighlights from './components/TokyoCityHighlights';
import Footer from './components/Footer';

export default function TokyoCity() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Tokyo City Highlights - Individual Tour Page */}
          <TokyoCityHighlights />
          
          {/* Footer */}
          <Footer />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}