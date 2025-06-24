import '../styles/footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <p>
          Carlos Prieto -&copy; {new Date().getFullYear()} MyApp. All rights
          reserved.
        </p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/carlos-prieto0991/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/carlosprieto2023"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
