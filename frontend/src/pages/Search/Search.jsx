import React from "react";
import Alert from "../../components/Alert/Alert";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";

import Card from "../../components/Card/Card";

const Search = () => {
  const { state } = useLocation();

  // Handling when state or state.results is null
  if (!state || !state.results || state.results.length === 0) {
    return (
      <>
        <Alert />
        <Nav />
        <div className="cards-container">
          <p>There is no restaurant based on your search.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Alert />
      <Nav />
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
      <Footer />
    </>
  );
};

export default Search;
