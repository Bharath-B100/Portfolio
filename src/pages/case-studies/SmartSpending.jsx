import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SmartSpending() {
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
            <p className="case-study-meta">Data Science • 2025</p>
            <h1 className="case-study-title">Smart Spending Analysis</h1>
            
            <div className="case-tech-tags" style={{justifyContent: "center"}}>
                <span className="case-tech-tag">Python</span>
                <span className="case-tech-tag">Pandas</span>
                <span className="case-tech-tag">Power BI</span>
            </div>
            
            <div className="hero-btns" style={{justifyContent: "center", marginTop: "40px"}}>
                <span className="btn-track"><a href="#" className="btn primary-btn"><i className="fas fa-external-link-alt"></i> Live Demo</a></span>
                <span className="btn-track"><a href="#" className="btn secondary-btn"><i className="fab fa-github"></i> GitHub Repo</a></span>
            </div>
        </div>

        <section className="case-section fade-up">
            <h3>1. Project Overview</h3>
            <p>Smart Spending Analysis is a comprehensive data science dashboard built to empower users with deep insights into their financial behaviors. By intelligently categorizing and visualizing expense data, the tool acts as a personal pocket financial advisor.</p>
            <div className="case-metrics" style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", margin: "30px 0", textAlign: "center"}}>
                <div style={{background: "var(--card-light)", padding: "20px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-light)"}}>
                    <h4 style={{fontSize: "2rem", color: "var(--primary-color)", marginBottom: "5px"}}>40%</h4>
                    <p style={{fontSize: "0.9rem", color: "var(--text-muted-light)"}}>Increase in Efficiency</p>
                </div>
                <div style={{background: "var(--card-light)", padding: "20px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-light)"}}>
                    <h4 style={{fontSize: "2rem", color: "var(--primary-color)", marginBottom: "5px"}}>10k+</h4>
                    <p style={{fontSize: "0.9rem", color: "var(--text-muted-light)"}}>Txns Processed</p>
                </div>
                <div style={{background: "var(--card-light)", padding: "20px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-light)"}}>
                    <h4 style={{fontSize: "2rem", color: "var(--primary-color)", marginBottom: "5px"}}>5</h4>
                    <p style={{fontSize: "0.9rem", color: "var(--text-muted-light)"}}>Interactive Dashboards</p>
                </div>
            </div>
        </section>

        <section className="case-section fade-up">
            <h3>2. Problem Statement</h3>
            <p>A common friction point in personal finance is the manual tracking of expenses. Users often find themselves unable to quickly identify where their money is going without spending hours compiling data from disparate bank statements. There was an acute need for a system that could aggregate this data and present it cleanly.</p>
        </section>

        <section className="case-section fade-up">
            <h3>3. My Approach</h3>
            <p>I focused the architecture on a robust Python data pipeline utilizing Pandas to clean, sanitize, and automatically categorize incoming CSV/JSON transaction data. I then integrated this processed data stream into Power BI to construct interactive, filterable dashboards that highlight anomalous spending and trendlines over time.</p>
            <div style={{background: "var(--card-light)", padding: "25px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-light)", margin: "30px 0"}}>
                <h4 style={{marginBottom: "15px", color: "var(--text-light)", fontSize: "1.2rem"}}>Data Pipeline Architecture</h4>
                <ul style={{color: "var(--text-muted-light)", paddingLeft: "20px", lineHeight: "1.8"}}>
                    <li><strong>Data Extraction:</strong> Automated scripts pull raw transaction data from CSV/JSON exports.</li>
                    <li><strong>Cleaning & Normalization:</strong> Python and Pandas sanitize messy vendor names and handle missing values.</li>
                    <li><strong>Categorization Engine:</strong> Rule-based tagging automatically categorizes expenses (e.g., Food, Travel).</li>
                    <li><strong>Visualization:</strong> Clean data is piped into Power BI for interactive dashboarding.</li>
                </ul>
            </div>
        </section>

        <section className="case-section fade-up">
            <h3>4. Key Results & Impact</h3>
            <p>The resulting system automated the categorization workflow, which directly improved expense tracking efficiency by approximately 40%. The interactive dashboards allowed users to set and monitor budgeting alert thresholds seamlessly.</p>
        </section>

    </main>
  );
}
