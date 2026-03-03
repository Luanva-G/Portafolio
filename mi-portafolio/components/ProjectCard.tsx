import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  repoUrl?: string;
  demoUrl?: string;
}

const makeId = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, imageUrl, repoUrl, demoUrl }) => {
    const id = `project-${makeId(title)}`;

    return (
        <article className="card h-100 shadow-sm" aria-labelledby={id}>
            {imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={imageUrl} alt={`${title} screenshot`} className="card-img-top" />
            )}

            <div className="card-body d-flex flex-column">
                <h3 id={id} className="h5 card-title">{title}</h3>
                <p className="card-text text-muted flex-grow-1">{description}</p>

                <div className="mb-3">
                    {techStack.map((tech) => (
                        <span key={tech} className="badge bg-secondary me-1 mb-1">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="d-flex gap-2">
                    {demoUrl && (
                        <a href={demoUrl} className="btn btn-sm btn-outline-primary" target="_blank" rel="noopener noreferrer" aria-label={`Ver demo de ${title}`}>
                            Ver demo
                        </a>
                    )}

                    {repoUrl && (
                        <a href={repoUrl} className="btn btn-sm btn-outline-secondary" target="_blank" rel="noopener noreferrer" aria-label={`Ver repositorio de ${title}`}>
                            Código
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;