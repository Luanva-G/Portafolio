import React from 'react';
import killuaImage from '../src/assets/img/about/about-4/killua.jpg';

const HeroSection: React.FC = () => {
  return (
    <div 
      className="hero-section hero-style-5 img-bg p-10"
      style={{ backgroundImage: "url('/assets/img/hero/hero-5/hero-bg.svg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-content-wrapper">
              <h1 className="mb-30">
                Desarrollador enfocado en Backend
              </h1>

              <p className="mb-30">
                Construyo sistemas eficientes, escalables y bien diseñados.
                Me interesa entender cómo funciona todo por dentro y crear
                soluciones que realmente resuelvan problemas.
              </p>

              <a href="#proyect" className="button button-lg radius-50">
                Ver Proyectos <i className="lni lni-chevron-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-6 align-self-end">
            <div className="hero-image">
              <img 
                src={killuaImage} 
                alt="Ilustración desarrollador" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;