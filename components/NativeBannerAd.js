'use client';

import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const NativeBannerAd = () => {
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current) return;

    // Create and inject the native banner ad script
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = '//pl27898643.effectivegatecpm.com/f84321c052f855eda3c86ce8a9b5efa4/invoke.js';
    
    adRef.current.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <Box
      component="aside"
      aria-label="Native Banner Advertisement"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        py: 2,
        px: 2
      }}
    >
      <Box
        ref={adRef}
        sx={{
          width: '100%',
          maxWidth: '100%',
          minHeight: '250px'
        }}
      >
        <div id="container-f84321c052f855eda3c86ce8a9b5efa4"></div>
      </Box>
    </Box>
  );
};

export default NativeBannerAd;