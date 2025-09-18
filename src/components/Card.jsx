import '../styles/card.css';

export default function ProjectCard({ title, description, link, image, lang }) {
  const viewText = {
    en: 'View Project →',
    es: 'Ver Proyecto →',
  };

  return (
    <div className="project-card">
      <img className="project-card__image" src={image} alt={title[lang]} />
      <div className="project-card__content">
        <h3 className="project-card__title">{title[lang]}</h3>
        <p className="project-card__description">{description[lang]}</p>
        <a
          className="project-card__link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {viewText[lang]}
        </a>
      </div>
    </div>
  );
}
