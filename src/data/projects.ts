import imageToPdf from '../assets/img/projects/ImageToPdf.png';
import portfolio from '../assets/img/projects/fonod.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  imageAlt: string;
  repoUrl?: string;
  demoUrl?: string;
}

// Añadir solo información comprobada. Los enlaces y contribuciones no conocidos se omiten.
export const projects: Project[] = [
  {
    id: 'image-to-pdf',
    title: 'Convertidor de imágenes a PDF',
    description: 'Permite convertir imágenes a PDF de forma sencilla desde el navegador.',
    techStack: ['JavaScript', 'pdf-lib'],
    imageUrl: imageToPdf,
    imageAlt: 'Vista del convertidor de imágenes a PDF',
    demoUrl: 'https://img-to-pdf-converter-two.vercel.app',
  },
  {
    id: 'portfolio',
    title: 'Portafolio React',
    description: 'Portafolio personal para presentar proyectos, perfil y medios de contacto.',
    techStack: ['React', 'TypeScript', 'Vite'],
    imageUrl: portfolio,
    imageAlt: 'Vista del portafolio personal',
  },
];
