'use client';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

export default function FeatureCard({ title, description, action }) {
  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          {action}
        </Button>
      </CardActions>
    </Card>
  );
}