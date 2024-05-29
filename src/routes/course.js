import express from "express";
import courseController from "../app/controllers/courseController.js";

const router = express.Router();

router.get("/create", courseController.create)


router.post("/store", courseController.store)


router.get("/:slug", courseController.index);

// router.get("/", newsController.index);

export default router;
