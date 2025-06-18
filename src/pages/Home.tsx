/**
 * © 2024 Little Shilling, Inc.
 * Shon Little
 * Created: 2024-03-19
 */

import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

/**
 * Home page component displaying the main scholarship information
 * @returns {JSX.Element} The rendered home page
 */
const Home = () => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  return (
    <Box>
      <Typography variant="h1" component="h1" gutterBottom align="center">
        Little Daisy Memorial Scholarship
      </Typography>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            About the Scholarship
          </Typography>
          <Typography paragraph>
            The Little Daisy Memorial Scholarship is an annual scholarship award
            underwriting the class tuition of students who display a strong work
            ethic, positive attitude, and love of the arts.
          </Typography>
          <Typography paragraph>
            Teachers nominate students based on work ethic, talent, potential,
            attendance, and character. Nominated students are interviewed by The
            Little Daisy Fund Board of Directors' Scholarship Committee.
            Students from several different age groupings receive a scholarship
            for the {currentYear}-{nextYear} year.
          </Typography>
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/donate"
              size="large"
            >
              Donate Now
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h3" gutterBottom>
                {currentYear} Recipients
              </Typography>
              <Typography>
                Ashley Agepogu, Hailey Cha, Violet Hedgecock, Lucy Valenzuela
                Richarte, and Zoe Weitz.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h3" gutterBottom>
                {currentYear} Nominees
              </Typography>
              <Typography>
                Victoria Arreola, Sophia Axarlian, Ani Berjikly, Giuliana
                Collins, Colette DeNauw, Juliette Freeman, Elaan Gill, Amelia
                Go, Maia Gutierrez, Leia Lolong Gurvitz, Delilah Mendes,
                Dayvanie Mercado, Sophia Meza, Angelique Moral, Zoë Morgan,
                Violet Morrissey, Sana Munjal, Callista Narvaez, Miranda
                Paniagua, Breanna Paredes, Sophia Peabody, Juliet Price, Ruby
                Ramos, Katelyn Rumm, Marissa Valencia.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
