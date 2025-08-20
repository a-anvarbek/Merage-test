import { Route, Routes } from "react-router";

import ROUTES from "./routes";

// Imported pages
import Home from "../pages/home/Home";
import Concierge from "../pages/concierge/ConciergePage";
import ImperialStoryPage from "../pages/imperialStory/ImperialStoryPage";

// // Payments
// import PaymentIntent from "../pages/auth/PaymentIntent";
// import PaymentCanceled from "../pages/auth/PaymentCanceled";
// import PaymentSuccess from "../pages/auth/PaymentSuccess";

const MainRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CONCIERGE} element={<Concierge />} />
      <Route path={ROUTES.STORY} element={<ImperialStoryPage />} />
    </Routes>
  );
};

export default MainRouter;
