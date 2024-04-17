import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  // name, discount, summary, rating, location, tags, imgURL;
  const navigate = useNavigate();
  const navigateToDestination = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    navigate("/detail", { state: props });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <img src={props.imgURL} alt="rover" />
        </div>
        <div className="card-body">
          <div className="tag-list">
            {props.tags.map((tag, index) => (
              <span key={index} className="tag tag-teal">
                {tag}
              </span>
            ))}
          </div>
          <h4>{props.name}</h4>
          <p>{props.summary}</p>
          <div className="user">
            <a href="#" onClick={navigateToDestination}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  fill="#f9064f"
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
            </a>

            <div className="user-info">
              <h5>{props.location}</h5>
              {/* <small>2h ago</small> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
