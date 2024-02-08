import { Grid, Box } from "@mui/material";

const SmallScreenComponent = () => {
  return (
    <Grid
      container
      sx={{
        fontSize: "calc(22px + 0.5vw)",
        textAlign: "center",
        position: "relative",
        marginTop: "5%",
      }}
    >
      <Grid container>
        <Grid
          item
          sm={12}
          xs={12}
          md={12}
          sx={{ maxWidth: "80%", margin: "auto" }}
        >
          We Provide Top Of The Line In Cleaning Services
        </Grid>
      </Grid>

      <Grid container>
        <Box
          sx={{
            width: "12vw",
            borderBottom: "2px solid black",
            margin: "2% auto 3%",
          }}
        ></Box>
      </Grid>

      <Grid
        container
        sx={{
          fontSize: "calc(12px + 0.5vw)",
          padding: "2px",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ width: "100%", margin: "auto", textAlign: "center" }}
        >
          We service Alppila, Kaakkuri, Kontinkangas, Tuira, Somerville,
          Watertown, Medford, Rhode Island and surrounding areas. Get a quote
          now!
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SmallScreenComponent;
