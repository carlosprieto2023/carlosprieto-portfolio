import downArrowVector from '../assets/downArrowVector.png';
import heroImage from '../assets/heroImage.png';
import '../styles/hero.css';

export default function Hero({ lang }) {
  const text = {
    en: {
      name: 'CARLOS PRIETO',
      title: 'FULL STACK SOFTWARE DEVELOPER',
      city: 'COLUMBUS,',
      state: 'OHIO.',
      subtitle:
        'Turning ideas into performant digital products using full stack development!',
      contactBtn: 'Contact Me',
      resumeBtn: 'Download Resume',
      scroll: 'SCROLL DOWN',
    },
    es: {
      name: 'CARLOS PRIETO',
      title: 'FULL STACK SOFTWARE DEVELOPER',
      city: 'COLUMBUS,',
      state: 'OHIO.',
      subtitle:
        'Transformando ideas en productos digitales eficientes, desarrollo full stack!',
      contactBtn: 'Contáctame',
      resumeBtn: 'Descargar Currículum',
      scroll: 'DESPLAZARSE HACIA ABAJO',
    },
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <div className="hero-content-left">
          <h1>
            {text[lang].name}
            <br />
            <span>
              {text[lang].title}
              <br />
            </span>
            {text[lang].city}
            <span> {text[lang].state}</span>
          </h1>
          <h2>{text[lang].subtitle}</h2>
          <div className="cta-container">
            <button
              className="hero-cta-contact"
              onClick={() =>
                document
                  .getElementById('contact')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              {text[lang].contactBtn}
            </button>
            <a
              className="hero-cta-resume"
              href="/assets/resume.pdf"
              download="carlos-prieto-resume"
            >
              {text[lang].resumeBtn}
            </a>
          </div>
        </div>
        <div className="hero-content-right">
          <img src={heroImage} alt="Carlos Prieto portrait" />
        </div>
        <div className="hero-footer-container">
          <p>{text[lang].scroll}</p>
          <img src={downArrowVector} alt="Down Arrow Vector" />
        </div>
      </div>
    </section>
  );
}
