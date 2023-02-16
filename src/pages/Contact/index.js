import { useEffect, useRef } from 'react';
import { ContactMain, ContactForm, ContactHeader, ContactH2, ContactInputWrapper, ContactLabel, ContactInput, ContactMessageBox, ContactSubmitButton } from './style';
import emailjs from '@emailjs/browser';

export default function Contact({ setActivePage }) {
  const form = useRef();
  useEffect(() => {
    setActivePage('Contact');
    document.title = 'Joshua | Contact';
  }, []);

  const handleFormSubmit = e => {
    e.preventDefault();

    emailjs.sendForm('service_tzf4ior', 'template_pblul88', form.current, 'R5aNzVaInN-PG9NFq').then(
      result => {
        console.log(result.text);
        alert(`Thank you for your message. I'll get back to you shortly`);
        form.current.reset();
      },
      error => {
        console.log(error.text);
      }
    );
  };

  return (
    <ContactMain>
      <ContactForm ref={form} onSubmit={handleFormSubmit}>
        <ContactHeader>
          <ContactH2>Contact Me</ContactH2>
        </ContactHeader>
        <ContactInputWrapper>
          <ContactLabel htmlFor='user_name'>Name:</ContactLabel>
          <ContactInput type='text' name='user_name' />
        </ContactInputWrapper>
        <ContactInputWrapper>
          <ContactLabel htmlFor='user_email'>Email:</ContactLabel>
          <ContactInput type='email' name='user_email' />
        </ContactInputWrapper>
        <ContactInputWrapper>
          <ContactLabel htmlFor='message'>Message:</ContactLabel>
          <ContactMessageBox name='message' />
        </ContactInputWrapper>
        <ContactSubmitButton type='submit'>Send Message</ContactSubmitButton>
      </ContactForm>
    </ContactMain>
  );
}
