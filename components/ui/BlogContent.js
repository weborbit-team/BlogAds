import { Box, styled } from "@mui/material";
import BannerAdvertisement from "../BannerAdvertisement";
import SmartlinkAdvertisement from "../SmartlinkAdvertisement";
import NativeBannerAd from "../NativeBannerAd";

const StyledBlogContent = styled(Box)(({ theme }) => ({
  fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
  lineHeight: 1.7,
  fontSize: "1.125rem",
  color: theme.palette.text.primary,
  letterSpacing: "-0.003em",

  // Smooth scroll behavior
  "& *": {
    scrollBehavior: "smooth",
  },

  // Blog Header
  "& .blog-header": {
    marginBottom: theme.spacing(5),
    textAlign: "left",
    padding: theme.spacing(3, 0),

    "& h1": {
      fontSize: "2.5rem",
      fontWeight: 800,
      marginBottom: theme.spacing(3),
      lineHeight: 1.2,
      color: theme.palette.text.primary,
      letterSpacing: "-0.02em",
      [theme.breakpoints.down("md")]: {
        fontSize: "2rem",
      },
    },

    "& .lead": {
      fontSize: "1.25rem",
      fontWeight: 400,
      color: theme.palette.text.secondary,
      lineHeight: 1.6,
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down("md")]: {
        fontSize: "1.125rem",
      },
    },
  },

  // Table of Contents
  "& .table-of-contents": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.02)"
        : "rgba(0, 0, 0, 0.02)",
    border: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    margin: theme.spacing(4, 0),
    backdropFilter: "blur(10px)",

    "& h2": {
      fontSize: "1.125rem",
      fontWeight: 700,
      marginBottom: theme.spacing(2),
      color: theme.palette.text.primary,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },

    "& ul": {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexWrap: "wrap",
      gap: theme.spacing(1),
    },

    "& li": {
      marginBottom: 0,
    },

    "& a": {
      color: theme.palette.text.secondary,
      textDecoration: "none",
      fontWeight: 500,
      fontSize: "0.9375rem",
      transition: "all 0.3s ease",
      display: "block",
      padding: theme.spacing(1, 1.5),
      borderRadius: theme.spacing(1),
      border: `1px solid ${theme.palette.divider}`,
      whiteSpace: "nowrap",

      "&:hover": {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.action.hover,
        borderColor: theme.palette.primary.main,
        transform: "translateY(-2px)",
      },
    },
  },

  // Content Images
  "& .content-image": {
    margin: theme.spacing(4, 0),
    textAlign: "center",

    "& img": {
      maxWidth: "100%",
      height: "auto",
      borderRadius: theme.spacing(1.5),
      boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
      transition: "transform 0.3s ease",

      "&:hover": {
        transform: "scale(1.02)",
      },
    },

    "& .image-caption": {
      fontSize: "0.875rem",
      color: theme.palette.text.secondary,
      fontStyle: "italic",
      marginTop: theme.spacing(1),
      textAlign: "center",
    },
  },

  // Image Credits
  "& .image-credits": {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(3),
    marginTop: theme.spacing(6),
    textAlign: "center",

    "& h3": {
      fontSize: "1rem",
      fontWeight: 600,
      marginBottom: theme.spacing(2),
      color: theme.palette.text.secondary,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },

    "& p": {
      fontSize: "0.8125rem",
      color: theme.palette.text.disabled,
      marginBottom: theme.spacing(0.5),
      lineHeight: 1.4,

      "&:last-child": {
        marginTop: theme.spacing(1),
        fontStyle: "italic",
      },
    },

    "& a": {
      color: theme.palette.text.secondary,
      textDecoration: "none",

      "&:hover": {
        color: theme.palette.primary.main,
        textDecoration: "underline",
      },
    },
  },

  // Sections
  "& section": {
    marginBottom: theme.spacing(6),
    "&:last-child": {
      marginBottom: 0,
    },
  },

  // Headings
  "& h2": {
    fontSize: "2rem",
    fontWeight: 700,
    margin: theme.spacing(6, 0, 3, 0),
    color: theme.palette.text.primary,
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
    position: "relative",
    scrollMarginTop: "100px",

    "&::before": {
      content: '""',
      position: "absolute",
      left: "-24px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "4px",
      height: "24px",
      backgroundColor: theme.palette.primary.main,
      borderRadius: "2px",
    },

    [theme.breakpoints.down("md")]: {
      fontSize: "1.75rem",
      scrollMarginTop: "80px",
      "&::before": {
        display: "none",
      },
    },
  },

  "& h3": {
    fontSize: "1.5rem",
    fontWeight: 600,
    margin: theme.spacing(4, 0, 2, 0),
    color: theme.palette.text.primary,
    lineHeight: 1.4,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.375rem",
    },
  },

  // Paragraphs
  "& p": {
    marginBottom: theme.spacing(3),
    lineHeight: 1.75,
    color: theme.palette.text.primary,

    "&:first-of-type": {
      fontSize: "1.25rem",
      fontWeight: 400,
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(4),
    },
  },

  // Lists
  "& ul, & ol": {
    margin: theme.spacing(3, 0),
    paddingLeft: theme.spacing(4),
    listStyle: "disc",

    "& li": {
      marginBottom: theme.spacing(1.5),
      lineHeight: 1.7,
      color: theme.palette.text.primary,
      display: "list-item",
      listStyleType: "disc",
      listStylePosition: "outside",

      "& strong": {
        color: theme.palette.primary.main,
        fontWeight: 600,
      },
    },
  },

  "& ul li::marker": {
    color: theme.palette.primary.main,
    fontSize: "1.2em",
  },

  // Table of Contents lists (no bullets)
  "& .table-of-contents ul": {
    listStyle: "none",

    "& li": {
      listStyleType: "none",
    },
  },

  // Blockquotes
  "& blockquote": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.03)"
        : "rgba(0, 0, 0, 0.03)",
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    margin: theme.spacing(4, 0),
    padding: theme.spacing(3, 4),
    fontStyle: "italic",
    position: "relative",
    fontSize: "1.25rem",
    borderRadius: theme.spacing(1),

    "&::before": {
      // content: '"\201C"',
      fontSize: "4rem",
      color: theme.palette.primary.main,
      position: "absolute",
      left: "-10px",
      top: "-10px",
      opacity: 0.3,
    },

    "& p": {
      marginBottom: theme.spacing(2),
      fontSize: "1.25rem",
      color: theme.palette.text.primary,
      fontWeight: 500,
    },

    "& cite": {
      display: "block",
      textAlign: "right",
      fontSize: "1rem",
      color: theme.palette.text.secondary,
      fontWeight: 600,
      fontStyle: "normal",
      marginTop: theme.spacing(2),
    },
  },

  // Call to Action
  "& .call-to-action": {
    background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.primary.light}15)`,
    border: `2px solid ${theme.palette.primary.main}30`,
    color: theme.palette.text.primary,
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    margin: theme.spacing(6, 0),
    textAlign: "center",
    position: "relative",
    overflow: "hidden",

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-100%",
      width: "100%",
      height: "100%",
      background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}20, transparent)`,
      transition: "left 0.5s ease",
    },

    "&:hover::before": {
      left: "100%",
    },

    "& h3": {
      color: theme.palette.primary.main,
      marginBottom: theme.spacing(2),
      fontSize: "1.5rem",
      fontWeight: 700,
    },

    "& p": {
      color: theme.palette.text.secondary,
      marginBottom: 0,
      fontSize: "1.125rem",
    },
  },

  // Mobile optimizations
  [theme.breakpoints.down("md")]: {
    fontSize: "1.0625rem",

    "& .blog-header": {
      textAlign: "left",
      padding: theme.spacing(2, 0),
    },

    "& .table-of-contents ul": {
      flexDirection: "column",
      gap: theme.spacing(0.5),
    },

    "& h2::before": {
      display: "none",
    },
  },
}));

export default function BlogContent({ content, ...props }) {
  // Split content by h2 tags for medium ad insertion
  const sections = content.split(/<h2[^>]*>/i);

  return (
    <Box>
      {sections.map((section, index) => (
        <Box key={index}>
          <StyledBlogContent
            dangerouslySetInnerHTML={{
              __html: index === 0 ? section : `<h2>${section}`,
            }}
            sx={{
              "& > *:first-of-type": {
                marginTop: 0,
              },
              "& > *:last-child": {
                marginBottom: 0,
              },
            }}
            {...props}
          />

          {/* Insert ads after every section (except first and last) */}
          {index > 0 && index < sections.length - 1 && (
            <Box sx={{ my: 4 }}>
              <BannerAdvertisement />
              <NativeBannerAd />
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
}
