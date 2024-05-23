import express from "express";
import newsController from "../app/controllers/newsController.js";

const router = express.Router();

router.get("/", newsController.index);

// router.get("/", newsController.index);

export default router;
