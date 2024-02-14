import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";

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
        minHeight: "60vh",
        background: "rgba(0, 0, 0, 0.7)",
        position: "relative",
        width: "100vw",
        color: "rgba(255, 255, 255, 1)",
        fontSize: "calc(8px + 0.5vw)",
      }}
    >
      <Grid item xs={12} sm={12} md={6}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box sx={{ width: "80%", margin: "auto" }}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <Box>
                <Typography sx={{ fontWeight: "bold" }} component="h4">
                  Nothing is more important.
                </Typography>
              </Box>
              <br />
              <br />
              <Box>
                We are excited to help you clean up your home; our well-trained
                team focuses on what is most important to you and your family.
                We not only organized, but our friendly team also support you
                with any question related to cleaning and organizing. If
                desired, we are glad to share with you some helpful housekeeping
                and organizing techniques. Happy life, happy hearts.
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Box sx={{ fontWeight: "bold" }}>Link</Box>
            <br />
            <br />
            <Box>
              <Box component="span">
                <KeyboardArrowRightIcon fontSize="inherit" color="success" />
                <Link to="/" style={styles.linkBlack}>
                  Home
                </Link>
              </Box>
            </Box>
            <Box>
              <Box component="span">
                <KeyboardArrowRightIcon fontSize="inherit" color="success" />
                <Link to="about" style={styles.linkBlack}>
                  About
                </Link>
              </Box>
            </Box>
            <Box>
              <Box component="span">
                <KeyboardArrowRightIcon fontSize="inherit" color="success" />
                <Link to="services" style={styles.linkBlack}>
                  Services
                </Link>
              </Box>
            </Box>
            <Box>
              <Box component="span">
                <KeyboardArrowRightIcon fontSize="inherit" color="success" />
                <Link to="faq" style={styles.linkBlack}>
                  Faqs
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Box sx={{ maxWidth: "80%", margin: "auto" }}>
              <Box component="span">
                <PlaceIcon color="success" fontSize="inherit" />
              </Box>
              <Box component="span">Aleksanterinkatu 25, 90120 Oulu</Box>
            </Box>
            <Box
              sx={{
                maxWidth: "80%",
                borderBottom: "1px solid rgba(250,250,250,0.2)",
                margin: "12px auto 0px",
              }}
            />
            <Box
              sx={{
                maxWidth: "80%",
                margin: "12px auto 0px",
              }}
            >
              <Box component="span">
                <PhoneIcon fontSize="inherit" color="success" />
              </Box>
              <Box component="span"> (044)-055-3227</Box>
            </Box>
            <Box
              sx={{
                maxWidth: "80%",
                borderBottom: "1px solid rgba(250,250,250,0.2)",
                margin: "12px auto 0px",
              }}
            />
            <Box
              sx={{
                maxWidth: "80%",
                margin: "12px auto 0px",
              }}
            >
              <Box component="span">
                <EmailIcon fontSize="inherit" color="success" />
              </Box>
              <Box component="span"> contact@sclean.com</Box>
            </Box>
            <Box
              sx={{
                maxWidth: "80%",
                borderBottom: "1px solid rgba(250,250,250,0.2)",
                margin: "12px auto 0px",
              }}
            />
            <Box
              sx={{
                maxWidth: "80%",
                margin: "12px auto 0px",
              }}
            >
              <Box component="span">
                <AccessTimeIcon
                  fontSize="inherit"
                  color="success"
                  sx={{ marginRight: "6px" }}
                />
              </Box>
              <Box component="span">Mon-Fri 07.00 am - 07.00 pm</Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Box>
              Random FAQ's aWhat is the difference between deep cleaning and
              basic cleaning? aHow do I cancel or reschedule an appointment, is
              there any cancelation fee?
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterComponent;
