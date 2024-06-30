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
  const paperStyle = {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "white",
    height: isSmallScreen ? "40vh" : isMedium ? "60vh" : "100vh",
    width: "100%",
    padding: isSmallScreen ? "10px" : "20px",
  };
  return (
    <Carousel
      style={{ position: "relative" }}
      indicators={false}
      autoPlay={true}
      animation="slide"
      fullHeightHover={true}
      navButtonsProps={{
        style: {
          backgroundColor: "#1c6ce4",
          color: "white",
          padding: "10px",
        },
      }}
      duration={500}
    >
      <Paper
        className="bg-[url(../../../public/assets/images/slider-main/bg6.jpg)] relative"
        style={paperStyle}
      >
        <div className="absolute bottom-3=5 flex flex-col gap-5">
          <div className="slide-in-left flex gap-9">
            <Button to="services" type="big">
              our service
            </Button>
            <Button to="contact" type="transparent">contact now</Button>
          </div>
          <div className="text-3xl top-0 right-0 sm:text-4xl md:text-6xl relative font-extrabold slide-in-right uppercase">
            Reliable Construction Solutions
          </div>
          <div className="slide-in-left text-2xl sm:text-3xl md:text-4xl relative font-bold slide-in-bottom uppercase">
            build the future with us
          </div>
        </div>
      </Paper>
      <Paper
        className="bg-[url(../../../public/assets/images/slider-main/bg1.jpg)] relative"
        style={paperStyle}
      >
        <div className="relative bottom-3=5 right-10 buttom-[-100px] flex flex-col gap-5">
          <div className="flex gap-9">
            <div className="relative left-0 slide-in-left px-4 py-2 md:px-6 md:scale-100 md:py-2.5 ml-28 lg:ml-0 uppercase inline-block text-sm rounded-sm bg-[#1c6ce4] font-semibold uppercase tracking-wide text-stone-100 transition-colors duration-300 hover:bg-blue-900">
              worldclass service
            </div>
          </div>
          <div className="ml-28 mb-3 md:mb-0 lg:ml-0 text-3xl top-0 right-0 sm:text-4xl md:text-6xl font-extrabold slide-in-bottom uppercase">
            Your Vision is Our Mission
          </div>
          <div className="slide-in-fwd-center md:absolute mb-3 md:mb-0 ml-28 lg:ml-0  bottom-[-50px] md:left-0 puff-in-center text-2xl sm:text-3xl md:text-4xl font-medium slide-in-bottom uppercase">
            Engineering Your Success.
          </div>
          <div className="slide-in-right ml-28 lg:ml-0 md:absolute bottom-[-120px] left-0">
            <Button to="services" type="transparent">
              our services
            </Button>
          </div>
        </div>{" "}
      </Paper>
      <Paper
        className="bg-[url(../../../public/assets/images/slider-main/bg2.jpg)]"
        style={paperStyle}
      >
        <div className="absolute right-100 flex flex-col gap-5">
          <div className="sm:ml-auto slide-in-fwd-center puff-in-center text-xl sm:text-3xl md:text-4xl font-normal slide-in-blurred-top uppercase">
            Meet our engineers
          </div>

          <div className="text-2xl ml-auto top-0 right-0 sm:text-4xl md:text-6xl font-extrabold slide-in-bottom uppercase">
            Precision in Every Project{" "}
          </div>
          <div className="ml-auto slide-in-fwd-cente font-[300] t puff-in-center text-xs sm:text-xl md:text-xl font-medium slide-in-bottom uppercase">
            Innovative Solutions for Modern Construction Challenges{" "}
          </div>
          <div className="slide-in-right ml-auto md:mt-5 mr-4">
            <div className="flex gap-9">
              <Button to="departments" type="big">
                Our deparment
              </Button>
              <Button to="about" type="transparent">
                learn more
              </Button>
            </div>
          </div>
        </div>{" "}
      </Paper>
    </Carousel>
  );
}

export default Slider;
