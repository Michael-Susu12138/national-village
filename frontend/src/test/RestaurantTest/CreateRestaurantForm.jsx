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
        `${import.meta.env.VITE_API}api/restaurant/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...restaurant,
            rating: restaurant.rating ? Number(restaurant.rating) : undefined,
            tags: restaurant.tags.filter(Boolean),
          }),
        }
      );

      const data = await response.json(); // Parse JSON in all cases

      if (response.status === 409) {
        // Duplicate found
        const update = window.confirm(
          `${data.message}\nDo you want to update the existing restaurant?`
        );
        if (update) {
          // Implement update logic here
          // Example: Send a PUT request to update the existing restaurant
          const updateResponse = await fetch(
            `${import.meta.env.VITE_API}api/restaurant/update`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                searchCriteria: {
                  name: restaurant.name,
                  location: restaurant.location,
                },
                updateData: {
                  $set: {
                    ...restaurant,
                    tags: restaurant.tags.filter(Boolean),
                  },
                },
              }),
            }
          );

          if (updateResponse.ok) {
            const updatedData = await updateResponse.json();
            console.log("Restaurant updated:", updatedData);
            alert("Restaurant updated successfully.");
          } else {
            throw new Error("Failed to update restaurant");
          }
        } else {
          const addNew = window.confirm(
            "Do you want to add as a new instance instead?"
          );
          if (!addNew) {
            // Undo submission or modify data
            console.log("User chose to undo or modify submission.");
            return; // Exit without doing anything
          }
          // Here you might handle adding as a new instance differently, if allowed
        }
      } else if (response.status === 201) {
        console.log("Restaurant created:", data);
        alert("Restaurant created successfully.");
      } else {
        throw new Error("Failed to create restaurant");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleDeleteAllRestaurants = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete ALL restaurants? This action cannot be undone."
    );
    if (confirmDelete) {
      try {
        const response = await fetch(
          import.meta.env.VITE_API + "api/restaurant/delete-all",
          {
            method: "DELETE",
          }
        );
        if (!response.ok) throw new Error("Failed to delete restaurants");
        alert("All restaurants have been successfully deleted.");
        // Optionally, refresh the list or redirect the user
      } catch (error) {
        console.error("Error deleting restaurants:", error);
        alert("An error occurred while trying to delete restaurants.");
      }
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
      <button type="button" onClick={handleDeleteAllRestaurants}>
        Delete All Restaurants
      </button>
    </form>
  );
}

export default CreateRestaurantForm;
