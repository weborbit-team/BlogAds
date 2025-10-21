import { Box } from "@mui/material";
import {
  HeroSection,
  FeaturedPosts,
  CategoriesSection,
  TrendingSection,
  AboutSection,
  TestimonialsSection,
  RecentPosts,
  StatsSection,
  NewsletterSection,
} from "../components";

export const metadata = {
  title:
    process.env.NEXT_PUBLIC_SITE_NAME ||
    "NextMUI - Next.js + Material-UI Showcase",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Professional Next.js 15 and Material-UI v7 showcase featuring responsive design, dark theme, and modern React patterns",
  keywords:
    process.env.NEXT_PUBLIC_KEYWORDS ||
    "Next.js,Material-UI,React,TypeScript,Dark Theme,Responsive Design,Web Development",
  openGraph: {
    title:
      process.env.NEXT_PUBLIC_SITE_NAME ||
      "NextMUI - Next.js + Material-UI Showcase",
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
      "Professional Next.js 15 and Material-UI v7 showcase featuring responsive design, dark theme, and modern React patterns",
    url:
      process.env.NEXT_PUBLIC_SITE_URL || "https://nextmui-showcase.vercel.app",
    type: "website",
  },
};

export default function Home() {
  return (
    <Box sx={{ mt: 4, mb: 4, maxWidth: "1200px", mx: "auto" }}>
      <HeroSection />
      <FeaturedPosts />
      <CategoriesSection />
      <TrendingSection />
      <AboutSection />
      <TestimonialsSection />
      <RecentPosts />
      <StatsSection />
      <NewsletterSection />
    </Box>
  );
}
