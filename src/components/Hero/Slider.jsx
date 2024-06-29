import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography, Container } from "@mui/material";
import b1 from "../../../public/assets/images/slider-main/bg1.jpg";
import b2 from "../../../public/assets/images/slider-main/bg2.jpg";
import b3 from "../../../public/assets/images/slider-main/bg3.jpg";

function Slider() {
  return (
    <Container
      style={{ marginBottom: "20px" }}
      className="slide-in-top max-w-full"
    >
      <Carousel
        indicators={true}
        navButtonsAlwaysVisible={true}
        autoPlay={true}
        animation="slide"
        duration={500}
      >
        <Paper
        className="w-full bg-slate-400"
          style={{
            textAlign: "center",
            display: "flex",
            height:"190vh",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `url(${b1})`,
            backgroundPosition: "center",
            color: "white",
          }}
        >
          <Typography variant="h4">1</Typography>
        </Paper>
        <Paper
        className="h-[200px]"
          style={{
            padding: "20px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `url(${b2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        >
          <Typography variant="h4">2</Typography>
        </Paper>
      </Carousel>
    </Container>
  );
}

export default Slider;
