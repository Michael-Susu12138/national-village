import express from "express";
import {
  getAllRestaurants,
  createRestaurant,
} from "../controllers/restaurantController.mjs";

const router = express.Router();

router.get("/", getAllRestaurants);
router.post("/add", createRestaurant);

// function isAuthenticated(req, res, next) {
//   if (req.session.user) {
//     return next();
//   }
//   res.status(401).json({ message: "Unauthorized" });
// }

export default router;
