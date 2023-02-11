import { useEffect } from 'react';

import './Contact.css';

export default function ContactPage({ setActivePage }) {
  useEffect(() => {
    setActivePage('Contact');
    document.title = 'Joshua | Story';
  }, []);
  return (
    <form className='contact-form'>
      <label htmlFor='name' className='contact-form-name-label'>
        Name:
      </label>
      <input type='text' name='name' className='contact-form-name' />
      <label htmlFor='email' className='contact-form-email-label'>
        Email:
      </label>
      <input type='text' name='email' className='contact-form-email' />
      <label htmlFor='message'>Message:</label>
      <textarea name='message' />
      <button type='submit'>Send Message</button>
    </form>
  );
}
