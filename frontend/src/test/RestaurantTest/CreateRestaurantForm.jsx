import React, { useState } from "react";

function CreateRestaurantForm() {
  const [restaurant, setRestaurant] = useState({
    name: "",
    summary: "",
    rating: "",
    location: "",
    category: "",
    tags: [],
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant((prev) => ({
      ...prev,
      [name]: name === "tags" ? value.split(",") : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "" + import.meta.env.VITE_API + "api/restaurant/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...restaurant,
            rating: restaurant.rating ? Number(restaurant.rating) : undefined,
            tags: restaurant.tags.filter(Boolean), // Remove empty strings from tags array
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to create restaurant");
      const data = await response.json();
      console.log("Restaurant created:", data);
      // Handle success (e.g., showing a success message, redirecting, etc.)
    } catch (error) {
      console.error("Error creating restaurant:", error);
      // Handle error (e.g., showing an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={restaurant.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="summary"
        value={restaurant.summary}
        onChange={handleChange}
        placeholder="Summary"
      />
      <input
        type="number"
        name="rating"
        value={restaurant.rating}
        onChange={handleChange}
        placeholder="Rating"
      />
      <input
        type="text"
        name="location"
        value={restaurant.location}
        onChange={handleChange}
        placeholder="Location"
        required
      />
      <input
        type="text"
        name="category"
        value={restaurant.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        type="text"
        name="tags"
        value={restaurant.tags.join(",")}
        onChange={handleChange}
        placeholder="Tags (comma separated)"
      />
      <input
        type="text"
        name="imageUrl"
        value={restaurant.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <button type="submit">Create Restaurant</button>
    </form>
  );
}

export default CreateRestaurantForm;
