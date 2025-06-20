/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-01-27
 *
 * Theme configuration for the Little Daisy Memorial Scholarship website
 * @module theme
 */

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create base theme
const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#9e1f63",
      light: "#b54d7f",
      dark: "#6e1545",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f8e1e8",
      light: "#ffffff",
      dark: "#c5afb6",
      contrastText: "#9e1f63",
    },
    background: {
      default: "#ffffff",
      paper: "#fafafa",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
      color: "#9e1f63",
    },
    h2: {
      fontWeight: 500,
      color: "#9e1f63",
    },
    h3: {
      fontWeight: 500,
      color: "#9e1f63",
    },
    h4: {
      fontWeight: 500,
      color: "#9e1f63",
    },
    h5: {
      fontWeight: 500,
      color: "#9e1f63",
    },
    h6: {
      fontWeight: 500,
      color: "#9e1f63",
    },
    body1: {
      lineHeight: 1.6,
    },
    body2: {
      lineHeight: 1.5,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
          padding: "8px 16px",
          "@media (max-width: 600px)": {
            padding: "6px 12px",
            fontSize: "0.875rem",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 16,
          paddingRight: 16,
          "@media (max-width: 600px)": {
            paddingLeft: 12,
            paddingRight: 12,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          wordBreak: "break-word",
        },
      },
    },
  },
});

// Apply responsive font sizes
const theme = responsiveFontSizes(baseTheme, {
  breakpoints: ["xs", "sm", "md", "lg", "xl"],
  factor: 2,
});

export default theme;
