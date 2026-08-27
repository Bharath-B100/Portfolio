import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FinancialPortfolio() {
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
            <p className="case-study-meta">Full-Stack AI Application • 2025</p>
            <h1 className="case-study-title">Financial Portfolio Management System</h1>
            
            <div className="case-tech-tags">
                <span className="case-tech-tag">React</span>
                <span className="case-tech-tag">Flask</span>
                <span className="case-tech-tag">PostgreSQL</span>
                <span className="case-tech-tag">Machine Learning</span>
            </div>
            
            <div className="hero-btns" style={{justifyContent: "center", marginTop: "40px"}}>
                <span className="btn-track"><a href="#" className="btn primary-btn"><i className="fas fa-external-link-alt"></i> Live Demo</a></span>
                <span className="btn-track"><a href="https://github.com/Bharath-B100/Financial_portfolio" target="_blank" className="btn secondary-btn"><i className="fab fa-github"></i> GitHub Repo</a></span>
            </div>
        </div>

        <section className="case-section fade-up">
            <h3>1. Project Overview</h3>
            <p>The Financial Portfolio Management System is a full-stack tracking application designed to handle complex arrays of investments. It processes over 100+ separate investment records to deliver real-time aggregation and actionable insights on overall portfolio health.</p>
            
            <div className="screenshot-gallery" style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", margin: "30px 0"}}>
                <div className="screenshot-item">
                    <img src="/assets/images/Screenshot 2026-03-11 103058.png" alt="Portfolio Dashboard" style={{width: "100%", height: "auto", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)", transition: "var(--transition)"}} loading="lazy" />
                    <p style={{textAlign: "center", marginTop: "10px", fontSize: "0.9rem", color: "var(--text-muted-light)"}}>Portfolio Dashboard</p>
                </div>
                <div className="screenshot-item">
                    <img src="/assets/images/Screenshot 2026-03-11 103107.png" alt="ML Risk Analysis" style={{width: "100%", height: "auto", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)", transition: "var(--transition)"}} loading="lazy" />
                    <p style={{textAlign: "center", marginTop: "10px", fontSize: "0.9rem", color: "var(--text-muted-light)"}}>ML Risk Analysis</p>
                </div>
                <div className="screenshot-item">
                    <img src="/assets/images/Screenshot 2026-03-11 103117.png" alt="Investment Analytics" style={{width: "100%", height: "auto", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)", transition: "var(--transition)"}} loading="lazy" />
                    <p style={{textAlign: "center", marginTop: "10px", fontSize: "0.9rem", color: "var(--text-muted-light)"}}>Investment Analytics</p>
                </div>
            </div>
        </section>

        <section className="case-section fade-up">
            <h3>2. Problem Statement</h3>
            <p>Investors frequently use isolated tools to manage disparate assets (stocks, crypto, mutual funds), leaving them without a consolidated view of cross-asset risks. Without algorithmic risk-scoring, retail investors often make unbacked emotional trading decisions.</p>
        </section>

        <section className="case-section fade-up">
            <h3>3. My Approach</h3>
            <p>I architected the application separating the client state using React and building a robust REST API layer via Flask. PostgreSQL handled ACID-compliant transactional data. The breakthrough feature was integrating a custom Machine Learning risk-scoring algorithm directly into the data pipeline to interpret market volatility for individual user assets.</p>
        </section>

        <section className="case-section fade-up">
            <h3>4. Key Results & Impact</h3>
            <p>The system successfully scaled to aggregate high-volume records with minimal latency thanks to cloud-ready modular architecture. The ML-driven risk scores actively provided quantifiable data to support more rational financial decision-making.</p>
        </section>
    </main>
  );
}
