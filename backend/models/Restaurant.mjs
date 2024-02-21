import mongoose from "mongoose";

// mongoose.connect(process.env.DSN);

const RestaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true, // Ensure name is unique
    },
    summary: {
      type: String,
    },
    rating: {
      type: Number,
    },
    location: {
      type: String,
      required: true,
      unique: true, // Ensure location is unique
    },
    publishedDate: {
      type: Date,
      default: Date.now,
    },
    updatedDate: {
      type: Date,
      default: null,
    },
    category: {
      type: String,
      required: true,
    },
    tags: [String],
    imageUrl: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
); // Use timestamps for createdAt and updatedAt

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

export default Restaurant;
