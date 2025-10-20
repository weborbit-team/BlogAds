'use client';
import { Typography, Box, Grid } from '@mui/material';

const stats = [
  { value: '1000+', label: 'Articles Published' },
  { value: '50K+', label: 'Monthly Readers' },
  { value: '100+', label: 'Expert Authors' }
];

export default function StatsSection() {
  return (
    <Box textAlign="center" mt={8} mb={6}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Join Our Community
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid size={{ xs: 12, sm: 4 }} key={index}>
            <Box>
              <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
                {stat.value}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}