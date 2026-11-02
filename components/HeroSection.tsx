import React from 'react';
import heroBackground from '../src/assets/img/hero/hero-5/hero-bg.svg';
import killuaImage from '../src/assets/img/about/about-4/killua.jpg';

const HeroSection: React.FC = () => {
  return (
    <div 
      className="hero-section hero-style-5 img-bg"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-content-wrapper">
              <h1 id="hero-title" className="mb-30">
                ¡Hola, soy Luis Ángel!
              </h1>

              <p className="hero-specialty">Desarrollo backend y aprendizaje continuo</p>
              <p className="mb-30">
                Soy estudiante de Ingeniería de Sistemas enfocado en desarrollo backend.
                Me interesa entender cómo funciona todo por dentro y crear
                soluciones que realmente resuelvan problemas.
              </p>

              <a href="#projects" className="button button-lg radius-50">
                Ver Proyectos <i className="lni lni-chevron-right" aria-hidden="true"></i>
              </a>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href="https://github.com/Luanva-G">GitHub</a>
                <a href="https://www.linkedin.com/in/luis-angel-aguilar-valdovinos-0567902a7/">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 align-self-end">
            <div className="hero-image">
              <img 
                src={killuaImage} 
                alt="" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;