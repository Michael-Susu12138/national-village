import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { default as passportConfig } from "../passports/passportConfig.mjs";

import db from "../db.mjs";

const getAllUsers = async (req, res) => {
  try {
    const users = await db.User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createUser = async (req, res) => {
  try {
    const { email, username } = req.body;
    // Consider adding more rigorous validation/sanitization for email and username here
    const existingUser = await db.User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User with this email or username already exists.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new db.User({
      ...req.body,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    // Log the error for debugging purposes
    console.error("Error creating user:", err);
    res
      .status(500)
      .json({ message: "An error occurred while creating the user." });
  }
};

const updateUser = async (req, res) => {
  try {
    const { email } = req.body.searchCriteria;
    const updateData = req.body.updateData;

    if (updateData.password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(updateData.password, salt);
    }

    const updatedUser = await db.User.findOneAndUpdate({ email }, updateData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Error updating user", error: err });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { email } = req.body;
    const deletedUser = await db.User.findOneAndDelete({ email });

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err });
  }
};

// Assuming you're using express and this is part of your routes setup
// const loginUser = (req, res, next) => {
//   passportConfig.authenticate("local", (err, user, info) => {
//     if (err) {
//       return res.status(500).json({ message: "Error logging in", error: err });
//     }
//     if (!user) {
//       return res.status(404).json({ message: info.message });
//     }

//     // You can also use req.login() here if you're using session-based authentication
//     // Generate a token as before
//     const token = jwt.sign(
//       { userId: user._id, email: user.email },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({ message: "Logged in successfully", token: token });
//   })(req, res, next);
// };

const loginUser = (req, res, next) => {
  passportConfig.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: "Error logging in", error: err });
    }
    if (!user) {
      return res.status(404).json({ message: info.message });
    }

    // Establishing a session upon successful authentication
    req.session.user = { id: user._id, email: user.email }; // Store essential user info in session

    req.session.isAuthenticated = true; // Flag to easily check the login status
    console.log(req.session);

    res.status(200).json({ message: "Logged in successfully" });
  })(req, res, next);
};

export { getAllUsers, createUser, updateUser, deleteUser, loginUser };
