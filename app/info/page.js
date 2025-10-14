"use client";
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from "@mui/material";
import {
  Speed,
  Security,
  Devices,
  Code,
  Palette,
  Build,
  CheckCircle,
  Star,
  Rocket,
  Shield,
} from "@mui/icons-material";


export default function InfoPage() {
  return (
    <Container sx={{ mt: 4, mb: 4, px: { xs: 2, sm: 3 } }}>
        <Box
          textAlign="center"
          mb={6}
          sx={{
            background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
            borderRadius: 3,
            p: 6,
            position: "relative",
            overflow: "hidden",
            border: '1px solid',
            borderColor: 'divider',
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(124, 58, 237, 0.05) 100%)",
              zIndex: 1,
            },
          }}
        >
          <Box sx={{ position: "relative", zIndex: 2 }}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Technology Stack Info
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Learn about Next.js and Material-UI
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 3, height: "100%" }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Next.js
              </Typography>

              <Typography variant="body1" paragraph>
                Next.js is a React framework that gives you building blocks to
                create web applications. It handles tooling and configuration
                needed for React, and provides additional structure, features,
                and optimizations for your application.
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Key Features
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <Speed color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Server-Side Rendering (SSR)"
                    secondary="Improved performance and SEO"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Rocket color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Static Site Generation (SSG)"
                    secondary="Pre-built pages for lightning-fast loading"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Code color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="API Routes"
                    secondary="Build full-stack applications"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Build color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Built-in Optimization"
                    secondary="Image, font, and script optimization"
                  />
                </ListItem>
              </List>

              <Box mt={3}>
                <Typography variant="h6" gutterBottom>
                  Why Choose Next.js?
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  <Chip label="Zero Config" size="small" />
                  <Chip label="TypeScript Support" size="small" />
                  <Chip label="File-based Routing" size="small" />
                  <Chip label="Edge Functions" size="small" />
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 3, height: "100%" }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Material-UI
              </Typography>

              <Typography variant="body1" paragraph>
                MUI provides a simple, customizable, and accessible library of
                React components. Follow your own design system, or start with
                Material Design. It includes a comprehensive collection of
                prebuilt components ready for production.
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Core Benefits
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <Palette color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Material Design"
                    secondary="Google's design language implementation"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Devices color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Responsive Design"
                    secondary="Mobile-first approach with breakpoints"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Security color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Accessibility"
                    secondary="WAI-ARIA compliant components"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Star color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Theming System"
                    secondary="Powerful customization capabilities"
                  />
                </ListItem>
              </List>

              <Box mt={3}>
                <Typography variant="h6" gutterBottom>
                  Component Categories
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  <Chip label="Layout" size="small" color="secondary" />
                  <Chip label="Navigation" size="small" color="secondary" />
                  <Chip label="Inputs" size="small" color="secondary" />
                  <Chip label="Data Display" size="small" color="secondary" />
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 6,
            p: 6,
            background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
            borderRadius: 4,
            position: "relative",
            overflow: "hidden",
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: 'primary.main',
              }}
            >
              Next.js + MUI
            </Typography>
            <Typography variant="h5" color="text.secondary">
              The Perfect Development Stack
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 4,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 3,
                background: "rgba(59, 130, 246, 0.1)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                transition: "all 0.3s ease",
                minWidth: 280,
                flex: "1 1 280px",
                maxWidth: 320,
                "&:hover": {
                  transform: "translateY(-8px)",
                  background: "rgba(59, 130, 246, 0.15)",
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)",
                },
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 3,
                }}
              >
                <Speed sx={{ fontSize: 40, color: "white" }} />
              </Box>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Performance
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Lightning-fast SSR/SSG with optimized components for exceptional
                user experience
              </Typography>
            </Box>

            <Box
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 3,
                background: "rgba(139, 92, 246, 0.1)",
                border: "1px solid rgba(139, 92, 246, 0.2)",
                transition: "all 0.3s ease",
                minWidth: 280,
                flex: "1 1 280px",
                maxWidth: 320,
                "&:hover": {
                  transform: "translateY(-8px)",
                  background: "rgba(139, 92, 246, 0.15)",
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.1)",
                },
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 3,
                }}
              >
                <Palette sx={{ fontSize: 40, color: "white" }} />
              </Box>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Design System
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Beautiful Material Design with flexible theming for consistent,
                modern interfaces
              </Typography>
            </Box>

            <Box
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 3,
                background: "rgba(16, 185, 129, 0.1)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                transition: "all 0.3s ease",
                minWidth: 280,
                flex: "1 1 280px",
                maxWidth: 320,
                "&:hover": {
                  transform: "translateY(-8px)",
                  background: "rgba(16, 185, 129, 0.15)",
                  boxShadow: "0 20px 40px rgba(16, 185, 129, 0.1)",
                },
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 3,
                }}
              >
                <Shield sx={{ fontSize: 40, color: "white" }} />
              </Box>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Enterprise Ready
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Battle-tested frameworks trusted by industry leaders worldwide
              </Typography>
            </Box>
          </Box>
        </Box>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 3, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Next.js by the Numbers
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText primary="100k+ GitHub Stars" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Used by Netflix, Uber, Hulu" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText primary="5M+ weekly downloads" />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 3, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                MUI Adoption
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText primary="90k+ GitHub Stars" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Used by NASA, Unity, Amazon" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText primary="3M+ weekly downloads" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
    </Container>
  );
}
