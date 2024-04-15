import express from "express";
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} from "../controllers/userController.mjs";

const router = express.Router();

// Middleware to ensure the user is authenticated
const ensureAuthenticated = (req, res, next) => {
  if (req.session.isAuthenticated) {
    return next(); // Continue to the next middleware/route handler
  }
  console.log(req.session);
  // If not authenticated, send an unauthorized response
  res.status(401).json({ message: "Unauthorized" });
};

// console.log(ensureAuthenticated)
// Retrieve all users - Assuming this needs authentication
router.get("/", ensureAuthenticated, getAllUsers);

// Add a new user - Typically open for everyone
router.post("/add", createUser);

// Update an existing user - Requires authentication
router.put("/update", ensureAuthenticated, updateUser);

// Delete a user - Requires authentication
router.delete("/delete", ensureAuthenticated, deleteUser);

// Login a user - Open for everyone
router.post("/login", loginUser);

// Example of adding a logout route, which also requires authentication
router.get("/logout", ensureAuthenticated, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Error logging out", error: err });
    }
    res.status(200).json({ message: "Logged out successfully" });
  });
});

// More routes can be added here with or without the ensureAuthenticated middleware based on the need for protection
export default router;
