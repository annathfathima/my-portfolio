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
    onNavigate(target);
  };

  return (
    <nav className="navbar" style={{ boxShadow: scrolled ? '0 12px 35px rgba(126, 87, 72, 0.12)' : '' }}>
      <ul className="nav-links">
        <li>
          <a 
            href="#home" 
            className={currentPage === 'home' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className={currentPage === 'about' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#skills" 
            className={currentPage === 'skills' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'skills')}
          >
            Skills
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className={currentPage === 'projects' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'projects')}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={currentPage === 'contact' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
