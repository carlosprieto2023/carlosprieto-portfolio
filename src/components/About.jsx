import downArrowVector from '../assets/downArrowVector.png';
import '../styles/about.css';

export default function About({ lang }) {
  const text = {
    en: {
      index: 'About Me',
      heading: 'BUILDING IDEAS INTO REALITY',
      paragraphs: [
        [
          'I’m a Full Stack Developer',
          'who loves turning complex',
          'problems into elegant, scalable solutions. From responsive interfaces',
          'to robust backend systems,',
          'I create digital experiences',
          'that are both functional',
          'and user-centered.',
          'Whether working independently or as part of a team,',
          'I’m always focused on',
          'writing clean code.',
          'Staying adaptable,',
          'and continuously improving',
          'through learning and collaboration.',
        ],
      ],
      quotes: [
        'Code. Create. Collaborate.',
        'Solutions through software.',
        'Turning ideas into interactive experiences.',
      ],
      scroll: 'SCROLL DOWN',
    },
    es: {
      index: 'Sobre Mí',
      heading: 'CONSTRUYENDO IDEAS EN REALIDAD',
      paragraphs: [
        [
          'Soy un Desarrollador Full Stack',
          'que disfruta convertir problemas complejos',
          'en soluciones elegantes y escalables. Desde interfaces responsivas',
          ' hasta sistemas backend robustos,',
          'creo experiencias digitales',
          'que son funcionales',
          'y centradas en el usuario.',
          'Ya sea trabajando de manera independiente o en equipo,',
          'siempre me enfoco',
          'en escribir código limpio,',
          'mantenerme adaptable',
          'y mejorar continuamente',
          'a través del aprendizaje y la colaboración.',
        ],
      ],
      quotes: [
        'Codifica. Crea. Colabora.',
        'Soluciones a través del software.',
        'Convirtiendo ideas en experiencias interactivas.',
      ],
      scroll: 'DESPLAZARSE HACIA ABAJO',
    },
  };

  const { index, heading, paragraphs, quotes, scroll } = text[lang];

  return (
    <section id="about" className="about">
      {/* Index */}
      <div className="about__index">
        <p>{index}</p>
      </div>
      {/* Content */}

      <h2 className="about__heading">{heading}</h2>
      <div className="about-content ">
        {paragraphs.map((para, idx) => (
          <p key={idx} className="about__paragraph">
            {para.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
        ))}
        {/* Quotes */}
        <div className="about__quotes">
          {quotes.map((quote, idx) => (
            <p key={idx} className="about__quote">
              {quote}
            </p>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="about__footer">
        <p className="about__scroll">{scroll}</p>
        <img
          src={downArrowVector}
          alt="Down Arrow Vector"
          className="about__icon"
        />
      </div>
    </section>
  );
}
