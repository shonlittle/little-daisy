/**
 * © 2024 Little Shilling, Inc.
 * Shon Little
 * Created: 2024-03-19
 */

// Add third-party dependencies.
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Add local dependencies.
import { PageContainer } from "../components/PageContainer";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  backgroundColor: "rgba(255, 255, 255, 0.9)",
}));

const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

/**
 * Contact page component that displays a contact form using Formspree.io
 * @example
 * <Contact />
 * @returns {JSX.Element} Contact page with form
 */
const Contact = () => {
  return (
    <PageContainer>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          align="center"
          color="primary"
        >
          Contact Us
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          color="text.secondary"
          sx={{ mb: 4 }}
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
            />
            <TextField
              required
              fullWidth
              label="Email"
              name="email"
              type="email"
              variant="outlined"
            />
            <TextField
              required
              fullWidth
              label="Subject"
              name="subject"
              variant="outlined"
            />
            <TextField
              required
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
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
