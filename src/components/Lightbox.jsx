import React, { useEffect } from 'react';

export default function Lightbox({ state, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && state.active) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [state.active, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('lightbox') || e.target.classList.contains('lightbox-scroll-container')) {
      onClose();
    }
  };

  const toggleZoom = (e) => {
    e.target.classList.toggle('zoomed');
  };

  return (
    <div 
      className={`lightbox ${state.active ? 'active' : ''}`} 
      id="lightbox" 
      onClick={handleBackdropClick}
    >
      <span className="lightbox-close" id="lightbox-close" onClick={onClose}>&times;</span>
      
      {state.isResume && (
        <a 
          href="/assets/docs/Resume.pdf" 
          download 
          className="btn lightbox-download-btn" 
          id="lightbox-download"
          style={{ display: 'inline-flex' }}
        >
          <i className="fas fa-download"></i> Download Resume
        </a>
      )}

      <div className="lightbox-scroll-container" id="lightbox-scroll-container" onClick={handleBackdropClick}>
        {state.image1 && (
          <img 
            src={state.image1} 
            alt="Lightbox Content" 
            className={`lightbox-content ${state.isLeetCode || state.isGitHub ? 'leetcode-card' : ''}`} 
            id="lightbox-img" 
            draggable="false"
            onClick={toggleZoom}
            style={{ filter: state.filter || 'none' }}
          />
        )}
        {state.image2 && (
          <img 
            src={state.image2} 
            alt="Lightbox Content 2" 
            className="lightbox-content" 
            id="lightbox-img-2" 
            draggable="false"
            onClick={toggleZoom}
            style={{ 
              display: 'block', 
              marginTop: state.isGitHub ? '20px' : '15px', 
              backgroundColor: state.isGitHub ? '#fff' : 'transparent',
              padding: state.isGitHub ? '20px' : '0',
              borderRadius: state.isGitHub ? '10px' : '0',
              filter: state.filter || 'none'
            }}
          />
        )}
      </div>
    </div>
  );
}
