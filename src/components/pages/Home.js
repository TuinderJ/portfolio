import React from 'react';
import ProfilePicture from '../ProfilePicture';
import WelcomeCard from '../WelcomeCard';
import AboutSummary from '../AboutSummary';
import StatBlocks from '../StatBlocks';
import './Home.css';

export default function HomePage({ setActivePage }) {
  setActivePage('Home');
  return (
    <>
      <header className='homepage-header'>
        <ProfilePicture />
        <WelcomeCard />
      </header>
      <main>
        <AboutSummary />
        <StatBlocks />
      </main>
    </>
  );
}
