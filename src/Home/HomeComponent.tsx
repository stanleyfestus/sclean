import { Grid } from "@mui/material";
import ThirdSectionComponent from "./ThirdSectionComponent";
import ShareScreenComponent from "./ShareScreenComponent";
import SmallScreenComponent from "./HomeHeaderComponent";

const MainComponent = () => {
  return (
    <Grid
      container
      sx={{
        fontFamily: "Lato",
        width: "100vw",
      }}
    >
      <SmallScreenComponent />
      <ShareScreenComponent />
      <ThirdSectionComponent />
    </Grid>
  );
};

export default MainComponent;
