import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

export default function Home({ lang }) {
  return (
    <>
      <Hero lang={lang} />
      <About lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
    </>
  );
}
