import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import b1 from "../../../public/assets/images/slider-main/bg1.jpg";
import b2 from "../../../public/assets/images/slider-main/bg2.jpg";
import b3 from "../../../public/assets/images/slider-main/bg6.jpg";
import Button from "../../ui/Button";
function Slider() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const bgs = { b1, b2, b3 };
  const paperStyle = {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "white",
    height: isSmallScreen ? "40vh" : isMedium ? "60vh" : "80vh",
    width: "100%",
    padding: isSmallScreen ? "10px" : "20px",
  };
  return (
    <Carousel
      style={{ position: "relative" }}
      indicators={false}
      navButtonsAlwaysVisible={true}
      autoPlay={false}
      animation="slide"
      duration={500}
    >
      <Paper
        className="bg-[url(../../../public/assets/images/slider-main/bg6.jpg)] relative"
        style={paperStyle}
      >
        <div className="absolute bottom-3=5 flex flex-col gap-5">
          <div className="flex gap-9">
            <div className="slide-in-left">
              <Button to='contactus' type="big">contact us</Button>
            </div>
            <div className="slide-in-right">
              <Button type="transparent">contact us</Button>
            </div>
          </div>
          <div className="text-3xl top-0 right-0 sm:text-4xl md:text-6xl relative font-extrabold slide-in-bottom uppercase">
            Reliable Construction Solutions
          </div>
          <div className="puff-in-center text-2xl sm:text-3xl md:text-4xl relative font-bold slide-in-bottom uppercase">
            build the future with us
          </div>
        </div>
      </Paper>
      <Paper
        className="bg-[url(../../../public/assets/images/slider-main/bg1.jpg)]"
        style={paperStyle}
      >
        <Typography variant={isSmallScreen ? "h6" : "h4"}>1</Typography>
      </Paper>
      <Paper
        className="bg-[url(../../../public/assets/images/slider-main/bg2.jpg)]"
        style={paperStyle}
      >
        <Typography variant={isSmallScreen ? "h6" : "h4"}>2</Typography>
      </Paper>
    </Carousel>
  );
}

export default Slider;
