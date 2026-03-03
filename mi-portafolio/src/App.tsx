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


const App: React.FC = () => {
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