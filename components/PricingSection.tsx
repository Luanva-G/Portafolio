import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" tabIndex={-1} aria-labelledby="pricing-title" className="pricing-section pricing-style-4 bg-light">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Lado Izquierdo: Título y Descripción */}
          <div className="col-xl-5 col-lg-6">
            <div className="section-title mb-60">
              <h2 id="pricing-title" className="h3 mb-15">Planes y Tarifas</h2>
              <p>
                Ofrezco servicios de desarrollo de software, automatización y consultoría a una tarifa accesible. 
                Ideal para proyectos a medida, scripts específicos o apoyo técnico especializado.
              </p>
            </div>
          </div>

          {/* Lado Derecho: Tarjeta de Precio */}
          <div className="col-xl-7 col-lg-6">
            <div className="pricing-active-wrapper">
              <div className="pricing-active">
                <div className="single-pricing-wrapper">
                  <div className="single-pricing">
                    <h3 className="h6 pricing-service">Desarrollo a Medida</h3>
                    <p className="h4 pricing-label">Tarifa por Hora</p>
                    <p className="h3 pricing-price">$ 3.00 USD</p>
                    <ul>
                      {/* Enlistamos tus habilidades clave */}
                      <li>Desarrollo web y scripts (Python, React)</li>
                      <li>Programación en C++, Java y Bases de Datos</li>
                      <li>Configuración de entornos Linux y Docker</li>
                      <li>Comunicación constante y transparencia</li>
                    </ul>
                    {/* El botón ahora apunta directamente a tu formulario de contacto */}
                    <a href="#contact" className="button radius-30">Hablemos de tu Proyecto</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;