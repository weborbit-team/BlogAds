"use client";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
} from "@mui/material";
import { TrendingUp } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const trendingPosts = [
  {
    id: "675e4a2c8f1c2d3e4f567891",
    title: "AI Revolution in 2024",
    views: "12.5K",
    trend: "+25%",
    author: "Sarah Tech",
  },
  {
    id: "675e4a308f1c2d3e4f567895",
    title: "Getting Started with React 19",
    views: "8.2K",
    trend: "+18%",
    author: "John Doe",
  },
  {
    id: "675e4a358f1c2d3e4f56789a",
    title: "AI in Modern Web Design",
    views: "6.8K",
    trend: "+12%",
    author: "Jane Smith",
  },
];

export default function TrendingSection() {
  const router = useRouter();

  const handlePostClick = (postId) => {
    router.push(`/blogs/${postId}`);
  };

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
            <Card
              sx={{
                p: 2,
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                },
              }}
              onClick={() => handlePostClick(post.id)}
            >
              <CardContent sx={{ p: "0 !important" }}>
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <Avatar sx={{ width: 32, height: 32 }}>
                    {post.author[0]}
                  </Avatar>
                  <Typography variant="body2" color="text.secondary">
                    {post.author}
                  </Typography>
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                  {post.title}
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
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
