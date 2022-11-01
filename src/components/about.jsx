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
            after graduating from the University of Alabama, also her home
            state, with a degree in Art History. During the 10 years she spent
            under the influence of Redd’s use of color and sense of traditional
            modernism, Brunson developed her own unique voice that showcases
            detailed interiors with an edited, modern flair, leaving room for
            dramatic features and showstopper pieces. In 2017, Brunson was named
            a Next Wave Designer by House Beautiful.
          </p>
          <p>
            In January 2021, Brunson opened her own residential interior design
            firm, Blake Brunson Inc., which currently operates out of the
            National Arts Club. Her work references her Southern roots in
            Alabama, balancing a respect for history with irreverence cultivated
            by her time in New York. Brunson has written and produced for House
            Beautiful and Architectural Digest and had her work featured in the
            Big Book of Chic. She lives in New York.
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
