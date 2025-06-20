/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-01-27
 */

import {
  Box,
  Typography,
  Container,
  Paper,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";

/**
 * @component About
 * @description The About page component that tells Daisy's story and explains the scholarship process
 * @example
 * <About />
 * @returns {JSX.Element} The About page component
 */
const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          component="h1"
          gutterBottom
          align="center"
          sx={{
            fontSize: { xs: "1.75rem", sm: "2.125rem", md: "3rem" },
            lineHeight: 1.2,
          }}
        >
          About the Scholarship
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, sm: 3 },
            mb: { xs: 2, sm: 3, md: 4 },
            backgroundColor: "transparent",
          }}
        >
          <Typography
            variant={isMobile ? "h6" : "h5"}
            gutterBottom
            sx={{ fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.5rem" } }}
          >
            Daisy's Story
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem" },
              lineHeight: 1.6,
            }}
          >
            On May 7, 2012, our sweet daughter, Daisy Christine Little, was
            stillborn. Needless to say, our world was shattered.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem" },
              lineHeight: 1.6,
            }}
          >
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
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem" },
              lineHeight: 1.6,
            }}
          >
            We used to leave our doctor visits laughing and giggling after every
            ultrasound. (We had one at nearly every appointment except one, and
            we're so incredibly grateful for those memories!) Our Daisy would
            not hold still—every doctor and nurse commented on it. During her
            second-trimester screening, Jodi lay on the table for almost an hour
            and a half while they tried to capture all of Daisy's vital organs.
            We saw pirouettes, somersaults, and flips. We just knew we had a
            dancer in the making—and everyone who saw her agreed.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem" },
              lineHeight: 1.6,
            }}
          >
            We believe we'll dance with Daisy in Heaven someday. But until that
            day comes, we find peace in helping students dance here on earth.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            fontWeight="bold"
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem" },
              lineHeight: 1.6,
            }}
          >
            Please consider donating to the Little Daisy Fund.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem" },
              lineHeight: 1.6,
            }}
          >
            Thank you again for your prayers, your love, and your comforting
            words. We are so deeply blessed by your friendships.
          </Typography>
          <Typography
            variant={isMobile ? "subtitle1" : "h6"}
            align="right"
            sx={{
              mt: { xs: 2, sm: 3, md: 4 },
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            Jodi & Shon
          </Typography>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, sm: 3 },
            mb: { xs: 2, sm: 3, md: 4 },
            backgroundColor: "transparent",
          }}
        >
          <Typography
            variant={isMobile ? "h6" : "h5"}
            gutterBottom
            sx={{ fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.5rem" } }}
          >
            The Scholarship Process
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem" },
              lineHeight: 1.6,
            }}
          >
            The Little Daisy Memorial Scholarship is awarded annually to
            students who demonstrate exceptional character, passion, and
            dedication to dance. Here's how the process works:
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ pl: { xs: 1, sm: 2 } }}
          >
            <ol>
              <li>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    lineHeight: 1.6,
                  }}
                >
                  <strong>Nomination:</strong> Teachers nominate students based
                  on their work ethic, talent, potential, attendance, and
                  character. These nominations recognize students who truly
                  embody the spirit of Relevé—rising above challenges with grace
                  and determination.
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    lineHeight: 1.6,
                  }}
                >
                  <strong>Interview:</strong> Nominated students are invited to
                  interview with The Little Daisy Fund Board of Directors'
                  Scholarship Committee. This is an opportunity for students to
                  share their passion for dance and their personal journey.
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    lineHeight: 1.6,
                  }}
                >
                  <strong>Selection:</strong> The Scholarship Committee
                  carefully reviews each nomination and interview to select
                  recipients who best represent the values and spirit of the
                  scholarship. Multiple scholarships are awarded across
                  different age groups.
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    lineHeight: 1.6,
                  }}
                >
                  <strong>Award:</strong> Selected recipients receive a
                  scholarship that covers their class tuition for the upcoming
                  year, helping them continue their dance education and pursue
                  their dreams.
                </Typography>
              </li>
            </ol>
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem" },
              lineHeight: 1.6,
            }}
          >
            The scholarship not only provides financial support but also
            recognizes and celebrates the dedication, passion, and character of
            young dancers who inspire others through their love of dance.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default About;
