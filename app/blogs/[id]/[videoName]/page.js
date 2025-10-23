"use client";
import {
  Box,
  Typography,
  Chip,
  Button,
  Dialog,
  DialogContent,
  Card,
  CardContent,
} from "@mui/material";
import {
  CalendarToday,
  Person,
  ArrowBack,
  AccessTime,
  PlayArrow,
  Download,
} from "@mui/icons-material";
import { useRouter, useParams } from "next/navigation";
import { getBlogDetail } from "../../../../data/blogs/index";
import { useEffect, useState } from "react";
import BlogContent from "../../../../components/ui/BlogContent";
import CountdownOverlay, {
  BottomCountdownButton,
} from "../../../../components/ui/CountdownOverlay";
import { redirectToRandomBlog } from "../../../../utils/blogRedirect";
import UserForm from "../../../../components/ui/UserForm";
import {
  Banner728Ads90,
  SmartLinkAds,
  NativeBannerAd,
  PopunderAd,
} from "../../../../components";
import { CircularProgress, Snackbar, Alert } from "@mui/material";

function MovieDownloadSection({
  videoName,
  showCountdown,
  onComplete,
  onFirstContinue,
  showToast,
  setShowToast,
}) {
  const [seconds, setSeconds] = useState(10);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasClickedContinue, setHasClickedContinue] = useState(false);

  useEffect(() => {
    if (hasStarted && seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else if (hasStarted && seconds === 0) {
      setIsComplete(true);
      onComplete();
    }
  }, [seconds, hasStarted, onComplete]);

  const handleClick = () => {
    if (!hasStarted) {
      setHasStarted(true);
    } else if (isComplete && !hasClickedContinue) {
      setHasClickedContinue(true);
      onFirstContinue();
    }
  };

  const progress = hasStarted ? ((10 - seconds) / 10) * 100 : 0;

  return (
    <Card
      sx={{
        mb: 3,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        border: "2px solid #4CAF50",
        borderRadius: 3,
      }}
    >
      <CardContent sx={{ p: 4, textAlign: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 1, sm: 2 },
            mb: 3,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Download sx={{ color: "#4CAF50", fontSize: { xs: 30, sm: 40 } }} />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "white",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              fontSize: { xs: "1.5rem", sm: "2rem" },
              textAlign: "center",
            }}
          >
            {videoName.replace(/([A-Z])/g, " $1").trim()}
          </Typography>
        </Box>

        {/* Video Play Section */}
        <Box
          sx={{
            bgcolor: "#000",
            borderRadius: 2,
            mb: 3,
            position: "relative",
            minHeight: { xs: 200, sm: 280 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #333",
            overflow: "hidden",
            background: "linear-gradient(45deg, #1a1a1a 0%, #000 100%)",
          }}
        >
          {/* Video Thumbnail Background */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%23222%22/><circle cx=%2250%22 cy=%2250%22 r=%2220%22 fill=%22%23444%22/></svg>')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Play Button */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: { xs: 60, sm: 80 },
                height: { xs: 60, sm: 80 },
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#fff",
                  transform: "scale(1.1)",
                  boxShadow: "0 0 20px rgba(255,255,255,0.3)",
                },
              }}
              onClick={() => setShowToast(true)}
            >
              <PlayArrow
                sx={{ fontSize: { xs: 30, sm: 40 }, color: "#000", ml: 1 }}
              />
            </Box>
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "0.9rem", sm: "1.1rem" },
                fontWeight: 600,
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              Click to Play
            </Typography>
          </Box>

          {/* Video Controls Bar */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: { xs: 40, sm: 50 },
              background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: { xs: 1, sm: 2 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  bgcolor: "#ff4444",
                }}
              />
              <Typography
                sx={{ color: "#fff", fontSize: { xs: "0.7rem", sm: "0.8rem" } }}
              >
                LIVE
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 1, sm: 2 },
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { xs: "0.7rem", sm: "0.8rem" },
                  bgcolor: "rgba(0,0,0,0.7)",
                  px: { xs: 0.5, sm: 1 },
                  py: 0.5,
                  borderRadius: 1,
                }}
              >
                02:15:30
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { xs: "0.7rem", sm: "0.8rem" },
                  bgcolor: "rgba(255,0,0,0.8)",
                  px: { xs: 0.5, sm: 1 },
                  py: 0.5,
                  borderRadius: 1,
                  fontWeight: 600,
                }}
              >
                HD 1080p
              </Typography>
            </Box>
          </Box>

          {/* Loading Indicator */}
          <Box
            sx={{
              position: "absolute",
              top: 15,
              left: 15,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <CircularProgress size={16} sx={{ color: "#fff" }} />
            <Typography
              sx={{ color: "#fff", fontSize: { xs: "0.7rem", sm: "0.8rem" } }}
            >
              Loading...
            </Typography>
          </Box>
        </Box>

        {/* Simplified Download Manager */}
        <Box
          sx={{
            bgcolor: "#1e1e1e",
            border: "1px solid #333",
            borderRadius: 2,
            p: 3,
            mb: 3,
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
            border: "1px solid #333",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Download sx={{ fontSize: 40, color: "#4CAF50", mb: 1 }} />
            <Typography
              variant="h5"
              sx={{ color: "#fff", fontWeight: 600, mb: 1 }}
            >
              Download Movie
            </Typography>
            <Typography sx={{ color: "#aaa" }}>
              {videoName.replace(/([A-Z])/g, " $1").trim()}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              mb: 3,
              p: 2,
              bgcolor: "rgba(255,255,255,0.05)",
              borderRadius: 2,
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ color: "#4CAF50", fontWeight: 600 }}>
                426 MB
              </Typography>
              <Typography variant="caption" sx={{ color: "#aaa" }}>
                File Size
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ color: "#4CAF50", fontWeight: 600 }}>
                HD 1080p
              </Typography>
              <Typography variant="caption" sx={{ color: "#aaa" }}>
                Quality
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ color: "#4CAF50", fontWeight: 600 }}>
                Ready
              </Typography>
              <Typography variant="caption" sx={{ color: "#aaa" }}>
                Status
              </Typography>
            </Box>
          </Box>
        </Box>

        {hasStarted && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
            }}
          >
            <Box sx={{ position: "relative" }}>
              <CircularProgress
                variant="determinate"
                value={progress}
                size={80}
                thickness={4}
                sx={{ color: "#4CAF50" }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {seconds}
              </Typography>
            </Box>
          </Box>
        )}

        <Button
          variant="contained"
          size="large"
          startIcon={<PlayArrow />}
          onClick={handleClick}
          disabled={(hasStarted && !isComplete) || hasClickedContinue}
          sx={{
            bgcolor: (!hasStarted || (isComplete && !hasClickedContinue)) ? "#4CAF50" : "#666",
            color: "white",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            fontWeight: 700,
            py: { xs: 1.5, sm: 2 },
            px: { xs: 3, sm: 4 },
            borderRadius: 3,
            boxShadow: "0 4px 15px rgba(76, 175, 80, 0.4)",
            width: { xs: "100%", sm: "auto" },
            "&:hover": {
              bgcolor: (!hasStarted || (isComplete && !hasClickedContinue)) ? "#45a049" : "#666",
              transform:
                (!hasStarted || (isComplete && !hasClickedContinue)) ? "translateY(-2px)" : "none",
              boxShadow:
                (!hasStarted || (isComplete && !hasClickedContinue))
                  ? "0 6px 20px rgba(76, 175, 80, 0.6)"
                  : "0 4px 15px rgba(76, 175, 80, 0.4)",
            },
            transition: "all 0.3s ease",
          }}
        >
          {!hasStarted
            ? "Click to Continue Download"
            : isComplete && !hasClickedContinue
            ? "Continue"
            : hasClickedContinue
            ? "please complete steps below"
            : "Please Wait..."}
        </Button>

        <Typography
          variant="caption"
          sx={{
            display: "block",
            mt: 2,
            color: "rgba(255,255,255,0.8)",
            fontStyle: "italic",
            textAlign: "center",
            fontSize: { xs: "0.8rem", sm: "0.875rem" },
          }}
        >
          {!hasStarted
            ? "🎯 All ready to proceed! Click to continue"
            : isComplete && !hasClickedContinue
            ? "✅ Ready! Click Continue to proceed"
            : hasClickedContinue
            ? "👇 Go to below and click on continue"
            : `⏳ Please wait ${seconds} seconds...`}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function BlogVideoPage() {
  const router = useRouter();
  const params = useParams();
  const blogId = params.id;
  const videoName = params.videoName;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCountdown, setShowCountdown] = useState(false);
  const [showBottomCountdown, setShowBottomCountdown] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [showToast, setShowToast] = useState(false);

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

  const handleFirstContinue = () => {
    setShowBottomCountdown(true);
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

      <Banner728Ads90 />

      {/* Unified Movie Download & Countdown Section */}
      <MovieDownloadSection
        videoName={videoName}
        showCountdown={showCountdown}
        onComplete={handleCountdownComplete}
        onFirstContinue={handleFirstContinue}
        showToast={showToast}
        setShowToast={setShowToast}
      />

      <Snackbar
        open={showToast}
        autoHideDuration={3000}
        onClose={() => setShowToast(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="warning" onClose={() => setShowToast(false)}>
          Please complete all steps to access the video!
        </Alert>
      </Snackbar>

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

      <BottomCountdownButton show={showBottomCountdown} />

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
