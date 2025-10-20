'use client';
import { Card, CardContent, Typography, Chip, Box, Button } from '@mui/material';
import { CalendarToday, Person } from '@mui/icons-material';

export default function PostCard({ post }) {
  return (
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
  );
}