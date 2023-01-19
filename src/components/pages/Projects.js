import React, { useEffect, useState } from 'react';
import ActiveProject from '../ActiveProject';
import ProjectsCarousel from '../ProjectsCarousel';

export default function ProjectsPage({ setActivePage }) {
  setActivePage('Projects');
  useEffect(() => {
    document.title = 'Joshua | Projects';
  }, []);
  const [activeProjectIndex, setActiveProjectIndex] = useState(sessionStorage.getItem('activeProjectIndex') || 0);

  return (
    <main>
      <ActiveProject activeProjectIndex={activeProjectIndex} />
      <ProjectsCarousel setActiveProjectIndex={setActiveProjectIndex} />
    </main>
  );
}
