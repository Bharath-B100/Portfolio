import React, { useEffect, useState } from 'react';

const checkShouldShowPreloader = () => {
  let isReload = false;
  try {
    const navEntries = performance.getEntriesByType('navigation');
    if (navEntries.length > 0 && navEntries[0].type === 'reload') {
      isReload = true;
    } else if (window.performance && window.performance.navigation && window.performance.navigation.type === 1) {
      isReload = true;
    }
  } catch (e) {}

  const hasVisited = sessionStorage.getItem('portfolio_preloader_shown');
  if (isReload || !hasVisited) {
    sessionStorage.setItem('portfolio_preloader_shown', 'true');
    return true;
  }
  return false;
};

export default function Preloader() {
  const [show, setShow] = useState(checkShouldShowPreloader);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        setShow(false);
      }, 2500);
    }, 4500);

    return () => clearTimeout(timer);
  }, [show]);

  if (!show) return null;

  return (
    <div 
      id="website-preloader" 
      style={{
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        backgroundColor: '#EEEEEE', 
        zIndex: 999999, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        transition: 'clip-path 2.5s cubic-bezier(0.65, 0, 0.35, 1), opacity 2.5s ease-in-out', 
        clipPath: fade ? 'circle(0% at 50% 50%)' : 'circle(150% at 50% 50%)', 
        opacity: fade ? 0 : 1, 
        gap: '20px'
      }}
    >
      <style>
        {`
          @keyframes smooth-bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-3px); }
          }
          .shaking-dots {
              display: inline-block;
              animation: smooth-bounce 1.5s ease-in-out infinite;
              margin-left: 2px;
          }
        `}
      </style>
      <img id="loader-gif" src="/assets/images/Gif/From Klickpin.com- Practical tailoring ideas for boards that feel current and for busy days for everyday tailoring joy-pin-id-122300946109626948.gif" alt="Loading..." style={{maxWidth: '90%', maxHeight: '80%', objectFit: 'contain'}} />
      <div style={{textAlign: 'center'}}>
          <p style={{color: '#000000', fontWeight: 600, fontSize: '1.5rem', margin: '0 0 10px 0', letterSpacing: '1px'}}>Loading<span className="shaking-dots">...</span></p>
          <p style={{color: '#000000', fontWeight: 'bold', fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', letterSpacing: '2px', margin: 0}}>ᴜꜱᴇ ꜰᴜʟʟ ꜱᴄʀᴇᴇɴ ꜰᴏʀ ʙᴇꜱᴛ ᴇxᴘᴇʀɪᴇɴᴄᴇ</p>
      </div>
    </div>
  );
}
