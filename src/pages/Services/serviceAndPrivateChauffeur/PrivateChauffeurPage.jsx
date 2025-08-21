import { useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import Services from './components/Services';
import PrivateChauffeurServices from './components/PrivateChauffeurServices';
import Footer from './components/Footer';

export default function PrivateChauffeurPage() {
  const [currentPage, setCurrentPage] = useState('services');

  const handleNavigateToService = (serviceKey) => {
    if (serviceKey === 'private-chauffeur') {
      setCurrentPage('private-chauffeur');
      // Scroll to top when navigating to subpage
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToServices = () => {
    setCurrentPage('services');
    // Scroll to services section when returning
    setTimeout(() => {
      document.getElementById('core-services')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {currentPage === 'services' && (
            <>
              {/* Services Main Page with luxury chauffeur hero background */}
              <Services onNavigateToService={handleNavigateToService} />
              
              {/* Footer */}
              <Footer />
            </>
          )}
          
          {currentPage === 'private-chauffeur' && (
            <>
              {/* Private Chauffeur Services Subpage */}
              <PrivateChauffeurServices onBack={handleBackToServices} />
              
              {/* Footer */}
              <Footer />
            </>
          )}
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}
