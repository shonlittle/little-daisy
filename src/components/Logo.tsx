/**
 * © 2024 Little Shilling, Inc.
 * Shon Little
 * Created: 2024-03-19
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
        height: 60,
        width: "auto",
        display: "block",
      }}
    />
  );
};

export default Logo;
