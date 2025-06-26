import '../styles/Footer1.css';
// import '../styles/footer.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <p>
        Carlos Prieto -&copy; {new Date().getFullYear()} MyApp. All rights
        reserved.
      </p>
      <ul className="footer-links">
        <li>
          <a
            href="https://www.linkedin.com/in/carlos-prieto0991/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/carlosprieto2023"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}
