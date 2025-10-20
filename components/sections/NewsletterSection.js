'use client';
import { Typography, Box, TextField, Button } from '@mui/material';

export default function NewsletterSection() {
  return (
    <Box sx={{ mt: 8, mb: 6, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
        Stay Updated
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Subscribe to our newsletter and get the latest articles delivered to your inbox
      </Typography>
      <Box display="flex" gap={2} justifyContent="center" maxWidth={400} mx="auto">
        <TextField
          placeholder="Enter your email"
          variant="outlined"
          size="small"
          sx={{ flex: 1 }}
        />
        <Button variant="contained" size="small">
          Subscribe
        </Button>
      </Box>
    </Box>
  );
}