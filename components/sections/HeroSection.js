"use client";
import { Typography, Box, Button, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { keyframes } from "@mui/system";
import { useState, useEffect } from "react";

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const drift = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -30px) rotate(120deg); }
  66% { transform: translate(-20px, 20px) rotate(240deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
`;

export default function HeroSection() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const leftIcons = [
    {
      icon: "📚",
      top: { xs: "10%", md: "15%" },
      left: { xs: "2%", md: "8%" },
      delay: "0s",
    },
    {
      icon: "📝",
      top: { xs: "40%", md: "45%" },
      left: { xs: "5%", md: "12%" },
      delay: "1s",
    },
    {
      icon: "📖",
      top: { xs: "70%", md: "75%" },
      left: { xs: "1%", md: "6%" },
      delay: "2s",
    },
  ];

  const rightIcons = [
    {
      icon: "✍️",
      top: { xs: "10%", md: "15%" },
      right: { xs: "2%", md: "8%" },
      delay: "0.5s",
    },
    {
      icon: "💡",
      top: { xs: "40%", md: "45%" },
      right: { xs: "5%", md: "12%" },
      delay: "1.5s",
    },
    {
      icon: "🖊️",
      top: { xs: "70%", md: "75%" },
      right: { xs: "1%", md: "6%" },
      delay: "2.5s",
    },
  ];

  return (
    <Box
      className="hero-section"
      sx={{
        minHeight: { xs: "100vh", md: "calc(100vh - 73px)" },
        height: { xs: "auto", md: "calc(100vh - 73px)" },
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        color: "white",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* White dots background */}
      {mounted &&
        [...Array(20)].map((_, i) => {
          const seed = i * 87.654;
          const x = ((Math.sin(seed) + 1) / 2) * 100;
          const y = ((Math.sin(seed * 1.3) + 1) / 2) * 100;
          const size = 2 + ((Math.sin(seed * 2.1) + 1) / 2) * 4;
          const duration = 8 + ((Math.sin(seed * 1.7) + 1) / 2) * 12;
          const delay = ((Math.sin(seed * 2.3) + 1) / 2) * 5;

          return (
            <Box
              key={`dot-${i}`}
              sx={{
                position: "absolute",
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: "rgba(255,255,255,0.6)",
                borderRadius: "50%",
                top: `${y}%`,
                left: `${x}%`,
                animation: `${drift} ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
                boxShadow: "0 0 10px rgba(255,255,255,0.3)",
                zIndex: 0,
              }}
            />
          );
        })}

      {/* Animated particles */}
      {mounted &&
        [...Array(8)].map((_, i) => {
          const seed = i * 123.456;
          const pseudoRandom1 = (Math.sin(seed) + 1) / 2;
          const pseudoRandom2 = (Math.sin(seed * 1.5) + 1) / 2;
          const pseudoRandom3 = (Math.sin(seed * 2) + 1) / 2;
          const pseudoRandom4 = (Math.sin(seed * 2.5) + 1) / 2;

          return (
            <Box
              key={`particle-${i}`}
              sx={{
                position: "absolute",
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(255,255,255,0.4)",
                borderRadius: "50%",
                top: `${pseudoRandom1 * 100}%`,
                left: `${pseudoRandom2 * 100}%`,
                animation: `${float} ${
                  4 + pseudoRandom3 * 2
                }s ease-in-out infinite`,
                animationDelay: `${pseudoRandom4 * 2}s`,
              }}
            />
          );
        })}

      {/* Left Side Icons */}
      {leftIcons.map((item, index) => (
        <Box
          key={`left-${index}`}
          sx={{
            position: "absolute",
            top: item.top,
            left: item.left,
            display: { xs: "none", md: "flex" },
            width: { xs: "60px", md: "80px" },
            height: { xs: "60px", md: "80px" },
            background:
              "linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,107,107,0.15))",
            borderRadius: "50%",
            alignItems: "center",
            justifyContent: "center",
            fontSize: { xs: "24px", md: "32px" },
            backdropFilter: "blur(15px)",
            border: "2px solid rgba(255,215,0,0.4)",
            boxShadow: "0 8px 32px rgba(255,215,0,0.3)",
            animation: `${float} 6s ease-in-out infinite, ${fadeInUp} 1s ease-out`,
            animationDelay: item.delay,
            zIndex: 2,
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow: "0 12px 40px rgba(255,215,0,0.5)",
            },
            transition: "all 0.3s ease",
          }}
        >
          {item.icon}
        </Box>
      ))}

      {/* Right Side Icons */}
      {rightIcons.map((item, index) => (
        <Box
          key={`right-${index}`}
          sx={{
            position: "absolute",
            top: item.top,
            right: item.right,
            display: { xs: "none", md: "flex" },
            width: { xs: "60px", md: "80px" },
            height: { xs: "60px", md: "80px" },
            background:
              "linear-gradient(135deg, rgba(78,205,196,0.2), rgba(69,183,209,0.15))",
            borderRadius: "50%",
            alignItems: "center",
            justifyContent: "center",
            fontSize: { xs: "24px", md: "32px" },
            backdropFilter: "blur(15px)",
            border: "2px solid rgba(78,205,196,0.4)",
            boxShadow: "0 8px 32px rgba(78,205,196,0.3)",
            animation: `${float} 6s ease-in-out infinite, ${fadeInUp} 1s ease-out`,
            animationDelay: item.delay,
            zIndex: 2,
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow: "0 12px 40px rgba(78,205,196,0.5)",
            },
            transition: "all 0.3s ease",
          }}
        >
          {item.icon}
        </Box>
      ))}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 3 }}>
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 6, md: 12 },
            px: { xs: 3, md: 0 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              mb: 2,
              fontSize: { xs: "2.8rem", sm: "3.5rem", md: "5.5rem" },
              color: "white",
              animation: `${fadeInUp} 1s ease-out`,
              letterSpacing: "-0.03em",
            }}
          >
            ReadGo
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 3,
              fontSize: { xs: "1.3rem", sm: "1.5rem", md: "2rem" },
              color: "rgba(255,255,255,0.8)",
              animation: `${fadeInUp} 1s ease-out 0.2s both`,
              letterSpacing: "0.02em",
            }}
          >
            Where Stories Meet Innovation
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: { xs: 4, md: 6 },
              color: "#ffffff",
              maxWidth: "600px",
              mx: "auto",
              fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
              lineHeight: 1.8,
              fontWeight: 400,
              animation: `${fadeInUp} 1s ease-out 0.4s both`,
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              opacity: 0.9,
            }}
          >
            Discover captivating stories, cutting-edge insights, and inspiring
            content from passionate writers worldwide
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 2, md: 3 },
              justifyContent: "center",
              flexWrap: "wrap",
              mb: { xs: 6, md: 8 },
              animation: `${fadeInUp} 1s ease-out 0.6s both`,
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => router.push("/blogs")}
              sx={{
                bgcolor: "primary.main",
                color: "white",
                px: { xs: 3, md: 4 },
                py: { xs: 1.5, md: 2 },
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: 600,
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "primary.dark",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Start Reading
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => router.push("/info")}
              sx={{
                borderColor: "rgba(255,255,255,0.5)",
                color: "white",
                borderWidth: "2px",
                px: { xs: 3, md: 4 },
                py: { xs: 1.5, md: 2 },
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: 500,
                borderRadius: 2,
                textTransform: "none",
                backdropFilter: "blur(10px)",
                background: "rgba(255,255,255,0.05)",
                "&:hover": {
                  borderColor: "white",
                  background: "rgba(255,255,255,0.1)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Learn More
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 4, md: 6 },
              justifyContent: "center",
              flexWrap: "wrap",
              animation: `${fadeInUp} 1s ease-out 0.8s both`,
            }}
          >
            {[
              { number: "1000+", label: "Articles" },
              { number: "50K+", label: "Readers" },
              { number: "100+", label: "Authors" },
            ].map((stat, index) => (
              <Box key={index} sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: "white",
                    fontSize: { xs: "2rem", md: "2.8rem" },
                    lineHeight: 1,
                    mb: 0.5,
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.7,
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
