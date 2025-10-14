'use client';
import { Typography, Grid, Box, Card, CardContent, Button, Chip } from '@mui/material';
import { CalendarToday, Person, TrendingUp } from '@mui/icons-material';

const featuredPosts = [
  {
    title: "Getting Started with Modern Web Development",
    excerpt: "Learn the fundamentals of building scalable web applications with the latest technologies and best practices.",
    date: "Dec 15, 2024",
    author: "John Doe",
    category: "Development"
  },
  {
    title: "The Future of JavaScript Frameworks",
    excerpt: "Exploring the evolution of JavaScript frameworks and what developers should expect in the coming years.",
    date: "Dec 12, 2024",
    author: "Jane Smith",
    category: "Technology"
  },
  {
    title: "Building Responsive Design Systems",
    excerpt: "A comprehensive guide to creating maintainable and scalable design systems for modern applications.",
    date: "Dec 10, 2024",
    author: "Mike Johnson",
    category: "Design"
  }
];

export default function Home() {
  return (
    <Box sx={{ mt: 4, mb: 4, maxWidth: '1200px', mx: 'auto' }}>
      {/* Hero Section */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
          Welcome to BlogAds
        </Typography>
        <Typography variant="h5" color="text.secondary" mb={4}>
          Discover insights, tutorials, and stories from the world of technology
        </Typography>
        <Button variant="contained" size="large">
          Start Reading
        </Button>
      </Box>

      {/* Featured Posts */}
      <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
        Featured Posts
      </Typography>
      
      <Grid container spacing={4}>
        {featuredPosts.map((post, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Chip 
                  label={post.category} 
                  size="small" 
                  color="primary" 
                  sx={{ mb: 2 }}
                />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  {post.excerpt}
                </Typography>
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <Person fontSize="small" color="action" />
                    <Typography variant="caption">{post.author}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <CalendarToday fontSize="small" color="action" />
                    <Typography variant="caption">{post.date}</Typography>
                  </Box>
                </Box>
                <Button variant="outlined" size="small">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Stats Section */}
      <Box textAlign="center" mt={8} mb={6}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
          Join Our Community
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid size={{ xs: 12, sm: 4 }}>
            <Box>
              <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
                1000+
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Articles Published
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Box>
              <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
                50K+
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Monthly Readers
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Box>
              <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
                100+
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Expert Authors
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
