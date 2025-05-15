import taskManagerImage from '../assets/quickNoteApp.png';
import './ProjectCard.css';

const portfolioItems = [
  {
    id: 1,
    title: 'Weather App',
    description: 'A React app that shows real-time weather info by city.',
    image: '/images/weather-app.png',
    link: 'https://yourweatherapp.com',
  },
  {
    id: 2,
    title: 'Task Manager',
    description: 'A full-stack task manager built with MERN stack.',
    image: taskManagerImage,
    link: 'https://mern-quick-notes-9ec852ce7b58.herokuapp.com',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'My personal site showcasing skills and projects.',
    image: '/images/portfolio-site.png',
    link: 'https://yourportfolio.com',
  },
];

export default function ProjectCard() {
  return (
    <section className="portfolio-section">
      <h2 className="portfolio-heading">My Work</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div className="portfolio-card" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="portfolio-image"
            />
            <div className="portfolio-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-link"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
