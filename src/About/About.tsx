import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const About = () => {
  return (
    <Grid
      container
      sx={{
        fontFamily: "Garamond",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        position: "relative",
      }}
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <Grid container sx={{ width: "80%", margin: "auto" }}>
        <Typography component="h2" sx={{ fontSize: "2rem" }}>
          About Us
        </Typography>
        <Box>
          <Box component="p">
            Welcome to our professional cleaning company! We are dedicated to
            providing our customers with a clean and decent environment at a
            moderate price. With years of experience in the industry and the
            right tools and equipment, we are confident in our ability to
            deliver the high-quality results you expect.
          </Box>
          <Box component="p">
            Our service area is the beautiful city of Oulu and the surrounding
            areas. We are committed to ethical business practices and go above
            and beyond to provide excellent customer service. Our highly trained
            and motivated team uses only the most advanced and
            environmentally-friendly cleaning products and technologies. Our
            custom cleaning solutions and quality assurance program set us apart
            from the competition, and we are proud to have seen steady growth
            thanks to our dedication to customer satisfaction.
          </Box>
          <Box component="p">
            We believe in passing on our knowledge and expertise to our
            employees through training programs, giving our customers peace of
            mind when it comes to the cleanliness of their homes or business.
          </Box>
          <Box component="p">
            Here are some bullet points that highlight the unique aspects of our
            cleaning company:
          </Box>
          <List sx={{ padding: "0px" }}>
            <ListItem dense>
              <KeyboardArrowRightIcon fontSize="inherit" color="success" />
              <ListItemText primary="Experienced cleaners with a commitment to providing a clean and decent environment" />
            </ListItem>
            <ListItem dense>
              <KeyboardArrowRightIcon fontSize="inherit" color="success" />
              <ListItemText primary="Moderate prices and the right tools and equipment to deliver high-quality results" />
            </ListItem>
            <ListItem dense>
              <KeyboardArrowRightIcon fontSize="inherit" color="success" />
              Superior customer service and ethical business practices
            </ListItem>
            <ListItem dense>
              <KeyboardArrowRightIcon fontSize="inherit" color="success" />
              <ListItemText primary="Highly trained and motivated personnel" />
            </ListItem>
            <ListItem dense>
              <KeyboardArrowRightIcon fontSize="inherit" color="success" />
              <ListItemText primary="Advanced, environmentally-friendly cleaning products and technologies" />
            </ListItem>
            <ListItem dense>
              <KeyboardArrowRightIcon fontSize="inherit" color="success" />
              <ListItemText primary="Custom cleaning solutions and a quality assurance program" />
            </ListItem>
            <ListItem dense>
              <KeyboardArrowRightIcon fontSize="inherit" color="success" />
              <ListItemText primary="Training programs for employees to ensure customer satisfaction and peace of mind" />
            </ListItem>
            <ListItem dense>
              <KeyboardArrowRightIcon fontSize="inherit" color="success" />
              <ListItemText primary="The service area includes the city of Oulu and the surrounding areas" />
            </ListItem>
          </List>
          <Box component="p">
            Contact us today to schedule your first cleaning and experience the
            difference for yourself! For your cleaning service booking or
            inquiries, call/text:  (044)-055-3227.
          </Box>
        </Box>
      </Grid>
      <br />
      <br />
    </Grid>
  );
};

export default About;
