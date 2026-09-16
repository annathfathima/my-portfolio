import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Sparkles, 
  LayoutGrid, 
  Presentation, 
  SlidersHorizontal, 
  X, 
  CheckCircle2, 
  Code2, 
  ExternalLink, 
  Layers, 
  Zap, 
  FolderGit2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function ProjectsPage({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'spotlight'
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Filter projects by category
  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  const categories = [
    { id: 'all', label: 'All Projects', count: projectsData.length },
    { id: 'web', label: 'Full-Stack Web', count: projectsData.filter(p => p.category === 'web').length },
    { id: 'ai-ml', label: 'AI & Machine Learning', count: projectsData.filter(p => p.category === 'ai-ml').length },
    { id: 'data', label: 'Data Visualization & BI', count: projectsData.filter(p => p.category === 'data').length }
  ];

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setSpotlightIndex(0);
  };

  const currentSpotlight = filteredProjects[spotlightIndex] || filteredProjects[0];

  const handleNextSpotlight = () => {
    if (spotlightIndex < filteredProjects.length - 1) {
      setSpotlightIndex(prev => prev + 1);
    }
  };

  const handlePrevSpotlight = () => {
    if (spotlightIndex > 0) {
      setSpotlightIndex(prev => prev - 1);
    }
  };

  return (
    <div className="projects-standalone-page">
      
      {/* Top Navigation Bar */}
      <div className="projects-page-nav-bar">
        <div className="projects-page-container">
          <button 
            type="button" 
            className="projects-back-btn"
            onClick={() => onNavigate('home')}
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <header className="projects-page-hero">
        <div className="projects-page-container">
          <motion.div 
            className="projects-page-header-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="projects-page-badge">
              <Sparkles size={14} />
              <span>PORTFOLIO SHOWCASE &bull; 08 PRODUCTION BUILDS</span>
            </div>

            <h1 className="projects-page-title">
              Engineering Ideas into <em>Intelligent Software</em>
            </h1>

            <p className="projects-page-lead">
              A curated collection of neural networks, full-stack applications, machine learning systems, 
              and executive analytics platforms engineered with modern production standards.
            </p>

            {/* Metrics Strip */}
            <div className="projects-metrics-strip">
              <div className="metric-pill">
                <FolderGit2 size={15} className="metric-icon" />
                <span><strong>08</strong> Production Projects</span>
              </div>
              <div className="metric-pill">
                <Layers size={15} className="metric-icon" />
                <span><strong>04</strong> Tech Stacks</span>
              </div>
              <div className="metric-pill">
                <CheckCircle2 size={15} className="metric-icon" />
                <span><strong>100%</strong> Open Source &amp; Documented</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Interactive Controls Bar: Category Filters + View Mode Switcher */}
      <section className="projects-controls-section">
        <div className="projects-page-container">
          <div className="projects-controls-bar">
            
            {/* Filter Pills */}
            <div className="projects-filter-pills">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  className={`project-filter-pill ${activeFilter === cat.id ? 'active' : ''}`}
                  onClick={() => handleFilterChange(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className="pill-badge">{cat.count}</span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="projects-view-toggle">
              <button
                type="button"
                className={`view-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Bento Grid View"
              >
                <LayoutGrid size={16} />
                <span>Grid View</span>
              </button>
              <button
                type="button"
                className={`view-mode-btn ${viewMode === 'spotlight' ? 'active' : ''}`}
                onClick={() => setViewMode('spotlight')}
                title="Cinematic Spotlight View"
              >
                <Presentation size={16} />
                <span>Spotlight</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Display Area */}
      <main className="projects-page-body">
        <div className="projects-page-container">
          
          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              
              /* ================= GRID VIEW ================= */
              <motion.div 
                key={`grid-${activeFilter}`}
                className="projects-standalone-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                {filteredProjects.map((project, idx) => (
                  <motion.div 
                    key={project.id} 
                    className="standalone-project-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                  >
                    {/* Visual Mockup Header */}
                    <div className={`project-card-visual ${project.visualClass}`}>
                      <div className="card-top-badges">
                        <span className="card-num-badge">
                          <span className="dot" /> #{project.id}
                        </span>
                        <span className="card-cat-badge">{project.categoryLabel}</span>
                      </div>

                      {/* Graphic Mockups */}
                      <div className="visual-graphic">
                        {project.visualClass === 'visual-instagram' && (
                          <div className="insta-mockup">
                            <div className="insta-mockup-header">
                              <div className="insta-avatar" />
                              <div className="insta-bar" />
                            </div>
                            <div className="insta-feed">
                              <Sparkles size={20} />
                            </div>
                          </div>
                        )}
                        {project.visualClass === 'visual-ecommerce-django' && (
                          <div className="django-mockup">
                            <div className="django-item">
                              <div className="django-item-thumb" />
                              <div className="django-item-bar" />
                            </div>
                            <div className="django-item">
                              <div className="django-item-thumb" style={{ background: 'linear-gradient(135deg, #38bdf8, #0284c7)' }} />
                              <div className="django-item-bar" />
                            </div>
                          </div>
                        )}
                        {project.visualClass === 'visual-ecommerce-js' && (
                          <div className="store-mockup">
                            <div className="store-bag-icon">
                              <Code2 size={24} />
                            </div>
                          </div>
                        )}
                        {project.visualClass === 'visual-student-perf' && (
                          <div className="chart-mockup">
                            <span className="chart-bar" />
                            <span className="chart-bar" />
                            <span className="chart-bar" />
                            <span className="chart-bar" />
                            <span className="chart-bar" />
                          </div>
                        )}
                        {project.visualClass === 'visual-burnout' && (
                          <div className="burnout-mockup">
                            <div className="neural-pulse">
                              <span className="neural-node" />
                              <span className="neural-line" />
                              <span className="neural-node" />
                              <span className="neural-line" />
                              <span className="neural-node" />
                            </div>
                          </div>
                        )}
                        {project.visualClass === 'visual-co2' && (
                          <div className="eco-mockup">
                            <span className="eco-value">124 g</span>
                            <span className="eco-label">CO₂ / km Predicted</span>
                          </div>
                        )}
                        {project.visualClass === 'visual-safarbee' && (
                          <div className="safar-mockup">
                            <div className="safar-pill">Explore • Journey</div>
                            <div className="safar-route-line" />
                          </div>
                        )}
                        {project.visualClass === 'visual-netflix' && (
                          <div className="netflix-mockup">
                            <span className="netflix-logo-mock">NETFLIX</span>
                            <div className="netflix-bi-bars">
                              <span /><span /><span /><span />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="project-card-body">
                      <div className="card-title-row">
                        <h3>{project.title}</h3>
                        <button 
                          type="button" 
                          className="inspect-btn"
                          onClick={() => setSelectedProject(project)}
                          title="Inspect Architecture"
                        >
                          <SlidersHorizontal size={15} />
                        </button>
                      </div>

                      <p className="card-desc">{project.description}</p>

                      {project.metrics && (
                        <div className="card-metric-hint">
                          <Zap size={13} className="hint-icon" />
                          <span>{project.metrics}</span>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="card-tags">
                        {project.tags.map(tag => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="card-actions">
                        <button
                          type="button"
                          className="btn-card-action primary"
                          onClick={() => setSelectedProject(project)}
                        >
                          <span>Inspect Deep Dive</span>
                          <ArrowUpRight size={15} />
                        </button>

                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="btn-card-action icon-only"
                          title="View Source on GitHub"
                        >
                          <GithubIcon size={17} />
                        </a>
                      </div>
                    </div>

                  </motion.div>
                ))}
              </motion.div>

            ) : (

              /* ================= SPOTLIGHT CAROUSEL VIEW ================= */
              <motion.div 
                key={`spotlight-${activeFilter}`}
                className="projects-spotlight-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
              >
                <div className="spotlight-split-card">
                  
                  {/* Left: Info & Stepper */}
                  <div className="spotlight-left-info">
                    <div className="spotlight-badge-row">
                      <span className="card-cat-badge">{currentSpotlight.categoryLabel}</span>
                      <span className="spotlight-counter">
                        Project {spotlightIndex + 1} of {filteredProjects.length}
                      </span>
                    </div>

                    <h2 className="spotlight-title">{currentSpotlight.title}</h2>
                    <p className="spotlight-desc">{currentSpotlight.description}</p>

                    {currentSpotlight.overview && (
                      <div className="spotlight-overview-box">
                        <strong>Architecture Overview:</strong>
                        <p>{currentSpotlight.overview}</p>
                      </div>
                    )}

                    <div className="card-tags" style={{ marginBottom: '28px' }}>
                      {currentSpotlight.tags.map(tag => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    {/* Stepper Navigation */}
                    <div className="spotlight-stepper-row">
                      <button 
                        type="button" 
                        className="stepper-nav-btn"
                        onClick={handlePrevSpotlight}
                        disabled={spotlightIndex === 0}
                      >
                        <ChevronLeft size={18} />
                        <span>Previous</span>
                      </button>

                      <div className="spotlight-progress-dots">
                        {filteredProjects.map((p, idx) => (
                          <button
                            key={p.id}
                            type="button"
                            className={`progress-dot ${idx === spotlightIndex ? 'active' : ''}`}
                            onClick={() => setSpotlightIndex(idx)}
                            aria-label={`Jump to project ${idx + 1}`}
                          />
                        ))}
                      </div>

                      <button 
                        type="button" 
                        className="stepper-nav-btn"
                        onClick={handleNextSpotlight}
                        disabled={spotlightIndex === filteredProjects.length - 1}
                      >
                        <span>Next</span>
                        <ChevronRight size={18} />
                      </button>
                    </div>

                  </div>

                  {/* Right: Rich Visual Mockup */}
                  <div className={`spotlight-right-visual ${currentSpotlight.visualClass}`}>
                    <div className="spotlight-graphic-wrap">
                      <div className="visual-graphic">
                        {currentSpotlight.visualClass === 'visual-instagram' && (
                          <div className="insta-mockup" style={{ transform: 'scale(1.25)' }}>
                            <div className="insta-mockup-header">
                              <div className="insta-avatar" />
                              <div className="insta-bar" />
                            </div>
                            <div className="insta-feed">
                              <Sparkles size={26} />
                            </div>
                          </div>
                        )}
                        {currentSpotlight.visualClass === 'visual-ecommerce-django' && (
                          <div className="django-mockup" style={{ transform: 'scale(1.25)' }}>
                            <div className="django-item">
                              <div className="django-item-thumb" />
                              <div className="django-item-bar" />
                            </div>
                            <div className="django-item">
                              <div className="django-item-thumb" style={{ background: 'linear-gradient(135deg, #38bdf8, #0284c7)' }} />
                              <div className="django-item-bar" />
                            </div>
                          </div>
                        )}
                        {currentSpotlight.visualClass === 'visual-ecommerce-js' && (
                          <div className="store-mockup" style={{ transform: 'scale(1.25)' }}>
                            <div className="store-bag-icon">
                              <Code2 size={32} />
                            </div>
                          </div>
                        )}
                        {currentSpotlight.visualClass === 'visual-student-perf' && (
                          <div className="chart-mockup" style={{ transform: 'scale(1.25)' }}>
                            <span className="chart-bar" />
                            <span className="chart-bar" />
                            <span className="chart-bar" />
                            <span className="chart-bar" />
                            <span className="chart-bar" />
                          </div>
                        )}
                        {currentSpotlight.visualClass === 'visual-burnout' && (
                          <div className="burnout-mockup" style={{ transform: 'scale(1.25)' }}>
                            <div className="neural-pulse">
                              <span className="neural-node" />
                              <span className="neural-line" />
                              <span className="neural-node" />
                              <span className="neural-line" />
                              <span className="neural-node" />
                            </div>
                          </div>
                        )}
                        {currentSpotlight.visualClass === 'visual-co2' && (
                          <div className="eco-mockup" style={{ transform: 'scale(1.25)' }}>
                            <span className="eco-value">124 g</span>
                            <span className="eco-label">CO₂ / km Predicted</span>
                          </div>
                        )}
                        {currentSpotlight.visualClass === 'visual-safarbee' && (
                          <div className="safar-mockup" style={{ transform: 'scale(1.25)' }}>
                            <div className="safar-pill">Explore • Journey</div>
                            <div className="safar-route-line" />
                          </div>
                        )}
                        {currentSpotlight.visualClass === 'visual-netflix' && (
                          <div className="netflix-mockup" style={{ transform: 'scale(1.25)' }}>
                            <span className="netflix-logo-mock">NETFLIX</span>
                            <div className="netflix-bi-bars">
                              <span /><span /><span /><span />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="spotlight-quick-cta">
                      <a 
                        href={currentSpotlight.githubUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="spotlight-link-btn"
                      >
                        <GithubIcon size={17} />
                        <span>Source Code</span>
                      </a>
                      <button 
                        type="button" 
                        className="spotlight-link-btn primary"
                        onClick={() => setSelectedProject(currentSpotlight)}
                      >
                        <span>Full Architectural Specs</span>
                        <ArrowUpRight size={16} />
                      </button>
                    </div>

                  </div>

                </div>
              </motion.div>

            )}
          </AnimatePresence>

          {/* GitHub Repository Showcase Banner */}
          <section className="projects-bottom-banner">
            <div className="banner-left">
              <div className="banner-icon-box">
                <GithubIcon size={24} />
              </div>
              <div>
                <h3>Explore the Open Source Codebase</h3>
                <p>Every project is documented with clean commits, structured READMEs, and modular code architecture.</p>
              </div>
            </div>
            <a 
              href="https://github.com/annathfathima" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-primary"
            >
              <GithubIcon size={18} />
              <span>Visit GitHub Profile</span>
            </a>
          </section>

          {/* Bottom Call To Action */}
          <section className="projects-cta-section">
            <div className="projects-cta-card">
              <div className="projects-cta-glow" />
              <div className="projects-cta-content">
                <span className="cta-kicker">LET'S COLLABORATE</span>
                <h2>Have a Project or Architecture to Build?</h2>
                <p>
                  Whether you need deep learning models, robust backend microservices, or polished 
                  interactive web interfaces, let's connect and discuss how I can contribute.
                </p>
                <div className="projects-cta-buttons">
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={() => onNavigate('contact')}
                  >
                    <span>Get in Touch</span>
                    <ArrowUpRight size={16} />
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => onNavigate('skills')}
                  >
                    <span>Inspect Technical Stack</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* ================= ARCHITECTURE INSPECTION MODAL ================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
            <motion.div 
              className="project-modal-dialog"
              onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="modal-header">
                <div className="modal-badge-row">
                  <span className="card-num-badge">#{selectedProject.id}</span>
                  <span className="card-cat-badge">{selectedProject.categoryLabel}</span>
                </div>
                <h2 className="modal-title">{selectedProject.title}</h2>
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <h4>Core Objectives &amp; Purpose</h4>
                  <p>{selectedProject.description}</p>
                </div>

                {selectedProject.overview && (
                  <div className="modal-section">
                    <h4>Technical &amp; Architectural Highlights</h4>
                    <p>{selectedProject.overview}</p>
                  </div>
                )}

                {selectedProject.metrics && (
                  <div className="modal-metric-badge">
                    <Zap size={15} />
                    <span>{selectedProject.metrics}</span>
                  </div>
                )}

                <div className="modal-section">
                  <h4>Technologies &amp; Libraries Leveraged</h4>
                  <div className="card-tags">
                    {selectedProject.tags.map(t => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <a 
                  href={selectedProject.githubUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-secondary"
                >
                  <GithubIcon size={16} />
                  <span>View Repository</span>
                </a>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedProject(null);
                    onNavigate('contact');
                  }}
                >
                  <span>Inquire About This Project</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
