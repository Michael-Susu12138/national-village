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
    const newRestaurant = new db.Restaurant(req.body);
    const savedRestaurant = await newRestaurant.save();
    res.status(201).json(savedRestaurant);
  } catch (err) {
    res.status(500).send(err);
  }
};

export { getAllRestaurants, createRestaurant };
