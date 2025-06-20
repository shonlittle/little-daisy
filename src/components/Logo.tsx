/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-01-27
 */

// Add third-party dependencies.
import { Box } from "@mui/material";

/**
 * Logo component that displays the Little Daisy Memorial Scholarship logo
 * @example
 * <Logo />
 * @returns {JSX.Element} Logo image
 */
const Logo = () => {
  return (
    <Box
      component="img"
      src="/images/logo.png"
      alt="Little Daisy Memorial Scholarship Logo"
      sx={{
        height: { xs: 40, sm: 50, md: 60 },
        width: "auto",
        display: "block",
        maxWidth: "100%",
      }}
    />
  );
};

export default Logo;
