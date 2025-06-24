import { useEffect } from 'react';

const useMobileVH = () => {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH(); // Set on mount
    window.addEventListener('resize', setVH);

    return () => {
      window.removeEventListener('resize', setVH);
    };
  }, []);
};

export default useMobileVH;
