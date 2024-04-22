import React from "react";
import "./BackgroundImage.css";

const BackgroundImage = () => {
  return (
    <div className="background-image">
      <div className="overlay">
        <h1>Welcome to the National Village.</h1>
        <p>
          Because it takes a <span className="village">village.</span>
        </p>
      </div>
    </div>
  );
};

export default BackgroundImage;
