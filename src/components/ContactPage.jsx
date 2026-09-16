import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Mail, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ChevronDown, 
  HelpCircle,
  MessageSquare,
  Globe2,
  Calendar
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

export default function ContactPage({ onNavigate }) {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('AI & Machine Learning');
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'sending' | 'submitted'

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const topics = [
    'AI & Machine Learning',
    'Full-Stack Web Dev',
    'Data Analytics / BI',
    'Consulting / Collaboration',
    'Career Opportunity'
  ];

  const faqs = [
    {
      q: 'What kind of projects or roles are you currently open to?',
      a: 'I am actively exploring AI Developer and Full-Stack Engineering roles, as well as freelance contracts involving predictive modeling, deep learning architectures, Django backend systems, and modern React web interfaces.'
    },
    {
      q: 'What is your typical response time?',
      a: 'I reply to all direct emails and contact form inquiries within 24 hours (usually much faster during India Standard Time working hours).'
    },
    {
      q: 'Are you available for remote work globally?',
      a: 'Yes, I am fully equipped for remote collaboration across diverse time zones and comfortable using Git, Slack, Discord, Zoom, and agile project management tools.'
    },
    {
      q: 'Can we schedule an introductory video call?',
      a: 'Absolutely! Send a brief note through the form with your timezone or preferred slots, and I will share a direct calendar link to connect.'
    }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('annathfathima9@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('submitted');
    }, 1100);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setFormStatus('idle');
  };

  const toggleFaq = (idx) => {
    setOpenFaq(prev => prev === idx ? null : idx);
  };

  return (
    <div className="contact-standalone-page">
      
      {/* Top Navigation Bar */}
      <div className="contact-page-nav-bar">
        <div className="contact-page-container">
          <button 
            type="button" 
            className="contact-back-btn"
            onClick={() => onNavigate('home')}
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <header className="contact-page-hero">
        <div className="contact-page-container">
          <motion.div 
            className="contact-page-header-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-page-badge">
              <span className="badge-pulse-dot" />
              <span>DIRECT COMMUNICATIONS &bull; OPEN TO NEW OPPORTUNITIES</span>
            </div>

            <h1 className="contact-page-title">
              Let’s Architect Something <em>Extraordinary</em>
            </h1>

            <p className="contact-page-lead">
              Have an innovative machine learning model to build, a full-stack platform to engineer, 
              or an opportunity to explore? Reach out directly or dispatch a message below.
            </p>

            {/* Quick Metrics Strip */}
            <div className="contact-metrics-strip">
              <div className="metric-pill">
                <Clock size={15} className="metric-icon" />
                <span><strong>&lt; 24hr</strong> Guaranteed Response</span>
              </div>
              <div className="metric-pill">
                <Globe2 size={15} className="metric-icon" />
                <span><strong>Remote</strong> Global Availability</span>
              </div>
              <div className="metric-pill">
                <CheckCircle2 size={15} className="metric-icon" />
                <span><strong>Direct</strong> Engineer-to-Engineer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Split Grid */}
      <main className="contact-page-body">
        <div className="contact-page-container">
          
          <div className="contact-standalone-grid">
            
            {/* ================= LEFT PANEL: CONTACT HUB & FAQ ================= */}
            <motion.div 
              className="contact-hub-panel"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              
              {/* Direct Reach Card */}
              <div className="hub-contact-card">
                <div className="hub-card-top">
                  <div className="hub-icon-box">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="hub-label">Direct Inbox</span>
                    <a href="mailto:annathfathima9@gmail.com" className="hub-email-link">
                      annathfathima9@gmail.com
                    </a>
                  </div>
                </div>

                <div className="hub-card-bottom">
                  <button 
                    type="button" 
                    className={`hub-copy-btn ${copied ? 'copied' : ''}`}
                    onClick={handleCopyEmail}
                  >
                    {copied ? (
                      <>
                        <Check size={15} />
                        <span>Email Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={15} />
                        <span>Click to Copy Email Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Timezone Card */}
              <div className="hub-info-row">
                <div className="hub-mini-card">
                  <div className="mini-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="mini-label">Location</span>
                    <strong>Kerala, India</strong>
                  </div>
                </div>

                <div className="hub-mini-card">
                  <div className="mini-icon">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="mini-label">Timezone</span>
                    <strong>IST (UTC+5:30)</strong>
                  </div>
                </div>
              </div>

              {/* Social Channels Card */}
              <div className="hub-socials-card">
                <span className="socials-card-title">Professional Networks</span>
                <p>Connect with me across developer networks and platforms:</p>
                <div className="hub-social-buttons">
                  <a 
                    href="https://github.com/annathfathima" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hub-social-btn"
                  >
                    <GithubIcon size={18} />
                    <span>GitHub Profile</span>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hub-social-btn"
                  >
                    <LinkedinIcon size={18} />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hub-social-btn"
                  >
                    <TwitterIcon size={18} />
                    <span>Twitter / X</span>
                  </a>
                </div>
              </div>

              {/* Collapsible FAQ Section */}
              <div className="hub-faq-card">
                <div className="faq-header-title">
                  <HelpCircle size={18} className="faq-icon" />
                  <h3>Frequently Asked Questions</h3>
                </div>

                <div className="faq-list">
                  {faqs.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className={`faq-item ${openFaq === idx ? 'expanded' : ''}`}
                    >
                      <button 
                        type="button" 
                        className="faq-question-btn"
                        onClick={() => toggleFaq(idx)}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown size={16} className="faq-arrow" />
                      </button>

                      <AnimatePresence>
                        {openFaq === idx && (
                          <motion.div 
                            className="faq-answer-wrap"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <p className="faq-answer">{faq.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>

            {/* ================= RIGHT PANEL: INTERACTIVE DISPATCH CONSOLE ================= */}
            <motion.div 
              className="contact-form-panel"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="form-card-console">
                
                {formStatus === 'submitted' ? (
                  <motion.div 
                    className="console-success-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="success-icon-badge">
                      <CheckCircle2 size={38} />
                    </div>
                    <h3>Dispatch Received!</h3>
                    <p>
                      Thank you for reaching out, <strong>{formData.name}</strong>. I have received your message regarding 
                      <strong> {selectedTopic}</strong> and will get back to you at <strong>{formData.email}</strong> within 24 hours.
                    </p>

                    <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={handleReset}
                    >
                      <span>Send Another Message</span>
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="console-form">
                    
                    <div className="console-header-row">
                      <div>
                        <h3>Send a Direct Message</h3>
                        <p className="console-subtitle">Fill in the parameters below for immediate review.</p>
                      </div>
                      <span className="console-indicator">● Active Portal</span>
                    </div>

                    {/* Topic / Specialization Selector */}
                    <div className="console-field-block">
                      <label className="console-label">Select Project Nature / Focus Area</label>
                      <div className="topic-pills-list">
                        {topics.map(t => (
                          <button
                            key={t}
                            type="button"
                            className={`console-topic-pill ${selectedTopic === t ? 'active' : ''}`}
                            onClick={() => setSelectedTopic(t)}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Email Row */}
                    <div className="console-inputs-row">
                      <div className="console-input-group">
                        <label className="console-label" htmlFor="contact-name">Your Full Name *</label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Sarah Jenkins"
                          required
                        />
                      </div>

                      <div className="console-input-group">
                        <label className="console-label" htmlFor="contact-email">Email Address *</label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="sarah@company.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="console-field-block">
                      <label className="console-label" htmlFor="contact-message">Project Scope or Message *</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about the problem you're solving, your target timeline, or what you'd like to build together..."
                        rows={5}
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      className="console-submit-btn"
                      disabled={formStatus === 'sending'}
                    >
                      {formStatus === 'sending' ? (
                        <>
                          <div className="btn-spinner" />
                          <span>Dispatching Transmission...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Dispatch Message Now</span>
                        </>
                      )}
                    </button>

                    <p className="console-privacy-note">
                      🔒 Your communication details remain completely private and will only be used for our conversation.
                    </p>

                  </form>
                )}

              </div>
            </motion.div>

          </div>

        </div>
      </main>

    </div>
  );
}
