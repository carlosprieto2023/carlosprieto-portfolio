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
      subtitle: [
        'Turning ideas into performant digital products using full stack development!',
      ],
      contactBtn: 'Contact Me',
      resumeBtn: 'Download Resume',
      scroll: 'SCROLL DOWN',
    },
    es: {
      name: 'CARLOS PRIETO',
      title: 'FULL STACK SOFTWARE DEVELOPER',
      city: 'COLUMBUS,',
      state: 'OHIO.',
      subtitle: [
        'Transformando ideas en productos digitales eficientes, desarrollo full stack!',
      ],
      contactBtn: 'Contáctame',
      resumeBtn: 'Descargar Currículum',
      scroll: 'DESPLAZARSE HACIA ABAJO',
    },
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          {text[lang].name}
          <br />
          <span className="hero__title--highlight">
            {text[lang].title}
            <br />
          </span>
          {text[lang].city}
          <span className="hero__title--secondary"> {text[lang].state}</span>
        </h1>
        <p className="hero__subtitle">{text[lang].subtitle}</p>
        <div className="hero__cta">
          <a
            className="btn btn-primary"
            onClick={() =>
              document
                .getElementById('contact')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            {text[lang].contactBtn}
          </a>
          <a
            className="btn btn-secondary"
            href="/assets/resume.pdf"
            download="carlos-prieto-resume"
          >
            {text[lang].resumeBtn}
          </a>
        </div>
      </div>
      {/* Hero Image */}
      <div className="hero__image">
        <img src={heroImage} alt="Carlos Prieto portrait" />
      </div>
      {/* Hero Footer */}
      <div className="hero__footer">
        <p className="hero__footer-text">{text[lang].scroll}</p>
        <img
          className="hero__footer-icon"
          src={downArrowVector}
          alt="Down Arrow Vector"
        />
      </div>
    </section>
  );
}
