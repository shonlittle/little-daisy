/**
 * © 2024 Little Shilling, Inc.
 * Shon Little
 * Created: 2024-03-19
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
export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 8,
        px: 2,
        backgroundColor: "background.default",
      }}
    >
      {children}
    </Box>
  );
};
