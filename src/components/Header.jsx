import { useState } from 'react';
import '../styles/Header1.css';
// import '../styles/header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <a href="#hero" aria-label="Go to top">
            CP
          </a>
        </div>

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

        <nav
          className={`nav ${menuOpen ? 'open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="nav-links">
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
