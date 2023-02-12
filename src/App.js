import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Redirect from './pages/Redirect';

import { Home, Story, Projects, Contact } from './pages';
import StoryPage from './pages/Story';

import { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState('Home');

  return (
    <>
      <Navbar activePage={activePage} />
      <Routes>
        <Route path='/' element={<Home setActivePage={setActivePage} />} />
        <Route path='/story' element={<Story setActivePage={setActivePage} />} />
        <Route path='/projects' element={<Projects setActivePage={setActivePage} />} />
        <Route path='/contact' element={<Contact setActivePage={setActivePage} />} />
        <Route path='/truck-data' element={<Redirect />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
