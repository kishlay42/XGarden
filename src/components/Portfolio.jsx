import React, { useEffect } from "react";
import "./Portfolio.css";
import FlipClock from "./flipClock/FlipClock";
import ChromeDinoGame from "react-chrome-dino";
import { Fade } from "react-awesome-reveal";
import ArrowButton from "./usables/ArrowButton";
import GoogleForm from "./usables/GoogleForm";
import Dark from "./usables/Dark";

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
          <div className="top-left">Nirvana</div>
          <p className="top-left-para">
            A Chrome extension that blends tech and sustainability—recommending
            eco-friendly alternatives to make your online shopping cleaner and
            greener.
          </p>
          <ArrowButton linkSrc="https://github.com/kishlay42/Nirvana-Chrome-Web-Extension-" />
        </div>
        <div className="Inservice">
          {" "}
          <img
            src="https://i.pinimg.com/736x/bc/95/f8/bc95f892eb0a8c89980418737c193573.jpg"
            alt="inservice"
          />
          <div className="top-left">InService</div>
          <p className="top-left-para">
            Bringing small businesses online with desi flair—connecting local
            vendors, boosting supply chains, and empowering communities across
            India.
          </p>
          <ArrowButton linkSrc="https://in-service-nlm3.vercel.app/" />
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
            <div className="top-left">Genposium</div>
            <p className="top-left-para">
              Connecting campuses through groups, contests, and open-source
              magic—fueled by passion, creativity, and code.
            </p>
            <ArrowButton linkSrc="https://genposium.onrender.com/" />
          </div>
          <div className="Email">
            <h2 className="contact-title">Contact me</h2>
            <p className="contact-description">
              Got something to share? <br /> Pop in your email!
            </p>
            <GoogleForm />
          </div>
          <div className="d">
            <div className="lead">
              <img
                src="https://i.pinimg.com/736x/7b/cb/6c/7bcb6cb5cba9c5a9cf518f8e9c6af06d.jpg"
                alt="lead_img"
              />
              <div className="top-left">Lead</div>
              <p className="top-left-para">
                {" "}
                AI-Powered Lead Scoring for E-commerce, pinpoints hot leads with
                AI to supercharge sales and sharpen targeting.
              </p>
              <ArrowButton linkSrc="https://github.com/kishlay42/AI_leadScore" />
            </div>
            <div className="mode"><Dark/></div>
          </div>
        </div>
        <div className="f">
          <div className="profile">
            <p className="top-profile">
              Hey, I’m Kishlay <br />I build cool, purpose-driven projects that
              blend tech, impact, and a whole lot of creativity. Let’s code the
              future!
            </p>

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
            <ul className="social-links">
              <li>
                <a
                  href="https://wa.me/7357037586"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whatsapp
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kishlaybhaskar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=kishlayk7357@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gmail
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Portfolio;
