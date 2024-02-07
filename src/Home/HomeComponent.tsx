import { Box, IconButton, Typography, Grid } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HandymanIcon from "@mui/icons-material/Handyman";

const MainComponent = () => {
  return (
    <Grid
      container
      sx={{
        fontFamily: "Lato",
        padding: "2px",
        width: "100vw",
        marginBottom: "6%",
      }}
    >
      <Grid
        container
        sx={{
          fontSize: "calc(22px + 0.5vw)",
          textAlign: "center",
        }}
      >
        <Grid item md={10} sm={10} sx={{ width: "100%", margin: "auto" }}>
          <br />
          <br />
          We Provide Top Of The Line Cleaning Services
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "20%",
          borderBottom: "2px solid black",
          margin: "auto",
          position: "relative",
          top: 6,
        }}
      ></Box>
      <Grid
        container
        sx={{
          fontSize: "calc(12px + 0.5vw)",
          padding: "2px",
        }}
      >
        <Grid
          item
          md={12}
          sm={12}
          sx={{ width: "100%", margin: "auto", textAlign: "center" }}
        >
          We service Alppila, Kaakkuri, Kontinkangas, Tuira, Somerville,
          Watertown, Medford, Rhode Island and surrounding areas. Get a quote
          now!
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Grid container>
        <Grid
          container
          spacing={1}
          sx={{
            margin: "auto",
            fontFamily: "Lato",
            padding: "2px",
          }}
        >
          <Grid item md={6} sm={6}>
            <Grid>
              <Box>
                <Box>
                  <IconButton>
                    <DiamondIcon fontSize="large" color="primary" />
                  </IconButton>
                </Box>
                <br />
                <Typography component="h4">
                  CLEANING, DUSTING, & DISINFECTING
                </Typography>
                <Box component="p">
                  Our home and business cleaning services keep your sacred areas
                  sparkling clean, and germ free. Our dedicated team uses a
                  killer disinfecting process, killing 99% of common bacteria
                  and viruses in your home or office area.
                </Box>
              </Box>
            </Grid>
          </Grid>
          {/* <Grid item md={12} sm={4}></Grid> */}
          <Grid item md={6} sm={6}>
            <Box>
              <IconButton>
                <BeachAccessIcon fontSize="large" color="primary" />
              </IconButton>
            </Box>
            <br />
            <Typography component="h4">INSURED AND BONDED</Typography>
            <Box component="p">
              Our dedicated team puts that extra *Umph when we’re dusting,
              cleaning, vacuuming carpets, and more to meet a client’s needs. We
              work with you, and figure out what you need, when you need it, and
              move forward proficently.
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{
          margin: "auto",
          fontFamily: "Lato",
          padding: "1px",
        }}
      >
        <Grid item md={6} sm={6}>
          <Box>
            <IconButton>
              <HandymanIcon fontSize="large" color="primary" />
            </IconButton>
          </Box>
          <br />
          <Typography component="h4">RELIABLE CREWS</Typography>
          <Box component="p">
            Our team of diligent cleaning professionals will disinfect and
            sanitize to a maximum, and ensure you are 100% satisfied with our
            cleaning services.
          </Box>
        </Grid>
        <Grid item md={6} sm={6}>
          <Box>
            <Box>
              <IconButton>
                <HomeWorkIcon fontSize="large" color="primary" />
              </IconButton>
            </Box>
            <br />
            <Typography component="h4">LEADING TECHNOLOGIES</Typography>
            <Box component="p">
              We use safe hospital-grade disinfectants, HEPA filtrations and
              microfiber cleaning cloths to reduce cross contamination.
            </Box>
          </Box>
        </Grid>
      </Grid>
      <br />
      <br />
    </Grid>
  );
};

export default MainComponent;
