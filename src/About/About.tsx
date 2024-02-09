import { Box, Grid, Typography } from "@mui/material";

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
        <Typography component="h2" sx={{fontSize: "2rem"}}>About Us</Typography>
        <Box component="p">
          Welcome to our professional cleaning company! We are dedicated to
          providing our customers with a clean and decent environment at a
          moderate price. With years of experience in the industry and the right
          tools and equipment, we are confident in our ability to deliver the
          high-quality results you expect. Our service area is the beautiful
          city of Oulu and the surrounding areas. We are committed to ethical
          business practices and go above and beyond to provide excellent
          customer service. Our highly trained and motivated team uses only the
          most advanced and environmentally-friendly cleaning products and
          technologies. Our custom cleaning solutions and quality assurance
          program set us apart from the competition, and we are proud to have
          seen steady growth thanks to our dedication to customer satisfaction.
          We believe in passing on our knowledge and expertise to our employees
          through training programs, giving our customers peace of mind when it
          comes to the cleanliness of their homes or business. Here are some
          bullet points that highlight the unique aspects of our cleaning
          company.
        </Box>
        <Box component="p">
          Welcome to S-Clean, where cleanliness meets excellence! With over a
          decade of expertise in the cleaning industry, we take pride in
          offering top-notch cleaning services for a diverse range of
          establishments. Whether it's revitalizing office spaces, maintaining
          the pristine atmosphere of restaurants, ensuring hygienic movie
          cinemas, keeping nightclubs spotless, or bringing a fresh touch to
          homes – our experienced team is dedicated to delivering unparalleled
          cleaning solutions. Founded by a seasoned cleaner with over 17 years
          of hands-on experience, [Your Company Name] understands the importance
          of a clean and inviting environment. Our commitment to excellence,
          attention to detail, and personalized approach set us apart. Discover
          the difference of a professionally cleaned space with [Your Company
          Name]. Contact us for reliable, thorough, and trustworthy cleaning
          services that exceed expectations. Your satisfaction is our priority,
          and we look forward to making your space shine!
        </Box>
      </Grid>
      <br />
      <br />
    </Grid>
  );
};

export default About;
