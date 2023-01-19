import './index.css';
import React from 'react';
import { aboutSummary } from '../../utils/about';

export default function AboutSummary() {
  return (
    <div id='about-summary'>
      {aboutSummary.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
