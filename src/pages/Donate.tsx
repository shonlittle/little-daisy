/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-01-27
 */

import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Paper,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";

/**
 * Donate page component with donation options
 * @returns {JSX.Element} The rendered donate page
 */
const Donate = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant={isMobile ? "h3" : "h1"}
          component="h1"
          gutterBottom
          align="center"
          sx={{
            fontSize: { xs: "1.75rem", sm: "2.125rem", md: "3.75rem" },
            lineHeight: 1.2,
            mb: { xs: 2, sm: 3, md: 4 },
          }}
        >
          Support the Scholarship
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%" }}>
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Typography
                  variant={isMobile ? "h5" : "h2"}
                  gutterBottom
                  sx={{
                    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "3rem" },
                    lineHeight: 1.2,
                  }}
                >
                  Donate Online
                </Typography>
                <Typography
                  paragraph
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    lineHeight: 1.6,
                  }}
                >
                  Make a secure donation through PayPal. All contributions are
                  tax-deductible as Little Daisy Fund, Inc. is recognized by the
                  IRS as a 501(c)(3) corporation.
                </Typography>
                <Box sx={{ mt: { xs: 2, sm: 3 }, textAlign: "center" }}>
                  <form
                    action="https://www.paypal.com/cgi-bin/webscr"
                    method="post"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input
                      type="hidden"
                      name="hosted_button_id"
                      value="8LBGNN2CFPMDE"
                    />
                    <input
                      type="image"
                      src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                      name="submit"
                      alt="PayPal - The safer, easier way to pay online!"
                      style={{
                        border: "none",
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <img
                      alt=""
                      src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                      width="1"
                      height="1"
                      style={{ border: "none" }}
                    />
                  </form>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%" }}>
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Typography
                  variant={isMobile ? "h5" : "h2"}
                  gutterBottom
                  sx={{
                    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "3rem" },
                    lineHeight: 1.2,
                  }}
                >
                  Donate by Mail
                </Typography>
                <Typography
                  paragraph
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    lineHeight: 1.6,
                  }}
                >
                  Checks may be made payable to Little Daisy Fund and sent to:
                </Typography>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2, sm: 3 },
                    bgcolor: "background.paper",
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant={isMobile ? "h6" : "h6"}
                    gutterBottom
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.125rem" },
                      fontWeight: 600,
                    }}
                  >
                    Little Daisy Fund
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                      lineHeight: 1.5,
                    }}
                  >
                    11052 Baird Ave
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                      lineHeight: 1.5,
                    }}
                  >
                    Porter Ranch, CA 91326
                  </Typography>
                </Paper>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Donate;
