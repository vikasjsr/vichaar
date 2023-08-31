import mongoose from "mongoose";

const post = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter the title"],
      unique: true,
    },
    author: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Please enter the description"],
    },
    // photo: {
    //   public_id: {
    //     type: String,
    //     required: true,
    //   },
    //   url: {
    //     type: String,
    //     required: true,
    //   },
    // },
    createdby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", post);
