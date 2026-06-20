import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ROICalculator from './components/ROICalculator';
import MarketingGrader from './components/MarketingGrader';
import AICopyplay from './components/AICopyplay';
import AgencyReviews from './components/AgencyReviews';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      // The user says "theme b orange o l blanc 7san" (light mode/white by default)
      return saved === 'dark'; // Defaults to false -> Light Mode
    }
    return false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleNavigate = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      // Offset slightly to account for the sticky navbar height
      const navbarHeight = 72; // Average height of Navbar + microbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    // Elegant system intro greeting or logging on mount
    console.log("Welcome to MARKEDIA Agency — Digital growth experts in Béni Mellal, Morocco.");
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] dark:bg-stone-950 font-sans text-stone-800 dark:text-stone-200 antialiased selection:bg-brand-orange selection:text-white pb-0 transition-colors duration-300">
      {/* Dynamic Header / Navigation */}
      <Navbar onNavigate={handleNavigate} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main landing sections */}
      <main className="w-full">
        {/* Hero Section */}
        <Hero onNavigate={handleNavigate} isDarkMode={isDarkMode} />

        {/* Agency Services Catalog */}
        <Services onNavigate={handleNavigate} isDarkMode={isDarkMode} />

        {/* Case Studies / Portfolio */}
        <Portfolio onNavigate={handleNavigate} isDarkMode={isDarkMode} />

        {/* Growth & ROI Simulator */}
        <ROICalculator onNavigate={handleNavigate} isDarkMode={isDarkMode} />

        {/* Custom Digital Audit Grader */}
        <MarketingGrader onNavigate={handleNavigate} isDarkMode={isDarkMode} />

        {/* AI Copywriting Sandbox tool */}
        <AICopyplay isDarkMode={isDarkMode} />

        {/* Dynamic Reviews and Testimonials */}
        <AgencyReviews isDarkMode={isDarkMode} />

        {/* Agency Story, Mission, & Team */}
        <AboutUs onNavigate={handleNavigate} isDarkMode={isDarkMode} />

        {/* Master Contact & Quote Hub */}
        <ContactUs isDarkMode={isDarkMode} />
      </main>

      {/* Modern Footer */}
      <Footer onNavigate={handleNavigate} isDarkMode={isDarkMode} />
    </div>
  );
}

