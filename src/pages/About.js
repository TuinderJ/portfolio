import './About.css';
import React, { useEffect } from 'react';
import { aboutMe } from '../utils/about';

export default function AboutPage({ setActivePage }) {
  useEffect(() => {
    setActivePage('About');
    document.title = 'Joshua | About';
  }, []);

  return (
    <main>
      <h2>My Story</h2>
      {aboutMe.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </main>
  );
}
