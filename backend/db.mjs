import Restaurant from "./models/Restaurant.mjs";
import User from "./models/User.mjs";
import mongoose from "mongoose";

// mongoose.connect(process.env.DSN);

mongoose
  .connect(process.env.DSN, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.error("MongoDB connection error:", err));

const db = {
  mongoose: mongoose,
  Restaurant: Restaurant,
  User: User,
};

export default db;
