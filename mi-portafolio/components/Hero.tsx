import React from "react";

const scrollToId = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith('#')) {
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Hero: React.FC = () => {
    return (
        <section id="home" aria-label="Hero" className="hero d-flex align-items-center justify-content-center text-center py-5">
            <div className="container">
                <h1 className="display-4 fw-bold">¡Hola, soy Luis Ángel!</h1>
                <p className="lead text-muted">Desarrollador de Software Junior — construyendo soluciones web modernas.</p>

                <div className="mt-4">
                    <a href="#proyectos" className="btn btn-primary btn-lg me-2" onClick={(e) => scrollToId(e, '#proyectos')}>Ver mis proyectos</a>
                    <a href="#contacto" className="btn btn-outline-secondary btn-lg" onClick={(e) => scrollToId(e, '#contacto')}>Contáctame</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
