import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Brain, 
  Code2, 
  Database, 
  LineChart, 
  Terminal, 
  Eye, 
  Cpu, 
  ArrowLeft, 
  ArrowUpRight, 
  Layers, 
  Zap, 
  CheckCircle2,
  FolderGit2
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const getCategoryIcon = (id) => {
  switch (id) {
    case '01': return <Brain size={24} />;
    case '02': return <Cpu size={24} />;
    case '03': return <Database size={24} />;
    case '04': return <LineChart size={24} />;
    case '05': return <Code2 size={24} />;
    case '06': return <Layers size={24} />;
    case '07': return <Eye size={24} />;
    case '08': return <Terminal size={24} />;
    default: return <Code2 size={24} />;
  }
};

export default function SkillsPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'ai-ml', label: 'AI & Machine Learning' },
    { id: 'data', label: 'Data Science & BI' },
    { id: 'web', label: 'Full-Stack Web' },
    { id: 'tools', label: 'Tools & Workflow' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  const totalSkillTags = skillsData.reduce((acc, curr) => acc + curr.tags.length, 0);

  return (
    <div className="skills-standalone-page">
      
      {/* Top Navigation Bar */}
      <div className="skills-page-nav-bar">
        <div className="skills-page-container">
          <button 
            type="button" 
            className="skills-back-btn"
            onClick={() => onNavigate('home')}
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      {/* Page Hero Header */}
      <header className="skills-page-hero">
        <div className="skills-page-container">
          <div className="skills-page-header-content">
            <div className="skills-page-badge">
              <Sparkles size={14} />
              <span>TECHNICAL ARSENAL &bull; FULL STACK &amp; AI</span>
            </div>

            <h1 className="skills-page-title">
              Engineered for Precision, <em>Powered by AI</em>
            </h1>

            <p className="skills-page-lead">
              A comprehensive breakdown of the machine learning architectures, programming languages, 
              full-stack frameworks, and analytical tools I leverage to build intelligent software solutions.
            </p>

            {/* Quick Metrics Strip */}
            <div className="skills-metrics-strip">
              <div className="metric-pill">
                <Zap size={15} className="metric-icon" />
                <span><strong>{totalSkillTags}+</strong> Specialized Skills</span>
              </div>
              <div className="metric-pill">
                <Brain size={15} className="metric-icon" />
                <span><strong>04</strong> Core Domains</span>
              </div>
              <div className="metric-pill">
                <CheckCircle2 size={15} className="metric-icon" />
                <span><strong>Production</strong> Quality Standards</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Interactive Category Filter Pills */}
      <div className="skills-filters-wrap">
        <div className="skills-page-container">
          <div className="skills-filter-buttons">
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`skill-filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Elegant Bento Skills Grid */}
      <main className="skills-page-body">
        <div className="skills-page-container">
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              className="skills-bento-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              {filteredSkills.map((skill, index) => (
                <div key={skill.id} className="skill-hub-card">
                  
                  {/* Top Row: Number, Icon, and Level Badge */}
                  <div className="skill-hub-top">
                    <div className="skill-hub-left">
                      <div className="skill-hub-icon-box">
                        {getCategoryIcon(skill.id)}
                      </div>
                      <div>
                        <span className="skill-hub-num">Domain {skill.id}</span>
                        <span className="skill-hub-cat">{skill.categoryLabel}</span>
                      </div>
                    </div>
                    <span className="skill-hub-badge">{skill.levelBadge}</span>
                  </div>

                  {/* Title & Narrative */}
                  <h2 className="skill-hub-title">{skill.title}</h2>
                  <p className="skill-hub-desc">{skill.description}</p>

                  {/* Individual Technology Pills */}
                  <div className="skill-hub-tags-wrap">
                    <span className="tags-label">Technologies &amp; Competencies:</span>
                    <div className="skill-hub-pills">
                      {skill.tags.map((tag) => (
                        <span key={tag} className="tech-badge">
                          <span className="tech-dot" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Real-World Skills Application Section */}
          <section className="skills-application-section">
            <div className="skills-app-header">
              <span className="app-kicker">APPLIED CAPABILITIES</span>
              <h2>How These Skills Power Real-World Projects</h2>
              <p>Every tool in my stack has been battle-tested in practical, end-to-end applications.</p>
            </div>

            <div className="skills-app-grid">
              
              <div className="app-card">
                <div className="app-card-icon">
                  <Brain size={22} />
                </div>
                <h3>Neural Intelligence in Action</h3>
                <p>
                  Utilizing TensorFlow, deep learning, and Scikit-Learn to build the 
                  <strong> AI Student Burnout Prediction</strong> and <strong>CO₂ Emissions Model</strong>, 
                  analyzing multi-variable patterns to predict complex real-world trends.
                </p>
                <div className="app-tags">
                  <span>TensorFlow</span>
                  <span>Deep Learning</span>
                  <span>Scikit-Learn</span>
                </div>
              </div>

              <div className="app-card">
                <div className="app-card-icon">
                  <Code2 size={22} />
                </div>
                <h3>Modern Full-Stack Architecture</h3>
                <p>
                  Architecting complete applications like the <strong>Django E-Commerce System</strong> and 
                  <strong> Instagram Clone</strong>, managing user authentication, SQLite databases, and reactive React components.
                </p>
                <div className="app-tags">
                  <span>Django</span>
                  <span>React.js</span>
                  <span>REST APIs</span>
                </div>
              </div>

              <div className="app-card">
                <div className="app-card-icon">
                  <LineChart size={22} />
                </div>
                <h3>Visual Executive Intelligence</h3>
                <p>
                  Transforming streaming metrics into actionable decision dashboards with 
                  <strong> Power BI and DAX</strong> for the Netflix Analytics platform, discovering global trends and viewing patterns.
                </p>
                <div className="app-tags">
                  <span>Power BI</span>
                  <span>DAX</span>
                  <span>Data Storytelling</span>
                </div>
              </div>

            </div>
          </section>

          {/* Bottom CTA Card */}
          <section className="skills-cta-section">
            <div className="skills-cta-card">
              <div className="skills-cta-glow" />
              <div className="skills-cta-content">
                <span className="cta-kicker">SEE THE CODE IN ACTION</span>
                <h2>Want to See How I Apply These Technologies?</h2>
                <p>
                  Explore all 8 featured projects with live demonstrations and GitHub source code, 
                  or get in touch to discuss collaborating on your next build.
                </p>

                <div className="skills-cta-buttons">
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={() => {
                      onNavigate('home');
                      setTimeout(() => {
                        const el = document.getElementById('projects');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                  >
                    View Project Showcase <ArrowUpRight size={16} />
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => {
                      onNavigate('home');
                      setTimeout(() => {
                        const el = document.getElementById('contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

    </div>
  );
}
