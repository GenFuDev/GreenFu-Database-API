import express from "express";
import controller from "../controllers/blogPost";
const router = express.Router();

router.get("/blogPost", controller.getPosts);
router.get("/blogPost/:id", controller.getPost);
router.put("/blogPost/:id", controller.updatePost);
router.delete("/blogPost/:id", controller.deletePost);
router.post("/blogPost", controller.addPost);

export = router;
