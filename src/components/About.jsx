import '../styles/About1.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      {/* <div className="about-image-container">
        <img
          src="/path-to-your-image.jpg"
          alt="Carlos Prieto"
          className="about-image"
        />
      </div> */}
      <h2>About </h2>
      <div className="about-content">
        <p>
          Hi, I'm Carlos Prieto — a passionate full stack software developer
          based in Columbus, Ohio. I specialize in building responsive,
          performant web applications using the MERN stack.
        </p>
        <p>
          My mission is to create impactful software solutions that are clean,
          scalable, and user-friendly. Whether I'm working on frontend UI or
          backend logic, I strive for pixel-perfect execution and efficient
          architecture.
        </p>
        <p>
          I bring strong communication, curiosity, and collaboration to every
          project. I’m always eager to learn new technologies and improve as a
          developer.
        </p>
        <p>
          Outside of coding, I enjoy playing classical guitar, hitting the golf
          course, and spending quality time with my family. These passions help
          keep me grounded, focused, and inspired.
        </p>
        <p>
          I'm always open to new opportunities, whether it's a freelance
          project, a collaborative build, or a full-time position.
        </p>
      </div>
    </section>
  );
}
