import './style.css';
import React, { useEffect } from 'react';
import ProfilePicture from '../../components/ProfilePicture';
import WelcomeCard from '../../components/WelcomeCard';
import AboutSummary from '../../components/AboutSummary';
import StatBlocks from '../../components/StatBlocks';

export default function Home({ setActivePage }) {
  useEffect(() => {
    setActivePage('Home');
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
