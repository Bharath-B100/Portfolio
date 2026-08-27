import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Traveloop() {
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
            <p className="case-study-meta">Full-Stack Web App • 2025</p>
            <h1 className="case-study-title">Traveloop</h1>

            <div className="case-tech-tags">
                <span className="case-tech-tag">React</span>
                <span className="case-tech-tag">Node.js</span>
                <span className="case-tech-tag">Express.js</span>
                <span className="case-tech-tag">PostgreSQL</span>
                <span className="case-tech-tag">Supabase</span>
            </div>

            <div className="hero-btns" style={{justifyContent: "center", marginTop: "40px"}}>
                <span className="btn-track"><a href="https://traveloop-mtz2.onrender.com/" target="_blank" className="btn primary-btn"><i className="fas fa-external-link-alt"></i> Live Demo</a></span>
                <span className="btn-track"><a href="https://github.com/Bharath-B100/Traveloop" target="_blank" className="btn secondary-btn"><i className="fab fa-github"></i> GitHub Repo</a></span>
            </div>
        </div>

        <section className="case-section fade-up">
            <h3>1. Project Overview</h3>
            <p>Traveloop is a personalized travel planning application designed to make multi-city trip management simple, collaborative, and enjoyable. Users can build detailed itineraries across multiple destinations, discover activities, estimate budgets, and share plans with fellow travelers — all within a single, intuitive interface.</p>
            <p>The platform is backed by a relational database (PostgreSQL via Supabase) that preserves trip data, user preferences, and shared itineraries reliably, enabling a consistent experience across devices and collaborative sessions.</p>

            <div className="feature-grid">
                <div className="feature-item">
                    <i className="fas fa-map-marked-alt"></i>
                    <h4>Multi-City Planning</h4>
                    <p>Create and manage itineraries across multiple cities in one place</p>
                </div>
                <div className="feature-item">
                    <i className="fas fa-compass"></i>
                    <h4>Activity Discovery</h4>
                    <p>Browse and add curated activities at each destination</p>
                </div>
                <div className="feature-item">
                    <i className="fas fa-wallet"></i>
                    <h4>Budget Estimation</h4>
                    <p>Track estimated and actual costs for each leg of the trip</p>
                </div>
                <div className="feature-item">
                    <i className="fas fa-suitcase-rolling"></i>
                    <h4>Packing Checklists</h4>
                    <p>Smart packing lists generated based on trip destinations</p>
                </div>
                <div className="feature-item">
                    <i className="fas fa-share-alt"></i>
                    <h4>Itinerary Sharing</h4>
                    <p>Share complete trip plans with collaborators via link</p>
                </div>
                <div className="feature-item">
                    <i className="fas fa-database"></i>
                    <h4>Relational DB</h4>
                    <p>PostgreSQL + Supabase for reliable, scalable data persistence</p>
                </div>
            </div>
        </section>

        <section className="case-section fade-up">
            <h3>2. Problem Statement</h3>
            <p>Planning a multi-city trip is inherently complex — travelers typically juggle spreadsheets, notes apps, and multiple booking platforms just to organize a single trip. Sharing these fragmented plans with friends or family adds another layer of friction, often resulting in version conflicts and outdated information.</p>
            <p>There was a clear need for a centralized, purpose-built platform that combines itinerary creation, activity planning, budget tracking, and real-time sharing into a single cohesive experience — without the overwhelming complexity of enterprise travel tools.</p>
        </section>

        <section className="case-section fade-up">
            <h3>3. My Approach</h3>
            <p>I designed Traveloop around a <strong>relational data model</strong> using Supabase (PostgreSQL), carefully modeling the relationships between users, trips, cities, activities, and checklists. This schema enabled efficient querying of complex trip data and supported real-time collaborative features via Supabase's built-in subscriptions.</p>
            <p>The frontend was built with <strong>React</strong>, featuring a clean component architecture that maps naturally to the trip planning hierarchy: Trip → Cities → Day Itineraries → Activities. Budget calculations and packing list generation were implemented as derived state, keeping the UI reactive and consistent. A <strong>Node.js / Express.js</strong> API layer handles authentication and all data mutations, keeping Supabase credentials server-side for security.</p>
        </section>

        <section className="case-section fade-up">
            <h3>4. Key Results &amp; Impact</h3>
            <ul>
                <li>Delivered a fully functional multi-city trip planner with itinerary, budget, and packing checklist features in a single application</li>
                <li>Relational database design enabled complex queries (e.g., total trip cost across cities) with high efficiency</li>
                <li>Itinerary sharing feature enabled collaborative planning without requiring users to manage separate documents</li>
                <li>Supabase real-time subscriptions allowed collaborators to see itinerary changes reflected immediately</li>
                <li>Intuitive React UI significantly reduced the mental overhead of multi-city trip organization versus manual spreadsheet planning</li>
            </ul>
        </section>
    </main>
  );
}
