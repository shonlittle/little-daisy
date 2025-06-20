/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-01-27
 */

// Add third-party dependencies.
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Add local dependencies.
import PageContainer from "../components/PageContainer";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(2),
  },
}));

/**
 * Contact page component that displays a contact form using Formspree.io
 * @example
 * <Contact />
 * @returns {JSX.Element} Contact page with form
 */
const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <PageContainer>
      <Container maxWidth="md">
        <Typography
          variant={isMobile ? "h3" : "h2"}
          component="h1"
          gutterBottom
          align="center"
          color="primary"
          sx={{
            fontSize: { xs: "1.75rem", sm: "2.125rem", md: "3.75rem" },
            lineHeight: 1.2,
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          gutterBottom
          align="center"
          color="text.secondary"
          sx={{
            mb: { xs: 2, sm: 3, md: 4 },
            fontSize: { xs: "1rem", sm: "1.125rem", md: "1.5rem" },
            lineHeight: 1.4,
          }}
        >
          Have questions about the Little Daisy Memorial Scholarship? We'd love
          to hear from you.
        </Typography>

        <StyledPaper elevation={3}>
          <StyledForm action="https://formspree.io/f/xldnbavj" method="POST">
            <TextField
              required
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              size={isMobile ? "small" : "medium"}
            />
            <TextField
              required
              fullWidth
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              size={isMobile ? "small" : "medium"}
            />
            <TextField
              required
              fullWidth
              label="Subject"
              name="subject"
              variant="outlined"
              size={isMobile ? "small" : "medium"}
            />
            <TextField
              required
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={isMobile ? 3 : 4}
              variant="outlined"
              size={isMobile ? "small" : "medium"}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size={isMobile ? "medium" : "large"}
              sx={{
                mt: { xs: 1, sm: 2 },
                py: { xs: 1, sm: 1.5 },
              }}
            >
              Send Message
            </Button>
          </StyledForm>
        </StyledPaper>
      </Container>
    </PageContainer>
  );
};

export default Contact;
