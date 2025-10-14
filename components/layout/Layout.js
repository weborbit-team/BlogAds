"use client";
import { Box } from "@mui/material";
import { Navbar } from "@/components";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Box sx={{ px: 2 }}>
        {children}
      </Box>
    </>
  );
}