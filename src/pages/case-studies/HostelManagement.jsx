import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HostelManagement() {
  useEffect(() => {
    document.body.classList.add('case-study-page');
    window.scrollTo(0, 0);
    const fadeElements = document.querySelectorAll('.fade-up, .scale-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { 
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    fadeElements.forEach(el => {
      observer.observe(el);
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
    
    return () => {
      document.body.classList.remove('case-study-page');
        fadeElements.forEach(el => observer.unobserve(el));
    }
  }, []);

  return (
    <main className="container">
        <div className="case-study-hero scale-in visible">
            <Link to="/#projects" className="back-link"><i className="fas fa-arrow-left"></i> Back to Portfolio</Link>
            <p className="case-study-meta">Full-Stack Application • 2024</p>
            <h1 className="case-study-title">Hostel Management System</h1>
            
            <div className="case-tech-tags">
                <span className="case-tech-tag">MongoDB</span>
                <span className="case-tech-tag">Express.js</span>
                <span className="case-tech-tag">React / EJS</span>
                <span className="case-tech-tag">Node.js</span>
            </div>
            
            <div className="hero-btns" style={{justifyContent: "center", marginTop: "40px"}}>
                <span className="btn-track"><a href="https://tinyurl.com/SMART-HOSTEL" target="_blank" className="btn primary-btn"><i className="fas fa-external-link-alt"></i> Live Demo</a></span>
                <span className="btn-track"><a href="https://github.com/Bharath-B100/Smart-hostel" target="_blank" className="btn secondary-btn"><i className="fab fa-github"></i> GitHub Repo</a></span>
            </div>
        </div>

        <section className="case-section fade-up">
            <h3>1. Project Overview</h3>
            <p>A comprehensive web-based platform built to digitize and streamline hostel administration operations. Expanding across 10 distinct modules, it supports an active user base of over 300+ students and administrators.</p>
            <div className="case-wireframe">
                <img src="/assets/images/Admin.png" alt="Hostel Preview" loading="lazy" />
            </div>
        </section>

        <section className="case-section fade-up">
           <div className="case-wireframe">
                <img src="/assets/images/USER.png" alt="Hostel Preview" loading="lazy" />
            </div>
        </section>

        <section className="case-section fade-up">
            <h3>2. Problem Statement</h3>
            <p>Traditional hostel operations relied on paper logs for attendance, complaints, and leave requests. Information retrieval was slow, resulting in manual errors and delayed resolution times for student issues.</p>
        </section>

        <section className="case-section fade-up">
            <h3>3. My Approach</h3>
            <p>I utilized the MERN stack for rapid, scalable development. To handle variable network conditions inside hostel environments, I implemented an aggressive localStorage caching fallback strategy. Secure role-based access control partitioned student tools from high-level administrative overviews seamlessly.</p>
        </section>

        <section className="case-section fade-up">
            <h3>4. Key Results & Impact</h3>
            <p>Digitizing these processes dropped average grievance resolution time while completely automating attendance logging. Features like the dark/light UI toggle drastically improved student user satisfaction.</p>
        </section>
    </main>
  );
}
