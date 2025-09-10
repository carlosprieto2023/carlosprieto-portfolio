import { useRef } from 'react';
import taskManagerImage from '../assets/quickNoteApp.png';
import '../styles/projects.css';
// import '../styles/projects.css';
import leftArrowScroll from '../assets/leftSideArrowScrollVector.svg';
import rightArrowScroll from '../assets/rightSideArrowScrollVector.svg';
import weatherAppImg from '../assets/weatherAppImage.png';
import ProjectCard from './Card';

import downArrowVector from '../assets/downArrowVector.png';

const projects = [
  {
    id: 1,
    title: { en: 'Weather App', es: 'Aplicación del Clima' },
    description: {
      en: 'A React app that shows real-time weather info by city.',
      es: 'Una app en React que muestra información del clima en tiempo real.',
    },
    image: weatherAppImg,
    link: 'https://yourweatherapp.com',
  },
  {
    id: 2,
    title: { en: 'Task Manager', es: 'Administrador de Tareas' },
    description: {
      en: 'A full-stack task manager built with MERN stack.',
      es: 'Un administrador de tareas full-stack construido con MERN.',
    },
    image: taskManagerImage,
    link: 'https://mern-quick-notes-9ec852ce7b58.herokuapp.com',
  },
  {
    id: 3,
    title: { en: 'Portfolio Website', es: 'Sitio Web de Portafolio' },
    description: {
      en: 'My personal site showcasing skills and projects.',
      es: 'Mi sitio personal mostrando habilidades y proyectos.',
    },
    image: '/images/portfolio-site.png',
    link: 'https://yourportfolio.com',
  },
];

export default function Projects({ lang }) {
  const text = {
    en: {
      index: 'Projects',
      scroll: 'SCROLL DOWN',
    },
    es: {
      index: 'Proyectos',
      scroll: 'DESPLAZARSE HACIA ABAJO',
    },
  };
  const scrollRef = useRef(null);

  function scrollLeft() {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  }

  function scrollRight() {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  }

  return (
    <section className="projects-section" id="projects">
      <div className="projects-index-container">
        <p>{text[lang].index}</p>
      </div>
      <div className="projects-main-container">
        <div className="projects-main-container-left-column">
          <div className="icon-wrapper">
            <img
              src={leftArrowScroll}
              alt="Left Arrow Scroll"
              onClick={scrollLeft}
            />
            <img
              src={rightArrowScroll}
              alt="Right Arrow Scroll"
              onClick={scrollRight}
            />
          </div>
        </div>
        <div className="projects-main-container-right-column">
          <div className="projects-grid" ref={scrollRef}>
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} lang={lang} />
            ))}
          </div>
        </div>
        <div className="projects-footer-container">
          <p>{text[lang].scroll}</p>
          <img src={downArrowVector} alt="Down Arrow Vector" />
        </div>
      </div>
    </section>
  );
}
