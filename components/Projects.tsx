import React from "react";
import ImgToPdf from "../src/assets/img/projects/ImageToPdf.png";
import Portafolio from "../src/assets/img/projects/fonod.png";

type Proyecto = {
  titulo: string;
  descripcion: string;
  imagen: string;
  link: string;
};

const proyectos: Proyecto[] = [
  {
    titulo: "Convertidor de Imagenes a PDF",
    descripcion: "Hecho en JS con pdf-lib, permite convertir imágenes a PDF de forma sencilla.",
    imagen: ImgToPdf,
    link: "https://img-to-pdf-converter-two.vercel.app"
  },
  {
    titulo: "Portafolio React",
    descripcion: "Portafolio personal con React y TypeScript.",
    imagen: Portafolio,
    link: "/#"
  },
  
];

const Projects: React.FC = () => {
  return (
    <section id="proyect" className="feature-section pt-120 pb-120 bg-light">
      <div className="container">

        <div className="section-title text-center mb-60">
          <h3>Mi Portafolio de Proyectos</h3>
          <p>
            Desarrollo sistemas enfocados en rendimiento y escalabilidad.
          </p>
        </div>

        <div className="projects-carousel">
          <div className="projects-track">

            {proyectos.concat(proyectos).map((p, i) => (
              <div key={i} className="project-card">

                <img 
                  src={p.imagen} 
                  alt={p.titulo}
                  className="project-img"
                />

                <h4>{p.titulo}</h4>

                <p>{p.descripcion}</p>

                <a 
                  href={p.link} 
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Ver Proyecto →
                </a>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;