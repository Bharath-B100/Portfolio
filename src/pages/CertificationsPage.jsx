import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CertificationsPage({ openLightbox }) {
  useEffect(() => {
    document.body.classList.add('certifications-page');
    window.scrollTo(0, 0);

    const fadeElements = document.querySelectorAll('.fade-up, .scale-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { 
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); 
          }
        });
    }, { threshold: 0.01 });
    
    fadeElements.forEach(el => {
      observer.observe(el);
      // Immediately make visible if near top of viewport
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
    
    return () => {
        document.body.classList.remove('certifications-page');
        fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const certImages = [
    "Coursera.png",
    "IITH-Vishwakarma.jpg",
    "CIT.png",
    "Screenshot 2026-06-29 142541.png",
    "Screenshot 2026-06-29 142558.png",
    "Screenshot 2026-06-29 142612.png",
    "Screenshot 2026-06-29 143058.png",
    "Screenshot 2026-06-29 143612.png",
    "Screenshot 2026-06-29 174048.png",
    "Screenshot 2026-06-29 174151.png",
    "WhatsApp Image 2026-06-30 at 12.20.25 AM.jpeg",
    "WhatsApp Image 2026-06-30 at 12.20.30 AM.jpeg",
    "WhatsApp Image 2026-06-30 at 12.20.35 AM.jpeg",
    "WhatsApp Image 2026-06-30 at 12.20.36 AM.jpeg",
    "WhatsApp Image 2026-06-30 at 12.20.37 AM (1).jpeg",
    "WhatsApp Image 2026-06-30 at 12.20.37 AM.jpeg"
  ];

  return (
    <main className="container">
      <div className="cert-hero scale-in visible">
          <Link to="/#about" className="back-link"><i className="fas fa-arrow-left"></i> Back to Portfolio</Link>
          <p className="cert-meta">Achievements & Learning</p>
          <h1 className="cert-title">My Certifications</h1>
      </div>

      <div className="cert-grid fade-up visible">
        {certImages.map((img, index) => (
          <div className="cert-card" key={index}>
            <img 
              src={`/assets/images/Certifications/${img}`} 
              alt="Certification" 
              loading="lazy" 
              draggable="false"
              onClick={() => openLightbox({ image1: `/assets/images/Certifications/${img}` })}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
