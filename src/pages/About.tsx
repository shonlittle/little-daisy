/**
 * © 2024 Little Shilling, Inc.
 * Shon Little
 * Created: 2024-03-19
 */

import { Box, Typography, Card, CardContent, Link } from "@mui/material";

/**
 * About page component sharing Daisy's story
 * @returns {JSX.Element} The rendered about page
 */
const About = () => {
  return (
    <Box>
      <Typography variant="h1" component="h1" gutterBottom align="center">
        A Note From Daisy's Parents
      </Typography>

      <Card>
        <CardContent>
          <Typography paragraph fontWeight="bold">
            On May 7, 2012 our sweet daughter, Daisy Christine Little, was
            stillborn. Needless to say, our world was shattered.
          </Typography>{" "}
          <Typography paragraph>
            We were only able to hold her for a short time, but we wanted to
            find a way for her memory to live on through the dreams of others.
            Just a few days later, we decided to create a scholarship in her
            name—so we could witness students grow as dancers who embody the
            values, character, and love of dance upon which{" "}
            <Link
              href="http://relevestudios.com"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              Relevé Studios
            </Link>{" "}
            was built.
          </Typography>
          <Typography paragraph>
            We used to leave our doctor visits laughing and giggling after every
            ultrasound. (We had one at nearly every appointment except one, and
            we’re so incredibly grateful for those memories!) Our Daisy would
            not hold still—every doctor and nurse commented on it. During her
            second-trimester screening, Jodi lay on the table for almost an hour
            and a half while they tried to capture all of Daisy’s vital organs.
            We saw pirouettes, somersaults, and flips. We just knew we had a
            dancer in the making—and everyone who saw her agreed.
          </Typography>
          <Typography paragraph>
            We believe we’ll dance with Daisy in Heaven someday. But until that
            day comes, we find peace in helping students dance here on earth.
          </Typography>
          <Typography paragraph fontWeight="bold">
            Please consider donating to the Little Daisy Fund.
          </Typography>
          <Typography paragraph>
            Thank you again for your prayers, your love, and your comforting
            words. We are so deeply blessed by your friendships.
          </Typography>
          <Typography variant="h6" align="right" sx={{ mt: 4 }}>
            Jodi & Shon
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default About;
