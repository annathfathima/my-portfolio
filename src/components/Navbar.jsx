import React, { useState, useEffect } from 'react';

export default function Navbar({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    if (target === 'about') {
      onNavigate('about');
      return;
    }

    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        if (target === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (target === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar" style={{ boxShadow: scrolled ? '0 12px 35px rgba(126, 87, 72, 0.12)' : '' }}>
      <a 
        href="#home" 
        className="logo"
        onClick={(e) => handleNavClick(e, 'home')}
      >
        Hanna
      </a>
      
      <ul className="nav-links">
        <li>
          <a 
            href="#home" 
            className={currentPage === 'home' ? 'nav-link-active' : ''}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className={currentPage === 'about' ? 'nav-link-active' : ''}
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#skills" 
            className={currentPage === 'skills' ? 'nav-link-active' : ''}
            onClick={(e) => handleNavClick(e, 'skills')}
          >
            Skills
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className={currentPage === 'projects' ? 'nav-link-active' : ''}
            onClick={(e) => handleNavClick(e, 'projects')}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={`nav-cta-btn ${currentPage === 'contact' ? 'nav-cta-active' : ''}`}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}
