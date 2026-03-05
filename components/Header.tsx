import React from 'react';
import headerLogo from '../src/assets/img/logo/Killua.svg';

// Interfaz para tipar los enlaces de navegación
interface NavLink {
  id: string;
  href: string;
  label: string;
  isActive?: boolean;
}

// Arreglo de enlaces para mantener el JSX limpio
const NAV_LINKS: NavLink[] = [
  { id: 'nav-home', href: '#home ', label: 'Inicio', isActive: true },
  { id: 'nav-feature', href: '#proyect ', label: 'Proyectos' },
  { id: 'nav-about', href: '#about ', label: 'Sobre mí' },
  { id: 'nav-pricing', href: '#pricing ', label: 'Precios' },
  { id: 'nav-contact', href: '#contact ', label: 'Contacto' },
];

const Header: React.FC = () => {
  return (
    <header className="header header-6 p-0">
      <div className="navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg p-0">
                
                {/* Logo */}
                <a className="navbar-brand" href="#home">
                  <img src={headerLogo} alt="Logo" />
                </a>
                
                {/* Botón Toggler nativo de Bootstrap */}
                <button 
                  className="navbar-toggler" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#navbarSupportedContent6" 
                  aria-controls="navbarSupportedContent6" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                {/* Menú de Navegación */}
                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent6">
                  <ul id="nav6" className="navbar-nav ms-auto">
                    {NAV_LINKS.map((link) => (
                      <li key={link.id} className="nav-item">
                        <a 
                          className={`page-scroll ${link.isActive ? 'active' : ''}`} 
                          href={link.href}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Acciones
                <div className="header-action d-flex">
                  <a href="#0"> <i className="lni lni-cart"></i> </a>
                  <a href="#0"> <i className="lni lni-alarm"></i> </a>
                </div> */}

              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;