import { Icon } from '@iconify/react';
import { useState } from 'react';
import '../styles/contact.css';

export default function Contact({ lang }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus(
          lang === 'en'
            ? '✅ Message sent successfully!'
            : '✅ ¡Mensaje enviado correctamente!'
        );
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(
          lang === 'en'
            ? '❌ Failed to send message.'
            : '❌ No se pudo enviar el mensaje.'
        );
      }
    } catch (err) {
      console.error(err);
      setStatus(
        lang === 'en' ? '❌ An error occurred.' : '❌ Ocurrió un error.'
      );
    }
  };

  const text = {
    en: {
      index: 'Contact',
      heading: "LET'S CONNECT",
      paragraph: "I'm always open to new opportunities or collaboration.",
      subtitle: 'Feel free to reach out!',
      formTitle: 'SEND A MESSAGE',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'YOUR NAME HERE',
      emailPlaceholder: 'YOUR EMAIL HERE',
      messagePlaceholder: 'WRITE YOUR MESSAGE HERE...',
      send: 'Send',
    },
    es: {
      index: 'Contacto',
      heading: '¡CONECTEMOS!',
      paragraph:
        'Siempre estoy abierto a nuevas oportunidades o colaboraciones.',
      subtitle: '¡No dudes en contactarme!',
      formTitle: 'ENVIAR MENSAJE',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      namePlaceholder: 'TU NOMBRE AQUÍ',
      emailPlaceholder: 'TU CORREO AQUÍ',
      messagePlaceholder: 'ESCRIBE TU MENSAJE AQUÍ...',
      send: 'Enviar',
    },
  };

  const techStack = {
    titles: {
      en: {
        main: 'TECH STACK',
        languages: 'Languages',
        frameworks: 'Frameworks & Libraries',
        databases: 'Databases & Other',
      },
      es: {
        main: 'STACK TECNOLÓGICO',
        languages: 'Lenguajes',
        frameworks: 'Frameworks y Librerías',
        databases: 'Bases de Datos y Otros',
      },
    },
    languages: [
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'Python', icon: 'logos:python' },
      { name: 'HTML', icon: 'vscode-icons:file-type-html' },
      { name: 'CSS', icon: 'vscode-icons:file-type-css' },
      { name: 'JSON', icon: 'vscode-icons:file-type-json' },
      { name: 'Mongo', icon: 'devicon:mongodb' },
      { name: 'SQL', icon: 'carbon:sql' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
    ],
    frameworks: [
      { name: 'React', icon: 'logos:react' },
      { name: 'jQuery', icon: 'logos:jquery' },
      { name: 'Express', icon: 'simple-icons:express' },
      { name: 'Django', icon: 'vscode-icons:file-type-django' },
      { name: 'Bootstrap', icon: 'logos:bootstrap' },
    ],
    databases: [
      { name: 'PostgreSQL', icon: 'logos:postgresql' },
      { name: 'MongoDB', icon: 'logos:mongodb-icon' },
      { name: 'JSON API', icon: 'mdi:api' },
      { name: 'Figma', icon: 'logos:figma' },
    ],
  };
  return (
    <section className="contact__section" id="contact">
      <div className="contact__index">
        <p>{text[lang].index}</p>
      </div>
      <div className="contact__body">
        <div className="contact__info-container">
          <div className="contact__info">
            <h2>{text[lang].heading}</h2>
            <p>{text[lang].paragraph}</p>
            <h3>{text[lang].subtitle}</h3>
          </div>

          {/* <img src={teckStackImg} alt="Tech Stack" /> */}
          {/* Teck Stack */}
          <div className="tech-stack">
            <h2>{techStack.titles[lang].main}</h2>

            <h3>{techStack.titles[lang].languages}</h3>
            <div className="icon-row">
              {techStack.languages.map((item) => (
                <div key={item.name} className="icon-item">
                  <Icon icon={item.icon} width="40" />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>

            <h3>{techStack.titles[lang].frameworks}</h3>
            <div className="icon-row">
              {techStack.frameworks.map((item) => (
                <div key={item.name} className="icon-item">
                  <Icon icon={item.icon} width="40" />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>

            <h3>{techStack.titles[lang].databases}</h3>
            <div className="icon-row">
              {techStack.databases.map((item) => (
                <div key={item.name} className="icon-item">
                  <Icon icon={item.icon} width="40" />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="contact__right-container">
          <div className="contact__form-wrapper">
            <form className="contact__form" onSubmit={handleSubmit}>
              <h4 className="contact__form-title">{text[lang].formTitle}</h4>

              <div className="contact__form-group">
                <label htmlFor="name">{text[lang].name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={text[lang].namePlaceholder}
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="email">{text[lang].email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={text[lang].emailPlaceholder}
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="message">{text[lang].message}</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={text[lang].messagePlaceholder}
                ></textarea>
              </div>

              <button type="submit">{text[lang].send}</button>
              {status && (
                <p
                  className={`form-status ${
                    status.startsWith('✅') ? 'success' : 'error'
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
