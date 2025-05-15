import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header>
      <div className="logo-container">CP</div>
      <div>😁</div>
      <nav>
        <ul className="navbar-container">
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
    </header>
  );
}
