'use client';
import { Typography, Box, Grid, Card, CardContent, Avatar, Rating } from '@mui/material';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Frontend Developer',
    content: 'ReadGo has been my go-to resource for staying updated with the latest web development trends. The quality of content is exceptional.',
    rating: 5,
    avatar: 'S'
  },
  {
    name: 'Mike Chen',
    role: 'UI/UX Designer',
    content: 'The design articles here have helped me improve my skills significantly. Great community and excellent writers.',
    rating: 5,
    avatar: 'M'
  },
  {
    name: 'Alex Rodriguez',
    role: 'Full Stack Developer',
    content: 'From beginner tutorials to advanced concepts, ReadGo covers everything I need to grow as a developer.',
    rating: 5,
    avatar: 'A'
  }
];

export default function TestimonialsSection() {
  return (
    <Box mt={8} mb={6}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, textAlign: 'center', mb: 6 }}>
        What Our Readers Say
      </Typography>
      
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Card sx={{ height: '100%', p: 3 }}>
              <CardContent sx={{ p: '0 !important' }}>
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <Avatar sx={{ bgcolor: 'primary.main' }}>{testimonial.avatar}</Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
                <Rating value={testimonial.rating} readOnly size="small" sx={{ mb: 2 }} />
                <Typography variant="body2" color="text.secondary">
                  &quot;{testimonial.content}&quot;
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}