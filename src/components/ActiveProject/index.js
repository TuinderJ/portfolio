import projects from '../../utils/projects';
import './index.css';

export default function ActiveProject({ activeProjectIndex }) {
  const { title, deployedUrl, repoUrl, imagePreview } = projects[activeProjectIndex];
  return (
    <div className='active-project-card'>
      <a className='deployed-link' href={deployedUrl}>
        Deployed Application
      </a>
      <a className='repo-link' href={repoUrl}>
        GitHub Repository
      </a>
      <a className='project' data-title={title} href={deployedUrl}>
        <img className='active-project-image' src={imagePreview} alt='Project Preview' />
      </a>
    </div>
  );
}
