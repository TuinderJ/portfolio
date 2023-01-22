import './index.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer>
      <h3>Links</h3>
      <div>
        <div>
          <a href='https://www.linkedin.com/in/joshua-tuinder/'>
            <BsLinkedin style={{ color: 'var(--border-color)' }} />
          </a>
        </div>
        <div>
          <a href='https://github.com/TuinderJ'>
            <BsGithub style={{ color: 'var(--border-color)' }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
