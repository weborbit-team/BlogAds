'use client';
import { Box } from '@mui/material';
import { 
  HeroSection, 
  FeaturedPosts, 
  CategoriesSection,
  TrendingSection,
  AboutSection,
  TestimonialsSection,
  RecentPosts,
  StatsSection,
  NewsletterSection 
} from '../components';

export default function Home() {
  return (
    <Box sx={{ mt: 4, mb: 4, maxWidth: '1200px', mx: 'auto' }}>
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
