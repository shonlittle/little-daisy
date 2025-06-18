/**
 * Theme configuration for the Little Daisy Memorial Scholarship website
 * @module theme
 */

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
      fontSize: "2.5rem",
      fontWeight: 500,
      color: "#9e1f63",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
      color: "#9e1f63",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
      color: "#9e1f63",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
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
  },
});

export default theme;
