"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
} from "@mui/material";
import { CalendarToday, Person } from "@mui/icons-material";
import { blogPosts } from "../../data/blogs/index";

const categories = [
  "All",
  "Technology",
  "Development",
  "Design",
  "Business",
  "Marketing",
  "Lifestyle",
];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const router = useRouter();

  const filteredPosts =
    selectedCategory === 0
      ? blogPosts
      : blogPosts.filter(
          (post) => post.category.name === categories[selectedCategory]
        );

  const handleReadMore = (blogId) => {
    router.push(`/blogs/${blogId}`);
  };

  return (
    <Box sx={{ mt: 4, mb: 4, maxWidth: "1200px", mx: "auto", px: 2 }}>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
      >
        Blog Categories
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
        <Tabs
          value={selectedCategory}
          onChange={(e, newValue) => setSelectedCategory(newValue)}
          variant="scrollable"
          scrollButtons="auto"
        >
          {categories.map((category, index) => (
            <Tab key={category} label={category} />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={4}>
        {filteredPosts.map((post, index) => (
          <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column", cursor: "pointer" }}
              onClick={() => handleReadMore(post.id)}
            >
              {post.featuredImage && (
                <Box
                  component="img"
                  src={post.featuredImage}
                  alt={post.title}
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover"
                  }}
                />
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Chip
                  label={post.category.name}
                  size="small"
                  color="primary"
                  sx={{ mb: 2 }}
                />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  {post.excerpt}
                </Typography>
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <Person fontSize="small" color="action" />
                    <Typography variant="caption">{post.author.name}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <CalendarToday fontSize="small" color="action" />
                    <Typography variant="caption">{new Date(post.publishedAt).toLocaleDateString('en-US')}</Typography>
                  </Box>
                </Box>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleReadMore(post.id)}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
