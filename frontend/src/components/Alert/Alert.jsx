import PropTypes from "prop-types";

import "./Alert.css";

const Alert = ({ children }) => {
  return (
    <div className="css-1nt1bs9">
      <a>
        <div className="css-1tv2y24">
          <h2 className="css-jax8d3">
            Welcome to National Village - a free resource that's by students,
            for students.
          </h2>
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
