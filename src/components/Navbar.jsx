import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hiddenCircle, setHiddenCircle] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = Math.max(0, window.pageYOffset);
    let direction = 0;
    let distance = 0;
    let frame = 0;
    let scrollSpyTicking = false;

    const handleScroll = () => {
      if (!scrollSpyTicking) {
        frame = window.requestAnimationFrame(() => {
          const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
          const scrollY = Math.max(0, Math.min(window.pageYOffset, maxScroll));
          const delta = scrollY - lastScrollY;
          setScrolled(scrollY > 50);

          // Ignore subpixel noise and accumulate deliberate travel in one
          // direction before reversing visibility (trackpad momentum can wobble).
          if (scrollY <= 150) {
            setHiddenCircle(false);
            direction = 0;
            distance = 0;
          } else if (Math.abs(delta) >= 1) {
            const nextDirection = Math.sign(delta);
            distance = nextDirection === direction ? distance + Math.abs(delta) : Math.abs(delta);
            direction = nextDirection;
            if (distance >= (direction > 0 ? 32 : 20)) {
              setHiddenCircle(direction > 0);
              distance = 0;
            }
          }
          lastScrollY = scrollY;
          // For scrollspy active state on Home page sections
          if (location.pathname === '/') {
            const sections = document.querySelectorAll('section[id]');
            sections.forEach(current => {
              const sectionTop = current.offsetTop - 150;
              const sectionHeight = current.offsetHeight;
              if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                const sectionId = current.getAttribute('id');
                const activeNav = document.querySelector('.nav-menu a.active');
                const targetNav = document.querySelector(`.nav-menu a[href*="#${sectionId}"]`);
                if (targetNav && activeNav !== targetNav) {
                  if (activeNav) activeNav.classList.remove('active');
                  targetNav.classList.add('active');
                }
              }
            });
          }
          
          scrollSpyTicking = false;
        });
        scrollSpyTicking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.cancelAnimationFrame(frame);
    };
  }, [location.pathname]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const navMenu = document.getElementById('navMenu');
      const menuToggle = document.getElementById('menuToggle');
      if (navMenu && menuToggle && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        closeMenu();
      }
    };
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeMenu();
    };

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const isHome = location.pathname === '/';
  const isCaseStudy = location.pathname.includes('case-studies');
  const isCertifications = location.pathname.includes('certifications');

  const navbarClass = `scrolled ${hiddenCircle && !menuActive ? 'hidden-circle' : ''}`;

  return (
    <nav id="navbar" className={isHome ? (scrolled ? navbarClass : '') : navbarClass}>
      <div className="container nav-container">
        <Link to="/#home" className="logo" onClick={closeMenu}>Bharath <span>Raj B</span></Link>
        
        <ul className={`nav-menu ${menuActive ? 'active' : ''}`} id="navMenu">
          {isHome && (
            <>
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
              <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
              <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </>
          )}
          {isCertifications && (
            <li><Link to="/#about" onClick={closeMenu}>Back to About</Link></li>
          )}
          {isCaseStudy && (
            <li><Link to="/#projects" onClick={closeMenu}>Back to Projects</Link></li>
          )}
        </ul>

        {isHome && (
          <div className="nav-actions">
            <button 
              className="menu-toggle" 
              id="menuToggle" 
              aria-controls="navMenu" 
              aria-expanded={menuActive} 
              aria-label="Open navigation menu"
              onClick={toggleMenu}
            >
              <i className={`fas ${menuActive ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

