import React, { useEffect, useState } from 'react';
import ActiveProject from '../../components/ActiveProject';
import ProjectsCarousel from '../../components/ProjectsCarousel';

export default function ProjectsPage({ setActivePage }) {
  useEffect(() => {
    setActivePage('Projects');
    document.title = 'Joshua | Projects';
  }, []);
  const [activeProjectIndex, setActiveProjectIndex] = useState(sessionStorage.getItem('activeProjectIndex') || 0);

  return (
    <main id='projects'>
      <ActiveProject activeProjectIndex={activeProjectIndex} />
      <ProjectsCarousel setActiveProjectIndex={setActiveProjectIndex} />
    </main>
  );
}
