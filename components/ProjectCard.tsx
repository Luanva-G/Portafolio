import type { Project } from '../src/data/projects';

function isPublicUrl(value?: string): value is string {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

export default function ProjectCard({ id, title, description, techStack, imageUrl, imageAlt, repoUrl, demoUrl }: Project) {
  const titleId = `project-${id}`;
  return (
    <article className="card project-card h-100 shadow-sm" aria-labelledby={titleId}>
      <img src={imageUrl} alt={imageAlt} className="card-img-top project-img" loading="lazy" decoding="async" />
      <div className="card-body d-flex flex-column">
        <h3 id={titleId} className="h5 card-title">{title}</h3>
        <p className="card-text flex-grow-1">{description}</p>
        <ul className="d-flex flex-wrap gap-2 mb-3" aria-label={`Tecnologías de ${title}`}>
          {techStack.map(tech => <li key={tech}><span className="badge bg-secondary">{tech}</span></li>)}
        </ul>
        <div className="d-flex flex-wrap gap-2">
          {isPublicUrl(demoUrl) && <a href={demoUrl} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer" aria-label={`Ver demo de ${title} (nueva pestaña)`}>Ver demo</a>}
          {isPublicUrl(repoUrl) && <a href={repoUrl} className="btn btn-outline-secondary" target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${title} (nueva pestaña)`}>Código</a>}
        </div>
      </div>
    </article>
  );
}
