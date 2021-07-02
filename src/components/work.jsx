import React from "react";
import BorderTop from "./borderTop";
import BorderBottom from "./borderBottom";
import "./work.css";
import i1 from "../images/1.jpg";
import i2 from "../images/3.jpg";
import i3 from "../images/2.jpg";
import i5 from "../images/5.jpg";
import i6 from "../images/6.jpg";
import i8 from "../images/8.jpg";
import i10 from "../images/10.jpg";
import i11 from "../images/11.jpg";
import i12 from "../images/12.jpg";
import i13 from "../images/13.jpg";
import i14 from "../images/14.jpg";
import i15 from "../images/15.jpg";
import i17 from "../images/17.jpg";
import i18 from "../images/18.jpg";

const Work = () => {
  const interiors = [
    i1,
    i2,
    i3,
    i5,
    i6,
    i8,
    i10,
    i11,
    i12,
    i14,
    i15,
    i17,
    i18,
  ];
  return (
    <>
      <BorderTop />
        <div className="featured-img">
          <img src={i13} alt="interior design by Blake Brunson" />
        </div>
      <div className="work">
        {interiors.map((src, i) => (
          <div className="project" key={i}>
            <img src={src} alt="interior design by Blake Brunson" />
          </div>
        ))}
      </div>
      <p>Photography by Reid Rolls</p>
      <BorderBottom />
    </>
  );
};

export default Work;
