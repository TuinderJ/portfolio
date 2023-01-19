import React, { useEffect } from 'react';

export default function AboutPage({ setActivePage }) {
  setActivePage('About');
  useEffect(() => {
    document.title = 'Joshua | About';
  }, []);

  return <main>AboutPage</main>;
}
