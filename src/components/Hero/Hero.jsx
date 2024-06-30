import React from "react";
import Slider from "./Slider";
import More from "./More";
function Hero() {
  return (
    <div className="relative flex flex-col">
      <Slider />
      <More />
    </div>
  );
}

export default Hero;
