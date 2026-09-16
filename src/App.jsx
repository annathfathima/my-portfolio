import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';

export default function App() {
  const getInitialPage = () => {
    if (window.location.hash === '#about') return 'about';
    if (window.location.hash === '#skills') return 'skills';
    if (window.location.hash === '#projects') return 'projects';
    if (window.location.hash === '#contact') return 'contact';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about') {
        setCurrentPage('about');
      } else if (hash === '#skills') {
        setCurrentPage('skills');
      } else if (hash === '#projects') {
        setCurrentPage('projects');
      } else if (hash === '#contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio-app">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {currentPage === 'about' ? (
        <AboutPage onNavigate={navigateTo} />
      ) : currentPage === 'skills' ? (
        <SkillsPage onNavigate={navigateTo} />
      ) : currentPage === 'projects' ? (
        <ProjectsPage onNavigate={navigateTo} />
      ) : currentPage === 'contact' ? (
        <ContactPage onNavigate={navigateTo} />
      ) : (
        <main>
          <Hero onNavigate={navigateTo} />
          <Skills onNavigate={navigateTo} />
          <Projects onNavigate={navigateTo} />
          <Newsletter />
          <Contact onNavigate={navigateTo} />
        </main>
      )}

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
