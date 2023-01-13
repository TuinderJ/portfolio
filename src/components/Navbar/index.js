import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './index.css';

export default function Navbar({ activePage, activePageHandler }) {
  return (
    <nav>
      <img src={logo} alt='JT logo' />
      <ul>
        <li>
          <Link to='/' className={activePage === 'Home' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' className={activePage === 'About' ? 'active' : ''}>
            About
          </Link>
        </li>
        <li>
          <Link to='/projects' className={activePage === 'Projects' ? 'active' : ''}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
