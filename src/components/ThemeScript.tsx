
'use client';

import Script from 'next/script';

const ThemeScript = () => {
  return (
    <Script id="theme-switcher" strategy="beforeInteractive">
      {`
(function () {
  try {
    const root = document.documentElement;
    const saved = localStorage.getItem("theme");
    if (saved) root.setAttribute("data-theme", saved);
    
    // We need to wait for the document to be interactive to add the event listener
    document.addEventListener('DOMContentLoaded', () => {
      const btn = document.querySelector("[data-theme-toggle]");
      if (btn) {
        btn.addEventListener("click", () => {
          const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
          root.setAttribute("data-theme", next);
          localStorage.setItem("theme", next);
        });
      }
    });

  } catch (e) { /* never crash the page */ }
})();
      `}
    </Script>
  );
};

export default ThemeScript;
