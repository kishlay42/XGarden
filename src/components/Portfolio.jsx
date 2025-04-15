import React, { useEffect } from "react";
import "./Portfolio.css";
import FlipClock from "./FlipClock/FlipClock";
import ChromeDinoGame from "react-chrome-dino";
import { Fade } from "react-awesome-reveal";

const Portfolio = () => {
  useEffect(() => {
    const handleVisibilityChange = (inView) => {
      if (inView) {
        document.body.classList.add("bg-red");
      } else {
        document.body.classList.remove("bg-red");
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => handleVisibilityChange(entry.isIntersecting),
      { threshold: 0.5 } // Trigger when 50% of the component is in view
    );

    const portfolioElement = document.querySelector(".container");
    if (portfolioElement) {
      observer.observe(portfolioElement);
    }

    return () => {
      if (portfolioElement) {
        observer.unobserve(portfolioElement);
      }
    };
  }, []);

  return (
    <Fade duration={2000} triggerOnce>
      <div className="container">
        <div className="nirvana"></div>
        <div className="Inservice"></div>
        <div className="e">
          <div className="skills"></div>
          <div className="flip-clock">
            <FlipClock />
          </div>
        </div>
        <div className="c">
          <div className="dino">
            <p>PRESS SPACEBAR</p>
            <ChromeDinoGame sound={false} />
          </div>
          <div className="genposium"></div>
          <div className="Email"></div>
          <div className="d">
            <div className="lead"></div>
            <div className="mode"></div>
          </div>
        </div>
        <div className="f">
          <div className="profile"></div>
          <div className="social"></div>
        </div>
      </div>
    </Fade>
  );
};

export default Portfolio;