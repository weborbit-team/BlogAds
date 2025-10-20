'use client';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { Article, Group, Lightbulb } from '@mui/icons-material';

const features = [
  {
    icon: Article,
    title: 'Quality Content',
    description: 'Expert-written articles covering the latest trends in technology, development, and design.'
  },
  {
    icon: Group,
    title: 'Community Driven',
    description: 'Join thousands of developers, designers, and tech enthusiasts sharing knowledge.'
  },
  {
    icon: Lightbulb,
    title: 'Learn & Grow',
    description: 'From beginner tutorials to advanced techniques, find content that matches your level.'
  }
];

export default function AboutSection() {
  return (
    <Box mt={8} mb={6}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Why Choose BlogAds?
        </Typography>
        <Typography variant="body1" color="text.secondary" maxWidth={600} mx="auto">
          We're more than just a blog. We're a community of passionate individuals sharing knowledge, 
          insights, and experiences to help you grow in your tech journey.
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                <CardContent>
                  <IconComponent sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}