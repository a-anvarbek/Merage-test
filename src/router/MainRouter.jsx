// Libraries
import { Route, Routes } from "react-router";

import ROUTES from "./routes";

// Imported pages
import Home from "../pages/home/Home";
import ConciergePage from "../pages/concierge/ConciergePage";
import ImperialStoryPage from "../pages/imperialStory/ImperialStoryPage";

// Concierge Services
import LuxuryTransportPage from "../pages/conciergeServices/luxuryTransport/LuxuryTransportPage";
import AccommodationReservationsPage from "../pages/conciergeServices/accommodationReservations/AccommodationReservationsPage";
import ExclusivePage from "../pages/conciergeServices/exclusiveExperience/ExclusivePage";
import CuratedDay from "../pages/conciergeServices/curatedDay/CuratedDay";

// Services
import PrivateChauffeurPage from "../pages/services/serviceAndPrivateChauffeur/PrivateChauffeurPage";
import MtFujiEscapePage from "../pages/services/mtFujiEscape/MtFujiEscapePage";


// // Payments
// import PaymentIntent from "../pages/auth/PaymentIntent";
// import PaymentCanceled from "../pages/auth/PaymentCanceled";
// import PaymentSuccess from "../pages/auth/PaymentSuccess";

const MainRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.STORY} element={<ImperialStoryPage />} />

      {/* Concierge */}
      <Route path={ROUTES.CONCIERGE} element={<ConciergePage />} />

      {/* Concierge Services */}
      <Route path={ROUTES.ACCOMMODATION} element={<AccommodationReservationsPage />} />
      <Route path={ROUTES.LUXURY} element={<LuxuryTransportPage />} />
      <Route path={ROUTES.CURATED} element={<CuratedDay />} />
      <Route path={ROUTES.EXCLUSIVE} element={<ExclusivePage />} />

      {/* Services */}
      <Route path={ROUTES.PRIVATE} element={<PrivateChauffeurPage />} />
      <Route path={ROUTES.ESCAPE} element={<MtFujiEscapePage />} />
    </Routes>
  );
};

export default MainRouter;
