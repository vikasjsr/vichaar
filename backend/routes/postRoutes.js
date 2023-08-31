import express from "express";
import {
  createPost,
  deletePost,
  updatePost,
  getMyPosts,
  getAllPosts
} from "../controllers/postController.js";

import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//  create post
router.route("/createpost").post(isAuthenticated, createPost);

// get all my posts 
router.route("/getallmyposts").get(isAuthenticated, getMyPosts);

// get all posts 
router.route("/getallposts").get(isAuthenticated, getAllPosts);

// delete post
router
  .route("/posts/:id")
  .delete(isAuthenticated, deletePost)
  .put(isAuthenticated, updatePost);

export default router;
