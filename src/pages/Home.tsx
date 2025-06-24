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
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import logo from "../assets/images/logo.gif";

interface YearData {
  year: number;
  recipients: string[];
  nominees: string[];
}

const scholarshipData: YearData[] = [
  {
    year: 2025,
    recipients: [
      "Elisandra von Doymi",
      "Jordyn Jiries",
      "Jacob Klesert",
      "Syra Merchant",
      "Zoë Morgan",
      "Sophia Peabody",
      "Katelyn Rumm",
      "Fiona Yick",
    ],
    nominees: [
      "Bella Apaez",
      "Yvanna Apaez",
      "Sophia Axarlian",
      "Giuliana Collins",
      "Jaylah Cortez",
      "Azad Ebert",
      "Natalia Edwards",
      "Juliette Freeman",
      "Coral Henry",
      "Jordyn Jiries",
      "Jacob Klesert",
      "Ellen Kwon",
      "Helen Lucero",
      "Abigail Maman",
      "Dayvanie Mercado",
      "Syra Merchant",
      "Sophia Meza",
      "Hannah Miers",
      "Amalia Mkrtchyan",
      "Victoria Morales",
      "Zoë Morgan",
      "Mia Navarro",
      "Rose Neiyer",
      "Madeline Oviedo",
      "Sophia Peabody",
      "Ruby Ramos",
      "Jacob Rosario",
      "Jeilyn Rosario",
      "Katelyn Rumm",
      "Jayla Smythe",
      "Avril Tortola",
      "Kaitlyn Valencia",
      "Elisandra von Doymi",
      "Isabella Walusimbi",
      "Benjamin Wilkerson",
      "Fiona Yick",
    ],
  },
  {
    year: 2024,
    recipients: [
      "Ashley Agepogu",
      "Hailey Cha",
      "Violet Hedgecock",
      "Lucy Valenzuela Richarte",
      "Zoe Weitz",
    ],
    nominees: [
      "Victoria Arreola",
      "Sophia Axarlian",
      "Ani Berjikly",
      "Giuliana Collins",
      "Colette DeNauw",
      "Juliette Freeman",
      "Elaan Gill",
      "Amelia Go",
      "Maia Gutierrez",
      "Leia Lolong Gurvitz",
      "Delilah Mendes",
      "Dayvanie Mercado",
      "Sophia Meza",
      "Angelique Moral",
      "Zoë Morgan",
      "Violet Morrissey",
      "Sana Munjal",
      "Callista Narvaez",
      "Miranda Paniagua",
      "Breanna Paredes",
      "Sophia Peabody",
      "Juliet Price",
      "Ruby Ramos",
      "Katelyn Rumm",
      "Marissa Valencia",
    ],
  },
  {
    year: 2023,
    recipients: [
      "Harper Bradley",
      "Melanie Caoyonan",
      "Desi Diaz",
      "Sierra Estrada",
      "Abigail Yanez",
    ],
    nominees: [
      "Ashley Agepugo",
      "Yareli Aldana",
      "Alexandra Baron",
      "Taylor Block",
      "Luna Bowan",
      "Harper Bradley",
      "Madelyn Bzdak",
      "Melanie Caoyonan",
      "Jordan Chien",
      "Desi Diaz",
      "Sylvia Donahue",
      "Sierra Estrada",
      "Callie Haban",
      "Kalea Hennessy",
      "Coral Henry",
      "Neil Kamali",
      "Aliya Loiseau",
      "Elly Martinez",
      "Daniela Martirosyan",
      "Zoe Plascencia",
      "Ruby Ramos",
      "Abigail Regan",
      "Lucy Valenzuela Richarte",
      "Katelyn Rumm",
      "Bohdan Sviatkin",
      "Hana Ta",
      "Abigail Yanez",
      "Fiona Yick",
    ],
  },
  {
    year: 2022,
    recipients: [
      "Kayla Battle",
      "Amanda Cadiz",
      "Reagan Grant",
      "Scarlett Karpen",
      "Masha Karpman",
      "Arianna Marinez",
      "Raina Valverde",
    ],
    nominees: [
      "Johanie Ada",
      "Mirabella Akindele",
      "Yareli Aldana",
      "Alexandra Baron",
      "Kayla Battle",
      "Leela Bowerman",
      "Amanda Cadiz",
      "Hailey Cha",
      "Skye Cruz",
      "Desi Diaz",
      "Jade Flores",
      "Reagan Grant",
      "Laila Hall",
      "Olivia Haynie",
      "Violet Hedgecock",
      "Scarlett Karpen",
      'Marie "Masha" Karpman',
      "Morgan Klepetar",
      "Christopher Kzelyan",
      "Ethan Malpica",
      "Arianna Marinez",
      "Elly Martinez",
      "Stella Mendes Morales",
      "Jaelene Molina",
      "Zoe Morgan",
      "Rose Neiyer",
      "Mia Pasin",
      "Siena Pasin",
      "Ruby Ramos",
      "Mary Sasikian",
      "Tovah Shasanmi",
      "Arielle Rae Soriano",
      "Marissa Valencia",
      "Lucy Valenzuela Richarte",
      "Raina Valverde",
      "Sophia Yassinski",
    ],
  },
  {
    year: 2021,
    recipients: ["Sean Karpman", "Eliza Naiditch", "Ronel Saedi", "Sammi Shaw"],
    nominees: [
      "Sahm Alamilla",
      "Marcus Boatwright",
      "Antonio Castillo",
      "Cadence Cirlin",
      "Fatoumata Diallo",
      "Annali Dominguez",
      "Olivia Hopkey",
      "Sean Karpman",
      "Zoe Morgan",
      "Eliza Naiditch",
      "Lola Nelson",
      "Iris Ray Pavoggi",
      "Liana Quiambao",
      "Sophia Quintanilla",
      "Ronel Saedi",
      "Sammi Shaw",
      "Rocco Valverde",
      "Raina Valverde",
      "Zoe Weitz",
    ],
  },
  {
    year: 2020,
    recipients: [
      "Brooklyn Anger",
      "Lian Cohen",
      "Lily Hataian",
      "Aya Laprete-Powell",
      "Natalia Martin",
      "Cora Rosenberg",
      "Max Woods",
    ],
    nominees: [
      "Brooklyn Anger",
      "Taylor Block",
      "Lian Cohen",
      "Lily Hataian",
      "Aya Laprete-Powell",
      "Natalia Martin",
      "Delilah Mendes",
      "Eliza Naiditch",
      "Lola Nelson",
      "Sophia Quintanilla",
      "Cora Rosenberg",
      "Ofilia Rosenberg",
      "Max Woods",
      "Sophia Yassinski",
    ],
  },
  {
    year: 2019,
    recipients: [
      "Kaitlyn Corpuz",
      "Tempest Steindal",
      "Reshat Toprak",
      "Scarlett Yan",
    ],
    nominees: [
      "Dariana Alvarez",
      "Lydia Anderson",
      "Hailey Benzvi",
      "Naomi Benzvi",
      "Yeva Castillo",
      "Isabelle Chernis",
      "Rafaella Chernyk",
      "Kaitlyn Corpuz",
      "Eva-Maya Fong",
      "Jazmine Gayton",
      "Kerstin Gunning",
      "Keira Jain",
      "Abby Jimenez",
      "Danica Jing",
      "Cosette Kasteler",
      "Eliana Knight",
      "Aya Laprete-Powell",
      "Corazon Rosenberg",
      "Tempest Steindal",
      "Lily Tochner",
      "Reshat Toprak",
      "Alice Yan",
      "Scarlett Yan",
    ],
  },
  {
    year: 2018,
    recipients: [
      "Emma Fikhman",
      "Ciara Moore",
      "Camille Moss",
      "Arielle Shvartsman",
      "Grace Wilkerson",
    ],
    nominees: [
      "Dariana Alvarez",
      "Haley Benzvi",
      "Bailey Charash",
      "Gali Chester",
      "Lian Cohen",
      "Kaitlyn Corpuz",
      "Amit Dustar",
      "Adielle Eben",
      "Gisele Eme",
      "Emma Fikhman",
      "Eva-Maya Fong",
      "Lea Fong",
      "Kayla Forman",
      "Hannah Gordon",
      "Keira Jain",
      "Zhoee Jimenez",
      "Hallie Liberman",
      "Abigail Mekki",
      "Ciara Moore",
      "Camille Moss",
      "Isabella Obiako",
      "Celeni Pedraja",
      "Sophie Posternak",
      "Aya Powell",
      "Liana Quiambao",
      "Maya Rothman",
      "Natalie Rubio",
      "Hattie Rudd",
      "Chloe Schwartz",
      "Allegra Scime",
      "Alexandra Shekhter",
      "Arielle Shvartsman",
      "Molly Urfalian",
      "Alexandra R Weiler",
      "Grace Wilkerson",
      "Sophia Yassinski",
    ],
  },
  {
    year: 2017,
    recipients: [
      "Elizabeth Frisch",
      "Elijah Obiako",
      "Ryan Ritter",
      "Ruby Greenstone",
    ],
    nominees: [
      "Eli Amsalem",
      "Hailey Benzvi",
      "Sierra Estrada",
      "Mia Gordon",
      "Ruby Greenstone",
      "Abby Jimenez",
      "Aiki Kassabian",
      "Maddie McHatton",
      "Lee Mekki",
      "Brandon Nash",
      "Lola Nelson",
      "Meagan O'Neal",
      "Elijah Obiako",
      "Celeni Pedraja",
      "Anna Rapoport",
      "Ryan Ritter",
      "Ayden Robinson",
      "Hattie Rudd",
      "Jamie Santana",
      "Chloe Schwartz",
      "Faith Serbian",
      "Arielle Shvartsman",
      "Orion Williams",
      "Truly Williams",
      "Alice Yan",
      "Elena Zamyatina",
    ],
  },
  {
    year: 2016,
    recipients: [
      "Sofia Jimenez",
      "Jayden Small",
      "Christine Ecker",
      "Rochelle Polushkin",
      "Kristen Wise",
    ],
    nominees: [
      "Ariel Amsalem",
      "Eli Amsalem",
      "Mae Baldwin",
      "Wyatt Bowers",
      "Avery Brofman",
      "Brock Bromberg",
      "Kaitlyn Corpuz",
      "Chloe Crump",
      "Christine Ecker",
      "Gisele Eme",
      "Ilyssa Freedland",
      "Elizabeth Frisch",
      "Mia Gordon",
      "Lua Guimaraes",
      "Sofia Jimenez",
      "Danica Jing",
      "Aiki Kassabian",
      "Dasha Krumer",
      'Raquel "Rocky" Lample',
      "Julia Law",
      'Yadira "Yaya" Martinez',
      "Abigail Mekki",
      "Lee Mekki",
      "Kira Melnikova",
      "Camille Moss",
      "Joleen Ngo",
      "Jordan Olivares",
      "Eliora Olshansky",
      "Meagan O'Neill",
      "Celeni Pedraja",
      "Rochelle Polushkin",
      "Carly Rattner",
      "Reece Ravich",
      "Ryan Ravich",
      "Alexa Rostovsky",
      "Elena Saviano",
      "Chloe Schwartz",
      "Faith Serban",
      "Josh Shayer",
      "Jayden Small",
      "Samantha Tzintzun",
      "Trey Tzung",
      "Sofia Vega",
      "Grace Wilkerson",
      "Melody Wilkerson",
      "Orion Williams",
      "Kristen Wise",
      "Jordyn Wooddy",
    ],
  },
  {
    year: 2015,
    recipients: [
      "Tatiana Nakkashian",
      "Delbar Nonahal",
      "Dasha Krumer",
      "Jasmine Lopez",
      "Lilly Leonhardt",
      "Mackenzie Hillhouse",
    ],
    nominees: [
      "Brianna Carrillo",
      "Diana Chernyak",
      "Alyssa Cloward",
      "Sophia Cloward",
      "Sofia Cohen",
      "Kaitlyn Corpuz",
      "Francheska Dizon",
      "Christine Ecker",
      "Ava Edley",
      "Gisele Eme",
      "Katya Fomin",
      "Elizabeth Frisch",
      "Mackenzie Hillhouse",
      "Dasha Krumer",
      "Julia Law",
      "Lilly Leonhardt",
      "Jasmine Lopez",
      "Maddie McHatton",
      "Abigail Mekki",
      "Lee Mekki",
      "Kira Melnikova",
      "Veronica Mnatsakarian",
      "Tatiana Nakkashian",
      "Delbar Nonahal",
      "Aliza Noziska Zaun",
      "Eliora Olshansky",
      "Rochelle Polushkin",
      "KC Redoblado",
      "Sarah Roberson",
      "Soliel Schneiter-Nerdin",
      "Chloe Schwartz",
      "Josh Shayer",
      "Samantha Tzintzun",
      "Elizabeth Vassaantachart",
      "Julia Weiss",
      "Grace Wilkerson",
      "Orion Williams",
      "Jordyn Wooddy",
    ],
  },
  {
    year: 2014,
    recipients: [
      "Honor Hayball",
      "Jillian Seitz",
      "Skylar Smith",
      "Ethan Ngo",
      "London Beimel",
    ],
    nominees: [
      "Allyna Alfelor",
      "London Beimel",
      "Max Bossley",
      "Leanna Carrillo",
      "Gali Chester",
      "Sophia Cloward",
      "Shari Coleman",
      "Kaitlyn Corpuz",
      "Callym Ecker",
      "Giselle Eme",
      "Brenna Epstein",
      "Emma Fikhman",
      "Rachel Gruppin",
      "Honor Hayball",
      "Mackenzie Hillhouse",
      "Dasha Krumer",
      "Juliette Lagerstrom",
      "Lilly Leonhardt",
      "Emilee Luther",
      "Lee Mekki",
      "Kira Melnikova",
      "Veronica Mnatsakanian",
      "Tatiana Nakkashian",
      "Lola Nelson",
      "Ethan Ngo",
      "Meagan O'Neill",
      "Rochelle Polushkin",
      "Alexa Rostovsky",
      "Olivia Schneiter-Nerdin",
      "Jillian Seitz",
      "Josh Shayer",
      "Skylar Smith",
      "Ixchel Tellez",
      "Grace Wilkerson",
    ],
  },
  {
    year: 2013,
    recipients: [
      "Katryna Masbanji",
      "Arianne Meneses",
      "Kiara Coleman",
      "Yasmine Arya",
      "Isabelle Grinblat",
    ],
    nominees: [
      "Rachel Albrect",
      "Alumna Alfelor",
      "Yasmine Arya",
      "Amish Bagdadian",
      "Clara Campbell",
      "Stella Campbell",
      "Emma Carlson",
      "Leanna Carrillo",
      "Brianna Carrillo",
      "Lindsey Caschak",
      "Michelle Chernyak",
      "Sophia Cloward",
      "Sofia Cohen",
      "Kiara Coleman",
      "Shari Coleman",
      "Franchesca Dizon",
      "Christine Ecker",
      "Sierra Estrada",
      "Cierra Everitt",
      "Elizabeth Frisch",
      "Skylar Green",
      "Isabelle Grinblat",
      "Honor Hayball",
      "Mackenzie Hillhouse",
      "Annie Jones",
      "Julia Law",
      "Lilly Leonhardt",
      "Lior Leshem",
      "Hannah Lifshits",
      "Emilee Luther",
      "Katryna Masbanji",
      "Lee Mekki",
      "Arianne Meneses",
      "Veronica Mnatsakanian",
      "Tatiana Nakkashian",
      "Aliza Noziska Zaun",
      "Sofia Pires",
      "KC Redoblado",
      "Jillian Seitz",
      "Skylar Smith",
      "Alexandra Weiler",
    ],
  },
];

