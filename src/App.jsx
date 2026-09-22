import { BrowserRouter, Routes, Route,Navigate, } from "react-router-dom";

import ScrollToTop from "./components/layout/ScrollToTop";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
// import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";

import AdvancedFetalScans from "./pages/AdvancedFetalScans";
import ScreeningDiagnostics from "./pages/ScreeningDiagnostics";
import SpecializedCareProcedures from "./pages/SpecializedCareProcedures";
// import FetalServices from "./pages/FetalServices";
// import FetalScans from "./pages/FetalScans";
// import FetalProcedures from "./pages/FetalProcedures";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
            <Route
            path="/services"
            element={
              <Navigate
                to="/services/advanced-fetal-scans"
                replace
              />
            }
          />

          <Route
            path="/services/advanced-fetal-scans"
            element={<AdvancedFetalScans />}
          />

          <Route
            path="/services/screening-diagnostics"
            element={<ScreeningDiagnostics />}
          />

          <Route
            path="/services/specialized-care-procedures"
            element={<SpecializedCareProcedures />}
          />
          {/* <Route path="/services" element={<Services />} />

          <Route
  path="/services/fetal-services"
  element={<FetalServices />}
/>

<Route
  path="/services/fetal-scans"
  element={<FetalScans />}
/>

<Route
  path="/services/fetal-procedures"
  element={<FetalProcedures />}
/> */}

          <Route
            path="/testimonials"
            element={<Testimonials />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}