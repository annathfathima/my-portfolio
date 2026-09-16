import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, CheckCircle2, Zap, Brain, Rocket } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-card">
          <div className="newsletter-glow" />
          
          <div className="newsletter-content">
            <div className="newsletter-badge">
              <Sparkles size={14} className="badge-sparkle" />
              <span>THE INTELLIGENCE DISPATCH</span>
            </div>

            <h2 className="newsletter-title">
              Stay Ahead in <em>Code &amp; AI</em>
            </h2>

            <p className="newsletter-desc">
              Join developers, engineers, and creators receiving my monthly notes on 
              practical deep learning architectures, modern full-stack patterns, and early project releases.
            </p>

            {/* Feature Points */}
            <div className="newsletter-perks">
              <div className="perk-item">
                <Zap size={15} className="perk-icon" />
                <span>Monthly curation, zero spam</span>
              </div>
              <div className="perk-item">
                <Brain size={15} className="perk-icon" />
                <span>Real-world ML &amp; AI breakdowns</span>
              </div>
              <div className="perk-item">
                <Rocket size={15} className="perk-icon" />
                <span>Early open-source project previews</span>
              </div>
            </div>

            {/* Subscription Form */}
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    className="newsletter-success-box"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <CheckCircle2 size={20} className="success-icon" />
                    <div>
                      <strong>You're on the list!</strong>
                      <span>Thank you for subscribing. Check your inbox for the welcome edition.</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="form"
                    className="newsletter-input-group"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..." 
                      className="newsletter-input"
                      required
                      disabled={status === 'loading'}
                    />
                    <button 
                      type="submit" 
                      className="newsletter-submit-btn"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? (
                        <span className="btn-spinner" />
                      ) : (
                        <>
                          <span>Subscribe</span>
                          <Send size={15} />
                        </>
                      )}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            <p className="newsletter-privacy">
              🔒 Respecting your inbox. 1-click unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
