/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-01-27
 */

import { ReactNode } from "react";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import Navigation from "./Navigation";
import Logo from "./Logo";

interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout component that provides the common structure for all pages
 * @param {LayoutProps} props - The component props
 * @returns {JSX.Element} The rendered layout
 */
const Layout = ({ children }: LayoutProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="static" color="primary" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              py: isMobile ? 0.5 : 1,
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: isMobile ? 1 : 2,
                flexWrap: "wrap",
              }}
            >
              <RouterLink to="/" style={{ textDecoration: "none" }}>
                <Logo />
              </RouterLink>
              <Typography
                variant={isMobile ? "h6" : "h4"}
                component={RouterLink}
                to="/"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: 500,
                  textAlign: isMobile ? "center" : "left",
                  lineHeight: 1.2,
                }}
              >
                {isMobile
                  ? "Little Daisy Memorial Scholarship"
                  : "Little Daisy Memorial Scholarship"}
              </Typography>
            </Box>
            <Navigation />
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1, py: { xs: 2, sm: 3, md: 4 } }}>
        <Container maxWidth="lg">{children}</Container>
      </Box>

      <Box
        component="footer"
        sx={{
          py: { xs: 2, sm: 3 },
          px: { xs: 1, sm: 2 },
          mt: "auto",
          backgroundColor: (theme) => theme.palette.grey[100],
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
          >
            © {new Date().getFullYear()} Little Daisy Fund, Inc.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
