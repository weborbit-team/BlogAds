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
import { Home, Article, Info, Menu, Close, AccountCircle } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Blogs", href: "/blogs", icon: Article },
  { label: "Info", href: "/info", icon: Info },
];

const LogoLink = () => (
  <Box
    component={Link}
    href="/"
    sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
  >
    <Logo width={100} height={33} />
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
                  <LogoLink />
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
                <LogoLink />
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
        sx={{
          '& .MuiDrawer-paper': {
            boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
            background: 'linear-gradient(180deg, #fafafa 0%, #ffffff 100%)'
          }
        }}
      >
        <Box sx={{ width: 300 }}>
          <Box sx={{ p: 3, borderBottom: '1px solid #e8e8e8', bgcolor: 'white' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 2,
                  bgcolor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" sx={{ color: "white", fontWeight: 700 }}>
                  R
                </Typography>
              </Box>
              <IconButton 
                onClick={() => setMobileOpen(false)}
                sx={{ 
                  bgcolor: 'grey.100',
                  '&:hover': { bgcolor: 'grey.200' }
                }}
              >
                <Close />
              </IconButton>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, bgcolor: 'primary.50', borderRadius: 2 }}>
              <Avatar sx={{ width: 40, height: 40, bgcolor: 'primary.main' }}>
                <AccountCircle />
              </Avatar>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  Guest User
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Welcome to ReadGo
                </Typography>
              </Box>
            </Box>
          </Box>
          
          <Box sx={{ p: 2 }}>
            <Typography variant="overline" sx={{ color: 'text.secondary', px: 2, mb: 1, display: 'block', fontSize: '0.75rem' }}>
              Menu
            </Typography>
            <List sx={{ p: 0 }}>
              {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
                const isActive = (href === "/blogs" && pathname.startsWith("/blogs")) ||
                                (href === "/info" && pathname.startsWith("/info")) ||
                                pathname === href;
                return (
                  <ListItem
                    key={label}
                    component={Link}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    sx={{
                      mx: 1,
                      borderRadius: 2,
                      mb: 1,
                      py: 1.5,
                      backgroundColor: isActive ? 'primary.main' : 'transparent',
                      boxShadow: isActive ? '0 2px 8px rgba(25,118,210,0.2)' : 'none',
                      transition: 'all 0.2s ease',
                      '&:hover': { 
                        backgroundColor: isActive ? 'primary.main' : 'grey.50',
                        transform: 'translateX(2px)'
                      }
                    }}
                  >
                    <ListItemIcon sx={{ 
                      color: isActive ? 'white' : 'primary.main',
                      minWidth: 40
                    }}>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText 
                      primary={label}
                      sx={{
                        '& .MuiTypography-root': {
                          color: isActive ? 'white' : 'text.primary',
                          fontWeight: isActive ? 600 : 500
                        }
                      }}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
