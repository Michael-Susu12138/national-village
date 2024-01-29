import mongoose from "mongoose";

mongoose.connect(process.env.DSN);

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
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
  readMoreUrl: {
    type: String,
    default: null,
  },
});

const News = mongoose.model("News", NewsSchema);

export default News;
