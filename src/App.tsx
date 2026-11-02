import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Projects from '../components/Projects';
import AboutSection from '../components/AboutSection';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <section id="home" tabIndex={-1} className="hero-section-wrapper-5" aria-labelledby="hero-title">
          <HeroSection />
        </section>
        <Projects />
        <AboutSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
