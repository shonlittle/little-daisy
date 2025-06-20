/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-01-27
 */

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./theme";
import Layout from "./components/Layout";
import AppRoutes from "./routes";

/**
 * Main application component that provides theme and routing
 * @returns {JSX.Element} The rendered application
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
