import PropTypes from "prop-types";

import "./Alert.css";

const Alert = ({ children }) => {
  return (
    <div className="css-1nt1bs9">
      <a
        href="https://chrome.google.com/webstore/detail/student-beans/pdmhehfogekmpmdoemhabjpaiadagpgp"
        target="_blank"
        rel="noreferrer"
        className="css-sukrr0"
      >
        <div className="css-1tv2y24">
          <h2 className="css-jax8d3">
            Welcome to National Village - All Student Discounts are Free :D
          </h2>
          <svg
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Go to the Student Beans Chrome extension"
            className="css-13gjqqc"
          >
            <path
              d="M5 12H19"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12 5L19 12L12 19"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <div role="presentation" className="css-f1sakz"></div>
      </a>
      {children}
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.node,
};

export default Alert;
