"use client";
import {
  Box,
  Typography,
  Chip,
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
import {
  CalendarToday,
  Person,
  ArrowBack,
  AccessTime,
} from "@mui/icons-material";
import { useRouter, useParams } from "next/navigation";
import { getBlogDetail } from "../../../data/blogs/index";
import { useEffect, useState } from "react";
import BlogContent from "../../../components/ui/BlogContent";
import CountdownOverlay, {
  BottomCountdownButton,
} from "../../../components/ui/CountdownOverlay";
import { redirectToRandomBlog } from "../../../utils/blogRedirect";
import UserForm from "../../../components/ui/UserForm";
import {
  BannerAdvertisement,
  SmartlinkAdvertisement,
  NativeBannerAd,
  PopunderAd,
} from "../../../components";

export default function BlogDetailPage() {
  const router = useRouter();
  const params = useParams();
  const blogId = params.id;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCountdown, setShowCountdown] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedBlog");
    if (!hasVisited) {
      setShowCountdown(true);
    }
  }, []);

  const handleCountdownComplete = () => {
    sessionStorage.setItem("hasVisitedBlog", "true");
    setShowCountdown(false);
  };

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
    window.scrollTo(0, 0);
  }, [blogId]);

  useEffect(() => {
    window.handleBottomContinue = () => {
      const visitCount =
        parseInt(sessionStorage.getItem("blogVisitCount") || "0") + 1;
      sessionStorage.setItem("blogVisitCount", visitCount.toString());

      if (visitCount >= 2) {
        setShowForm(true);
      } else {
        redirectToRandomBlog(blogId, router);
      }
    };

    return () => {
      delete window.handleBottomContinue;
    };
  }, [blogId, router]);

  const handleFormComplete = () => {
    setShowForm(false);
    setShowSuccessPopup(true);

    // Start countdown and redirect
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowSuccessPopup(false);
          redirectToRandomBlog(blogId, router);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

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
    <Box
      sx={{ mt: 2, mb: 4, maxWidth: "900px", mx: "auto", px: { xs: 2, md: 3 } }}
    >
      <Button
        startIcon={<ArrowBack />}
        onClick={() => router.push("/blogs")}
        sx={{ mb: 2, color: "text.secondary" }}
        size="small"
      >
        Back to Blogs
      </Button>

      <Box sx={{ mb: 2 }}>
        <Chip
          label={blog.category?.name || blog.category}
          color="primary"
          size="small"
          sx={{ mb: 1.5 }}
        />

        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            lineHeight: 1.2,
          }}
        >
          {blog.title}
        </Typography>
      </Box>

      {blog.featuredImage && (
        <Box
          component="img"
          src={blog.featuredImage}
          alt={blog.title}
          sx={{
            width: "100%",
            maxHeight: { xs: 250, md: 350 },
            objectFit: "cover",
            borderRadius: 1.5,
            mb: 3,
            boxShadow: 2,
          }}
        />
      )}

      <Box
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
        mb={3}
        sx={{
          color: "text.secondary",
          fontSize: "0.9rem",
          borderBottom: 1,
          borderColor: "divider",
          pb: 2,
        }}
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

      {/* Top Ads */}
      <BannerAdvertisement />

      {showCountdown && (
        <CountdownOverlay onComplete={handleCountdownComplete} />
      )}

      <BlogContent content={blog.content} />

      <NativeBannerAd />

      <Box
        sx={{
          mt: 4,
          pt: 3,
          borderTop: 1,
          borderColor: "divider",
          textAlign: "center",
        }}
      >
        <Button
          variant="contained"
          onClick={() => router.push("/blogs")}
          size="large"
          sx={{ minWidth: 200 }}
        >
          Read More Articles
        </Button>
      </Box>

      <BottomCountdownButton />
      
      {/* Popunder Ad */}
      <PopunderAd />

      {showForm && (
        <UserForm
          onComplete={handleFormComplete}
          onClose={handleFormClose}
          isOpen={showForm}
        />
      )}

      <Dialog open={showSuccessPopup} maxWidth="sm" fullWidth>
        <DialogContent sx={{ textAlign: "center", py: 4 }}>
          <Typography variant="h6" color="success.main" gutterBottom>
            ✅ Registration Successful!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Link will be sent to you via mail. Check your mail!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Redirecting to blogs in {countdown} seconds...
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
