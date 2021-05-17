import React from "react";
import borderTop from "../images/BB_top_art.png";
import "./borderTop.css";

const BorderTop = () => {
  return (
    <div id="border-top__container">
      <img src={borderTop} alt="border" id="border-top__image" />
    </div>
  );
};

export default BorderTop;
