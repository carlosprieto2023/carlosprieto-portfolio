import { useState } from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark-mode');
  }

  return (
    <header className="site-header">
      <div className="logo">CP</div>

      <nav className="navbar">
        <ul className="menu">
          <li>
            <Link to="about" smooth={true} duration={500} offset={-60}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-60}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-60}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {darkMode ? '🌙' : '☀️'}
      </button>
    </header>
  );
}
