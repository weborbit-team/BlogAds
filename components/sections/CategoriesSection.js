"use client";
import { Typography, Box, Grid, Card, CardContent, Chip } from "@mui/material";
import {
  Computer,
  Code,
  Palette,
  Business,
  Campaign,
  FitnessCenter,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { blogPosts } from "../../data/blogs";

const categoryIcons = {
  Technology: Computer,
  Development: Code,
  Design: Palette,
  Business: Business,
  Marketing: Campaign,
  Lifestyle: FitnessCenter,
};

const categoryColors = {
  Technology: "primary",
  Development: "secondary",
  Design: "success",
  Business: "warning",
  Marketing: "error",
  Lifestyle: "info",
};

export default function CategoriesSection() {
  const router = useRouter();

  // Get unique categories from blog posts and count articles
  const categories = [
    "Technology",
    "Development",
    "Design",
    "Business",
    "Marketing",
    "Lifestyle",
  ]
    .map((categoryName) => {
      const count = blogPosts.filter(
        (post) => post.category === categoryName
      ).length;
      return {
        name: categoryName,
        icon: categoryIcons[categoryName],
        count,
        color: categoryColors[categoryName],
      };
    })
    .filter((category) => category.count > 0);

  const handleCategoryClick = (categoryName) => {
    const categoryIndex = [
      "All",
      "Technology",
      "Development",
      "Design",
      "Business",
      "Marketing",
      "Lifestyle",
    ].indexOf(categoryName);
    router.push(`/blogs?category=${categoryIndex}`);
  };

  return (
    <Box mt={8} mb={6}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Browse Categories
      </Typography>
      <Grid container spacing={3}>
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 2,
                  cursor: "pointer",
                  "&:hover": { transform: "translateY(-4px)" },
                  transition: "transform 0.2s",
                }}
                onClick={() => handleCategoryClick(category.name)}
              >
                <CardContent>
                  <IconComponent
                    sx={{
                      fontSize: 40,
                      color: `${category.color}.main`,
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {category.name}
                  </Typography>
                  <Chip
                    label={`${category.count} articles`}
                    size="small"
                    color={category.color}
                  />
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
