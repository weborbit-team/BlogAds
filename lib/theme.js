'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4d1a75',
      light: '#663399',
      dark: '#3d1466',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#5a189a',
      light: '#7b2cbf',
      dark: '#44127a',
      contrastText: '#ffffff',
    },
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626',
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
    },
    info: {
      main: '#3b82f6',
      light: '#93c5fd',
      dark: '#1d4ed8',
    },
    background: {
      default: '#f5f3ff',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a0d4d',
      secondary: '#4d1a75',
    },
    grey: {
      50: '#faf8ff',
      100: '#f3f0ff',
      200: '#e9e5ff',
      300: '#d1c7ff',
      400: '#b19aff',
      500: '#9966cc',
      600: '#663399',
      700: '#4d1a75',
      800: '#3d1a78',
      900: '#2d1b69',
    },
  },
  typography: {
    // Medium.com font stack
    fontFamily: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: 16,
    h1: {
      fontFamily: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '2.75rem',
      fontWeight: 700,
      lineHeight: 1.15,
      color: '#242424',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#242424',
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#242424',
    },
    h4: {
      fontFamily: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#242424',
    },
    h5: {
      fontFamily: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
      color: '#242424',
    },
    h6: {
      fontFamily: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.5,
      color: '#242424',
    },
    // Medium.com serif for body content
    body1: {
      fontFamily: 'charter, Georgia, Cambria, "Times New Roman", Times, serif',
      fontSize: '1.25rem', // 20px - Medium's article font size
      lineHeight: 1.58, // Medium's line height for readability
      color: '#242424',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'charter, Georgia, Cambria, "Times New Roman", Times, serif',
      fontSize: '1.125rem', // 18px
      lineHeight: 1.6,
      color: '#757575',
      fontWeight: 400,
    },
    caption: {
      fontFamily: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.4,
      color: '#757575',
      fontWeight: 400,
    },
    subtitle1: {
      fontFamily: 'charter, Georgia, Cambria, "Times New Roman", Times, serif',
      fontSize: '1.375rem', // 22px - for article subtitles
      lineHeight: 1.5,
      color: '#757575',
      fontWeight: 400,
    },
    subtitle2: {
      fontFamily: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#757575',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          // borderRadius: 12,
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          border: 'none',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          borderRadius: 0,
          color: '#1f2937',
        },
      },
    },
  },
});

export default theme;