import './style.css';
import { useEffect } from 'react';
import { story } from '../../utils/about';

export default function Story({ setActivePage }) {
  useEffect(() => {
    setActivePage('Story');
    document.title = 'Joshua | Story';
  }, []);

  return (
    <main>
      <h2>My Journey</h2>
      {story.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </main>
  );
}
