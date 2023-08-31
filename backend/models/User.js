import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const COOKIE_SECRET = process.env.COOKIE_SECRET

const user = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: [6, "Password must be at least 6 characters"],
      select: false, //if we select the user password would not be shown
    },
    profilePic: {
      type: String,
    },
  },
  { timestamps: true }
);

user.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

user.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, "asdfghjkl", {
    expiresIn: "15d",
  });
};

user.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("User", user);
