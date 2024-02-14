import "./config.mjs";

// auth config imports
import passport from "./auth/authConfig.mjs";

import { log } from "console";
import express from "express";
// import session from "express-session";
import flash from "connect-flash";
// import MongoStore from "connect-mongo";

import path from "path";
import url from "url";
import cors from "cors";

// routes import
// import newsRoutes from "./routes/newsRoutes.mjs";
// import authRoutes from "./routes/authRoutes.mjs";
import restaurantRoutes from "./routes/restaurantRoutes.mjs";

const app = express(); // create app instance

// static express
const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
app.use(express.static(path.join(_dirname, ".", "public")));

// api sends to the frontend
app.use(cors());

// body parser
app.use(express.urlencoded({ extended: false }));

// authentications
// app.use(
//   session({
//     secret: "your secret key",
//     resave: false,
//     saveUninitialized: true,
//     store: MongoStore.create({ mongoUrl: process.env.DSN }),
//     cookie: { secure: true }, // Set to true if using https
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

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
// app.use("/api/auth", authRoutes);

// TESTING DATA
app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/data", (req, res) => {
  const data = {
    message: "Hello from the server",
  };
  res.json(data);
});

// END TESTING DATA

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  log(`Server is running on port ${PORT}`);
});
