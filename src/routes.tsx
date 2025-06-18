/**
 * © 2024 Little Shilling, Inc.
 * Shon Little
 * Created: 2024-03-19
 */

import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Donate = lazy(() => import("./pages/Donate"));
const Contact = lazy(() => import("./pages/Contact"));

/**
 * Loading component for lazy-loaded routes
 * @returns {JSX.Element} The loading spinner
 */
const LoadingFallback = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "400px",
    }}
  >
    <CircularProgress color="primary" />
  </Box>
);

/**
 * Application routes configuration
 * @returns {JSX.Element} The rendered routes
 */
const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
