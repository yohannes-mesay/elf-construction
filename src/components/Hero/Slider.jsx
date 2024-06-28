import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography, Container } from "@mui/material";
function Slider() {
  const items = [
   {
    img:'./'
   }
  ];

  return (
    <Container
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <Carousel
        indicators={true}
        navButtonsAlwaysVisible={true}
        autoPlay={false}
        animation="slide"
        duration={500}
      >
        {items.map((item, index) => (
          <Paper
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
            <Typography variant="h4">{item.name}</Typography>
          </Paper>
        ))}
      </Carousel>
    </Container>
  );
}

export default Slider;
