'use client';

import { useEffect, useRef } from 'react';
import { Box, Button, Stack } from '@mui/material';

const Ads = () => {
  const adRef = useRef(null);
  const scriptInjected = useRef(false);

  useEffect(() => {
    if (scriptInjected.current) return;

    // Configure Adsterra options
    window.atOptions = {
      'key': '1e9fa3ce5a2d3bb391221676789a96ce',
      'format': 'iframe',
      'height': 90,
      'width': 728,
      'params': {}
    };

    // Inject Adsterra script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//www.highperformanceformat.com/1e9fa3ce5a2d3bb391221676789a96ce/invoke.js';
    script.async = true;

    if (adRef.current) {
      adRef.current.appendChild(script);
    }

    scriptInjected.current = true;

    return () => {
      // Cleanup on unmount
      if (adRef.current && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      delete window.atOptions;
      scriptInjected.current = false;
    };
  }, []);

  return (
    <Box
      component="aside"
      aria-label="Advertisement"
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        py: 1,
        px: 2
      }}
    >
      <Stack spacing={2} alignItems="center">
        {/* Ad Banner Container */}
        <Box
          ref={adRef}
          sx={{
            width: { xs: '100%', sm: '728px' },
            height: { xs: 'auto', sm: '90px' },
            maxWidth: '100%',
            display: 'flex',
            justifyContent: 'center',
            '& iframe': {
              width: '100% !important',
              maxWidth: '728px',
              height: { xs: 'auto', sm: '90px' }
            }
          }}
        />

        {/* Smartlink CTA Button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="https://www.effectivegatecpm.com/g89rhvtyp3?key=17caabb9c4b20bcbe501469588027f26"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600
          }}
        >
          Download
        </Button>
      </Stack>
    </Box>
  );
};

export default Ads;