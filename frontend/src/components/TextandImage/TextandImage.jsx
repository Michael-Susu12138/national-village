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
            <h3 className="step-title">
              Step 1: <span class="green-text">Signing Up!</span>
            </h3>
            <p className="step-text">
              National Village relies on community. That's why your step should
              be making an account! Making an account allows you to add
              restaurants, modify details of existing ones, or vote to delete
              restaurants that no longer exist or a student discount. Three
              votes = deletion!
            </p>
          </div>
        </div>

        {/* Step 2 (Reversed) */}
        <div className="step step-reverse">
          <div className="step-image">
            <img src="src/assets/searchanimation.gif" alt="Step 2" />
          </div>
          <div className="step-content">
            <h3 className="step-title">
              Step 2:{" "}
              <span className="green-text">Search for restaurants!</span>
            </h3>
            <p className="step-text">
              Feel free to use the search bar, or click your corresponding NYU
              campus above (we'd like to add more schools, but this is ground
              zero!). Search for restaurants by name, category (Anyone down to
              go to a pizzeria?), or by proximity to your location. The entirety
              of our crowdsourced database is at your fingertips!
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="step">
          <div className="step-image">
            <img src="src/assets/Placeholder.jpg" alt="Step 3" />
          </div>
          <div className="step-content">
            <h3 className="step-title">
              Step 3: <span className="green-text">Title</span>
            </h3>
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
            <h3 className="step-title">
              Step 4: <span className="green-text">Title</span>
            </h3>
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
