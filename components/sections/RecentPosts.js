'use client';
import { Typography, Box, List, ListItem, ListItemText, Divider, Chip } from '@mui/material';

const recentPosts = [
  { title: 'React 19 New Features Overview', date: 'Dec 18, 2024', category: 'Development' },
  { title: 'CSS Grid vs Flexbox in 2024', date: 'Dec 17, 2024', category: 'Design' },
  { title: 'API Security Best Practices', date: 'Dec 16, 2024', category: 'Security' },
  { title: 'Startup Growth Strategies', date: 'Dec 15, 2024', category: 'Business' },
  { title: 'TypeScript Advanced Patterns', date: 'Dec 14, 2024', category: 'Development' }
];

export default function RecentPosts() {
  return (
    <Box mt={8} mb={6}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Recent Posts
      </Typography>
      <List>
        {recentPosts.map((post, index) => (
          <Box key={index}>
            <ListItem sx={{ px: 0, py: 2 }}>
              <ListItemText
                primary={
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      {post.title}
                    </Typography>
                    <Chip label={post.category} size="small" variant="outlined" />
                  </Box>
                }
                secondary={post.date}
              />
            </ListItem>
            {index < recentPosts.length - 1 && <Divider />}
          </Box>
        ))}
      </List>
    </Box>
  );
}