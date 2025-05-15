import bootstrapIcon from '../assets/bootstrapIcon.png';
import cssIcon from '../assets/cssIcon.png';
import djangoIcon from '../assets/djangoIcon.png';
import expressIcon from '../assets/expressIcon.png';
import figmaIcon from '../assets/figmaIcon.png';
import htmlIcon from '../assets/htmlIcon.png';
import javascriptIcon from '../assets/javascriptIcon.png';
import jqueryIcon from '../assets/jqueryIcon.png';
import jsonapiIcon from '../assets/jsonapiIcon.png';
import jsonIcon from '../assets/jsonIcon.png';
import mongodbIcon from '../assets/mongodbIcon.png';
import mongoIcon from '../assets/mongoIcon.png';
import postgresqlIcon from '../assets/postgressqlIcon.png';
import pythonIcon from '../assets/pythonIcon.png';
import reactIcon from '../assets/reactIcon.png';
import sqlIcon from '../assets/sqlIcon.png';
import typescriptIcon from '../assets/typescriptIcon.png';

import laptopIcon from '../assets/laptopIcon.png';

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-left-side">
        <div className="tech-stack-container">
          <div className="tech-stack-column">
            <div>
              <h2>Languages</h2>
              <div className="tech-stack-row">
                <div className="icon-container">
                  <img src={javascriptIcon} alt="javascriptIcon" />
                  <p>Javascript</p>
                </div>
                <div className="icon-container">
                  <img src={pythonIcon} alt="pythonIcon" />
                  <p>Python</p>
                </div>
                <div className="icon-container">
                  <img src={htmlIcon} alt="htmlIcon" />
                  <p>Html</p>
                </div>
                <div className="icon-container">
                  <img src={cssIcon} alt="cssIcon" />
                  <p>Css</p>
                </div>
                <div className="icon-container">
                  <img src={sqlIcon} alt="sqlIcon" />
                  <p>Sql</p>
                </div>
                <div className="icon-container">
                  <img src={mongoIcon} alt="mongoIcon" />
                  <p>Mongo</p>
                </div>
                <div className="icon-container">
                  <img src={jsonIcon} alt="jsonIcon" />
                  <p>Json</p>
                </div>
                <div className="icon-container">
                  <img src={typescriptIcon} alt="typeScriptIcon" />
                  <p>Typescript</p>
                </div>
              </div>
            </div>
            <div>
              <h2>Libraries</h2>
              <div className="tech-stack-row">
                <div className="icon-container">
                  <img src={reactIcon} alt="reactIcon" />
                  <p>React</p>
                </div>
                <div className="icon-container">
                  <img src={expressIcon} alt="expressIcon" />
                  <p>Express</p>
                </div>
                <div className="icon-container">
                  <img src={djangoIcon} alt="djangoIcon" />
                  <p>Django</p>
                </div>
                <div className="icon-container">
                  <img src={jqueryIcon} alt="jqueryIcon" />
                  <p>Jquery</p>
                </div>
                <div className="icon-container">
                  <img src={bootstrapIcon} alt="bootstrapIcon" />
                  <p>Bootstrap</p>
                </div>
              </div>
            </div>
            <div>
              <h2>Databases and Other</h2>
              <div className="tech-stack-row">
                <div className="icon-container">
                  <img src={postgresqlIcon} alt="postgressqlIcon" />
                  <p>PostgreSQL</p>
                </div>
                <div className="icon-container">
                  <img src={mongodbIcon} alt="mongodbIcon" />
                  <p>MongoDB</p>
                </div>
                <div className="icon-container">
                  <img src={jsonapiIcon} alt="jsonapiIcon" />
                  <p>JsonAPI</p>
                </div>
                <div className="icon-container">
                  <img src={figmaIcon} alt="figmaIcon" />
                  <p>Figma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-right-side">
        <img src={laptopIcon} alt="Laptop Icon" />
      </div>

      <hr />

      <div className="contact-bottom-container">
        <div className="contact-bottom-container-left">
          <h3>
            Let’s build something <br /> amazing together!
          </h3>
        </div>
        <div className="contact-bottom-container-right">
          <p>carlosdos81841@gmail.com</p>
          <button>View Resume</button>
        </div>
      </div>
    </div>
  );
}
