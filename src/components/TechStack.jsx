import cssIcon from '../assets/cssIcon.png';
import htmlIcon from '../assets/htmlIcon.png';
import javascriptIcon from '../assets/javascriptIcon.png';
import jsonIcon from '../assets/jsonIcon.png';
import mongoIcon from '../assets/mongoIcon.png';
import pythonIcon from '../assets/pythonIcon.png';
import sqlIcon from '../assets/sqlIcon.png';
import typescriptIcon from '../assets/typescriptIcon.png';

import bootstrapIcon from '../assets/bootstrapIcon.png';
import djangoIcon from '../assets/djangoIcon.png';
import expressIcon from '../assets/expressIcon.png';
import jqueryIcon from '../assets/jqueryIcon.png';
import reactIcon from '../assets/reactIcon.png';

import figmaIcon from '../assets/figmaIcon.png';
import jsonapiIcon from '../assets/jsonapiIcon.png';
import mongodbIcon from '../assets/mongodbIcon.png';
import postgressqlIcon from '../assets/postgressqlIcon.png';

import '../styles/techstack.css';

const languages = [
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'SQL', icon: sqlIcon },
  { name: 'Mongo', icon: mongoIcon },
  { name: 'JSON', icon: jsonIcon },
  { name: 'TypeScript', icon: typescriptIcon },
];

const frameworksAndLibraries = [
  { name: 'React', icon: reactIcon },
  { name: 'jQuery', icon: jqueryIcon },
  { name: 'Express', icon: expressIcon },
  { name: 'Django', icon: djangoIcon },
  { name: 'Bootstrap', icon: bootstrapIcon },
];

const databasesAndOther = [
  { name: 'PostgreSQL', icon: postgressqlIcon },
  { name: 'MongoDB', icon: mongodbIcon },
  { name: 'JSON API', icon: jsonapiIcon },
  { name: 'Figma', icon: figmaIcon },
];

function renderStack(stack) {
  return stack.map((tech, index) => (
    <li key={index} className="techstack-item">
      <img src={tech.icon} alt={tech.name} className="techstack-icon" />
      {tech.name}
    </li>
  ));
}

export default function TechStack() {
  return (
    <div>
      <h2 className="techstack-title">Tech Stack</h2>
      <div className="techstack-category">
        <h3>Languages</h3>
        <ul className="techstack-list">{renderStack(languages)}</ul>
      </div>

      <div className="techstack-category">
        <h3>Frameworks & Libraries</h3>
        <ul className="techstack-list">
          {renderStack(frameworksAndLibraries)}
        </ul>
      </div>

      <div className="techstack-category">
        <h3>Databases & Other</h3>
        <ul className="techstack-list">{renderStack(databasesAndOther)}</ul>
      </div>
    </div>
  );
}
