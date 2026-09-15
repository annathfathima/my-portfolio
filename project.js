"use client";


import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Instagram Clone",
    category: "FULL STACK • TRAVEL",
    description:
      "A modern travel platform for discovering destinations, exploring packages, and sending travel enquiries.",
    tags: ["HTML", "CSS"],
    category: "FRONTEND",
    description: "A responsive social media interface with a clean layout and familiar interactions.",
    image: null,
    live: "#",
    github: "#",
  },

  {
    id: "02",
    title: "E-Commerce Website",
    category: "AI • MACHINE LEARNING",
    description:
      "A machine learning project that analyzes student-related factors and predicts potential academic risk.",
    tags: ["Django", "Python"],
    category: "FULL STACK",
    description: "A full-stack shopping platform with products, customer accounts, and order management.",
    image: null,
    live: "#",
    github: "#",
  },

  {
    id: "03",
    title: "E-Commerce Website",
    category: "FULL STACK",
    description:
      "A complete e-commerce web application with product, user, cart, and order management.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "FRONTEND",
    description: "A polished storefront experience with product browsing, cart interactions, and responsive design.",
    image: null,
    live: "#",
    github: "#",
  },

  {
    id: "04",
    title: "Student Performance Prediction",
    category: "DATA SCIENCE • ML",
    description:
      "A data analysis and machine learning project exploring factors that influence student performance.",
    tags: ["Machine Learning", "Python"],
    category: "MACHINE LEARNING",
    image: null,
    live: "#",
    github: "#",
  },

  {
    id: "05",
    title: "AI Student Risk & Burnout Prediction",
    category: "DATA ANALYTICS",
    description:
      "A cricket data analytics project focused on discovering trends, patterns, and meaningful insights.",
    tags: ["Deep Learning", "Python"],
    category: "DEEP LEARNING",
    description: "A deep learning model designed to identify potential student risk and burnout patterns.",
    image: null,
    live: "#",
    github: "#",
  },

  {
    id: "06",
    title: "CO₂ Emissions Prediction",
    category: "AI • GENAI",
    description:
      "A collection of practical experiments exploring generative AI, LLMs, and modern AI workflows.",
    tags: ["Regression", "Machine Learning", "Python"],
    category: "MACHINE LEARNING",
    description: "A regression model that estimates carbon dioxide emissions from relevant data inputs.",
    image: null,
    live: "#",
    github: "#",
  },

  {
    id: "07",
    title: "SafarBee - Travel Website",
    category: "FULL STACK • TRAVEL",
    description:
      "A modern travel platform for discovering destinations, exploring packages, and sending travel enquiries.",
    tags: ["Next.js", "React", "JavaScript"],
    featured: true,
    image: null,
    live: "#",
    github: "#",
  },

  {
    id: "08",
    title: "Netflix Dashboard",
    category: "DATA VISUALIZATION",
    description:
      "An interactive dashboard that turns Netflix data into clear, useful visual insights.",
    tags: ["Power BI", "Data Visualization"],
    image: null,
    live: "#",
    github: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* ================= HEADER ================= */}

        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="projects-label-row">
            <span className="projects-label">SELECTED WORK</span>

            <span className="projects-line"></span>

            <span className="projects-count">08 PROJECTS</span>
          </div>

          <h2>
            Things I've <em>built</em>
          </h2>

          <p>
            A selection of projects where I combine web development,
            data, machine learning, and AI to create practical solutions.
          </p>
        </motion.div>


        {/* ================= PROJECT GRID ================= */}

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >

          {projects.map((project) => (
            <motion.article
              key={project.id}
              className={`project-card ${
                project.featured ? "project-card-featured" : ""
              }`}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.3,
                },
              }}
            >

              {/* ================= IMAGE ================= */}

              <div className="project-image-wrapper">

                <div className="project-image">

                  {project.image ? (
                    <motion.img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      whileHover={{
                        scale: 1.06,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                    />
                  ) : (
                    <div className="project-placeholder">
                      <Sparkles />
                      <span>PROJECT PREVIEW</span>
                    </div>
                  )}

                </div>


                {/* Overlay */}

                <div className="project-image-overlay">
                  <span>VIEW PROJECT</span>

                  <motion.div
                    className="project-overlay-arrow"
                    whileHover={{
                      rotate: 45,
                    }}
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                </div>


                {/* Number */}

                <span className="project-number">
                  {project.id}
                </span>

              </div>


              {/* ================= CONTENT ================= */}

              <div className="project-content">

                <div className="project-category">
                  {project.category}
                </div>

                <div className="project-title-row">

                  <h3>
                    {project.title}
                  </h3>

                  <motion.div
                    className="project-arrow"
                    whileHover={{
                      rotate: 45,
                      scale: 1.1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <ArrowUpRight size={19} />
                  </motion.div>

                </div>


                <p className="project-description">
                  {project.description}
                </p>


                {/* Tags */}

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>


                {/* Links */}

                <div className="project-links">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link primary"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link secondary"
                  >
                    <Github size={15} />
                    GitHub
                  </a>

                </div>

              </div>

            </motion.article>
          ))}

        </motion.div>


        {/* ================= BOTTOM ================= */}

        <motion.div
          className="projects-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span>
            More projects coming as I keep building.
          </span>

          <a
            href="https://github.com/annathfathima"
            target="_blank"
            rel="noreferrer"
          >
            Explore GitHub
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
