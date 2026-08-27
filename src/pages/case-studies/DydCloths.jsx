import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DydCloths() {
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
            <p className="case-study-meta">Full-Stack E-commerce • 2025</p>
            <h1 className="case-study-title">DYD-Cloths</h1>

            <div className="case-tech-tags">
                <span className="case-tech-tag">Fabric.js</span>
                <span className="case-tech-tag">Node.js</span>
                <span className="case-tech-tag">Express.js</span>
                <span className="case-tech-tag">MongoDB</span>
                <span className="case-tech-tag">Razorpay</span>
                <span className="case-tech-tag">localStorage</span>
            </div>

            <div className="hero-btns" style={{justifyContent: "center", marginTop: "40px"}}>
                <span className="btn-track"><a href="https://dyd-cloths.onrender.com" target="_blank" className="btn primary-btn"><i className="fas fa-external-link-alt"></i> Live Demo</a></span>
                <span className="btn-track"><a href="https://github.com/Bharath-B100/DYD-Cloths" target="_blank" className="btn secondary-btn"><i className="fab fa-github"></i> GitHub Repo</a></span>
            </div>
        </div>

        <section className="case-section fade-up">
            <h3>1. Project Overview</h3>
            <p>DYD-Cloths (<strong>Design Your Dream Cloths</strong>) is a fully-featured, full-stack custom T-shirt e-commerce platform. At its heart lies a Fabric.js-powered interactive design studio that lets users place text, upload images, and manipulate design elements directly on a virtual canvas before purchasing.</p>
            <p>The platform covers the entire product lifecycle — from browsing a product catalog and building a custom design, to adding items to a localStorage-backed cart, completing secure checkout via Razorpay, and tracking order status. Sellers and admins are served by a dedicated dashboard for inventory and order management.</p>

            <div className="feature-grid">
                <div className="feature-item">
                    <i className="fas fa-paint-brush"></i>
                    <h4>Design Studio</h4>
                    <p>Fabric.js canvas with real-time T-shirt customization</p>
                </div>
                <div className="feature-item">
                    <i className="fas fa-shopping-cart"></i>
                    <h4>Cart & Checkout</h4>
                    <p>localStorage-backed cart with Razorpay secure payments</p>
                </div>
                <div className="feature-item">
                    <i className="fas fa-user-shield"></i>
                    <h4>Auth & Roles</h4>
                    <p>User authentication with role-based access control</p>
                </div>
                <div className="feature-item">
                    <i className="fas fa-tachometer-alt"></i>
                    <h4>Admin Dashboard</h4>
                    <p>Inventory management and order tracking for admins</p>
                </div>
                <div className="feature-item">
                    <i className="fas fa-heart"></i>
                    <h4>Wishlist Sharing</h4>
                    <p>Share curated wishlists with friends and family</p>
                </div>
                <div className="feature-item">
                    <i className="fas fa-truck"></i>
                    <h4>Order Tracking</h4>
                    <p>Real-time order status and delivery updates</p>
                </div>
            </div>
        </section>

        <section className="case-section fade-up">
            <h3>2. Problem Statement</h3>
            <p>Standard e-commerce platforms offer limited product personalization — customers choose from pre-designed variants with no meaningful way to express their own creativity. Custom merchandise platforms, on the other hand, tend to be either prohibitively expensive tools or desktop-only applications with steep learning curves.</p>
            <p>There was a clear gap for a web-first, intuitive platform that made T-shirt customization genuinely accessible, while also delivering a polished, end-to-end e-commerce experience with secure payments and robust order management.</p>
        </section>

        <section className="case-section fade-up">
            <h3>3. My Approach</h3>
            <p>I chose <strong>Fabric.js</strong> as the core of the design studio due to its powerful vector canvas API — it enabled drag-and-drop design elements, image uploads, text layers, and serialization of designs into JSON for order processing. The design state is preserved in localStorage so users never lose their work mid-session.</p>
            <p>On the backend, a <strong>Node.js / Express.js</strong> REST API manages authentication (JWT), product catalog (MongoDB), and order lifecycle. Razorpay's payment SDK was integrated server-side with webhook verification to ensure no order is marked complete without confirmed payment. The admin dashboard uses role-based middleware to strictly partition management controls from customer views.</p>
        </section>

        <section className="case-section fade-up">
            <h3>4. Key Results &amp; Impact</h3>
            <ul>
                <li>Delivered a fully functional design-to-checkout pipeline in a single web application — no external tools needed</li>
                <li>Fabric.js integration enabled a rich, intuitive design experience accessible directly in the browser without plugins</li>
                <li>Razorpay webhook verification ensured payment integrity with zero false order confirmations</li>
                <li>Admin dashboard streamlined inventory visibility and order resolution, reducing manual tracking overhead significantly</li>
                <li>Wishlist sharing feature increased average session depth as users collaborated on design choices</li>
            </ul>
        </section>
    </main>
  );
}
