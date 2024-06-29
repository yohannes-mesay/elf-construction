import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import b1 from "../../../public/assets/images/slider-main/bg1.jpg";
import b2 from "../../../public/assets/images/slider-main/bg2.jpg";
import b3 from "../../../public/assets/images/slider-main/bg3.jpg";

function Slider() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const paperStyle = {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${b1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "white",
    height: isSmallScreen ? "50vh" : isMedium ? "70vh" : "100vh",
    width: "100%",
    padding: isSmallScreen ? "10px" : "20px",
  };
  return (
    <Carousel
      style={{ position: "relative" }}
      indicators={false}
      navButtonsAlwaysVisible={true}
      autoPlay={true}
      animation="slide"
      duration={500}
    >
      <Paper style={paperStyle}>
        <Typography variant={isSmallScreen ? "h6" : "h4"}>1</Typography>
      </Paper>
      <Paper style={paperStyle}>
        <Typography variant={isSmallScreen ? "h6" : "h4"}>2</Typography>
      </Paper>
    </Carousel>
  );
}

export default Slider;
