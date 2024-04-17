import React from "react";
import "./BackgroundImage.css"; // Import your CSS file for styling

const BackgroundImage = () => {
  return (
    <div className="landing-page">
      <div className="overlay">
        <h1>Welcome to the National Village.</h1>
        <p>
          Because it takes a <span>village.</span>
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default BackgroundImage;
