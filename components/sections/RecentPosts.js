"use client";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { blogPosts } from "../../data/blogs";

const recentPosts = blogPosts.slice(0, 5).map((post) => ({
  id: post.id,
  title: post.title,
  date: post.date,
  category: post.category,
}));

export default function RecentPosts() {
  const router = useRouter();

  const handlePostClick = (postId) => {
    router.push(`/blogs/${postId}`);
  };

  return (
    <Box mt={8} mb={6}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Recent Posts
      </Typography>
      <List>
        {recentPosts.map((post, index) => (
          <Box key={index}>
            <ListItem
              sx={{
                px: 0,
                py: 2,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "action.hover",
                },
              }}
              onClick={() => handlePostClick(post.id)}
            >
              <ListItemText
                primary={
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={1}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      {post.title}
                    </Typography>
                    <Chip
                      label={post.category}
                      size="small"
                      variant="outlined"
                    />
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
