import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Brain, 
  Code2, 
  LineChart, 
  ArrowLeft, 
  ArrowUpRight, 
  MapPin, 
  GraduationCap, 
  Heart, 
  CheckCircle2, 
  Compass, 
  Layers, 
  Award,
  Calendar
} from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const pillars = [
    {
      icon: <Brain size={26} />,
      title: "Artificial Intelligence & ML",
      tagline: "Predictive Models & Deep Learning",
      description: "Designing supervised machine learning pipelines, regression models, and deep neural networks to extract insights and predict real-world outcomes with high accuracy."
    },
    {
      icon: <Code2 size={26} />,
      title: "Full-Stack Web Engineering",
      tagline: "Resilient Backends & Dynamic Interfaces",
      description: "Architecting end-to-end web applications with Django and React. Specializing in RESTful API development, database schemas, and modern component-driven frontends."
    },
    {
      icon: <LineChart size={26} />,
      title: "Data Science & BI Dashboards",
      tagline: "Visual Analytics & Metric Discovery",
      description: "Transforming unstructured data into compelling business intelligence dashboards with Power BI, Pandas, and NumPy to empower data-driven decisions."
    }
  ];

  const milestones = [
    {
      period: "Milestone 01",
      title: "Core Foundations in Web & Python",
      desc: "Mastered fundamental computer science concepts, object-oriented Python, JavaScript, and responsive design systems."
    },
    {
      period: "Milestone 02",
      title: "Full-Stack Web Architecture",
      desc: "Built comprehensive database-driven platforms using Django, relational SQLite schemas, authentication flows, and interactive storefronts."
    },
    {
      period: "Milestone 03",
      title: "Machine Learning Pipelines",
      desc: "Developed predictive regression and classification models, including student academic performance forecasting and automotive CO₂ emission analysis."
    },
    {
      period: "Milestone 04",
      title: "Deep Learning & Intelligent AI",
      desc: "Trained neural networks for mental fatigue and burnout detection, while expanding into generative AI workflows and modern React ecosystems."
    }
  ];

  const values = [
    {
      num: "01",
      title: "Purpose-Driven Code",
      text: "Every function, component, and database schema is crafted with intentionality, ensuring maintainability and high user value."
    },
    {
      num: "02",
      title: "Algorithmic Curiosity",
      text: "Constantly diving into machine learning theory, neural network advances, and emergent AI capabilities."
    },
    {
      num: "03",
      title: "Aesthetic Craftsmanship",
      text: "Code and design are two sides of the same coin. Powerful algorithms deserve beautiful, intuitive, and accessible user interfaces."
    }
  ];

  return (
    <div className="about-standalone-page">
      
      {/* Top Banner Navigation */}
      <div className="about-page-nav-bar">
        <div className="about-page-container">
          <button 
            type="button" 
            className="about-back-btn"
            onClick={() => onNavigate('home')}
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      {/* Page Header */}
      <header className="about-page-hero">
        <div className="about-page-container">
          <div className="about-page-header-content">
            <div className="about-page-badge">
              <Sparkles size={14} />
              <span>THE ENGINEER &amp; CREATOR &bull; DETAILED PROFILE</span>
            </div>

            <h1 className="about-page-title">
              Crafting Intelligence, <em>Shaping Ideas</em>
            </h1>

            <p className="about-page-lead">
              A comprehensive profile of my engineering philosophy, technical foundations, 
              and journey as an aspiring AI Developer &amp; Full-Stack Engineer based in Kerala, India.
            </p>
          </div>
        </div>
      </header>

      <main className="about-page-body">
        <div className="about-page-container">

          {/* Profile & Biography Grid */}
          <section className="about-bio-grid">
            
            {/* Left Column: Portrait Card */}
            <div className="about-portrait-card">
              <div className="about-portrait-wrapper">
                <div className="about-portrait-glow" />
                <div className="about-portrait-img-box">
                  <img 
                    src="/my.jpg.jpg" 
                    alt="Hanna Fathima Portrait" 
                    className="about-portrait-photo"
                  />
                </div>
              </div>

              <div className="about-portrait-meta">
                <h2>Hanna Fathima</h2>
                <span className="about-portrait-role">AI Developer &amp; Full-Stack Engineer</span>

                <div className="about-quick-tags">
                  <div className="quick-tag">
                    <MapPin size={14} className="tag-icon" />
                    <span>Kerala, India</span>
                  </div>
                  <div className="quick-tag">
                    <Brain size={14} className="tag-icon" />
                    <span>AI Development</span>
                  </div>
                </div>

                <div className="about-status-banner">
                  <span className="about-pulse-dot" />
                  <span>Available for Full-Time &amp; Freelance Roles</span>
                </div>
              </div>
            </div>

            {/* Right Column: In-Depth Story */}
            <div className="about-story-card">
              <div className="story-kicker">PERSONAL NARRATIVE</div>
              <h3>Bridging Analytical Logic &amp; Human Experience</h3>
              
              <div className="story-paragraphs">
                <p>
                  I’m <strong>Hanna Fathima</strong>, an aspiring software developer with a strong focus 
                  on <strong>Artificial Intelligence, Machine Learning, and Full-Stack Web Development</strong>. 
                  My journey began with a fundamental curiosity: how can lines of clean code turn abstract human concepts 
                  into practical, impactful tools?
                </p>

                <p>
                  As I delved deeper into software engineering, I became fascinated by the transformative potential of 
                  <strong> Data Science and Predictive Modeling</strong>. The ability to take massive, chaotic datasets and 
                  uncover subtle patterns that forecast student academic performance or calculate automotive carbon emissions 
                  unlocked a whole new dimension of what technology can achieve.
                </p>

                <p>
                  I don’t just write algorithms in isolation; I believe software is most powerful when paired with intuitive, 
                  delightful interfaces. Whether I’m training a neural network in Python or building a responsive full-stack platform with 
                  Django and React, my objective remains identical: <em>create software that is fast, resilient, and deeply meaningful to users.</em>
                </p>
              </div>

              {/* Quick Metrics */}
              <div className="about-stats-row">
                <div className="stat-item">
                  <span className="stat-num">08+</span>
                  <span className="stat-label">Showcase Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">03</span>
                  <span className="stat-label">Core Specializations</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">100%</span>
                  <span className="stat-label">Dedication to Craft</span>
                </div>
              </div>
            </div>

          </section>

          {/* Three Technical Pillars */}
          <section className="about-pillars-section">
            <div className="section-title-wrap">
              <span className="section-kicker">TECHNICAL SPECTRUM</span>
              <h2>Core Disciplines &amp; Focus</h2>
              <p>The specialized skillsets I bring to every engineering project.</p>
            </div>

            <div className="standalone-pillars-grid">
              {pillars.map((pillar, idx) => (
                <motion.div 
                  key={pillar.title}
                  className="standalone-pillar-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                >
                  <div className="pillar-icon-wrap">
                    {pillar.icon}
                  </div>
                  <h3>{pillar.title}</h3>
                  <span className="pillar-badge">{pillar.tagline}</span>
                  <p>{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Journey Milestones */}
          <section className="about-timeline-section">
            <div className="section-title-wrap">
              <span className="section-kicker">GROWTH PATHWAY</span>
              <h2>Milestones &amp; Evolution</h2>
              <p>Key phases in my journey from web development foundations to modern AI.</p>
            </div>

            <div className="timeline-grid">
              {milestones.map((m, idx) => (
                <div key={m.period} className="timeline-card">
                  <div className="timeline-number">{m.period}</div>
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Guiding Principles */}
          <section className="about-principles-section">
            <div className="principles-card-standalone">
              <div className="section-title-wrap">
                <span className="section-kicker">STANDARDS OF WORK</span>
                <h2>Guiding Principles</h2>
                <p>The core values that define how I approach every codebase and challenge.</p>
              </div>

              <div className="standalone-values-grid">
                {values.map(val => (
                  <div key={val.num} className="standalone-val-item">
                    <span className="val-num">{val.num}</span>
                    <div>
                      <h4>{val.title}</h4>
                      <p>{val.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Banner */}
          <section className="about-cta-section">
            <div className="about-cta-card">
              <div className="about-cta-glow" />
              <div className="about-cta-content">
                <span className="cta-kicker">READY TO EXPLORE?</span>
                <h2>Explore What I've Built or Start a Conversation</h2>
                <p>
                  View my 8 curated web applications, predictive machine learning models, 
                  and data analytics dashboards, or reach out directly to discuss new opportunities.
                </p>

                <div className="about-cta-buttons">
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
                    Explore Projects <ArrowUpRight size={16} />
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
