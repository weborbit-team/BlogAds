'use client';

import { useEffect } from 'react';

const PopunderAd = () => {
  useEffect(() => {
    // Create and inject the popunder ad script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//pl27898647.effectivegatecpm.com/ee/17/73/ee177361209010f58155e8c6dc94b8ba.js';
    
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // This component doesn't render any visible content
  return null;
};

export default PopunderAd;