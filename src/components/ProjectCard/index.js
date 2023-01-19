import './index.css';

export default function ProjectCard({ title, imagePreview, index, setActiveProjectIndex }) {
  const clickHandler = e => {
    sessionStorage.setItem('activeProjectIndex', index);
    setActiveProjectIndex(index);
  };
  return (
    <div className='project-card' data-title={title} onClick={clickHandler}>
      <img className='project-image' src={imagePreview} alt='Project Preview' />
    </div>
  );
}
