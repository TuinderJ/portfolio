import './index.css';
import { technologies, languages } from '../../utils/stats';

export default function StatBlocks() {
  return (
    <div className='stat-blocks'>
      <div className='stat-block'>
        <h3>Technologies Used</h3>
        <ul>
          {technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
      </div>
      <div className='stat-block'>
        <h3>Languages</h3>
        <ul>
          {languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
