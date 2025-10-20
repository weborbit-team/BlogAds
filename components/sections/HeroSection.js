'use client';
import { Typography, Box, Button } from '@mui/material';

export default function HeroSection() {
  return (
    <Box 
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 3,
        color: 'white',
        py: 8,
        px: 4,
        mb: 8,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        zIndex: 1
      }} />
      
      <Box sx={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, alignItems: 'center' }}>
        {/* Left Content */}
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Welcome to <Box component="span" sx={{ color: '#FFD700' }}>BlogAds</Box>
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, lineHeight: 1.4 }}>
            Discover insights, tutorials, and stories from the world of technology
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' }, flexWrap: 'wrap', mb: 3 }}>
            <Button variant="contained" size="large" sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}>
              Start Reading
            </Button>
            <Button variant="outlined" size="large" sx={{ borderColor: 'white', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}>
              Learn More
            </Button>
          </Box>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: { xs: 'center', md: 'flex-start' }, opacity: 0.8 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>1000+</Typography>
              <Typography variant="caption">Articles</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>50K+</Typography>
              <Typography variant="caption">Readers</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>100+</Typography>
              <Typography variant="caption">Authors</Typography>
            </Box>
          </Box>
        </Box>
        
        {/* Right Image */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, textAlign: 'center' }}>
          <Box sx={{
            width: '300px',
            height: '300px',
            mx: 'auto',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '120px',
            backdropFilter: 'blur(10px)'
          }}>
            📚
          </Box>
        </Box>
      </Box>
    </Box>
  );
}