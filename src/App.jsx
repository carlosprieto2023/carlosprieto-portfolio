// App.jsx
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

// import './styles/globals.css';
import './styles/globals.css';

export default function App() {
  const [lang, setLang] = useState('en'); // 'en' = english, 'es' = spanish

  const toggleLang = () => setLang(lang === 'en' ? 'es' : 'en');

  return (
    <div className="app-container">
      <Header lang={lang} toggleLang={toggleLang} />
      <main>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
        </Routes>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
