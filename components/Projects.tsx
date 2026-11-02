import ProjectCard from './ProjectCard';
import { projects } from '../src/data/projects';

export default function Projects() {
  return (
    <section id="projects" tabIndex={-1} aria-labelledby="projects-title" className="feature-section pt-120 pb-120 bg-light">
      <div className="container">
        <div className="section-title text-center mb-60">
          <h2 id="projects-title" className="h3">Mi portafolio de proyectos</h2>
          <p>Una selección de mis proyectos y las tecnologías con las que trabajo.</p>
        </div>
        <div className="row g-4">
          {projects.map(project => <div className="col-md-6 col-xl-4" key={project.id}><ProjectCard {...project} /></div>)}
        </div>
      </div>
    </section>
  );
}
