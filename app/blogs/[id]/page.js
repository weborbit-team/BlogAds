"use client";
import { Box, Typography, Chip, Button } from "@mui/material";
import {
  CalendarToday,
  Person,
  ArrowBack,
  AccessTime,
} from "@mui/icons-material";
import { useRouter, useParams } from "next/navigation";
import { getBlogDetail } from "../../../data/blogs/index";
import { useEffect, useState } from "react";

export default function BlogDetailPage() {
  const router = useRouter();
  const params = useParams();
  const blogId = params.id;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const blogData = await getBlogDetail(blogId);
        setBlog(blogData);
      } catch (error) {
        console.error("Error loading blog:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };
    loadBlog();
  }, [blogId]);

  if (loading) {
    return (
      <Box
        sx={{
          mt: 4,
          mb: 4,
          maxWidth: "800px",
          mx: "auto",
          px: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Loading...
        </Typography>
      </Box>
    );
  }

  if (!blog) {
    return (
      <Box
        sx={{
          mt: 4,
          mb: 4,
          maxWidth: "800px",
          mx: "auto",
          px: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Blog not found
        </Typography>
        <Button variant="contained" onClick={() => router.push("/blogs")}>
          Back to Blogs
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 4, mb: 4, maxWidth: "800px", mx: "auto", px: 2 }}>
      <Button
        startIcon={<ArrowBack />}
        onClick={() => router.push("/blogs")}
        sx={{ mb: 3 }}
      >
        Back to Blogs
      </Button>

      <Chip
        label={blog.category?.name || blog.category}
        color="primary"
        sx={{ mb: 2 }}
      />

      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 700, mb: 3 }}
      >
        {blog.title}
      </Typography>

      {blog.featuredImage && (
        <Box
          component="img"
          src={blog.featuredImage}
          alt={blog.title}
          sx={{
            width: "100%",
            maxHeight: 400,
            objectFit: "cover",
            borderRadius: 2,
            mb: 4,
          }}
        />
      )}

      <Box
        display="flex"
        alignItems="center"
        gap={3}
        mb={4}
        sx={{ color: "text.secondary" }}
      >
        <Box display="flex" alignItems="center" gap={0.5}>
          <Person fontSize="small" />
          <Typography variant="body2">
            {blog.author?.name || blog.author}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={0.5}>
          <CalendarToday fontSize="small" />
          <Typography variant="body2">
            {blog.publishedAt
              ? new Date(blog.publishedAt).toLocaleDateString("en-US")
              : blog.date}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={0.5}>
          <AccessTime fontSize="small" />
          <Typography variant="body2">{blog.readTime}</Typography>
        </Box>
      </Box>

      <Box
        sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      <Box sx={{ mt: 6, pt: 4, borderTop: 1, borderColor: "divider" }}>
        <Button
          variant="contained"
          onClick={() => router.push("/blogs")}
          size="large"
        >
          Read More Articles
        </Button>
      </Box>
    </Box>
  );
}
