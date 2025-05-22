import profilePicDrawing from '../assets/profilePicDrawing.png';

export default function About() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-image-container">
          <img
            src={profilePicDrawing}
            alt="Hero Visual"
            className="hero-image"
          />
        </div>
        <h1 className="hero-heading">
          Hi I’m Carlos Prieto, a full stack software developer based in
          Columbus, Ohio.
        </h1>
        <p className="hero-subheading">
          I’m seeking a junior developer role where I can bring my
          problem-solving mindset, adaptability, and dedication to building
          great software. I’m eager to work alongside talented engineers,
          contribute meaningful code, and continue evolving in this
          ever-changing field.
        </p>
        {/* <button className="hero-button">View My Projects</button> */}
      </div>
    </section>
  );
}
