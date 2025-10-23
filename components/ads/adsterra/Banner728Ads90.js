'use client';

import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const Banner728Ads90 = () => {
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current) return;

    // Set atOptions globally
    window.atOptions = {
      'key': '1e9fa3ce5a2d3bb391221676789a96ce',
      'format': 'iframe',
      'height': 90,
      'width': 728,
      'params': {}
    };

    // Create and inject the invoke script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//www.highperformanceformat.com/1e9fa3ce5a2d3bb391221676789a96ce/invoke.js';
    
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
      aria-label="Banner Advertisement"
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
          width: { xs: '100%', sm: '728px' },
          height: { xs: 'auto', sm: '90px' },
          maxWidth: '100%',
          minHeight: '90px',
          '& iframe': {
            width: '100% !important',
            maxWidth: '728px',
            height: { xs: 'auto', sm: '90px' }
          }
        }}
      />
    </Box>
  );
};

export default Banner728Ads90;