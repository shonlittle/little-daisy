/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-01-27
 */

// Add third-party dependencies.
import { Box } from "@mui/material";
import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

/**
 * PageContainer component that provides consistent layout and spacing for all pages
 * @example
 * <PageContainer>
 *   <Typography>Page content</Typography>
 * </PageContainer>
 * @returns {JSX.Element} Container with consistent page layout
 */
const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: { xs: 2, sm: 4, md: 8 },
        px: { xs: 1, sm: 2 },
        backgroundColor: "background.default",
      }}
    >
      {children}
    </Box>
  );
};

export default PageContainer;
