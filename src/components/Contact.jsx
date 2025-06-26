import resume from '../assets/carlosprieto-resume.png';
// import '../styles/contact.css';
import '../styles/Contact1.css';
import TechStack from './TechStack';

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        {/* <h2>Let's Connect</h2>
        <p>
          I'm always open to new opportunities or collaboration. Feel free to
          reach out!
        </p> */}

        <TechStack />

        <div className="contact-buttons">
          <a href="mailto:carlosdos81841@gmail.com" className="btn">
            Email Me
          </a>
          <a href={resume} download className="btn">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
