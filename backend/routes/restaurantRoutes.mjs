import express from "express";
import {
  getAllRestaurants,
  createRestaurant,
} from "../controllers/newsController.mjs";

const router = express.Router();

router.get("/", getAllRestaurants);
router.post("/add", isAuthenticated, createRestaurant);

// function isAuthenticated(req, res, next) {
//   if (req.session.user) {
//     return next();
//   }
//   res.status(401).json({ message: "Unauthorized" });
// }

export default router;
