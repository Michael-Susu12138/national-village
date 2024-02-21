import db from "../db.mjs";

const getAllRestaurants = async (req, res) => {
  try {
    const restaurant = await db.Restaurant.find();
    res.json(restaurant);
    // res.body(news);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createRestaurant = async (req, res) => {
  try {
    const { name, location } = req.body;
    const existingRestaurant = await db.Restaurant.findOne({ name, location });

    if (existingRestaurant) {
      // Respond with a conflict status and a message indicating the conflict, including the existing restaurant's data
      return res.status(409).json({
        message: "Restaurant with this name and location already exists.",
        existingRestaurant: existingRestaurant,
      });
    }

    const newRestaurant = new db.Restaurant(req.body);
    const savedRestaurant = await newRestaurant.save();
    res.status(201).json(savedRestaurant);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateRestaurant = async (req, res) => {
  try {
    // Extract name or location from the request body to use as the search criterion
    const { name, location } = req.body.searchCriteria;
    const updateData = req.body.updateData;

    // Build the query to find the restaurant by name or location
    let query = {};
    if (name) query.name = name;
    if (location) query.location = location;

    // Find the restaurant by name or location and update it
    // Option `new: true` returns the document after the update was applied
    const updatedRestaurant = await db.Restaurant.findOneAndUpdate(
      query,
      updateData,
      { new: true }
    );

    if (!updatedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.json(updatedRestaurant);
  } catch (err) {
    res.status(500).json({ message: "Error updating restaurant", error: err });
  }
};

const deleteAllRestaurants = async (req, res) => {
  try {
    await db.Restaurant.deleteMany({});
    res
      .status(200)
      .json({ message: "All restaurants have been deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Error deleting restaurants", error: err });
  }
};

export {
  getAllRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteAllRestaurants,
};
