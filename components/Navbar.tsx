import React, { useState, useEffect, useRef } from 'react';

type NavLink = {
    id: string;
    label: string;
    href: string;
};

interface Props {
    brand?: string;
    links?: NavLink[];
}

const defaultLinks: NavLink[] = [
    { id: 'proyectos', label: 'Proyectos', href: '#proyect' }
];

const Navbar: React.FC<Props> = ({ brand = 'Mi Portafolio', links = defaultLinks }) => {
    const [open, setOpen] = useState(false);
    const [activeId, setActiveId] = useState<string>('');
    const navRef = useRef<HTMLElement | null>(null);

    const handleToggle = () => setOpen((s) => !s);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const id = href.slice(1);
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setOpen(false);
        }
    };

    useEffect(() => {
        const onScroll = () => {
            const sections = links.map(l => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
            let current = '';
            for (const sec of sections) {
                const rect = sec.getBoundingClientRect();
                if (rect.top <= 80 && rect.bottom > 80) {
                    current = sec.id;
                    break;
                }
            }
            setActiveId(current || '');
        };

        // adjust body padding to avoid content hidden under fixed navbar
        const navEl = navRef.current;
        if (navEl) {
            const h = navEl.getBoundingClientRect().height;
            document.body.style.paddingTop = `${h}px`;
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => {
            window.removeEventListener('scroll', onScroll);
            document.body.style.paddingTop = '';
        };
    }, [links]);

    return (
        <nav ref={(el)  => {navRef.current = el;}} className="navbar navbar-expand-lg navbar-light bg-white border-bottom fixed-top">
            <div className="container">
                <a
                    className="navbar-brand d-flex align-items-center"
                    href="#home"
                    onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById('home');
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        setOpen(false);
                    }}
                >
                    <span className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center me-2" style={{ width: 36, height: 36 }}>
                        <strong>Lu</strong>
                    </span>
                    <span className="fw-bold">{brand}</span>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded={open}
                    aria-label="Toggle navigation"
                    onClick={handleToggle}
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-lg-center">
                        {links.map((link) => (
                            <li className="nav-item" key={link.id}>
                                <a
                                    className={`nav-link ${activeId === link.id ? 'active text-primary' : 'text-dark'}`}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    aria-current={activeId === link.id ? 'page' : undefined}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}

                        <li className="nav-item ms-2 d-none d-lg-block">
                            <a href="#contacto" className="btn btn-primary" onClick={(e) => handleNavClick(e, '#contact')}>Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;