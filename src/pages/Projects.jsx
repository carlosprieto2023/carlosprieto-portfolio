import taskManagerImage from '../assets/quickNoteApp.png';
import ProjectCard from '../components/ProjectCard';
// import './Projects.css';

const projects = [
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

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
