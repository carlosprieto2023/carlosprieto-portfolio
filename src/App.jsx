import { Element } from 'react-scroll';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import About from './pages/About';

import './styles/globals.css';

import Contact from './pages/Contact';

export default function App() {
  return (
    <main className="app-container">
      {/* Navigation Bar */}
      <Header />

      <Element name="about">
        <div>
          <About />
        </div>
      </Element>

      <Element name="projects">
        <div>
          <ProjectCard />
        </div>
      </Element>

      <Element name="contact">
        <div>
          <Contact />
        </div>
      </Element>

      {/* Footer */}
      <Footer />
    </main>
  );
}
