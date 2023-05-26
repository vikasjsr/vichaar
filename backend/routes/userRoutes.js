import express from "express";
import { register, login, logout } from "../controllers/userControllers.js";

const router = express.Router();

// register user
router.route("/register").post(register);

// register user
router.route("/login").post(login);

// logout user
router.route("/logout").get(logout);

export default router;
