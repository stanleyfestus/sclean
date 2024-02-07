import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const styles = {
  linkBlack: {
    textDecoration: "none",
    color: "white",
  },
};
const FooterComponent = () => {
  return (
    <Grid
      container
      sx={{
        fontFamily: "Lato",
        minHeight: "300px",
        background: "rgba(0, 0, 0, 0.7)",
        position: "relative",
        width: "100vw",
        color: "rgba(255, 255, 255, 1)",
      }}
    >
      <Grid container sx={{ padding: "24px" }}>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Box sx={{ fontWeight: "bold" }}>Nothing is more important.</Box>
          <br />
          <br />
          <Box>
            We are excited to help you clean up your home; our well-trained team
            focuses on what is most important to you and your family. We not
            only organized, but our friendly team also support you with any
            question related to cleaning and organizing. If desired, we are glad
            to share with you some helpful housekeeping and organizing
            techniques. Happy life, happy hearts.
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <br />
          <Box sx={{ fontWeight: "bold" }}>Link</Box>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <br />
              <Link to="/" style={styles.linkBlack}>
                Home
              </Link>
            </Grid>
            <Grid  item xs={12} sm={12} md={6}>
              <Link to="about" style={styles.linkBlack}>
                About
              </Link>
            </Grid>
            <Grid  item xs={12} sm={12} md={6}>
              <Link to="services" style={styles.linkBlack}>
                Services
              </Link>
            </Grid>
            <Grid  item xs={12} sm={12} md={6}>
              <Link to="faq" style={styles.linkBlack}>FAQs</Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}></Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}></Grid>
      </Grid>
    </Grid>
  );
};

export default FooterComponent;
