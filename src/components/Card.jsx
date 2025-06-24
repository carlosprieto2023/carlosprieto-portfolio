import '../styles/card.css';

export default function Card({ title, description, link, image }) {
  return (
    <div className="project-card">
      <img className="project-image" src={image} alt={title} />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a
          className="project-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}
