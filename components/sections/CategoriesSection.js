'use client';
import { Typography, Box, Grid, Card, CardContent, Chip } from '@mui/material';
import { Code, Palette, Business, Security } from '@mui/icons-material';

const categories = [
  { name: 'Development', icon: Code, count: 45, color: 'primary' },
  { name: 'Design', icon: Palette, count: 32, color: 'secondary' },
  { name: 'Business', icon: Business, count: 28, color: 'success' },
  { name: 'Security', icon: Security, count: 19, color: 'error' }
];

export default function CategoriesSection() {
  return (
    <Box mt={8} mb={6}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Browse Categories
      </Typography>
      <Grid container spacing={3}>
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card sx={{ textAlign: 'center', p: 2, cursor: 'pointer', '&:hover': { transform: 'translateY(-4px)' }, transition: 'transform 0.2s' }}>
                <CardContent>
                  <IconComponent sx={{ fontSize: 40, color: `${category.color}.main`, mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    {category.name}
                  </Typography>
                  <Chip label={`${category.count} articles`} size="small" color={category.color} />
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}