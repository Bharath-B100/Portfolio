import React from 'react';

export default function Experience({ openLightbox }) {
  return (
    <section id="experience" className="section dark-section">
        <div className="container">
            <h2 className="section-title">Experience</h2>
            <div className="experience-container">
                <div className="experience-card">
                    <div className="exp-header">
                        <h3 style={{textTransform: "uppercase"}}>UI/UX DESIGN INTERN</h3>
                        <span className="company" style={{fontWeight: "800", textTransform: "uppercase"}}>SRI NANDHA INFOTECH <a href="/assets/images/Certifications/Intership.jpeg" className="lightbox-link" style={{fontSize: "0.75rem", color: "var(--primary-color)", textDecoration: "none", marginLeft: "8px", fontWeight: "700", textTransform: "none", display: "inline-flex", alignItems: "center", gap: "4px", padding: "2px 8px", borderRadius: "20px", background: "rgba(0, 113, 227, 0.1)"}} onClick={(e) => { e.preventDefault(); openLightbox({ image1: e.currentTarget.getAttribute("href") }); }}><i className="fas fa-certificate" style={{fontSize: "0.7rem"}}></i> See Certificate</a></span>
                        <span className="date">2025</span>
                    </div>
                    <ul className="exp-details">
                        <li>Designed 10+ responsive UI screens, improving usability and visual consistency across
                            devices</li>
                        <li>Enhanced page usability through UX principles and iterative testing, reducing navigation
                            issues by ~25%</li>
                        <li>Collaborated with product teams to deliver pixel-accurate Figma mockups for production-ready
                            interfaces</li>
                    </ul>
                    <div className="tech-stack">
                        <span>Figma</span>
                        <span>Canva</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
