"use client";
import { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Tabs,
  Tab,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Home, Info, Menu, Close, AccountCircle } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Blogs", href: "/blogs", icon: Info },
  { label: "Info", href: "/info", icon: Info },
];

const Logo = () => (
  <Box
    component={Link}
    href="/"
    sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
  >
    <Box
      sx={{
        width: 36,
        height: 36,
        borderRadius: 2,
        bgcolor: "primary.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mr: 1,
      }}
    >
      <Typography variant="h6" sx={{ color: "white", fontWeight: 700 }}>
        B
      </Typography>
    </Box>
    <Typography variant="h6" sx={{ fontWeight: 700, color: "primary.main" }}>
      BlogAds
    </Typography>
  </Box>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const currentTabIndex = NAV_ITEMS.findIndex((item) => {
    if (item.href === "/blogs" && pathname.startsWith("/blogs")) {
      return true;
    }
    if (item.href === "/info" && pathname.startsWith("/info")) {
      return true;
    }
    return item.href === pathname;
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          borderBottom: "1px solid #e0e0e0",
          zIndex: 1100,
        }}
      >
        <Container sx={{ position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: 1.5,
              minHeight: 64,
            }}
          >
            {/* Desktop Layout */}
            {!isMobile ? (
              <>
                {/* Left: Tabs */}
                <Box sx={{ flex: 1 }}>
                  <Tabs value={currentTabIndex >= 0 ? currentTabIndex : false}>
                    {NAV_ITEMS.map(({ label, href }, index) => (
                      <Tab
                        key={label}
                        label={label}
                        component={Link}
                        href={href}
                        sx={{ textTransform: "none", fontWeight: 500 }}
                      />
                    ))}
                  </Tabs>
                </Box>

                {/* Center: Logo */}
                <Box
                  sx={{ flex: 1, display: "flex", justifyContent: "center" }}
                >
                  <Logo />
                </Box>

                {/* Right: Account */}
                <Box
                  sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
                >
                  <IconButton>
                    <Avatar
                      sx={{ width: 32, height: 32, bgcolor: "primary.main" }}
                    >
                      <AccountCircle sx={{ fontSize: 20 }} />
                    </Avatar>
                  </IconButton>
                </Box>
              </>
            ) : (
              /* Mobile Layout */
              <>
                <Logo />
                <IconButton onClick={() => setMobileOpen(true)}>
                  <Menu />
                </IconButton>
              </>
            )}
          </Box>
        </Container>
      </Box>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 280, pt: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2,
              pb: 2,
            }}
          >
            <Logo />
            <IconButton onClick={() => setMobileOpen(false)}>
              <Close />
            </IconButton>
          </Box>
          <List>
            {NAV_ITEMS.map(({ label, href, icon: Icon }) => (
              <ListItem
                key={label}
                component={Link}
                href={href}
                onClick={() => setMobileOpen(false)}
                sx={{
                  backgroundColor:
                    (href === "/blogs" && pathname.startsWith("/blogs")) ||
                    (href === "/info" && pathname.startsWith("/info")) ||
                    pathname === href
                      ? "primary.light"
                      : "transparent",
                  mx: 1,
                  borderRadius: 1,
                  mb: 1,
                }}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
