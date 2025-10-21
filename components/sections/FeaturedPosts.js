"use client";
import { Typography, Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { blogPosts } from "@/data/blogs";
import PostCard from "../ui/PostCard";

import "swiper/css";
import "swiper/css/navigation";

const swiperStyles = {
  "& .swiper": {
    backgroundColor: "transparent !important",
  },
  "& .swiper-wrapper": {
    backgroundColor: "transparent !important",
  },
  "& .swiper-slide": {
    backgroundColor: "transparent !important",
    height: "auto",
    display: "flex",
  },
};

export default function FeaturedPosts() {
  const featuredPosts = blogPosts.slice(0, 8);

  return (
    <Box sx={{ mb: { xs: 10, md: 6 }, position: "relative", ...swiperStyles }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 600, mb: 4, textAlign: "center" }}
      >
        Featured Posts
      </Typography>

      <Box sx={{ position: "relative" }}>
        <IconButton
          className="swiper-button-prev-custom"
          sx={{
            position: "absolute",
            left: { xs: "50%", md: -20 },
            top: { xs: "calc(100% + 20px)", md: "50%" },
            transform: { xs: "translateX(-50px)", md: "translateY(-50%)" },
            zIndex: 10,
            bgcolor: "primary.main",
            color: "white",
            width: { xs: 36, md: 48 },
            height: { xs: 36, md: 48 },
            boxShadow: 3,
            "&:hover": {
              bgcolor: "primary.dark",
              transform: {
                xs: "translateX(-50px) scale(1.1)",
                md: "translateY(-50%) scale(1.1)",
              },
            },
          }}
        >
          <ArrowBackIos sx={{ fontSize: { xs: 16, md: 20 } }} />
        </IconButton>

        <IconButton
          className="swiper-button-next-custom"
          sx={{
            position: "absolute",
            right: { xs: "50%", md: -20 },
            top: { xs: "calc(100% + 20px)", md: "50%" },
            transform: { xs: "translateX(50px)", md: "translateY(-50%)" },
            zIndex: 10,
            bgcolor: "primary.main",
            color: "white",
            width: { xs: 36, md: 48 },
            height: { xs: 36, md: 48 },
            boxShadow: 3,
            "&:hover": {
              bgcolor: "primary.dark",
              transform: {
                xs: "translateX(50px) scale(1.1)",
                md: "translateY(-50%) scale(1.1)",
              },
            },
          }}
        >
          <ArrowForwardIos sx={{ fontSize: { xs: 16, md: 20 } }} />
        </IconButton>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ height: "auto" }}
        >
          {featuredPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <PostCard post={post} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
