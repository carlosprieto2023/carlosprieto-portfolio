import { useState } from 'react';
import downArrowVector from '../assets/downArrowVector.png';
import leftArrowScroll from '../assets/leftSideArrowScrollVector.svg';
import taskManagerImage from '../assets/quickNoteApp.png';
import rightArrowScroll from '../assets/rightSideArrowScrollVector.svg';
import weatherAppImg from '../assets/weatherAppImage.png';
import '../styles/projects.css';
import ProjectCard from './Card';

const projects = [
  {
    id: 1,
    title: { en: 'Weather App', es: 'Aplicación del Clima' },
    description: {
      en: 'A React app that shows real-time weather info by city.',
      es: 'Una app que muestra información del clima en tiempo real.',
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
  const [current, setCurrent] = useState(0);

  function prevSlide() {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }

  function nextSlide() {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }

  const text = {
    en: { index: 'Projects', scroll: 'SCROLL DOWN' },
    es: { index: 'Proyectos', scroll: 'DESPLAZARSE HACIA ABAJO' },
  };

  return (
    <section className="projects" id="projects">
      <div className="projects__index">
        <p>{text[lang].index}</p>
      </div>

      <div className="projects__content">
        {/* Carousel */}
        <div className="projects__carousel">
          {projects.map((project, index) => {
            const position =
              (index - current + projects.length) % projects.length;

            let className = 'carousel-card';
            if (position === 0) className += ' active'; // center card
            else if (position === 1) className += ' right'; // next card
            else if (position === projects.length - 1)
              className += ' left'; // prev card
            else className += ' hidden'; // others invisible

            return (
              <div key={project.id} className={className}>
                <ProjectCard {...project} lang={lang} />
              </div>
            );
          })}
        </div>

        {/* Sidebar with arrows */}
        <div className="projects__arrows">
          <div className="projects__icons">
            <img
              src={leftArrowScroll}
              alt="Left Arrow"
              onClick={prevSlide}
              style={{ cursor: 'pointer' }}
            />
            <img
              src={rightArrowScroll}
              alt="Right Arrow"
              onClick={nextSlide}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="projects__footer">
          <p className="projects__scroll">{text[lang].scroll}</p>
          <img
            src={downArrowVector}
            alt="Down Arrow"
            className="projects__icon"
          />
        </div>
      </div>
    </section>
  );
}
