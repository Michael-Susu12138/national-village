import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import "./Tandon.css";

const Tandon = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API}api/restaurant`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
        // Handle errors here, e.g., by setting an error message in state
      }
    };

    fetchRestaurants();
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <>
      <Nav></Nav>
      <div>
        <h1>Discounts Near Tandon</h1>
        <div className="cards-container">
          {restaurants.map((restaurant) => (
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
      </div>
      <Footer></Footer>
    </>
  );
};

export default Tandon;
