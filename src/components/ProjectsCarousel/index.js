import './index.css';
import ProjectCard from '../ProjectCard';
import projects from '../../utils/projects';

export default function ProjectsCarousel({ setActiveProjectIndex }) {
  return (
    <div className='carousel-container'>
      <div className='carousel'>
        {projects.map((project, index) => {
          const { title, imagePreview } = project;
          return <ProjectCard title={title} imagePreview={imagePreview} setActiveProjectIndex={setActiveProjectIndex} index={index} key={index} />;
        })}
      </div>
    </div>
  );
}
