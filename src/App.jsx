import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import About from './pages/About';
import Contact from './pages/Contact';

import './styles/globals.css';

export default function App() {
  const [hideHeader, setHideHeader] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const isScrollingDown = currentScrollY > lastScrollY;

      // Header logic
      if (currentScrollY < 50) {
        // Always show header near the top
        setHideHeader(false);
      } else {
        setHideHeader(isScrollingDown);
      }

      // Footer logic
      const isAtBottom = currentScrollY + clientHeight >= scrollHeight - 100;

      if (isScrollingDown) {
        setHideFooter(false); // Always show footer when scrolling down
      } else {
        setHideFooter(!isAtBottom); // Only hide footer if not at bottom
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <main className="app-container">
      {/* Header */}
      <div className={hideHeader ? 'hide-header' : ''}>
        <Header />
      </div>

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
      <div className={hideFooter ? 'hide-footer' : ''}>
        <Footer />
      </div>
    </main>
  );
}
