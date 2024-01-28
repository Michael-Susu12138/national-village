import passport from "passport";
import LocalStrategy from "passport-local";
import bcrypt from "bcrypt";
import User from "../models/User.mjs";

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }

      // Temporarily bypass the password check for debugging
      //   console.log(password);
      //   console.log(user?.password);
      //   console.log(await bcrypt.compare(password, user.password));

      // for debugging purposes, using admin only for adding news
      console.log(username);
      if (username === "admin1" && password === "123") {
        // admin access
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect password." });
      }
      //   if()

      // Original password check code
      // const isMatch = await bcrypt.compare(password, user.password);
      // if (!isMatch) {
      //   return done(null, false, { message: "Incorrect password." });
      // }
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

export default passport;
