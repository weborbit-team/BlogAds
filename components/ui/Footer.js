"use client";
import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  Email,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1a1a1a",
        color: "white",
        pt: 6,
        pb: 4,
        borderTop: "1px solid #333",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 5 }}>
          <Grid item size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, mb: 2, color: "#8b5fbf" }}
            >
              BlogAds
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 3, color: "#b0b0b0", lineHeight: 1.6 }}
            >
              Discover insights, tutorials, and stories from the world of
              technology. Join 50K+ readers and 100+ expert authors sharing
              knowledge.
            </Typography>

            <Box sx={{ display: "flex", gap: 1.5, mb: 3 }}>
              {[Facebook, Twitter, Instagram, LinkedIn, YouTube].map(
                (Icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      bgcolor: "#333",
                      color: "white",
                      "&:hover": {
                        bgcolor: "#8b5fbf",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                    size="small"
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                )
              )}
            </Box>

            <Box
              sx={{ display: "flex", alignItems: "center", color: "#b0b0b0" }}
            >
              <Email sx={{ mr: 1.5, fontSize: 18 }} />
              <Typography variant="body2">contact@blogads.com</Typography>
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 3, color: "#8b5fbf" }}
            >
              Categories
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {[
                "Technology",
                "Development",
                "Design",
                "Business",
                "Marketing",
                "Lifestyle",
              ].map((item) => (
                <Link
                  key={item}
                  href={`/blogs?category=${item.toLowerCase()}`}
                  sx={{
                    color: "#b0b0b0",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    "&:hover": {
                      color: "#8b5fbf",
                    },
                    transition: "color 0.3s ease",
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, sm: 4, md: 2 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 3, color: "#8b5fbf" }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {[
                { name: "Home", href: "/" },
                { name: "All Articles", href: "/blogs" },
                { name: "Tech Stack", href: "/info" },
                { name: "RSS Feed", href: "/feed.xml" },
                { name: "Sitemap", href: "/sitemap.xml" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  sx={{
                    color: "#b0b0b0",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    "&:hover": {
                      color: "#8b5fbf",
                    },
                    transition: "color 0.3s ease",
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 3, color: "#8b5fbf" }}
            >
              Our Impact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              {[
                { number: "1000+", label: "Articles" },
                { number: "50K+", label: "Readers" },
                { number: "100+", label: "Authors" },
              ].map((stat) => (
                <Box key={stat.label}>
                  <Typography
                    variant="h4"
                    sx={{ color: "#8b5fbf", fontWeight: 700, lineHeight: 1 }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#b0b0b0" }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: "#333" }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "#b0b0b0" }}>
            © {new Date().getFullYear()} BlogAds. Sharing knowledge, inspiring
            minds.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link
              href="/terms"
              sx={{
                color: "#b0b0b0",
                textDecoration: "none",
                "&:hover": { color: "#8b5fbf" },
              }}
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              sx={{
                color: "#b0b0b0",
                textDecoration: "none",
                "&:hover": { color: "#8b5fbf" },
              }}
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              sx={{
                color: "#b0b0b0",
                textDecoration: "none",
                "&:hover": { color: "#8b5fbf" },
              }}
            >
              Cookies
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
