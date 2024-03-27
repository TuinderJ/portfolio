import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './index.css';

export default function Navbar({ activePage, activePageHandler }) {
  return (
    <nav>
      <Link to='/' className={activePage === 'Home' ? 'active' : ''}>
        <img src={logo} alt='JT logo' />
      </Link>
      <ul>
        <li>
          <Link to='/' className={activePage === 'Home' ? 'active' : ''}>
            About
          </Link>
        </li>
        {/* <li>
          <Link to='/Story' className={activePage === 'Story' ? 'active' : ''}>
            Story
          </Link>
        </li> */}
        <li>
          <Link to='/projects' className={activePage === 'Projects' ? 'active' : ''}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='/contact' className={activePage === 'Contact' ? 'active' : ''}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
