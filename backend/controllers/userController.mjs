import bcrypt from "bcryptjs-react";
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
    res.status(500).send(err);
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

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Ideally, generate a token for the user here
    res
      .status(200)
      .json({ message: "Logged in successfully" /*, token: 'YourTokenHere'*/ });
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err });
  }
};

export { getAllUsers, createUser, updateUser, deleteUser, loginUser };
