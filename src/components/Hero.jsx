import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Code2, Brain } from 'lucide-react';

export default function Hero({ onNavigate }) {
  return (
    <main className="hero" id="home">
      <div className="glow-bg top-left" />
      <div className="glow-bg bottom-right" />

      {/* Hero Content */}
      <motion.div 
        className="hero-content" 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="hero-badge">
          <span className="hero-badge-pulse" />
          <span>Available for New Opportunities</span>
        </div>

        <h1 className="hero-title">
          I’m Hanna Fathima
        </h1>

        <h2 className="hero-role">AI Developer</h2>

        <p className="hero-description">
          I’m an aspiring AI Developer &amp; Full-Stack Developer passionate about building practical applications, 
          exploring intelligent technologies, and turning ideas into meaningful digital experiences.
        </p>

        <p className="hero-tagline">
          Currently learning. Constantly building. Always evolving.
        </p>

        <div className="button-group">
          <a 
            href="#projects" 
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work <ArrowUpRight size={17} />
          </a>
          <a 
            href="#about" 
            className="btn btn-secondary"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('about');
              }
            }}
          >
            About Me
          </a>
        </div>
      </motion.div>

      {/* Portrait Graphic */}
      <motion.div 
        className="portrait-frame"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="portrait-ring" />
        <div className="portrait-inner">
          <img 
            className="hero-portrait" 
            src="/my.jpg.jpg" 
            alt="Portrait of Hanna Fathima"
          />
        </div>
        <span className="portrait-label">creative mind / 01</span>
      </motion.div>
    </main>
  );
}
