import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
        
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
           <Route path="/about" element={<AboutPage />} />
          
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;