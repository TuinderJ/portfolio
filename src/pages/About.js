import React, { useEffect } from 'react';
import { aboutMe } from '../utils/about';

export default function AboutPage({ setActivePage }) {
  useEffect(() => {
    setActivePage('About');
    document.title = 'Joshua | About';
  }, []);

  return <main>{aboutMe}</main>;
}
