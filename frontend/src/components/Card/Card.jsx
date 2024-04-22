import React from "react";
import "./Card.css"; // Ensure CSS is correctly linked
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/authContext";

const Card = (props) => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const navigateToDestination = (event) => {
    event.preventDefault();
    navigate("/detail", { state: props });
  };

  const alertLogin = () => {
    alert("You need to login to enjoy our GPS service");
  };

  // Function to render star ratings using FontAwesome SVG
  const renderStars = (rating) => {
    const stars = [];
    const totalStars = 5;
    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <svg
          key={i}
          className="star"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d={
              i < rating
                ? "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                : "M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
            }
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">

          <img src={props.imgURL} alt={props.name} />
          <div className="rating-overlay">
            {renderStars(props.rating)} {props.rating}/5
          </div>
        </div>
        <div className="card-body">

          <div className="tag-list">
            {props.tags.map((tag, index) => (
              <span key={index} className="tag tag-teal">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="card-body">
          <div className="steve">
            <h4>{props.name}</h4>
            <div className="rating-overlay">{renderStars(props.rating)}</div>
          </div>
          <p>{props.summary}</p>
          <div className="discount">
            <span>{props.discount}% OFF</span>
          </div>
          <div className="user">
            <a
              href="#"
              onClick={auth.isLoggedIn ? navigateToDestination : alertLogin}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  fill="#e13333"
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
            </a>
            <div className="user-info">
              <h5>{props.location}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
