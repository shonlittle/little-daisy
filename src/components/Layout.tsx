/**
 * © 2024 Little Shilling, Inc.
 * Shon Little
 * Created: 2024-03-19
 */

import { ReactNode } from "react";
import { Box, Container, AppBar, Toolbar, Typography } from "@mui/material";
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
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="static" color="primary" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <RouterLink to="/" style={{ textDecoration: "none" }}>
                <Logo />
              </RouterLink>
              <Typography
                variant="h4"
                component={RouterLink}
                to="/"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: 500,
                }}
              >
                Little Daisy Memorial Scholarship
              </Typography>
            </Box>
            <Navigation />
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Container maxWidth="lg">{children}</Container>
      </Box>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) => theme.palette.grey[100],
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Little Daisy Fund, Inc.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
