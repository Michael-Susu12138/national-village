import bcrypt from "bcrypt";
import passport from "passport";
import User from "../models/User.mjs";

const registerUser = async (req, res) => {
  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(409).json({ message: "Username is already taken" });
    }

    // If the username doesn't exist, proceed with creating a new user
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error registering new user" });
  }
};

const loginUser = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      // Store user info in session
      req.session.user = { id: user.id, username: user.username };
      return res.status(200).json({ message: "Logged in successfully" });
    });
  })(req, res, next);
};

const logoutUser = (req, res) => {
  req.logout();
  req.session.destroy(); // Destroy the session
  res.status(200).json({ message: "Logged out successfully" });
};

const currentUser = (req, res) => {
  if (req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.json({ user: null });
  }
};

export { registerUser, loginUser, logoutUser, currentUser };
