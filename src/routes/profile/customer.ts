import express from "express";
import { blogPost as controller } from "../../controllers/content";
const router = express.Router();

router.get("/customer", controller.getPosts);
router.get("/customer/:id", controller.getPost);
router.put("/customer/:id", controller.updatePost);
router.delete("/customer/:id", controller.deletePost);
router.post("/customer", controller.addPost);

export = router;
