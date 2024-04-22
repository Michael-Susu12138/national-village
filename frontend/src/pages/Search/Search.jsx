import React from "react";
import Alert from "../../components/Alert/Alert";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";

import Card from "../../components/Card/Card";

const Search = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <Alert></Alert>
      <Nav></Nav>
      {/* {state.results} */}
      {/* <ul>
        {state.results.map((restaurant) => (
          <li key={restaurant._id}>
            {restaurant.name} - {restaurant.location}
          </li>
        ))}
      </ul> */}
      <div className="cards-container">
        {state.results.map((restaurant) => (
          <div className="card-item" key={restaurant.id}>
            <Card
              name={restaurant.name}
              discount={restaurant.discount}
              summary={restaurant.summary}
              rating={restaurant.rating}
              location={restaurant.location}
              tags={restaurant.tags}
              imgURL={restaurant.imageUrl}
            />
          </div>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Search;
