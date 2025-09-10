import '../styles/card.css';

export default function ProjectCard({ title, description, link, image, lang }) {
  const viewText = {
    en: 'View Project →',
    es: 'Ver Proyecto →',
  };

  return (
    <div className="project-card">
      <img className="project-image" src={image} alt={title[lang]} />
      <div className="project-content">
        <h3 className="project-title">{title[lang]}</h3>
        <p className="project-description">{description[lang]}</p>
        <a
          className="project-link"
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
