"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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
import { CalendarToday, Person, ArrowForward } from "@mui/icons-material";
import { blogPosts } from "../../data/blogs";

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
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setMounted(true);
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      const categoryIndex = parseInt(categoryParam, 10);
      if (categoryIndex >= 0 && categoryIndex < categories.length) {
        setSelectedCategory(categoryIndex);
      }
    }
  }, [searchParams]);

  if (!mounted) {
    return null;
  }

  const filteredPosts =
    selectedCategory === 0
      ? blogPosts
      : blogPosts.filter(
          (post) => post.category === categories[selectedCategory]
        );

  const handleReadMore = (blogId) => {
    router.push(`/blogs/${blogId}`);
  };

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "NextMUI Blog",
    description:
      "Comprehensive blog covering Technology, Development, Design, Business, Marketing, and Lifestyle topics",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs`,
    publisher: {
      "@type": "Organization",
      name: process.env.NEXT_PUBLIC_SITE_NAME || "NextMUI",
      url: process.env.NEXT_PUBLIC_SITE_URL,
    },
    blogPost: filteredPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${post.id}`,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: post.author,
      },
      publisher: {
        "@type": "Organization",
        name: process.env.NEXT_PUBLIC_SITE_NAME || "NextMUI",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Box sx={{ mt: 4, mb: 4, maxWidth: "1200px", mx: "auto", px: 2 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
        >
          Blog Categories
        </Typography>

        <nav
          aria-label="Blog category filter"
          sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}
        >
          <Tabs
            value={selectedCategory}
            onChange={(e, newValue) => setSelectedCategory(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Blog categories"
            sx={{ mb: 3 }}
          >
            {categories.map((category, index) => (
              <Tab
                key={category}
                label={category}
                aria-label={`Filter by ${category}`}
              />
            ))}
          </Tabs>
        </nav>

        <section aria-label="Blog posts">
          <Grid container spacing={4}>
            {filteredPosts.map((post, index) => (
              <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
                <article>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      cursor: "pointer",
                    }}
                    onClick={() => handleReadMore(post.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleReadMore(post.id);
                      }
                    }}
                    aria-label={`Read more about ${post.title}`}
                  >
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
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Chip
                        label={post.category}
                        size="small"
                        color="primary"
                        sx={{ mb: 2 }}
                      />
                      <Typography
                        variant="h6"
                        component="h2"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 3 }}
                        component="p"
                      >
                        {post.excerpt}
                      </Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        gap={2}
                        mb={2}
                        component="footer"
                      >
                        <Box display="flex" alignItems="center" gap={0.5}>
                          <Person
                            fontSize="small"
                            color="action"
                            aria-hidden="true"
                          />
                          <Typography variant="caption" component="span">
                            By {post.author}
                          </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={0.5}>
                          <CalendarToday
                            fontSize="small"
                            color="action"
                            aria-hidden="true"
                          />
                          <Typography variant="caption" component="time">
                            {post.date}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ textAlign: "right" }}>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReadMore(post.id);
                          }}
                          aria-label={`Read full article: ${post.title}`}
                          endIcon={<ArrowForward />}
                        >
                          Read More
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </article>
              </Grid>
            ))}
          </Grid>
        </section>
      </Box>
    </>
  );
}
