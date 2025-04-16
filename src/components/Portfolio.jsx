import React, { useEffect } from "react";
import "./Portfolio.css";
import FlipClock from "./flipClock/FlipClock";
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
        <div className="nirvana">
          <img
            src="https://i.pinimg.com/736x/b6/8d/de/b68ddef2e1d28c8dc945050efaec8adc.jpg"
            alt="nirvana"
          />
          <div class="top-left">Nirvana</div>
        </div>
        <div className="Inservice">
          {" "}
          <img
            src="https://i.pinimg.com/736x/bc/95/f8/bc95f892eb0a8c89980418737c193573.jpg"
            alt="inservice"
          />
          <div class="top-left">InService</div>
        </div>
        <div className="e">
          <div className="skills">
            <p>Skills</p>
            <ul className="skillsList">
              <li>Figma</li>
              <li>Gen AI</li>
              <li>UI Design</li>
              <li>UX Design</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="flip-clock">
            <FlipClock />
          </div>
        </div>
        <div className="c">
          <div className="dino">
            <p>PRESS SPACEBAR</p>
            <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
              <ChromeDinoGame sound={false} />
            </div>{" "}
          </div>
          <div className="genposium">
            <img src="/images/genposium.jpeg" alt="genposium" />
            <div class="top-left">Genposium</div>
          </div>
          <div className="Email">
            <h2 className="contact-title">Contact me</h2>
            <p className="contact-description">
              Got something to share? <br /> Pop in your email!
            </p>
            <form className="contact-form">
              <input
                type="email"
                placeholder="Email"
                className="contact-input"
                required
              />
              <button type="submit" className="contact-button">
                Submit
              </button>
            </form>
          </div>
          <div className="d">
            <div className="lead">
              <img
                src="https://i.pinimg.com/736x/7b/cb/6c/7bcb6cb5cba9c5a9cf518f8e9c6af06d.jpg"
                alt="lead_img"
              />
              <div className="top-left">Lead</div>
            </div>
            <div className="mode"></div>
          </div>
        </div>
        <div className="f">
          <div className="profile">
            <img
              src="https://i.pinimg.com/736x/57/a4/d9/57a4d93ff5bf674904bc259ee89f6675.jpg"
              alt="profile"
            />
          </div>
          <div className="social">
            <img
              src="https://blocks.shawnlukas.com/assets/shawn-lukas-lukas-sans-typeface-official.png"
              alt="social"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Portfolio;
