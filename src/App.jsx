import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import PageTransitionOverlay from './components/PageTransitionOverlay';
import Preloader from './components/Preloader';

import Home from './pages/Home';
import CertificationsPage from './pages/CertificationsPage';
import DydCloths from './pages/case-studies/DydCloths';
import FinancialPortfolio from './pages/case-studies/FinancialPortfolio';
import HostelManagement from './pages/case-studies/HostelManagement';
import SmartShoe from './pages/case-studies/SmartShoe';
import SmartSpending from './pages/case-studies/SmartSpending';
import Traveloop from './pages/case-studies/Traveloop';

function App() {
  const location = useLocation();
  const [lightboxState, setLightboxState] = useState({
    active: false,
    image1: '',
    image2: '',
    isLeetCode: false,
    isGitHub: false,
    isResume: false,
    filter: 'none'
  });

  const openLightbox = (options) => {
    setLightboxState({
      active: true,
      image1: '',
      image2: '',
      isLeetCode: false,
      isGitHub: false,
      isResume: false,
      filter: 'none',
      ...options
    });
  };

  const closeLightbox = () => {
    setLightboxState({
      active: false,
      image1: '',
      image2: '',
      isLeetCode: false,
      isGitHub: false,
      isResume: false,
      filter: 'none'
    });
  };

  useEffect(() => {
    const preventContext = (e) => e.preventDefault();
    const preventKeys = (e) => {
      if (e.key === 'F12' || e.keyCode === 123) e.preventDefault();
      if ((e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || 
          (e.metaKey && e.altKey && (e.key === 'i' || e.key === 'j' || e.key === 'c'))) e.preventDefault();
      if ((e.ctrlKey && (e.key === 'u' || e.key === 'U')) || (e.metaKey && e.key === 'u')) e.preventDefault();
    };
    
    document.addEventListener('contextmenu', preventContext);
    document.addEventListener('keydown', preventKeys);

    return () => {
      document.removeEventListener('contextmenu', preventContext);
      document.removeEventListener('keydown', preventKeys);
    };
  }, []);

  return (
    <>
      <svg width="0" height="0" style={{position: 'absolute', width: 0, height: 0, overflow: 'hidden', pointerEvents: 'none'}}>
        <filter id="electric-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.04 0.15" numOctaves="3" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </svg>

      <Preloader />
      <PageTransitionOverlay />
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home openLightbox={openLightbox} />} />
        <Route path="/index.html" element={<Home openLightbox={openLightbox} />} />

        {/* Certifications Route (both .html and clean path) */}
        <Route path="/certifications.html" element={<CertificationsPage openLightbox={openLightbox} />} />
        <Route path="/certifications" element={<CertificationsPage openLightbox={openLightbox} />} />

        {/* Case Studies Routes (both .html and clean paths) */}
        <Route path="/case-studies/dyd-cloths.html" element={<DydCloths />} />
        <Route path="/case-studies/dyd-cloths" element={<DydCloths />} />

        <Route path="/case-studies/financial-portfolio.html" element={<FinancialPortfolio />} />
        <Route path="/case-studies/financial-portfolio" element={<FinancialPortfolio />} />

        <Route path="/case-studies/hostel-management.html" element={<HostelManagement />} />
        <Route path="/case-studies/hostel-management" element={<HostelManagement />} />

        <Route path="/case-studies/smart-shoe.html" element={<SmartShoe />} />
        <Route path="/case-studies/smart-shoe" element={<SmartShoe />} />

        <Route path="/case-studies/smart-spending.html" element={<SmartSpending />} />
        <Route path="/case-studies/smart-spending" element={<SmartSpending />} />

        <Route path="/case-studies/traveloop.html" element={<Traveloop />} />
        <Route path="/case-studies/traveloop" element={<Traveloop />} />
      </Routes>

      <Footer openLightbox={openLightbox} />
      
      <Lightbox 
        state={lightboxState} 
        onClose={closeLightbox} 
      />
    </>
  );
}

export default App;
