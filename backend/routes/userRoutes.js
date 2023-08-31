import express from "express";
import {
  register,
  login,
  logout,
  getMyProfile,
} from "../controllers/userControllers.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// This route is just for testing purposes
// router.route("/").get((req, res) => {
//     console.log("This user router is working");
//     res.send("<h1>This router is working</h1>"); // Send a response to the client
// });

router.route("/register").post(register);

// register user
router.route("/login").post(login);

// Get my profile
router.route("/getmyprofile").get(isAuthenticated, getMyProfile);
// logout user
router.route("/logout").get(logout);

export default router;
