import React from 'react';
import { Link } from 'react-router-dom';

const projectsData = [
  {
    title: 'Smart Spending Analysis',
    date: '2025',
    description: 'Developed a data science–powered expense analyzer using Python, Pandas, and Power BI',
    bullets: [
      'Engineered an automated data pipeline using Python (Pandas) to parse and clean unstructured transactional data, increasing categorization accuracy by 40%.',
      'Synthesized data into interactive Power BI dashboards featuring dynamic budgeting thresholds and predictive savings alerts.'
    ],
    tech: ['Python', 'Pandas', 'Power BI'],
    link: '/case-studies/smart-spending.html'
  },
  {
    title: 'Financial Portfolio Management System',
    date: '2025',
    description: 'Architected a full-stack investment tracker using React and Flask to process and analyze financial records with real-time data streaming.',
    bullets: [
      'Integrated a predictive machine learning model to calculate risk-volatility scores, exposing data via optimized PostgreSQL REST APIs that reduced database query latency.'
    ],
    tech: ['React', 'Flask', 'PostgreSQL'],
    link: '/case-studies/financial-portfolio.html'
  },
  {
    title: 'Hostel Management System',
    date: '2024',
    description: 'Built a full-stack Hostel Management System with 10+ modules, supporting 300+ users',
    bullets: [
      'Implemented a responsive UI with dark/light themes and role-based access control',
      'Designed a resilient offline-first data synchronization strategy by pairing a MongoDB cloud backend with browser localStorage fallbacks, ensuring uninterrupted session states for 300+ users during network drops.'
    ],
    tech: ['MongoDB', 'Node.js', 'Express.js'],
    link: '/case-studies/hostel-management.html'
  },
  {
    title: 'Smart Shoe For Visually Impaired',
    date: '2024',
    description: 'Engineered an IoT-based wearable system using Arduino and ultrasonic sensors',
    bullets: [
      'Achieved 95% obstacle-detection accuracy with optimized buzzer-based alert mechanism',
      'Reduced user reaction time by ~30% with improved device usability through compact, water-resistant design',
      'Recognized at multiple conferences with 1st Prize, Runner-Up, and Top 6 Finalist at Vishwakarma Awards, IIT Hyderabad'
    ],
    tech: ['Arduino', 'IoT', 'Embedded Systems'],
    link: '/case-studies/smart-shoe.html'
  },
  {
    title: 'DYD-Cloths (E-commerce)',
    date: '2026',
    description: 'DYD-Cloths (Design Your Dream Cloths) is a full-stack custom T-shirt e-commerce platform with a Fabric.js-powered design studio',
    bullets: [
      'Built an interactive design studio using Fabric.js, enabling real-time T-shirt customization with text, images, and shapes',
      'Secured user data and personalized sessions by architecting an authentication flow and an admin inventory dashboard using Node.js and MongoDB.'
    ],
    tech: ['Fabric.js', 'Node.js', 'MongoDB', 'Razorpay'],
    link: '/case-studies/dyd-cloths.html'
  },
  {
    title: 'Traveloop',
    date: '2026',
    description: 'Traveloop is a personalized travel planning application for creating and managing multi-city itineraries with ease',
    bullets: [
      'Implemented trip customization, activity discovery, budget estimation, packing checklists, and itinerary sharing features',
      'Optimized data relations for collaborative multi-city trip planning by designing a normalized PostgreSQL schema on Supabase, reducing query complexity for shared itineraries.'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Supabase'],
    link: '/case-studies/traveloop.html'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <Link 
              to={project.link} 
              key={index} 
              className="project-card"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', cursor: 'pointer' }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="date">{project.date}</span>
              </div>
              <p>{project.description}</p>
              <ul>
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
              <div className="project-tech">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx}>{t}</span>
                ))}
              </div>
              <div 
                className="btn-track" 
                style={{ marginTop: '15px', alignSelf: 'flex-start' }}
              >
                <span className="btn secondary-btn small-btn">
                  Read Case Study <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
