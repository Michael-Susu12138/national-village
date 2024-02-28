import React, { useState } from "react";

function SearchRestaurant() {
  const [query, setQuery] = useState({});
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const queryString = new URLSearchParams(query).toString();
    try {
      const response = await fetch(
        import.meta.env.VITE_API + `api/restaurant/search?${queryString}`
      );
      if (!response.ok) throw new Error("Search failed");
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="location"
          onChange={handleChange}
          placeholder="Location"
        />
        <input
          type="text"
          name="category"
          onChange={handleChange}
          placeholder="Category"
        />
        {/* Add more fields as necessary */}
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((restaurant) => (
          <li key={restaurant._id}>
            {restaurant.name} - {restaurant.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchRestaurant;
