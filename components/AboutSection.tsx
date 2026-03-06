import React from 'react';
import aversisi from '../src/assets/img/about/about-4/aversisi.jpg';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section about-style-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="about-content-wrapper">
              <div className="section-title mb-30">
                <h3 className="mb-25">
                  Construyendo sistemas sólidos y escalables
                </h3>
                <p>
                  Soy estudiante de Ingeniería de Sistemas enfocado en desarrollo
                  backend y arquitectura en la nube. Me interesa entender cómo
                  funcionan los sistemas por dentro y crear soluciones eficientes,
                  claras y mantenibles.
                </p>
              </div>

              <ul>
                <li>
                  Manejo Java, TypeScript y Python.
                </li>
                <li>
                  Aprendiendo Cloud y desarrollo backend con Node.js y MongoDB.
                </li>
                <li>
                  Enfocado en estructuras de datos, rendimiento y diseño de sistemas.
                </li>
              </ul>

              <a href="#contact" className="button button-lg radius-10">
                Contáctame
              </a>
            </div>
          </div>

          <div className="col-xl-7 col-lg-6">
            <div className="about-image text-lg-right">
              <img 
                src={aversisi} 
                alt="Otro Killua " 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;