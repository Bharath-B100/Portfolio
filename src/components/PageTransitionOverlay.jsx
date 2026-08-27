import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransitionOverlay() {
  const location = useLocation();
  const [transitionState, setTransitionState] = useState('is-entering');

  useEffect(() => {
    // When the location changes, we might want to trigger the entering animation
    // But React Router handles route changes instantly unless we delay them.
    // The original script intercepted link clicks, delayed the navigation by 380ms, 
    // and applied 'is-leaving' then navigated. 
    // To properly simulate this in React, we'd need a custom Link component or a router integration.
    // For now, we will simply apply the enter animation on mount/location change.
    
    setTransitionState('is-entering');
    const timer = setTimeout(() => {
      setTransitionState('');
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div 
      id="page-transition-overlay" 
      className={transitionState}
      style={{ opacity: transitionState ? 1 : 0, pointerEvents: transitionState ? 'all' : 'none' }}
    ></div>
  );
}
