import resume from '../assets/carlosprieto-resume.png';
import '../styles/contact.css';
import TechStack from './TechStack';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-description">
          I'm always open to new opportunities or collaboration. Feel free to
          reach out!
        </p>

        <TechStack />

        <div className="contact-buttons">
          <a
            href="mailto:carlosdos81841@gmail.com"
            className="contact-button"
            aria-label="Send me an email"
          >
            Email Me
          </a>
          <a
            href={resume}
            download
            className="contact-button"
            aria-label="Download my resume"
          >
            Download Resume
          </a>

          <a
            href="https://www.linkedin.com/in/carlos-prieto0991/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/carlosprieto2023"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
}
