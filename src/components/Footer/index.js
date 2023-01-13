import './index.css';
import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillTelephoneFill, BsLinkedin } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer>
      <h3>Contact Me</h3>
      <div>
        <div>
          <HiOutlineMail style={{ color: 'var(--border-color)' }} />
          <span>Joshua.Tuinder@gmail.com</span>
        </div>
        <div>
          <BsFillTelephoneFill style={{ color: 'var(--border-color)' }} />
          720.413.1681
        </div>
        <div>
          <BsLinkedin style={{ color: 'var(--border-color)' }} />
          www.linkedin.com/yadayada
        </div>
      </div>
    </footer>
  );
}
