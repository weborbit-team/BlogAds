"use client";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider,
  Stack,
} from "@mui/material";
import {
  Article,
  Security,
  Favorite,
  TrendingUp,
  Nature,
  School,
  VolunteerActivism,
  CheckCircle,
} from "@mui/icons-material";
import {
  SocialBar,
  Ads,
  Banner728Ads90,
  NativeBannerAd,
  PopunderAd,
  SmartLinkAds,
} from "../../components";

export default function AboutPage() {
  const features = [
    {
      icon: <Article />,
      title: "Premium Content",
      description:
        "Expert-curated blogs with actionable insights and verified sources",
    },
    {
      icon: <Security />,
      title: "Privacy First",
      description:
        "Zero tracking, no data collection, completely anonymous reading",
    },
    {
      icon: <Favorite />,
      title: "Social Impact",
      description: "Every read supports environmental and educational causes",
    },
  ];

  const causes = [
    {
      icon: <Nature />,
      title: "Environmental Conservation",
      impact: "50,000+ Trees Planted",
      color: "#22c55e",
    },
    {
      icon: <School />,
      title: "Education Access",
      impact: "200+ Students Sponsored",
      color: "#3b82f6",
    },
    {
      icon: <VolunteerActivism />,
      title: "Community Development",
      impact: "15 Communities Supported",
      color: "#a855f7",
    },
  ];

  return (
    <>
      <SocialBar />
      <PopunderAd />
      <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box textAlign="center" mb={8}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 800, mb: 2 }}
        >
          About ReadGo
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ maxWidth: 600, mx: "auto", mb: 4 }}
        >
          Quality content that creates positive change while protecting your
          privacy
        </Typography>
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4} mb={8}>
        {features.map((feature, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                height: "100%",
                textAlign: "center",
                transition: "transform 0.2s",
                "&:hover": { transform: "translateY(-4px)" },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Avatar
                  sx={{
                    width: 64,
                    height: 64,
                    mx: "auto",
                    mb: 2,
                    bgcolor: "primary.main",
                  }}
                >
                  {feature.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ my: 4 }}>
        <Banner728Ads90 />
      </Box>

      {/* Mission Statement */}
      <Paper
        sx={{
          p: 6,
          mb: 8,
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Our Mission
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}
        >
          ReadGo transforms how people consume content online. We curate premium
          blogs that educate and inspire while channeling every reader
          interaction into meaningful social causes. Your privacy remains
          completely protected—no tracking, no data collection, just pure,
          impactful content.
        </Typography>
      </Paper>

      <Box sx={{ my: 4 }}>
        <Ads />
      </Box>

      {/* Social Impact */}
      <Box mb={8}>
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ fontWeight: 700, mb: 4 }}
        >
          Social Impact Through Reading
        </Typography>
        <Grid container spacing={3}>
          {causes.map((cause, index) => (
            <Grid key={index} size={{ xs: 12, sm: 4 }}>
              <Card sx={{ textAlign: "center", p: 3 }}>
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    mx: "auto",
                    mb: 2,
                    bgcolor: cause.color,
                  }}
                >
                  {cause.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {cause.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {cause.impact}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ my: 4 }}>
        <NativeBannerAd />
      </Box>

      {/* Privacy & Quality */}
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 4, height: "100%" }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Privacy Commitment
            </Typography>
            <Stack spacing={2}>
              <Box display="flex" alignItems="center" gap={2}>
                <CheckCircle color="success" />
                <Typography>Zero data collection</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <CheckCircle color="success" />
                <Typography>No tracking or cookies</Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={2}>
                <CheckCircle color="success" />
                <Typography>Anonymous browsing</Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 4, height: "100%" }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Content Quality
            </Typography>
            <Stack spacing={2}>
              <Box display="flex" alignItems="center" gap={2}>
                <TrendingUp color="primary" />
                <Typography>Expert-reviewed articles</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <TrendingUp color="primary" />
                <Typography>Fact-checked sources</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <TrendingUp color="primary" />
                <Typography>Community-driven topics</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <TrendingUp color="primary" />
                <Typography>Actionable insights</Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ my: 4 }}>
        <SmartLinkAds />
      </Box>

      {/* Terms and Conditions */}
      <Box mt={8}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Terms & Conditions
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            These terms govern your use of ReadGo. By accessing our platform,
            you agree to comply with these conditions.
          </Typography>
        </Box>

        <Paper sx={{ p: 0, overflow: "hidden", borderRadius: 3 }}>
          <Box
            sx={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              p: 4,
              color: "white",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600, color: "white" }}>
              Legal Agreement
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#fbbf24", fontWeight: 600, mt: 1 }}
            >
              Effective Date: 21/10/2025
            </Typography>
          </Box>

          <Box sx={{ p: 4 }}>
            <Grid container spacing={0}>
              {[
                {
                  title: "Content Policy & Family Safety",
                  content:
                    "ReadGo strictly prohibits pornographic, explicit, or adult content. We are committed to providing clean, educational, and family-friendly content suitable for all ages. All materials undergo content review to ensure appropriateness and educational value.",
                },
                {
                  title: "Acceptance of Terms",
                  content:
                    "By accessing ReadGo, you agree to these terms. If you disagree with any part, please discontinue use immediately.",
                },
                {
                  title: "User Information Risk",
                  content:
                    "Any personal information voluntarily shared by users through comments, feedback, or communication is done at their own risk. While we maintain security measures, users are responsible for protecting their personal data and should avoid sharing sensitive information.",
                },
                {
                  title: "Content License & Usage",
                  content:
                    "All content is for personal, non-commercial use only. Reproduction, distribution, or modification requires written permission. Fair use excerpts with attribution are permitted.",
                },
                {
                  title: "Intellectual Property",
                  content:
                    "ReadGo owns all original content, design, and trademarks. Third-party content remains property of respective owners.",
                },
                {
                  title: "Privacy & Data Protection",
                  content:
                    "We collect zero personal data, use no cookies or tracking technologies. Your browsing remains completely anonymous and private.",
                },
                {
                  title: "User Conduct",
                  content:
                    "Users must not attempt to hack, spam, or misuse the platform. Respectful engagement with content is expected.",
                },
                {
                  title: "Content Standards",
                  content:
                    "All content undergoes expert review for accuracy, quality, and appropriateness. We maintain high editorial standards and provide only family-friendly, educational content suitable for all ages.",
                },
                {
                  title: "Third-Party Links",
                  content:
                    "External links are provided for convenience. We're not responsible for third-party content, privacy policies, or practices.",
                },
                {
                  title: "Service Availability",
                  content:
                    "We aim for 99.9% uptime but don't guarantee uninterrupted service. Maintenance and updates may cause temporary unavailability.",
                },
                {
                  title: "Limitation of Liability",
                  content:
                    "ReadGo is not liable for any direct, indirect, or consequential damages arising from platform use or content reliance.",
                },
                {
                  title: "Modifications & Contact",
                  content:
                    "Terms may be updated periodically. Continued use constitutes acceptance. Contact us for questions or concerns about these terms.",
                },
              ].map((term, index) => (
                <Grid key={index} size={{ xs: 12 }}>
                  <Box
                    sx={{
                      py: 3,
                      px: 2,
                      borderBottom: index < 9 ? "1px solid" : "none",
                      borderColor: "divider",
                      "&:hover": {
                        bgcolor: "grey.50",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ fontWeight: 600, color: "primary.main", mb: 1 }}
                    >
                      {index + 1}. {term.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7, pl: 2 }}
                    >
                      {term.content}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ bgcolor: "grey.100", p: 3, textAlign: "center" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              By continuing to use ReadGo, you acknowledge that you have read,
              understood, and agree to be bound by these terms.
            </Typography>
          </Box>
        </Paper>
      </Box>

      {/* Call to Action */}
      <Box
        textAlign="center"
        mt={6}
        p={6}
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: 3,
          color: "white",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 700, color: "#ffffff" }}
        >
          Join Our Community
        </Typography>
        <Typography variant="h6" sx={{ color: "#e2e8f0" }}>
          Read quality content. Support social causes. Protect your privacy.
        </Typography>
      </Box>
      </Container>
    </>
  );
}
