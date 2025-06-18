/**
 * © 2024 Little Shilling, Inc.
 * Shon Little
 * Created: 2024-03-19
 */

// Add third-party dependencies.
import { Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

/**
 * Navigation component that provides the main navigation links
 * @example
 * <Navigation />
 * @returns {JSX.Element} Navigation links
 */
const Navigation = () => {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Button color="inherit" component={RouterLink} to="/">
        Home
      </Button>
      <Button color="inherit" component={RouterLink} to="/about">
        About
      </Button>
      <Button color="inherit" component={RouterLink} to="/donate">
        Donate
      </Button>
      <Button color="inherit" component={RouterLink} to="/contact">
        Contact
      </Button>
    </Box>
  );
};

export default Navigation;
