import  SmoothScroll  from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import AccommodationReservations from './components/AccommodationReservations';
import Footer from './components/Footer';

const AccommodationReservationsPage = () => {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Accommodation Reservations Subpage - First of 7 Concierge Service Pages */}
          <AccommodationReservations />
          
          {/* Footer */}
          <Footer />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
};

export default AccommodationReservationsPage;
