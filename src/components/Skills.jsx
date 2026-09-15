import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, Cpu, Sparkles, Eye, Terminal, BarChart3 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const getSkillIcon = (id) => {
  switch (id) {
    case '01': return <Code2 size={18} />;
    case '02': return <Database size={18} />;
    case '03': return <Brain size={18} />;
    case '04': return <Cpu size={18} />;
    case '05': return <Sparkles size={18} />;
    case '06': return <Eye size={18} />;
    case '07': return <Terminal size={18} />;
    case '08': return <BarChart3 size={18} />;
    default: return <Code2 size={18} />;
  }
};

export default function Skills() {
  // Duplicate skills list to make the marquee seamless
  const marqueeSkills = [...skillsData, ...skillsData];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <motion.div 
          className="skills-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="skills-label">My Skills &amp; Stack</span>
          <h2>
            Skills &amp; <em>Technologies</em>
          </h2>
          <p>
            Technologies I use to build scalable web applications, explore neural architectures, 
            and transform complex data into clear, actionable insights.
          </p>
        </motion.div>
      </div>

      {/* Infinite Skills Marquee */}
      <div className="skills-marquee">
        <div className="marquee-track">
          {marqueeSkills.map((skill, index) => (
            <div className="skill-card" key={`${skill.id}-${index}`}>
              <div className="skill-card-top">
                <span className="skill-number">{skill.id}</span>
                <div className="skill-icon-bubble">
                  {getSkillIcon(skill.id)}
                </div>
              </div>

              <h3>{skill.title}</h3>
              <p>{skill.description}</p>

              <div className="skill-tags">
                {skill.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
