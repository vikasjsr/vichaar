import mongoose from "mongoose";

const post = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter the title"],
      unique: true,
    },
    desc: {
      type: String,
      required: [true, "Please enter the description"],
    },
    photo: {
      type: String,
      required: false,
    },
    createdby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", post);
