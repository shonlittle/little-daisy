/**
 * © 2024 Little Shilling, Inc.
 * Shon Little
 * Created: 2024-03-19
 */

import { Box, Typography, Container, Paper, Link } from "@mui/material";

/**
 * @component About
 * @description The About page component that tells Daisy's story and explains the scholarship process
 * @example
 * <About />
 * @returns {JSX.Element} The About page component
 */
const About = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          About the Scholarship
        </Typography>

        <Paper
          elevation={0}
          sx={{ p: 3, mb: 4, backgroundColor: "transparent" }}
        >
          <Typography variant="h5" gutterBottom>
            Daisy's Story
          </Typography>
          <Typography variant="body1" paragraph>
            On May 7, 2012, our sweet daughter, Daisy Christine Little, was
            stillborn. Needless to say, our world was shattered.
          </Typography>
          <Typography variant="body1" paragraph>
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
          <Typography variant="body1" paragraph>
            We used to leave our doctor visits laughing and giggling after every
            ultrasound. (We had one at nearly every appointment except one, and
            we're so incredibly grateful for those memories!) Our Daisy would
            not hold still—every doctor and nurse commented on it. During her
            second-trimester screening, Jodi lay on the table for almost an hour
            and a half while they tried to capture all of Daisy's vital organs.
            We saw pirouettes, somersaults, and flips. We just knew we had a
            dancer in the making—and everyone who saw her agreed.
          </Typography>
          <Typography variant="body1" paragraph>
            We believe we'll dance with Daisy in Heaven someday. But until that
            day comes, we find peace in helping students dance here on earth.
          </Typography>
          <Typography variant="body1" paragraph fontWeight="bold">
            Please consider donating to the Little Daisy Fund.
          </Typography>
          <Typography variant="body1" paragraph>
            Thank you again for your prayers, your love, and your comforting
            words. We are so deeply blessed by your friendships.
          </Typography>
          <Typography variant="h6" align="right" sx={{ mt: 4 }}>
            Jodi & Shon
          </Typography>
        </Paper>

        <Paper
          elevation={0}
          sx={{ p: 3, mb: 4, backgroundColor: "transparent" }}
        >
          <Typography variant="h5" gutterBottom>
            The Scholarship Process
          </Typography>
          <Typography variant="body1" paragraph>
            The Little Daisy Memorial Scholarship is awarded annually to
            students who demonstrate exceptional character, passion, and
            dedication to dance. Here's how the process works:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
            <ol>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Nomination:</strong> Teachers nominate students based
                  on their work ethic, talent, potential, attendance, and
                  character. These nominations recognize students who truly
                  embody the spirit of Relevé—rising above challenges with grace
                  and determination.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Interview:</strong> Nominated students are invited to
                  interview with The Little Daisy Fund Board of Directors'
                  Scholarship Committee. This is an opportunity for students to
                  share their passion for dance and their personal journey.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Selection:</strong> The Scholarship Committee
                  carefully reviews each nomination and interview to select
                  recipients who best represent the values and spirit of the
                  scholarship. Multiple scholarships are awarded across
                  different age groups.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Award:</strong> Selected recipients receive a
                  scholarship that covers their class tuition for the upcoming
                  year, helping them continue their dance education and pursue
                  their dreams.
                </Typography>
              </li>
            </ol>
          </Typography>
          <Typography variant="body1" paragraph>
            The scholarship not only provides financial support but also
            recognizes and celebrates the dedication, passion, and character of
            young dancers who, like Daisy, inspire others through their love of
            dance.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default About;
