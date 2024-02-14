import mongoose from "mongoose";

mongoose.connect(process.env.DSN);

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
  },
  location: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  updatedDate: {
    type: Date,
    default: null,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
    },
  ],
  imageUrl: {
    type: String,
    default: null,
  },
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
// const News = mongoose.model("News", NewsSchema);

// export default News;
export default Restaurant;
