import './index.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer>
      <h3>Links</h3>
      <div>
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
      </div>
      <div className='badge'>
        <a href='https://www.credential.net/2b6e9990-7179-4b96-8d4f-e74d0f449940#gs.6upk8p'>
          <img src='https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/69425436' alt='Full Stack Flex Certificate' />
        </a>
      </div>
    </footer>
  );
}
