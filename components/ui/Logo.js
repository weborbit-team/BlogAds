import React from 'react';
import { Box } from '@mui/material';

const Logo = ({ width = 120, height = 40, ...props }) => {
  return (
    <Box component="div" sx={{ display: 'inline-flex', alignItems: 'center' }} {...props}>
      <svg width={width} height={height} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:'#4d1a75', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#5a189a', stopOpacity:1}} />
          </linearGradient>
        </defs>
        
        {/* Icon: Stylized book/page */}
        <g transform="translate(4, 8)">
          <path d="M2 4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4z" fill="url(#primaryGradient)" />
          <path d="M6 8h6M6 12h6M6 16h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="16" cy="6" r="2" fill="url(#primaryGradient)" opacity="0.8" />
        </g>
        
        {/* Text */}
        <text x="28" y="26" fontFamily="Inter, system-ui, sans-serif" fontSize="20" fontWeight="700" fill="url(#primaryGradient)" letterSpacing="-0.02em">
          ReadGo
        </text>
      </svg>
    </Box>
  );
};

export default Logo;