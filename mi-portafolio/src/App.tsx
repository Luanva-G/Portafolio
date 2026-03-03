import React from 'react'
import './App.css'

import ProjectCard from '../components/ProjectCard';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  repoUrl?: string;
  demoUrl?: string;
}

const myProjects: Project[] = [
  {
    id: 1,
    title: "Reproductor de Música",
    description: "Aplicación de escritorio con interfaz gráfica y un motor de audio de alto rendimiento.",
    techStack: ["Python", "C++", "PySide6", "miniaudio"],
    // imageUrl: '/assets/music-player.png',
    // repoUrl: 'https://github.com/tuusuario/music-player',
  },
  {
    id: 2,
    title: "Convertidor a PDF",
    description: "Aplicación web para transformar imágenes a formato PDF de forma rápida y eficiente.",
    techStack: ["Next.js", "Node.js", "Tailwind CSS"],
    // demoUrl: 'https://tu-demo.vercel.app',
    // repoUrl: 'https://github.com/tuusuario/pdf-converter',
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="proyectos" className="container mt-5">
      <h2 className="mb-4">Mis Proyectos</h2>

      <div className="row">
        {myProjects.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <ProjectCard
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              imageUrl={project.imageUrl}
              repoUrl={project.repoUrl}
              demoUrl={project.demoUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
