import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { DemoHeroGeometric } from './components/ui/demo';
import OurJourney from './components/OurJourney';
import Features from './components/Features';
import Solutions from './components/Solutions';
import ContactForm from './components/ContactForm';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import TestimonialsPage from './components/TestimonialsPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import SecurityPage from './components/SecurityPage';
import Footer from './components/Footer';

// ScrollToTop component to handle scrolling to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// HomePage component to organize the main page sections
const HomePage = () => {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.js-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <DemoHeroGeometric />
      <OurJourney />
      <Features />
      <Solutions />
      <ContactForm />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-white font-outfit">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/security" element={<SecurityPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;