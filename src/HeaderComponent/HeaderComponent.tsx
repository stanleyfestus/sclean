import React, { useState } from "react";
import { Box, IconButton, Grid, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import bg from "../img/cleanboy.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import MenuIcon from "@mui/icons-material/Menu";
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
const HeaderComponent = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      container
      sx={{
        position: "relative",
        width: "100vw",
        color: "rgba(250, 250, 250, 1)",
        height: "100%",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "20px",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 1,
        },
        "@media screen and (max-width: 600px)": {
          zIndex: 2,
          height: "8vh",
        },
        "@media screen and (min-width: 601px)": {
          zIndex: 2,
          height: "60vh",
        },
      }}
    >
      <Grid
        container
        alignItems="center"
        sx={{
          "@media screen and (max-width: 600px)": {
            display: "block",
            zIndex: 2,
          },
          "@media screen and (min-width: 601px)": {
            display: "none",
          },
        }}
      >
        <Grid item>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose} sx={styles.menuItem}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            Home
          </Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={styles.menuItem}>
          <Link to="/about" style={styles.link}>
            About Us
          </Link>{" "}
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={styles.menuItem}>
          <Link to="services" style={styles.link}>
            Services
          </Link>
        </MenuItem>
      </Menu>
      <Grid
        container
        md={12}
        sx={{
          "@media screen and (max-width: 600px)": {
            display: "none",
          },
          "@media screen and (min-width: 601px)": {
            zIndex: 3,
            fontFamily: "Fantasy",
          },
          fontSize: "calc(10px + 0.5vw)",
        }}
      >
        <Grid container sx={{ height: "80px" }}>
          <Grid
            container
            sx={{ borderBottom: "1px solid white", fontWeight: "bold" }}
          >
            <Grid item md={4} sm={5} lg={4}>
              <IconButton
                sx={{
                  color: "rgba(250, 250, 250, 1)",
                  fontFamily: "Fantasy",
                  fontSize: "inherit",
                }}
              >
                <PlaceIcon
                  fontSize="inherit"
                  sx={{ marginRight: "2px", marginTop: "-4px" }}
                />
              </IconButton>
              Aleksanterinkatu 25, 90120 Oulu
            </Grid>
            <Grid item md={4} sm={3} lg={4} sx={{ textAlign: "center" }}>
              <IconButton
                sx={{
                  color: "rgba(250, 250, 250, 1)",
                  fontFamily: "Fantasy",
                  fontSize: "inherit",
                }}
              >
                <PhoneIcon
                  fontSize="inherit"
                  sx={{ marginRight: "2px", marginTop: "-4px" }}
                />
              </IconButton>
              0440 553 227
            </Grid>
            <Grid item md={4} sm={4} lg={4} sx={{ textAlign: "right" }}>
              <IconButton
                sx={{
                  color: "rgba(250, 250, 250, 1)",
                  fontFamily: "Fantasy",
                  fontSize: "inherit",
                }}
              >
                <AccessTimeIcon
                  fontSize="inherit"
                  sx={{ marginRight: "2px", marginTop: "-4px" }}
                />
              </IconButton>
              Mon-Fri - 07.00 am - 07.00
            </Grid>
          </Grid>
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
              sx={{ fontWeight: "bold", fontSize: "calc(12px + 0.5vw)" }}
            >
              <Grid item sm={5} lg={5}>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 4,
                  }}
                >
                  <Grid item>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to="/"
                    >
                      Home
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to="about"
                    >
                      About Us
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to="faqs"
                    >
                      FAQs
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={2} lg={2} sx={{ textAlign: "center" }}>
                <Link to="/" style={styles.linkBlack}>
                  <Box component="img" src={logo} sx={{ width: "auto" }}></Box>
                </Link>
              </Grid>
              <Grid item sm={5} lg={5}>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 4,
                  }}
                >
                  <Grid item>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to="services"
                    >
                      Request/Services
                    </Link>
                  </Grid>
                  <Grid item>
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
                <Box>
                  We use safe hospital-grade disinfectants, HEPA filtrations and
                  microfiber cleaning cloths to reduce cross contamination.
                </Box>
              </Box>
            </Grid>
            <Grid></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderComponent;
