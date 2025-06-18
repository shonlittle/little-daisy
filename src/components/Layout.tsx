/**
 * © 2024 Little Shilling, Inc.
 * Shon Little
 * Created: 2024-03-19
 */

import { ReactNode } from "react";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

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
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "white",
              fontWeight: 500,
            }}
          >
            Little Daisy Memorial Scholarship
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            About
          </Button>
          <Button color="inherit" component={RouterLink} to="/donate">
            Donate
          </Button>
        </Toolbar>
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
