import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography, Container } from "@mui/material";
import b1 from "../../../public/assets/images/slider-main/bg1.jpg";
import b2 from "../../../public/assets/images/slider-main/bg2.jpg";
import b3 from "../../../public/assets/images/slider-main/bg3.jpg";
import { Image } from "@mui/icons-material";
function Slider() {
  const items = [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
    { name: "6" },
    { name: "7" },
    { name: "8" },
  ];

  return (
    <Container style={{ marginBottom: "20px" }} className="max-w-full">
      <Carousel
        indicators={true}
        navButtonsAlwaysVisible={true}
        autoPlay={true}
        animation="slide"
        duration={500}
      >
        {items.map((item, index) => (
          <Container
            key={index}
            style={{
              padding: "20px",
              textAlign: "center",
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={b1} />
            <Typography variant="h4">{item.name}</Typography>
          </Container>
        ))}
      </Carousel>
    </Container>
  );
}

export default Slider;
