// App.jsx
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import useMobileVH from './hooks/useMobileVH';
import Home from './pages/Home';

import './styles/globals.css';

export default function App() {
  useMobileVH();

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
