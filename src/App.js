import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/Home';
import AboutPage from './components/pages/About';
import ProjectsPage from './components/pages/Projects';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState('Home');

  return (
    <>
      <Navbar activePage={activePage} />
      <Routes>
        <Route path='/' element={<HomePage setActivePage={setActivePage} />} />
        <Route path='/about' element={<AboutPage setActivePage={setActivePage} />} />
        <Route path='/projects' element={<ProjectsPage setActivePage={setActivePage} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
