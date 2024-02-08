import { Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import logo from "../img/logo.png";

const styles = {
  menuItem: {
    width: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  linkBlack: {
    textDecoration: "none",
    color: "white",
  },
};

const LinkMenuComponent = () => {
  return (
    <Grid
      container
      sx={{
        position: "relative",
        top: "24px",
        color: "white",
      }}
    >
      <Grid
        container
        sx={{
          fontWeight: "bold",
          width: "100%",
          margin: "auto",
        }}
      >
        <Grid item sm={4} lg={4}>
          <Grid
            container
            spacing={2}
            sx={{
              fontWeight: "bold",
              fontSize: "calc(12px + 0.5vw)",
            }}
          >
            <Grid item sm={4} lg={4}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: "calc(10px + 0.5vw)",
                }}
                to="/"
              >
                Home
              </Link>
            </Grid>
            <Grid item sm={4} lg={4}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="about"
              >
                About Us
              </Link>
            </Grid>
            <Grid item sm={4} lg={4}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="faqs"
              >
                FAQs
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={4} lg={4} sx={{ textAlign: "center" }}>
          <Link to="/" style={styles.linkBlack}>
            <Box component="img" src={logo} sx={{ width: "auto" }}></Box>
          </Link>
        </Grid>
        <Grid item sm={4} lg={4}>
          <Grid container spacing={2} sx={{textAlign: "right"}}>
            <Grid item sm={2} lg={2} md={2}></Grid>
            <Grid item sm={5} lg={5} md={5}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="services"
              >
                Services
              </Link>
            </Grid>
            <Grid item sm={5} lg={5} md={5}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="contactus"
              >
                Contact Us
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Box
          sx={{
            color: "rgba(250, 250, 250, 1)",
            position: "relative",
            top: 80,
            fontSize: "calc(18px + 0.5vw)",
            maxWidth: "70%",
            margin: "auto",
            fontFamily: "Monospace",
            textAlign: "center",
          }}
        >
          <FormatQuoteIcon />
          <Box
            sx={{
              maxWidth: "60%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            We use safe hospital-grade disinfectants, HEPA filtrations and
            microfiber cleaning cloths to reduce cross contamination.
          </Box>
          <br />
          <Box>- Ilpo</Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LinkMenuComponent;
