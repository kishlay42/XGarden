import React from "react";
import "./Hero.css";
import Background from "./background/Background";
const Hero = () => {
  return (
    <>
    <Background/>
      <div className="hero">
        <div className="upHead">
          <div className="shiny-dot"></div>
          <p className="upText"> AVAILABLE FOR FREELANCE</p>
        </div>
        <p className="bigHead">
          KISHLAY
          <br /> BHASKAR
        </p>
      </div>
    </>
  );
};

export default Hero;
