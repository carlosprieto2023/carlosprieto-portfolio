import profilePicDrawing from '../assets/profilePicDrawing.png';
import Bubble from '../components/Bubble';
import '../styles/Hero1.css';
// import '../styles/hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      {/* Background overlay */}
      <div className="hero-overlay"></div>
      <Bubble />

      <div className="hero-container">
        <div className="hero-content">
          {/* Profile Image */}
          <div className="hero-image-container">
            <img
              src={profilePicDrawing}
              alt="Carlos Prieto portrait illustration"
              className="hero-image"
            />
          </div>

          {/* Heading */}
          <h1>
            Hi, I’m Carlos Prieto
            <br />
            a&nbsp;
            <span className="hero-highlight">
              Full Stack Software Developer
            </span>
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
