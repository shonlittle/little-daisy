/**
 * © 2024 Little Shilling, Inc.
 * Shon Little
 * Created: 2024-03-19
 */

import { Box, Typography, Card, CardContent, Grid, Paper } from "@mui/material";

/**
 * Donate page component with donation options
 * @returns {JSX.Element} The rendered donate page
 */
const Donate = () => {
  return (
    <Box>
      <Typography variant="h1" component="h1" gutterBottom align="center">
        Support the Scholarship
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h2" gutterBottom>
                Donate Online
              </Typography>
              <Typography paragraph>
                Make a secure donation through PayPal. All contributions are
                tax-deductible as Little Daisy Fund, Inc. is recognized by the
                IRS as a 501(c)(3) corporation.
              </Typography>
              <Box sx={{ mt: 3, textAlign: "center" }}>
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
                    style={{ border: "none" }}
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
          <Card>
            <CardContent>
              <Typography variant="h2" gutterBottom>
                Donate by Mail
              </Typography>
              <Typography paragraph>
                Checks may be made payable to Little Daisy Fund and sent to:
              </Typography>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Little Daisy Fund
                </Typography>
                <Typography>11052 Baird Ave</Typography>
                <Typography>Porter Ranch, CA 91326</Typography>
              </Paper>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Donate;
