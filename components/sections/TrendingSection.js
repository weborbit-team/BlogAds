'use client';
import { Typography, Box, Grid, Card, CardContent, Avatar, Chip } from '@mui/material';
import { TrendingUp } from '@mui/icons-material';

const trendingPosts = [
  { title: 'AI in Web Development', views: '12.5K', trend: '+25%', author: 'Sarah Chen' },
  { title: 'Next.js 15 Performance Tips', views: '8.2K', trend: '+18%', author: 'Alex Kumar' },
  { title: 'Modern CSS Techniques', views: '6.8K', trend: '+12%', author: 'Emma Wilson' }
];

export default function TrendingSection() {
  return (
    <Box mt={8} mb={6}>
      <Box display="flex" alignItems="center" gap={1} mb={4}>
        <TrendingUp color="primary" />
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Trending Now
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {trendingPosts.map((post, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Card sx={{ p: 2 }}>
              <CardContent sx={{ p: '0 !important' }}>
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <Avatar sx={{ width: 32, height: 32 }}>{post.author[0]}</Avatar>
                  <Typography variant="body2" color="text.secondary">
                    {post.author}
                  </Typography>
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                  {post.title}
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="body2" color="text.secondary">
                    {post.views} views
                  </Typography>
                  <Chip label={post.trend} size="small" color="success" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}