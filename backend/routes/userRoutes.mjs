import express from "express";
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} from "../controllers/userController.mjs";

const router = express.Router();

// Retrieve all users
router.get("/", getAllUsers);

// Add a new user
router.post("/add", createUser);

// Update an existing user
// Assuming update details are passed in the body
router.put("/update", updateUser);

// Delete a user
// This could be done by email or a unique identifier passed in the body
router.delete("/delete", deleteUser);

// Login a user
router.post("/login", loginUser);

// You could also include middleware for authentication before certain routes if needed, similar to the commented isAuthenticated function
// For example, using isAuthenticated middleware on routes that require a user to be logged in:
// router.get("/secure-route", isAuthenticated, someSecureFunction);

export default router;
