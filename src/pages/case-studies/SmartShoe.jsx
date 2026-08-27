import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SmartShoe() {
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
            <p className="case-study-meta">IoT & Embedded Systems • 2024</p>
            <h1 className="case-study-title">Smart Shoe For Visually Impaired</h1>
            
            <div className="case-tech-tags">
                <span className="case-tech-tag">Arduino</span>
                <span className="case-tech-tag">IoT Sensors</span>
                <span className="case-tech-tag">C++</span>
                <span className="case-tech-tag">Embedded</span>
            </div>
            
            <div className="hero-btns" style={{justifyContent: "center", marginTop: "40px"}}>
                <span className="btn-track"><a href="https://drive.google.com/file/d/1ZxrFEwumeJRrDZ9fTnIjP634AGrAvlWP/view?usp=sharing" className="btn secondary-btn"><i className="fas fa-play"></i> Watch Video Demo</a></span>
            </div>
        </div>

        <section className="case-section fade-up">
            <h3>1. Project Overview</h3>
            <p>An award-winning IoT hardware project designed to assist visually impaired individuals navigate physical spaces safely. The wearable "Smart Shoe" relies on an embedded system to detect proximity to obstacles and output immediate haptic/audio feedback.</p>
             <div className="screenshot-gallery" style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", margin: "30px 0"}}>
                <div className="screenshot-item">
                    <img src="/assets/images/WhatsApp Image 2024-11-20 at 2.10.03 PM.jpeg" alt="Final prototype" style={{width: "100%", height: "auto", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)", transition: "var(--transition)"}} loading="lazy" />
                    <p style={{textAlign: "center", marginTop: "10px", fontSize: "0.9rem", color: "var(--text-muted-light)"}}>Final prototype</p>
                </div>
                <div className="screenshot-item">
                    <img src="/assets/images/WhatsApp Image 2024-12-21 at 7.26.49 PM.jpeg" alt="Final prototype" style={{width: "100%", height: "auto", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)", transition: "var(--transition)"}} loading="lazy" />
                    <p style={{textAlign: "center", marginTop: "10px", fontSize: "0.9rem", color: "var(--text-muted-light)"}}>Final prototype</p>
                </div>
            </div>
        </section>

        <section className="case-section fade-up">
            <h3>2. Problem Statement</h3>
            <p>Existing mobility aids like traditional canes have physical limitations in detecting over-hanging objects or dynamic obstacles (like moving pets or people) fast enough. High-tech vision systems often remain prohibitively expensive or socially intrusive to wear.</p>
        </section>

        <section className="case-section fade-up">
            <h3>3. My Approach</h3>
            <p>I engineered a low-latency embedded solution utilizing Arduino microcontrollers interfaced with array-based ultrasonic sensors mapping the wearer's forward hemisphere. I programmed an optimized C++ routing loop to parse the sensor input array and immediately fire a scaled buzzer-based alert mechanism based on object distance.</p>
        </section>

        <section className="case-section fade-up">
            <h3>4. Key Results & Impact</h3>
            <p>The final prototype achieved a stellar 95% obstacle-detection accuracy rate with effectively zero false-positives. By keeping the design compact and water-resistant on footwear, we saw a reduction in user collision reaction time by approximately ~30%. This project earned multiple recognitions, notably securing a Top 6 Finalist position at the prestigious Vishwakarma Awards, IIT Hyderabad.</p>
        </section>
    </main>
  );
}
