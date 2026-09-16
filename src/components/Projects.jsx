import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const sectionRef = useRef(null);
  const isCooldownRef = useRef(false);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  // Filter projects by selected category
  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  // Safe active project
  const activeProject = filteredProjects[currentIndex] || filteredProjects[0];

  // Navigate to specific index
  const goToIndex = useCallback((targetIdx, dir = 1) => {
    if (targetIdx < 0 || targetIdx >= filteredProjects.length) return;
    setDirection(dir);
    setCurrentIndex(targetIdx);
  }, [filteredProjects.length]);

  // Handle filter category selection
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentIndex(0);
    setDirection(1);

    // Scroll smoothly so the section is centered in viewport
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const targetScroll = window.scrollY + rect.top - 80;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  // Direct wheel scrolling listener
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      // Check if section is currently occupying the viewport
      const rect = el.getBoundingClientRect();
      const inView = rect.top <= 140 && rect.bottom >= window.innerHeight - 140;

      if (!inView) return;

      const isDown = e.deltaY > 0;
      const isUp = e.deltaY < 0;

      if (isDown) {
        // If there are more cards to showcase, intercept scroll and advance
        if (currentIndex < filteredProjects.length - 1) {
          e.preventDefault();
          if (isCooldownRef.current) return;
          isCooldownRef.current = true;
          setDirection(1);
          setCurrentIndex(prev => Math.min(filteredProjects.length - 1, prev + 1));
          setTimeout(() => {
            isCooldownRef.current = false;
          }, 380);
        }
        // At the last card, do NOT preventDefault -> page naturally scrolls down to Footer!
      } else if (isUp) {
        // If not at the first card, intercept scroll and go back
        if (currentIndex > 0) {
          e.preventDefault();
          if (isCooldownRef.current) return;
          isCooldownRef.current = true;
          setDirection(-1);
          setCurrentIndex(prev => Math.max(0, prev - 1));
          setTimeout(() => {
            isCooldownRef.current = false;
          }, 380);
        }
        // At the first card, do NOT preventDefault -> page naturally scrolls up to Skills!
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [currentIndex, filteredProjects.length]);

  // Touch Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    const isHorizontal = Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 35;
    const isVertical = Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 40;

    if (isHorizontal) {
      if (deltaX < 0 && currentIndex < filteredProjects.length - 1) {
        goToIndex(currentIndex + 1, 1);
      } else if (deltaX > 0 && currentIndex > 0) {
        goToIndex(currentIndex - 1, -1);
      }
    } else if (isVertical) {
      if (deltaY < 0 && currentIndex < filteredProjects.length - 1) {
        goToIndex(currentIndex + 1, 1);
      } else if (deltaY > 0 && currentIndex > 0) {
        goToIndex(currentIndex - 1, -1);
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Custom visual mockups for each card
  const getVisualGraphic = (id) => {
    switch (id) {
      case '01':
        return (
          <div className="insta-mockup">
            <div className="insta-mockup-header">
              <div className="insta-avatar" />
              <div className="insta-bar" />
            </div>
            <div className="insta-feed">
              <svg style={{ width: 28, height: 28, stroke: 'white' }} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
          </div>
        );
      case '02':
        return (
          <div className="django-mockup">
            <div className="django-item">
              <div className="django-item-thumb" />
              <div className="django-item-bar" />
            </div>
            <div className="django-item">
              <div className="django-item-thumb" style={{ background: 'linear-gradient(135deg, #0284c7, #38bdf8)' }} />
              <div className="django-item-bar" />
            </div>
          </div>
        );
      case '03':
        return (
          <div className="store-mockup">
            <div className="store-bag-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'white' }}>STOREFRONT</span>
              <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.8)', fontFamily: 'DM Mono, monospace' }}>LIVE CART SYSTEM</span>
            </div>
          </div>
        );
      case '04':
        return (
          <div className="chart-mockup">
            <div className="chart-bar" />
            <div className="chart-bar" />
            <div className="chart-bar" />
            <div className="chart-bar" />
            <div className="chart-bar" />
          </div>
        );
      case '05':
        return (
          <div className="burnout-mockup">
            <div className="neural-pulse">
              <div className="neural-node" />
              <div className="neural-line" />
              <div className="neural-node" />
              <div className="neural-line" />
              <div className="neural-node" />
            </div>
            <span style={{ color: '#ffd0e0', fontSize: '0.65rem', fontFamily: 'DM Mono, monospace', letterSpacing: '0.1em' }}>
              NEURAL SYNAPSE MODEL
            </span>
          </div>
        );
      case '06':
        return (
          <div className="eco-mockup">
            <span className="eco-value">124.8 <small style={{ fontSize: '0.8rem' }}>g/km</small></span>
            <span className="eco-label">CO₂ Emission Target</span>
          </div>
        );
      case '07':
        return (
          <div className="safar-mockup">
            <div className="safar-pill">✈ EXPEDITION PORTAL</div>
            <div className="safar-route-line" />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', opacity: 0.85 }}>
              <span>WANDERLUST</span>
              <span>GLOBAL DESTINATIONS</span>
            </div>
          </div>
        );
      case '08':
        return (
          <div className="netflix-mockup">
            <span className="netflix-logo-mock">NETFLIX</span>
            <div className="netflix-bi-bars">
              <span /><span /><span /><span />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const formattedActiveNum = currentIndex + 1 < 10 ? `0${currentIndex + 1}` : `${currentIndex + 1}`;
  const formattedTotalNum = filteredProjects.length < 10 ? `0${filteredProjects.length}` : `${filteredProjects.length}`;

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.97
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] }
    },
    exit: (dir) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.97,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <section 
      className="projects-scroll-section" 
      ref={sectionRef} 
      id="projects"
    >
      <div className="projects-sticky-frame">
        <div className="projects-split-container">

          {/* ================= LEFT SIDE (STICKY CONTENT & FILTERS) ================= */}
          <div className="projects-left-panel">
            <div className="projects-label-row">
              <span className="projects-label-dot" />
              <span className="projects-label">Featured Portfolio</span>
              <span className="projects-count">
                {formattedTotalNum} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
              </span>
            </div>

            <h2 className="projects-split-title">
              Crafted with <em>Code &amp; Intelligence</em>
            </h2>

            <p className="projects-split-desc">
              A curated showcase of applications, deep learning architectures, 
              and data analytics designed for real-world impact.
            </p>

            {/* Category Filter Buttons */}
            <div className="projects-split-filters">
              <button 
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => handleFilterChange('all')}
              >
                All Projects <span className="badge">8</span>
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
                onClick={() => handleFilterChange('web')}
              >
                Web &amp; Full-Stack <span className="badge">4</span>
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'ai-ml' ? 'active' : ''}`}
                onClick={() => handleFilterChange('ai-ml')}
              >
                AI &amp; Machine Learning <span className="badge">3</span>
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'data' ? 'active' : ''}`}
                onClick={() => handleFilterChange('data')}
              >
                Data Visualization <span className="badge">1</span>
              </button>
            </div>

            {onNavigate && (
              <div style={{ marginBottom: '16px' }}>
                <button 
                  type="button" 
                  onClick={() => onNavigate('projects')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '7px 16px',
                    borderRadius: '999px',
                    background: 'rgba(255, 255, 255, 0.85)',
                    border: '1px solid var(--card-border)',
                    color: 'var(--coral)',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>Explore Full Catalog &amp; Architecture Specs</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            )}

            {/* Stepper Progress & Direct Controls */}
            <div className="projects-stepper-control">
              <div className="stepper-indicator">
                <span className="stepper-num-active">{formattedActiveNum}</span>
                <span className="stepper-slash">/</span>
                <span className="stepper-num-total">{formattedTotalNum}</span>
              </div>

              {/* Progress Bar */}
              <div className="stepper-track">
                <div 
                  className="stepper-fill" 
                  style={{ width: `${((currentIndex + 1) / filteredProjects.length) * 100}%` }} 
                />
              </div>

              {/* Arrow Controls */}
              <div className="stepper-arrows">
                <button 
                  className="stepper-btn" 
                  onClick={() => goToIndex(currentIndex - 1, -1)}
                  disabled={currentIndex === 0}
                  aria-label="Previous Project"
                >
                  <ChevronLeft size={18} />
                </button>
                <button 
                  className="stepper-btn" 
                  onClick={() => goToIndex(currentIndex + 1, 1)}
                  disabled={currentIndex === filteredProjects.length - 1}
                  aria-label="Next Project"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Interactive Dots */}
            <div className="projects-dots">
              {filteredProjects.map((p, idx) => (
                <button
                  key={p.id}
                  className={`project-dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => goToIndex(idx, idx > currentIndex ? 1 : -1)}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ================= RIGHT SIDE (CARD SWIPE & SHOWCASE) ================= */}
          <div 
            className="projects-right-panel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait" custom={direction}>
              {activeProject && (
                <motion.article 
                  key={activeProject.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="project-showcase-card"
                >
                  {/* Visual Header */}
                  <div className={`project-visual ${activeProject.visualClass}`}>
                    <span className="project-num-badge">
                      <span className="dot" />
                      {formattedActiveNum}
                    </span>
                    <span className="project-cat-badge">
                      {activeProject.categoryLabel}
                    </span>

                    <div className="visual-graphic">
                      {getVisualGraphic(activeProject.id)}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="project-content">
                    <div className="project-title-row">
                      <h3>{activeProject.title}</h3>
                      <span className="project-arrow">&#8599;</span>
                    </div>

                    <p className="project-description">
                      {activeProject.description}
                    </p>

                    <div className="project-tags">
                      {activeProject.tags.map(tag => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a 
                        href={activeProject.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link primary"
                      >
                        View Project <ArrowUpRight size={14} />
                      </a>
                      <a 
                        href={activeProject.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link secondary"
                      >
                        <GithubIcon size={14} /> GitHub Code
                      </a>
                    </div>
                  </div>
                </motion.article>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
