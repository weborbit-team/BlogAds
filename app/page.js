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
  SocialBar,
  Advertisement,
  BannerAdvertisement,
  NativeBannerAd,
  PopunderAd,
} from "../components";

export const metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME || "ReadGo - Modern Blog Platform",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Discover captivating stories, cutting-edge insights, and inspiring content from passionate writers worldwide",
  keywords:
    process.env.NEXT_PUBLIC_KEYWORDS ||
    "Blog,Reading,Stories,Articles,Content,Writers,Publishing,Modern Blog Platform",
  openGraph: {
    title: process.env.NEXT_PUBLIC_SITE_NAME || "ReadGo - Modern Blog Platform",
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
      "Discover captivating stories, cutting-edge insights, and inspiring content from passionate writers worldwide",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://read-go.vercel.app",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <SocialBar />
      <PopunderAd />
      <HeroSection />
      <Box sx={{ mt: 4, mb: 4, maxWidth: "1200px", mx: "auto" }}>
        <FeaturedPosts />
        <Box sx={{ my: 4 }}>
          <BannerAdvertisement />
        </Box>
        <CategoriesSection />
        <Box sx={{ my: 4 }}>
          <Advertisement />
        </Box>
        <TrendingSection />
        <Box sx={{ my: 4 }}>
          <NativeBannerAd />
        </Box>
        <AboutSection />
        <TestimonialsSection />
        <RecentPosts />
        <StatsSection />
      </Box>
    </>
  );
}
