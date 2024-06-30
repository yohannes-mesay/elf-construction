import React from "react";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CustomNavButton = ({ next, onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      style={{
        borderRadius: "4px", // Make it rectangular
        padding: "10px",
        backgroundColor: "#1c6ce4",
        color: "white",
        margin: "10px",
      }}
    >
      {next ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
    </IconButton>
  );
};

export default CustomNavButton;
