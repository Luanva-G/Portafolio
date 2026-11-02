import { useEffect, useRef, useState } from 'react';
import headerLogo from '../src/assets/img/logo/Killua.svg';

const links = [
  { id: 'home', label: 'Inicio' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'pricing', label: 'Precios' },
  { id: 'contact', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const rowRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const updateActive = () => {
      const offset = row.getBoundingClientRect().height + 24;
      let current = 'home';
      for (const link of links) {
        const section = document.getElementById(link.id);
        if (section && section.getBoundingClientRect().top <= offset) current = link.id;
      }
      if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = links[links.length - 1].id;
      }
      setActiveId(current);
    };
    const measure = () => {
      document.documentElement.style.setProperty('--nav-height', `${row.getBoundingClientRect().height}px`);
      updateActive();
    };
    const observer = new ResizeObserver(measure);
    observer.observe(row);
    const initialFrame = requestAnimationFrame(() => {
      measure();
      // El destino puede no existir aún cuando el navegador procesa el hash inicial.
      const initialId = window.location.hash.slice(1);
      if (links.some(link => link.id === initialId)) {
        document.getElementById(initialId)?.scrollIntoView({ behavior: 'instant' });
      }
    });
    const onResize = () => {
      if (window.matchMedia('(min-width: 992px)').matches) setOpen(false);
      measure();
    };
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(initialFrame);
      observer.disconnect();
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', onResize);
      document.documentElement.style.removeProperty('--nav-height');
    };
  }, []);

  return (
    <header className="site-header bg-white border-bottom fixed-top">
      <nav className="container" aria-label="Navegación principal" onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}>
        <div ref={rowRef} className="navbar-row">
          <a className="navbar-brand" href="#home" aria-label="Luis Ángel, inicio" onClick={() => setOpen(false)}>
            <img src={headerLogo} alt="" className="brand-illustration" />
            <span>Luis Ángel</span>
          </a>
          <button ref={toggleRef} className="navbar-toggler" type="button"
            aria-controls="main-navigation" aria-expanded={open}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}>
            <span aria-hidden="true">☰</span>
          </button>
          <div id="main-navigation" className={`navigation-menu${open ? ' is-open' : ''}`}>
            <ul className="navbar-nav">
              {links.map(link => (
                <li key={link.id} className="nav-item">
                  <a className={`nav-link${activeId === link.id ? ' active' : ''}`} href={`#${link.id}`}
                    aria-current={activeId === link.id ? 'location' : undefined}
                    onClick={() => setOpen(false)}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
