import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from './Icons';

export default function Footer({ onNavigate }) {
  const handleLink = (e, target) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(target);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          
          <div className="footer-brand">
            <h2 className="footer-logo">Hanna Fathima<span>.</span></h2>
            <p className="footer-bio">
              Building practical applications at the intersection of AI, Full-Stack development, 
              and Data Science. Let's create something intelligent together.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-column">
              <h3>Navigation</h3>
              <ul>
                <li><a href="#about" onClick={(e) => handleLink(e, 'about')}>About Me</a></li>
                <li><a href="#projects" onClick={(e) => handleLink(e, 'projects')}>Projects</a></li>
                <li><a href="#skills" onClick={(e) => handleLink(e, 'skills')}>Skills</a></li>
                <li><a href="#contact" onClick={(e) => handleLink(e, 'contact')}>Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Connect</h3>
              <ul>
                <li>
                  <a href="https://github.com/annathfathima" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <GithubIcon size={16} /> GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/hanna-fathima-341a04248" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <LinkedinIcon size={16} /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://x.com/Hannamp70" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <TwitterIcon size={16} /> Twitter / X
                  </a>
                </li>
                <li>
                  <a href="mailto:your.annathfathima9@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <MailIcon size={16} /> Email Me
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Hanna Fathima. All rights reserved.
          </p>
          <div className="status-indicator">
            <span className="pulse-dot" />
            <span>Available for new opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
