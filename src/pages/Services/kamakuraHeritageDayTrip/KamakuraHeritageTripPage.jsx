import SmoothScroll from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import KamakuraHeritageTrip from './components/KamakuraHeritageTrip';
import Footer from './components/Footer';

export default function KamakuraHeritageTripPage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Kamakura Heritage Trip - Individual Tour Page */}
          <KamakuraHeritageTrip />
          
          {/* Footer */}
          <Footer />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}
