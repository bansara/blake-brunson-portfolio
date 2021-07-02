import React from "react";
import "./about.css";
import headshot from "../images/headshot.jpg";
import BorderBottom from "./borderBottom";
import BorderTop from "./borderTop";

const About = () => {
  return (
    <>
      <BorderTop />
      <div className="about">
        <div className="bio-photo">
          <div className="border">
            <img src={headshot} id="headshot" alt="Blake Brunson headshot" />
          </div>
        </div>
        <div className="bio-text">
          <h2>
            <span>ABOUT BLAKE</span>
          </h2>
          <p>
            Blake Brunson joined Miles Redd’s acclaimed design firm in 2010
            after graduating from the University of Alabama with a degree in Art
            History. While influenced by Redd's use of color and sense of
            traditional modernism, Brunson's unique voice showcases detailed
            interiors with an edited, modern flair, leaving room for dramatic
            features and showstopper pieces. Her work references her Southern
            roots in Alabama, balancing a respect for history with irreverence
            cultivated by her time in New York. In 2017, Brunson was named a
            Next Wave Designer by House Beautiful. Brunson has written and
            produced for House Beautiful and Architectural Digest. She lives in
            New York.
          </p>
          <p style={{ fontSize: "small", marginTop: "1em" }}>
            Photo by Jessica Antola
          </p>
        </div>
      </div>
      <BorderBottom />
    </>
  );
};

export default About;
