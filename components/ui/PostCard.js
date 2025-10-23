"use client";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Button,
} from "@mui/material";
import { CalendarToday, Person } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function PostCard({ post }) {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/blogs/${post.id}`);
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {post.featuredImage && (
        <Box
          component="img"
          src={post.featuredImage}
          alt={`Featured image for ${post.title}`}
          sx={{
            width: "100%",
            height: 200,
            objectFit: "cover",
          }}
        />
      )}
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Box sx={{ flexGrow: 1 }}>
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
              <Typography variant="caption">By {post.author}</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              <CalendarToday fontSize="small" color="action" />
              <Typography variant="caption">{post.date}</Typography>
            </Box>
          </Box>
        </Box>
        <Button
          variant="contained"
          fullWidth
          onClick={handleReadMore}
          sx={{
            mt: 2,
            py: 1.5,
            fontWeight: 600,
            textTransform: "none",
            borderRadius: 2,
          }}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
}
