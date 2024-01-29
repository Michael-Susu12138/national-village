import db from "../db.mjs";

const getAllNews = async (req, res) => {
  try {
    const news = await db.News.find();
    res.json(news);
    // res.body(news);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createNews = async (req, res) => {
  try {
    const newNews = new db.News(req.body);
    const savedNews = await newNews.save();
    res.status(201).json(savedNews);
  } catch (err) {
    res.status(500).send(err);
  }
};

export { getAllNews, createNews };
