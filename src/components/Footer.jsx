import '../styles/footer.css';

export default function Footer({ lang }) {
  const text = {
    en: {
      rights: 'All rights reserved.',
      email: 'Email Me ↗',
      linkedin: 'LinkedIn ↗',
      github: 'Github ↗',
    },
    es: {
      rights: 'Todos los derechos reservados.',
      email: 'Envíame un correo ↗',
      linkedin: 'LinkedIn ↗',
      github: 'Github ↗',
    },
  };

  return (
    <div className="footer__container">
      <p>
        Carlos Prieto - &copy; {new Date().getFullYear()} MyApp.{' '}
        {text[lang].rights}
      </p>

      <div className="contact__links">
        <a
          href="mailto:carlosdos81841@gmail.com"
          className="contact__link"
          aria-label={text[lang].email}
        >
          {text[lang].email}
        </a>

        <a
          href="https://www.linkedin.com/in/carlos-prieto0991/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__link"
        >
          {text[lang].linkedin}
        </a>

        <a
          href="https://github.com/carlosprieto2023"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__link"
        >
          {text[lang].github}
        </a>
      </div>
    </div>
  );
}
