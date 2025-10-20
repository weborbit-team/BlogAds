'use client';
import { Typography, Grid } from '@mui/material';
import PostCard from '../ui/PostCard';

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

export default function FeaturedPosts() {
  return (
    <>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
        Featured Posts
      </Typography>
      
      <Grid container spacing={4}>
        {featuredPosts.map((post, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}