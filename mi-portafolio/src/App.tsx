import react from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Preloader from '../components/Preloader';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';
import ClientsLogoSection from '../components/ClientsLogoSection';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import React, { useState, useEffect } from 'react';


const App: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // 1. Mientras loading sea true, solo mostramos el Preloader
  if (loading) {
    return <Preloader />;
  }


  return (
    <>

<Preloader />

      
      <section id="home" className="hero-section-wrapper-5">
        <Header />
        <HeroSection />
      </section>

      <FeaturesSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <ClientsLogoSection />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;