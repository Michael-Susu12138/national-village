// Import necessary packages
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import db from "../db.mjs"; // Update this path

// Local strategy for username and password authentication
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await db.User.findOne({ username });
      if (!user) {
        return done(null, false, { message: "User not found." });
      }

      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        return done(null, false, { message: "Invalid password." });
      }

      return done(null, user); // User authenticated
    } catch (err) {
      return done(err);
    }
  })
);

// Serialize user (optional, if you need session handling)
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// Deserialize user (optional, if you need session handling)
passport.deserializeUser((id, done) => {
  db.User.findById(id, function (err, user) {
    done(err, user);
  });
});

export default passport;
