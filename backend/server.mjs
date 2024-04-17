import "./config.mjs";

import { log } from "console";
import express from "express";
// auth config imports
import { default as passportConfig } from "./passports/passportConfig.mjs";

// import session from "express-session"; session management
import flash from "connect-flash";
// import MongoStore from "connect-mongo";
import session from "express-session";
// mongodb session store
import MongoStore from "connect-mongo";
import mongoose from "mongoose";

import path from "path";
import url from "url";
import cors from "cors";

// routes import
// import newsRoutes from "./routes/newsRoutes.mjs";
// import authRoutes from "./routes/authRoutes.mjs";
import restaurantRoutes from "./routes/restaurantRoutes.mjs";
import userRoutes from "./routes/userRoutes.mjs";

const app = express(); // create app instance

// static express
const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
app.use(express.static(path.join(_dirname, ".", "public")));

// api sends to the frontend
app.use(
  cors({
    origin: process.env.FRONT_END, // Adjust this to your front-end's origin
    // origin: "http://localhost:5173",
    credentials: true, // This is essential for cookies to be sent
  })
);

// body parser
app.use(express.urlencoded({ extended: false }));

// authentications
app.use(express.json()); // For parsing application/json
app.use(passportConfig.initialize()); // Initialize Passport

// session management

// session management
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Use a strong, random secret for session encryption
    resave: false, // Avoid resaving sessions that haven't changed
    saveUninitialized: false, // Don't create a session until something is stored
    store: MongoStore.create({
      mongoUrl: process.env.DSN, // Optionally, directly use Mongoose connection
      client: mongoose.connection.getClient(), // Leverage existing Mongoose connection
      collectionName: "sessions", // The collection to store sessions in; defaults to 'sessions'
    }),
    cookie: {
      secure: process.env.NODE_ENV === "production", // Secure cookies in production for HTTPS
      httpOnly: true, // Protect against client-side scripting attacks
      maxAge: 1000 * 60 * 60 * 24, // Example: 1 day
    },
  })
);

app.use(flash()); // for warnings

app.use((req, res, next) => {
  log("request Method: ", req.method);
  log("request Path: ", req.path);
  log("request Query: ", req.query);
  log("request Body: ", req.body);
  log("\n");
  next();
});

app.use(express.json());

// api endpoints
// news handeling
app.use("/api/restaurant", restaurantRoutes);
app.use("/api/user", userRoutes);

// TESTING DATA
app.get("/", (req, res) => {
  res.send("Hello");
  // console.log("Session data:", req.session);
});

app.get("/api/data", (req, res) => {
  const data = {
    message: "Hello from the server",
  };
  res.json(data);
});

// app.post("/api/user/add", (req, res) => {
//   return res
//     .status(200)
//     .json({ message: "Route reached successfully", data: req.body });
// });

// END TESTING DATA

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  log(`Server is running on port ${PORT}`);
});
