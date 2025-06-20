/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-01-27
 */

// Add third-party dependencies.
import { useState } from "react";
import {
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";

/**
 * Navigation component that provides responsive navigation with mobile hamburger menu
 * @example
 * <Navigation />
 * @returns {JSX.Element} Responsive navigation links
 */
const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigationItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Donate", path: "/donate" },
    { text: "Contact", path: "/contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = () => {
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box onClick={handleNavClick} sx={{ textAlign: "center" }}>
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              sx={{ textAlign: "center" }}
            >
              <ListItemText
                primary={item.text}
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
        {navigationItems.map((item) => (
          <Button
            key={item.text}
            color="inherit"
            component={RouterLink}
            to={item.path}
            sx={{
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            {item.text}
          </Button>
        ))}
      </Box>

      {/* Mobile Navigation */}
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;
