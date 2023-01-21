import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import Footer from './components/Footer';
import Redirect from './pages/Redirect';
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
        <Route path='/truck-data' element={<Redirect />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
