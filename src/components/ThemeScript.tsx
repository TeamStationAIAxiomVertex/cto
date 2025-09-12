'use client';

import { useEffect } from 'react';

const ThemeScript = () => {
  useEffect(() => {
    const root = document.documentElement;
    const saved = localStorage.getItem('theme');
    if (saved) {
      root.setAttribute('data-theme', saved);
    }

    const btn = document.querySelector('[data-theme-toggle]');
    if (btn) {
      const clickHandler = () => {
        const next =
          root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
      };
      btn.addEventListener('click', clickHandler);

      // Clean up the event listener when the component unmounts
      return () => {
        btn.removeEventListener('click', clickHandler);
      };
    }
  }, []);

  return null; // This component does not render anything
};

export default ThemeScript;
