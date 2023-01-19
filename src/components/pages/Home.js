import React, { useEffect } from 'react';
import ProfilePicture from '../ProfilePicture';
import WelcomeCard from '../WelcomeCard';
import AboutSummary from '../AboutSummary';
import StatBlocks from '../StatBlocks';
import './Home.css';

export default function HomePage({ setActivePage }) {
  setActivePage('Home');
  useEffect(() => {
    document.title = 'Joshua Tuinder';
  }, []);
  return (
    <>
      <main>
        <header className='homepage-header'>
          <ProfilePicture />
          <WelcomeCard />
        </header>
        <div>
          <AboutSummary />
          <StatBlocks />
        </div>
      </main>
    </>
  );
}
