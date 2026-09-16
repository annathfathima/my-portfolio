import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Check, Copy, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, WhatsAppIcon } from './Icons';
import { contactInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('AI & Machine Learning');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'sending' | 'submitted'

  const topics = [
    'AI & Machine Learning',
    'Full-Stack Web Dev',
    'Data Analytics / BI',
    'Collaboration / Other'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('annathfathima9@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
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

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Section Header */}
        <div className="contact-header">
          <div className="contact-badge">
            <span className="contact-badge-dot" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="contact-title">
            Let's Build Something <em>Extraordinary</em>
          </h2>
          <p className="contact-subtitle">
            Have a project in mind, an innovative AI concept, or an opportunity to explore?
            Reach out and let's bring it to life.
          </p>
        </div>

        {/* 2-Column Split Layout */}
        <div className="contact-grid">
          
          {/* ================= LEFT COLUMN: CONTACT DETAILS ================= */}
          <div className="contact-info-panel">
            <div className="contact-info-intro">
              <h3>Start a Conversation</h3>
              <p>
                Whether you're looking for an engineer to architect an intelligent solution, 
                build modern web experiences, or explore data insights, I'm ready to collaborate.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="contact-cards-stack">
              
              {/* Email Card with Copy Button */}
              <div className="contact-card">
                <div className="card-icon-box">
                  <Mail size={20} />
                </div>
                <div className="card-details">
                  <span className="card-label">Direct Email</span>
                  <a href={`mailto:${contactInfo.email}`} className="card-val-link">
                    {contactInfo.email}
                  </a>
                </div>
                <button 
                  type="button" 
                  className={`copy-btn ${copied ? 'copied' : ''}`}
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* WhatsApp Quick Chat Card */}
              <div className="contact-card whatsapp-highlight-card">
                <div className="card-icon-box" style={{ color: '#25D366', background: 'rgba(37, 211, 102, 0.12)' }}>
                  <WhatsAppIcon size={20} />
                </div>
                <div className="card-details">
                  <span className="card-label">WhatsApp Chat</span>
                  <a href={contactInfo.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="card-val-link" style={{ color: '#128C7E', fontWeight: 600 }}>
                    {contactInfo.phone} &bull; Chat on WhatsApp &rarr;
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="contact-card">
                <div className="card-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="card-details">
                  <span className="card-label">Location &amp; Timezone</span>
                  <span className="card-val">{contactInfo.location} ({contactInfo.timezone})</span>
                </div>
              </div>

              {/* Availability & Response Card */}
              <div className="contact-card highlight">
                <div className="card-icon-box pulse">
                  <Clock size={20} />
                </div>
                <div className="card-details">
                  <span className="card-label">Availability Status</span>
                  <span className="card-val status-text">
                    <span className="status-live-dot" />
                    Open for opportunities &bull; Replies within 24h
                  </span>
                </div>
              </div>

            </div>

            {/* Social Channels */}
            <div className="contact-socials-group">
              <span className="socials-label">Connect Across the Web</span>
              <div className="socials-pills">
                <a 
                  href={contactInfo.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
                <a 
                  href={contactInfo.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={contactInfo.socials.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-pill whatsapp-pill"
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp</span>
                </a>
                <a 
                  href={contactInfo.socials.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <TwitterIcon size={16} />
                  <span>Twitter / X</span>
                </a>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE FORM ================= */}
          <div className="contact-form-panel">
            <div className="form-card">
              
              <AnimatePresence mode="wait">
                {formStatus === 'submitted' ? (
                  <motion.div 
                    key="success"
                    className="contact-success-state"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="success-icon-badge">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3>Message Sent Successfully!</h3>
                    <p>
                      Thank you for reaching out, <strong>{formData.name}</strong>. 
                      I've received your note regarding <em>{selectedTopic}</em> and will 
                      get back to you at <strong>{formData.email}</strong> shortly.
                    </p>
                    <button 
                      type="button" 
                      className="btn btn-secondary send-another-btn"
                      onClick={handleReset}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    className="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="form-header-row">
                      <h3>Send a Message</h3>
                      <span className="form-required-hint">* All fields required</span>
                    </div>

                    {/* Topic Pill Selector */}
                    <div className="topic-selector-wrap">
                      <label className="field-label">What are you inquiring about?</label>
                      <div className="topic-pills">
                        {topics.map(topic => (
                          <button
                            key={topic}
                            type="button"
                            className={`topic-pill ${selectedTopic === topic ? 'active' : ''}`}
                            onClick={() => setSelectedTopic(topic)}
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Email Inputs */}
                    <div className="form-row">
                      <div className="form-field">
                        <label className="field-label" htmlFor="name">Your Name</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name" 
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Alex Morgan"
                          required
                        />
                      </div>
                      <div className="form-field">
                        <label className="field-label" htmlFor="email">Email Address</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="alex@example.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="form-field">
                      <label className="field-label" htmlFor="message">Your Message</label>
                      <textarea 
                        id="message"
                        name="message" 
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, timeline, or what you'd like to collaborate on..."
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      className="contact-submit-btn"
                      disabled={formStatus === 'sending'}
                    >
                      {formStatus === 'sending' ? (
                        <>
                          <span className="btn-spinner" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
