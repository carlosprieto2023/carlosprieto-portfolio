import { useEffect, useState } from 'react';
import '../styles/header.css';

export default function Header({ lang, toggleLang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => {
    if (window.innerWidth <= 768) setMenuOpen((prev) => !prev);
  };

  const text = {
    en: { about: 'About Me', projects: 'Projects', contact: 'Contact' },
    es: { about: 'Acerca', projects: 'Proyectos', contact: 'Contacto' },
  };

  return (
    <header className="header">
      <div className="header_logo">
        <a href="#hero" aria-label="Go to top">
          C<span>P</span>
        </a>
      </div>

      {/* Hamburger */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Nav Menu */}
      <nav
        className={`nav ${menuOpen ? 'open' : ''}`}
        aria-label="Main navigation"
      >
        <ul className="nav__links">
          <li>
            <a href="#about" onClick={toggleMenu}>
              {text[lang].about}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              {text[lang].projects}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              {text[lang].contact}
            </a>
          </li>
        </ul>

        {/* Language Toggle pinned right */}
        <button
          className="lang-toggle"
          onClick={() => {
            toggleLang();
            if (isMobile) {
              setMenuOpen(false); // Close menu if mobile/tablet
            }
          }}
        >
          {lang === 'en' ? (
            <>
              <span role="img" aria-label="Español">
                🇪🇸
              </span>
              <span>ES</span>
            </>
          ) : (
            <>
              <span role="img" aria-label="English">
                🇬🇧
              </span>
              <span>EN</span>
            </>
          )}
        </button>
      </nav>

      {menuOpen && isMobile && (
        <div className="overlay" onClick={toggleMenu}></div>
      )}
    </header>
  );
}
