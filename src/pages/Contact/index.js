import { useEffect, useState } from 'react';
import { ContactMain, ContactForm, ContactHeader, ContactH2, ContactInputWrapper, ContactLabel, ContactInput, ContactMessageBox, ContactSubmitButton } from './style';

export default function Contact({ setActivePage }) {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  useEffect(() => {
    setActivePage('Contact');
    document.title = 'Joshua | Contact';
  }, []);

  const handleFormSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <ContactMain>
      <ContactForm onSubmit={handleFormSubmit}>
        <ContactHeader>
          <ContactH2>Contact Me</ContactH2>
        </ContactHeader>
        <ContactInputWrapper>
          <ContactLabel htmlFor='name'>Name:</ContactLabel>
          <ContactInput type='text' name='name' value={formState.name} onChange={handleChange} />
        </ContactInputWrapper>
        <ContactInputWrapper>
          <ContactLabel htmlFor='email'>Email:</ContactLabel>
          <ContactInput type='email' name='email' value={formState.email} onChange={handleChange} />
        </ContactInputWrapper>
        <ContactInputWrapper>
          <ContactLabel htmlFor='message'>Message:</ContactLabel>
          <ContactMessageBox name='message' value={formState.message} onChange={handleChange} />
        </ContactInputWrapper>
        <ContactSubmitButton type='submit'>Send Message</ContactSubmitButton>
      </ContactForm>
    </ContactMain>
  );
}
