import express from "express";
import {
  getAllRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteAllRestaurants,
} from "../controllers/restaurantController.mjs";

const router = express.Router();

router.get("/", getAllRestaurants);
router.post("/add", createRestaurant);
router.put("/update", updateRestaurant);
router.delete("/delete-all", deleteAllRestaurants);

// function isAuthenticated(req, res, next) {
//   if (req.session.user) {
//     return next();
//   }
//   res.status(401).json({ message: "Unauthorized" });
// }

export default router;
