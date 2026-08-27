import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Footer({ openLightbox }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const [colorfulMode, setColorfulMode] = useState(false);

  useEffect(() => {
    const handlePaint = (e) => {
      if (e) e.preventDefault();
      document.body.classList.toggle('colorful-mode');
      const isColorful = document.body.classList.contains('colorful-mode');
      setColorfulMode(isColorful);
      
      const profileImg = document.getElementById('profileImage');
      if (profileImg) {
        profileImg.src = isColorful 
          ? '/assets/images/ChatGPT_Image_Jul_4__2026__06_41_37_PM-removebg-preview_upscayl_5x_remacri-4x.png' 
          : '/assets/images/Bharath-PencilArt.png';
      }
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const paintBtn = document.querySelector('.slogan-paint-btn');
    if (paintBtn) {
      paintBtn.onclick = handlePaint;
    }
    
    // Check initial state
    const initialColorful = document.body.classList.contains('colorful-mode');
    setColorfulMode(initialColorful);
    const profileImg = document.getElementById('profileImage');
    if (profileImg && initialColorful) {
      profileImg.src = '/assets/images/ChatGPT_Image_Jul_4__2026__06_41_37_PM-removebg-preview_upscayl_5x_remacri-4x.png';
    }

    return () => {
      if (paintBtn) {
        paintBtn.onclick = null;
      }
    };
  }, [location.pathname]);

  const currentYear = new Date().getFullYear();

  if (isHome) {
    return (
      <>
        <div className="pre-footer-slogan">
            <div className="container">
                <p>Life is in black and white. It's up to you to <button className="slogan-paint-btn">{colorfulMode ? 'clear' : 'paint'}</button> the colours</p>
            </div>
        </div>
        <footer id="site-footer">
            <div className="footer-bg-grid" aria-hidden="true"></div>
            <div className="footer-coin-wrapper" aria-hidden="true">
                <img src="/assets/images/favicon_cropped.png" alt="BR Logo" className="footer-br-logo" />
            </div>
            <div className="container footer-inner">
                <div className="footer-grid">
                    <div className="footer-col footer-brand">
                        <a href="#home" className="footer-logo" aria-label="Back to top">
                            Bharath <span>Raj B</span>
                        </a>
                        <p className="footer-tagline">CSBS Student &amp; Full-Stack Developer</p>
                        <p className="footer-bio">Building scalable, cloud-ready applications with clean code and a passion for innovation.</p>
                        <div className="footer-socials" role="list">
                            <a href="https://github.com/Bharath-B100" target="_blank" rel="noopener noreferrer"
                               className="footer-social-icon" aria-label="GitHub" role="listitem">
                                <img src="/assets/images/Gif/icons8-github.gif" alt="GitHub" style={{width: '18px', height: '18px', filter: 'none !important', display: 'block'}} />
                            </a>
                            <a href="https://www.linkedin.com/in/bharath-raj143/" target="_blank" rel="noopener noreferrer"
                               className="footer-social-icon" aria-label="LinkedIn" role="listitem">
                                <img src="/assets/images/Gif/icons8-linkedin.gif" alt="LinkedIn" style={{width: '18px', height: '18px', filter: 'none !important', display: 'block'}} />
                            </a>
                            <a href="mailto:bharathrajmurali1010@gmail.com"
                               className="footer-social-icon" aria-label="Email" role="listitem">
                                <img src="/assets/images/Gif/icons8-mail.gif" alt="Mail" style={{width: '18px', height: '18px', filter: 'none !important', display: 'block'}} />
                            </a>
                            <a href="https://leetcode.com/u/Bharath_Raj_B/" target="_blank" rel="noopener noreferrer"
                               className="footer-social-icon " onClick={(e) => { e.preventDefault(); openLightbox({ image1: "https://leetcard.jacoblin.cool/Bharath_Raj_B?theme=light&font=Playfair%20Display&ext=heatmap", isLeetCode: true }); }} aria-label="LeetCode" role="listitem">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" style={{width: '18px', height: '18px', filter: 'invert(1) brightness(2)', display: 'block'}} />
                            </a>
                        </div>
                    </div>
                    <nav className="footer-col footer-nav" aria-label="Quick links">
                        <h4 className="footer-col-title">Quick Links</h4>
                        <ul className="footer-link-list">
                            <li><a href="#home"><i className="fas fa-chevron-right"></i>Home</a></li>
                            <li><a href="#about"><i className="fas fa-chevron-right"></i>About</a></li>
                            <li><a href="#experience"><i className="fas fa-chevron-right"></i>Experience</a></li>
                            <li><a href="#projects"><i className="fas fa-chevron-right"></i>Projects</a></li>
                            <li><a href="#skills"><i className="fas fa-chevron-right"></i>Skills</a></li>
                            <li><a href="#contact"><i className="fas fa-chevron-right"></i>Contact</a></li>
                            <li><Link to="/certifications.html"><i className="fas fa-chevron-right"></i>Certifications</Link></li>
                        </ul>
                    </nav>
                    <nav className="footer-col footer-projects" aria-label="Live projects">
                        <h4 className="footer-col-title">Live Projects</h4>
                        <ul className="footer-link-list">
                            <li>
                                <a href="https://tinyurl.com/SMART-HOSTEL" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-external-link-alt"></i>Smart Hostel
                                </a>
                            </li>
                            <li>
                                <a href="https://traveloop-mtz2.onrender.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-external-link-alt"></i>Traveloop
                                </a>
                            </li>
                            <li>
                                <a href="https://dyd-cloths.onrender.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-external-link-alt"></i>DYD-Cloths
                                </a>
                            </li>
                            <li>
                                <Link to="/case-studies/smart-spending.html">
                                    <i className="fas fa-external-link-alt"></i>Smart Spending
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="footer-col footer-contact-col">
                        <h4 className="footer-col-title">Get In Touch</h4>
                        <ul className="footer-contact-list">
                            <li>
                                <a href="mailto:bharathrajmurali1010@gmail.com" className="footer-contact-item">
                                    <span className="footer-contact-icon"><img src="/assets/images/Gif/icons8-mail.gif" alt="Mail" style={{width: '14px', height: '14px', filter: 'none !important', display: 'block'}} /></span>
                                    <span>bharathrajmurali1010@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919943935576" className="footer-contact-item">
                                    <span className="footer-contact-icon"><img src="/assets/images/Gif/icons8-phone.gif" alt="Phone" style={{width: '14px', height: '14px', filter: 'none !important', display: 'block'}} /></span>
                                    <span>+91 99439 35576</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/bharath-raj143/" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                                    <span className="footer-contact-icon"><img src="/assets/images/Gif/icons8-linkedin.gif" alt="LinkedIn" style={{width: '14px', height: '14px', filter: 'none !important', display: 'block'}} /></span>
                                    <span>bharath-raj143</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom-bar">
                    <p className="footer-copy">&copy; <span id="currentYear">{currentYear}</span> Bharath Raj B. All rights reserved.</p>
                    <div className="footer-signature">
                        <span className="sig-prefix">with love</span>
                        <span className="sig-name">bharathraj b</span>
                    </div>
                </div>
            </div>
        </footer>
      </>
    );
  }

  // Simplified footer for case studies & certifications
  return (
    <footer id="site-footer" style={{padding: '60px 0 40px', textAlign: 'center'}}>
        <div className="footer-bg-grid" aria-hidden="true"></div>
        <div className="footer-coin-wrapper" aria-hidden="true">
            <img src="/assets/images/favicon_cropped.png" alt="BR Logo" className="footer-br-logo" />
        </div>
        <div className="container footer-inner" style={{paddingTop: 0, border: 'none', justifyContent: 'center'}}>
            <div className="footer-bottom-bar" style={{border: 'none', margin: 0, padding: 0}}>
                <p className="footer-copy" style={{margin: 0}}>&copy; <span id="currentYear">{currentYear}</span> Bharath Raj B. All rights reserved.</p>
                <div className="footer-signature">
                    <span className="sig-prefix">with love</span>
                    <span className="sig-name">bharathraj b</span>
                </div>
            </div>
        </div>
    </footer>
  );
}
