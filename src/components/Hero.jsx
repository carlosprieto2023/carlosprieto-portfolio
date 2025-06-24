import profilePicDrawing from '../assets/profilePicDrawing.png';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      {/* Background overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero__content">
          {/* Profile Image */}
          <div className="hero__image__container">
            <img
              src={profilePicDrawing}
              alt="Carlos Prieto portrait illustration"
              className="hero__image"
            />
          </div>

          {/* Heading */}
          <h1>
            Hi, I’m Carlos Prieto
            <br />
            a&nbsp;
            <span className="highlight">Full Stack Software Developer</span>
            &nbsp;based in Columbus, Ohio.
          </h1>

          {/* Paragraph */}
          <p>
            I’m seeking a developer role where I can bring my problem-solving
            mindset, adaptability, and dedication to building great software.
            I’m eager to work alongside talented engineers, contribute
            meaningful code, and continue evolving in this ever-changing field.
          </p>

          {/* CTA Button */}
          <a href="#projects" className="hero-cta">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
