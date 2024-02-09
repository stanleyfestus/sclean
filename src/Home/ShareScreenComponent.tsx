import { Box, Grid, IconButton, Typography } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HandymanIcon from "@mui/icons-material/Handyman";
import pic from "../img/image_01.webp";

const ShareScreenComponent = () => {
  return (
    <Grid container sx={{ marginTop: "4%", fontSize: "calc(11px + 0.5vw)" }}>
      <Box>
        <Grid
          container
          spacing={4}
          sx={{
            "@media screen and (max-width: 900px)": {
              display: "none",
            },
            "@media screen and (min-width: 901px)": {
              fontSize: "calc(9px + 0.5vw)",
            },
          }}
        >
          <Grid item md={4} lg={4} xl={4} sm={4}>
            <Box>
              <Box sx={{ padding: "0px" }}>
                <IconButton>
                  <DiamondIcon fontSize="large" color="success" />
                </IconButton>
              </Box>
              <Box sx={{ paddingLeft: "8px" }}>
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
            </Box>
            <Box>
              <Box sx={{ padding: "0px" }}>
                <IconButton>
                  <HandymanIcon fontSize="large" color="success" />
                </IconButton>
              </Box>
              <Box sx={{ padding: "8px" }}>
                <Typography component="h4">RELIABLE CREWS</Typography>
                <Box component="p">
                  Our team of diligent cleaning professionals will disinfect and
                  sanitize to a maximum, and ensure you are 100% satisfied with
                  our cleaning services.
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} lg={4} xl={4} sm={4} sx={{ paddingLeft: "0px" }}>
            <Grid
              sx={{
                padding: "6px",
                border: "1px solid grey",
                borderRadius: "50%",
                width: "100%",
                margin: "auto",
              }}
            >
              <Box
                component="img"
                src={pic}
                sx={{
                  borderRadius: "50%",
                  width: "100%",
                  verticalAlign: "middle",
                  margin: "auto",
                }}
              />
            </Grid>
          </Grid>
          <Grid item md={4} lg={4} xl={4} sm={4}>
            <Box>
              <Box sx={{ padding: "0px" }}>
                <IconButton>
                  <HomeWorkIcon fontSize="large" color="success" />
                </IconButton>
              </Box>
              <Box>
                <Typography component="h4">LEADING TECHNOLOGIES</Typography>
                <Box component="p">
                  We use safe hospital-grade disinfectants, HEPA filtrations and
                  microfiber cleaning cloths to reduce cross contamination.
                </Box>
              </Box>
            </Box>
            <Box>
              <Box sx={{ padding: "0px" }}>
                <IconButton>
                  <BeachAccessIcon fontSize="large" color="success" />
                </IconButton>
              </Box>
              <Box sx={{ padding: "8px" }}>
                <Typography component="h4">INSURED AND BONDED</Typography>
                <Box component="p">
                  Our dedicated team puts that extra *Umph when we’re dusting,
                  cleaning, vacuuming carpets, and more to meet a client’s
                  needs. We work with you, and figure out what you need, when
                  you need it, and move forward proficently.
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          sx={{
            "@media screen and (max-width: 900px)": {
              marginBottom: "2%",
            },
            "@media screen and (min-width: 901px)": {
              fontSize: "calc(9px + 0.5vw)",
              display: "none",
            },
          }}
        >
          <Grid item md={6} lg={6} xl={6} sm={6}>
            <Box sx={{ height: "200px"}}>
              <Box sx={{ padding: "0px" }}>
                <IconButton>
                  <DiamondIcon fontSize="large" color="success" />
                </IconButton>
              </Box>
              <Box sx={{ paddingLeft: "8px" }}>
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
            </Box>
            <Box sx={{ height: "200px" }}>
              <Box sx={{ padding: "0px" }}>
                <IconButton>
                  <HandymanIcon fontSize="large" color="success" />
                </IconButton>
              </Box>
              <Box sx={{ padding: "8px" }}>
                <Typography component="h4">RELIABLE CREWS</Typography>
                <Box component="p">
                  Our team of diligent cleaning professionals will disinfect and
                  sanitize to a maximum, and ensure you are 100% satisfied with
                  our cleaning services.
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} lg={6} xl={6} sm={6}>
            <Box sx={{ height: "200px" }}>
              <Box sx={{ padding: "0px" }}>
                <IconButton>
                  <HomeWorkIcon fontSize="large" color="success" />
                </IconButton>
              </Box>
              <Box>
                <Typography component="h4">LEADING TECHNOLOGIES</Typography>
                <Box component="p">
                  We use safe hospital-grade disinfectants, HEPA filtrations and
                  microfiber cleaning cloths to reduce cross contamination.
                </Box>
              </Box>
            </Box>
            <Box sx={{ height: "200px"}}>
              <Box sx={{ padding: "0px" }}>
                <IconButton>
                  <BeachAccessIcon fontSize="large" color="success" />
                </IconButton>
              </Box>
              <Box sx={{ padding: "8px" }}>
                <Typography component="h4">INSURED AND BONDED</Typography>
                <Box component="p">
                  Our dedicated team puts that extra *Umph when we’re dusting,
                  cleaning, vacuuming carpets, and more to meet a client’s
                  needs. We work with you, and figure out what you need, when
                  you need it, and move forward proficently.
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default ShareScreenComponent;
