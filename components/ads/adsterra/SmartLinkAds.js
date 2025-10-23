'use client';

import { Box, Button } from '@mui/material';

const SmartLinkAds = () => {
  return (
    <Box
      component="aside"
      aria-label="Smartlink Advertisement"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        py: 2,
        px: 2
      }}
    >
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
    </Box>
  );
};

export default SmartLinkAds;