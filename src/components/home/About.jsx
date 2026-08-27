import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function About({ openLightbox }) {
  const [leetcodeSolved, setLeetcodeSolved] = useState('541+');
  const [leetcodeRating, setLeetcodeRating] = useState('1439');
  const [hackerrankSolved] = useState('100+');

  useEffect(() => {
    const USERNAME = 'Bharath_Raj_B';

    // Fetch LeetCode Solved Count
    fetch(`https://alfa-leetcode-api.onrender.com/${USERNAME}/solved`)
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('LeetCode Solved API error');
      })
      .then(data => {
        if (data && data.solvedProblem) {
          const val = data.solvedProblem.toString() + '+';
          setLeetcodeSolved(val);
        }
      })
      .catch(err => {
        console.warn('LeetCode Solved API fallback:', err);
      });

    // Fetch LeetCode Contest Rating
    fetch(`https://alfa-leetcode-api.onrender.com/${USERNAME}/contest`)
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('LeetCode Contest API error');
      })
      .then(data => {
        if (data && data.contestRating) {
          const val = Math.round(data.contestRating).toString();
          setLeetcodeRating(val);
        }
      })
      .catch(err => {
        console.warn('LeetCode Contest API fallback:', err);
      });
  }, []);

  return (
    <section id="about" className="section">
        <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-container">
                <div className="about-text">
                    <h3>Enthusiastic CSBS Student</h3>
                    <p>Full-Stack Developer bridging the gap between robust software engineering and business logic. Specializing in building scalable REST APIs, secure role-based systems, and interactive user experiences. Backed by competitive programming grit and award-winning IoT problem-solving.</p>
                    <div className="timeline-section" id="journey-section">
                        <h4>My Journey</h4>
                        <div className="timeline" id="snake-timeline">
                            <svg id="snakeSVG" className="snake-svg" viewBox="0 0 80 420" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="snakeGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#d4d4d4"/>
                                        <stop offset="30%" stopColor="#ffffff"/>
                                        <stop offset="60%" stopColor="#a0a0a0"/>
                                        <stop offset="100%" stopColor="#c8c8c8"/>
                                    </linearGradient>
                                    <filter id="snakeGlow">
                                        <feGaussianBlur stdDeviation="2.5" result="blur"/>
                                        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                                    </filter>
                                </defs>
                                <path id="snakePathBg"
                                    d="M 40 10
                                       C 70 30, 70 60, 40 80
                                       C 10 100, 10 130, 40 150
                                       C 70 170, 70 200, 40 220
                                       C 10 240, 10 270, 40 290
                                       C 70 310, 70 340, 40 360
                                       C 10 380, 10 400, 40 415"
                                    fill="none"
                                    stroke="rgba(180,180,180,0.15)"
                                    strokeWidth="8"
                                    strokeLinecap="round"/>
                                <path id="snakePath"
                                    d="M 40 10
                                       C 70 30, 70 60, 40 80
                                       C 10 100, 10 130, 40 150
                                       C 70 170, 70 200, 40 220
                                       C 10 240, 10 270, 40 290
                                       C 70 310, 70 340, 40 360
                                       C 10 380, 10 400, 40 415"
                                    fill="none"
                                    stroke="url(#snakeGrad)"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    filter="url(#snakeGlow)"/>
                            </svg>
                            <div className="timeline-item" id="tl-item-1">
                                <div className="timeline-date">2020-2021</div>
                                <div className="timeline-content">
                                    <h5>SSLC - 80%</h5>
                                    <p>Vailankanni Public School (CBSE)</p>
                                </div>
                            </div>
                            <div className="timeline-item" id="tl-item-2">
                                <div className="timeline-date">2022-2023</div>
                                <div className="timeline-content">
                                    <h5>HSC - 80%</h5>
                                    <p>Vailankanni Public School (CBSE)</p>
                                </div>
                            </div>
                            <div className="timeline-item" id="tl-item-3">
                                <div className="timeline-date">2023-2027</div>
                                <div className="timeline-content">
                                    <h5>B.Tech CSBS - CGPA: 8.00</h5>
                                    <p>Dr.N.G.P Institute Of Technology</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="certifications">
                        <h4>Certifications</h4>
                        <ul>
                            <li>Generative AI: Prompt Engineering Basics - Coursera 2026</li>
                            <li>Introduction To Internet Of Things - NPTEL 2025</li>
                            <li>Agile Methodologies - Techcanvass 2025</li>
                            <li>Java Programming - Great Learning 2024</li>
                        </ul>
                        <Link to="/certifications.html" className="btn-track" style={{marginTop: "20px", display: "inline-flex"}}>
                            <span className="btn secondary-btn small-btn">View All Certificates <i className="fas fa-arrow-right"></i></span>
                        </Link>
                    </div>
                </div>
                <div className="about-sidebar">
                    <div className="contact-info">
                        <h4>Contact Information</h4>
                        <p><img src="/assets/images/Gif/icons8-phone.gif" alt="Phone" style={{width: "18px", height: "18px", verticalAlign: "middle", marginRight: "6px", filter: "none"}} /> <a href="tel:+919943935576" style={{color: "inherit", textDecoration: "none"}}>+91 9943935576</a></p>
                        <p><img src="/assets/images/Gif/icons8-mail.gif" alt="Mail" style={{width: "18px", height: "18px", verticalAlign: "middle", marginRight: "6px", filter: "none"}} /> <a href="mailto:bharathrajmurali1010@gmail.com" style={{color: "inherit", textDecoration: "none"}}>bharathrajmurali1010@gmail.com</a></p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/bharath-raj143/" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/images/Gif/icons8-linkedin.gif"
                                    alt="LinkedIn" className="social-logo" loading="lazy" style={{filter: "none"}} />
                                LinkedIn
                            </a>
                            <a href="https://github.com/Bharath-B100" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/images/Gif/icons8-github.gif"
                                    alt="GitHub" className="social-logo" loading="lazy" style={{filter: "none"}} />
                                GitHub
                            </a>
                        </div>
                    </div>
                    <div className="achievements">
                        <h4>Achievements</h4>
                        <ul>
                            <li>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                                    alt="LeetCode" className="achievement-icon" style={{filter: "grayscale(100%) brightness(0)"}} loading="lazy" />
                                <span>LeetCode Contest Rating: <span id="leetcodeRatingText">{leetcodeRating}</span> | <span id="leetcodeSolvedText">{leetcodeSolved}</span> Problems Solved</span>
                            </li>
                            <li>
                                <img src="/assets/images/hackerrank-bw-logo.png"
                                    alt="HackerRank" className="achievement-icon" loading="lazy" />
                                <span>HackerRank: 100+ Problems Solved | 3+ Certificates</span>
                            </li>
                            <li>Vishwakarma Awards 2024: Top 6 Finalist among 3000+ teams</li>
                            <li>Paper Presentation Winner & Runner-up</li>
                        </ul>
                        <div className="coding-stats">
                            <h5>Live Coding Stats</h5>
                            <div className="stats-grid">
                                <a href="https://leetcode.com/u/Bharath_Raj_B/" className="stat-card-track leetcode-stats-link" onClick={(e) => { e.preventDefault(); openLightbox({ image1: "https://leetcard.jacoblin.cool/Bharath_Raj_B?theme=light&font=Playfair%20Display&ext=heatmap", isLeetCode: true, filter: (document.body.classList.contains("dark-mode") || !document.body.classList.contains("colorful-mode")) ? "grayscale(100%)" : "none" }); }} style={{textDecoration: "none", color: "inherit", display: "block", cursor: "pointer"}}>
                                    <div className="stat-card" style={{margin: "0", height: "100%", position: "relative", zIndex: "1", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "none"}}>
                                        <h6 id="leetcodeSolved">{leetcodeSolved}</h6>
                                        <p>LeetCode</p>
                                    </div>
                                </a>
                                <div className="stat-card">
                                    <h6 id="hackerrankSolved">{hackerrankSolved}</h6>
                                    <p>HackerRank</p>
                                </div>
                                <a href="https://github.com/Bharath-B100" className="stat-card-track github-stats-link" onClick={(e) => { e.preventDefault(); openLightbox({ image1: "https://streak-stats.demolab.com?user=Bharath-B100&hide_border=true&theme=default", image2: "https://ghchart.rshah.org/Bharath-B100", isGitHub: true, filter: (document.body.classList.contains("dark-mode") || !document.body.classList.contains("colorful-mode") && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "grayscale(100%)" : "none" }); }} style={{textDecoration: "none", color: "inherit", display: "block", cursor: "pointer"}}>
                                    <div className="stat-card" style={{margin: "0", height: "100%", position: "relative", zIndex: "1", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "none"}}>
                                        <h6 id="githubContributions">500+</h6>
                                        <p>GitHub</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
