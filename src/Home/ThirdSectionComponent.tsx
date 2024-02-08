import { Box, Grid, Typography } from "@mui/material";
import pic1 from "../img/clean1.jpeg";
import pic2 from "../img/clean.jpeg";
import lady from "../img/lady.webp";

const ThirdSectionComponent = () => {
  return (
    <Grid container sx={{ margin: "4% 0% 4%" }}>
      <Grid item xs={12} sm={12} md={4} sx={{ padding: "0.6%" }}>
        <Box
          component="img"
          src={pic1}
          sx={{
            width: "100%",
            "@media screen and (max-width: 900px)": {
              display: "none",
            },
          }}
        />
        <Box
          component="img"
          src={pic2}
          sx={{
            width: "100%",
            "@media screen and (max-width: 900px)": {
              display: "none",
            },
          }}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={8} sx={{ padding: "0.6%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "40%",
            }}
            src={lady}
            component="img"
          ></Box>
          <Box sx={{ flex: 2 }}>
            <Typography
              component="h4"
              sx={{ textAlign: "center", fontSize: "2rem" }}
            >
              Our Story
            </Typography>
            <Box
              sx={{
                borderBottom: "2px solid black",
                width: "20%",
                margin: "auto",
              }}
            ></Box>
            <Box
              sx={{
                padding: "6px",
                fontFamily: "Lato",
                fontSize: "calc(10px + 0.5vw)",
              }}
            >
              <Box component="p">
                We at S-Clean have a mission to liberate families and businesses
                from tedious chores. We believe cleanliness is the key to a
                happy, healthy, and productive environment.
              </Box>
              <Box component="p">
                We also understand that maintaining this type of environment
                takes a lot of work, and that’s why our cleaning services are so
                thorough. Our dedicated team puts that extra *Umph when we’re
                dusting, cleaning, vacuuming carpets, and more to meet a
                client’s needs.
              </Box>
              <Box component="p">
                We work with you, and figure out what you need, when you need
                it, and move forward proficently. It’s important to build a
                symbiotic relationship with our clients, as to do our services
                to the best of our abilities with little to no friction, or
                confusion for everyone involved. So get in contact with us! Or
                request a quote now!
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ThirdSectionComponent;