/**
 * Home page component displaying the main scholarship information
 * @returns {JSX.Element} The rendered home page
 */
const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={logo}
              alt="Little Daisy Memorial Scholarship Logo"
              sx={{
                width: "100%",
                maxWidth: { xs: 150, sm: 180, md: 200 },
                height: "auto",
                display: "block",
                margin: "0 auto",
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
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
              Welcome to the Little Daisy Memorial Scholarship
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              component="h2"
              gutterBottom
              align="center"
              sx={{
                mb: { xs: 2, sm: 3, md: 4 },
                fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.5rem" },
              }}
            >
              Honoring the spirit of Relevé through dance education
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
                lineHeight: 1.6,
              }}
            >
              The Little Daisy Memorial Scholarship is an annual award that
              covers class tuition for a student who truly embodies the heart
              and spirit of Relevé—demonstrating character, passion, and a love
              for dance.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
                lineHeight: 1.6,
              }}
            >
              "Relevé" means to rise in French. In ballet, it describes the
              movement of lifting onto the balls of the feet—a gesture of grace,
              strength, and aspiration. This scholarship honors the memory of
              Daisy Christine Little, who was stillborn on May 7, 2012, by
              helping young dancers rise toward their dreams.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          component="h2"
          gutterBottom
          align="center"
          sx={{
            mb: { xs: 2, sm: 3, md: 4 },
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.125rem" },
          }}
        >
          Scholarship History
        </Typography>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
          {scholarshipData.map((yearData) => (
            <Grid item xs={12} sm={6} md={4} key={yearData.year}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: { xs: "auto", sm: 200 },
                }}
              >
                <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
                  <Typography
                    variant={isMobile ? "h6" : "h5"}
                    component="h3"
                    gutterBottom
                    sx={{ fontSize: { xs: "1.125rem", sm: "1.25rem" } }}
                  >
                    {yearData.year}
                  </Typography>
                  <Typography
                    variant={isMobile ? "subtitle1" : "h6"}
                    gutterBottom
                    sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
                  >
                    Recipients
                  </Typography>
                  <Typography
                    variant="body2"
                    paragraph
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      lineHeight: 1.4,
                    }}
                  >
                    {yearData.recipients.join(", ")}
                  </Typography>
                  <Typography
                    variant={isMobile ? "subtitle1" : "h6"}
                    gutterBottom
                    sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
                  >
                    Nominees
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      lineHeight: 1.4,
                    }}
                  >
                    {yearData.nominees.join(", ")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
