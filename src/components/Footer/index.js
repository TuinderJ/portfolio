import './index.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer>
      <h3>Links</h3>
      <div>
        <div>
          <BsLinkedin style={{ color: 'var(--border-color)' }} />
          <a href='https://www.linkedin.com/in/joshua-tuinder/'>https://www.linkedin.com/in/joshua-tuinder/</a>
        </div>
        <div>
          <BsGithub style={{ color: 'var(--border-color)' }} />
          <a href='https://github.com/TuinderJ'>https://github.com/TuinderJ</a>
        </div>
      </div>
    </footer>
  );
}
