import React from "react";
import "./TextandImage.css";

const TextandImage = () => {
  return (
    <section className="how-it-works">
      <h2 className="section-title">How It Works</h2>
      <div className="steps-container">
        {/* Step 1 */}
        <div className="step">
          <div className="step-image">
            <img src="src/assets/signup.jpg" alt="Step 1" />
          </div>
          <div className="step-content">
            <h3 className="step-title">Step 1: Signing Up!</h3>
            <p className="step-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Step 2 (Reversed) */}
        <div className="step step-reverse">
          <div className="step-image">
            <img src="src/assets/Placeholder.jpg" alt="Step 2" />
          </div>
          <div className="step-content">
            <h3 className="step-title">Step 2: Title</h3>
            <p className="step-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="step">
          <div className="step-image">
            <img src="src/assets/Placeholder.jpg" alt="Step 3" />
          </div>
          <div className="step-content">
            <h3 className="step-title">Step 3: Title</h3>
            <p className="step-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Step 4 (Reversed) */}
        <div className="step step-reverse">
          <div className="step-image">
            <img src="src/assets/Placeholder.jpg" alt="Step 4" />
          </div>
          <div className="step-content">
            <h3 className="step-title">Step 4: Title</h3>
            <p className="step-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextandImage;
