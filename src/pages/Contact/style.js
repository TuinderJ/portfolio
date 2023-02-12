import styled from 'styled-components';

export const ContactMain = styled.main`
  display: block;
  padding: 0 2rem !important;

  @media screen and (max-width: 480px) {
    padding: 0 !important;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 60rem;
  margin: 0 auto;
  border: var(--accent-color) 3px solid;
  border-radius: 1rem;
  padding: 2.5rem;
  background-color: #111;

  @media screen and (max-width: 480px) {
    border: none;
    padding: 1rem;
    border-radius: 0;
  }
`;

export const ContactHeader = styled.header``;

export const ContactH2 = styled.h2`
  font-size: 2rem;
  padding: 0;
  margin: 0;
  text-align: center;
`;

export const ContactInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ContactLabel = styled.label`
  color: var(--text-accent-color);
`;

export const ContactInput = styled.input`
  background-color: var(--background-color);
  border: var(--accent-color) solid 1px;
  border-radius: 0.5rem;
  height: 2rem;
  color: var(--text-accent-color);
  padding: 1rem;
  font-size: 1rem;
`;

export const ContactMessageBox = styled.textarea`
  height: 10rem;
  background-color: var(--background-color);
  color: var(--text-accent-color);
  border: var(--accent-color) solid 1px;
  font-size: 1rem;
  padding: 0.5rem;
`;

export const ContactSubmitButton = styled.button`
  color: var(--accent-color);
  background-color: var(--button-color);
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;
