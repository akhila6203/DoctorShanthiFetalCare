import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/layout/ScrollToTop";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
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