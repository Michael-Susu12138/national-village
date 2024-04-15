import express from "express";
import { getAllNews, createNews } from "../controllers/newsController.mjs";

const router = express.Router();

router.get("/", getAllNews);
router.post("/add", isAuthenticated, createNews);

function isAuthenticated(req, res, next) {
  if (req.session.user) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized" });
}

export default router;
