import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Post } from "../models/Post.js";
// const cloudinary = require('cloudinary').v2;

// cloudinary.config({
//   cloud_name: 'your_cloud_name',
//   api_key: 'your_api_key',
//   api_secret: 'your_api_secret',
// });

// to create a post
export const createPost = catchAsyncError(async (req, res, next) => {
  const { title, description } = req.body;

  if (!(title && description))
    return next(new ErrorHandler("Please enter all field", 400));

  const post = await Post.create({
    title,
    description,
    createdby: req.user._id,
    author:req.user.name
  });

  res.status(200).json({
    success: true,
    message: "Post added successfully",
    post,
  });
});

// to delete a post
export const deletePost = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const findPost = await Post.findById(id);

  if (!findPost) return next(new ErrorHandler("Post not found", 401));

  const { createdby } = findPost;

  if (req.user._id.equals(createdby)) {
    await findPost.deleteOne();

    res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });
  } else
    return next(
      new ErrorHandler("You are not authorized to delete this post", 401)
    );
});

// to update a post
export const updatePost = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const findPost = await Post.findById(id);

  const { createdby } = findPost;

  if (!findPost) return next(new ErrorHandler("Post not found", 401));

  if (req.user._id.equals(createdby)) {
    const updatedPost = await findPost.updateOne(
      {
        $set: req.body, //take argument {title or description} to update post;
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Post updated successfully",
      updatedPost,
    });
  } else
    return next(
      new ErrorHandler("You are not authorized to update this post", 401)
    );
});

// get all your post
export const getMyPosts = catchAsyncError(async (req, res, next) => {
  const createdby = req.user._id;
  const findPosts = await Post.find({ createdby });
  if (findPosts.length === 0)
    return next(new ErrorHandler("You have not created any post", 401));

  res.status(200).json({
    success: true,
    message: "Your all posts found successfully",
    findPosts,
  });
});

// get all posts
export const getAllPosts = catchAsyncError(async (req, res, next) => {
  const findPosts = await Post.find();
  if (findPosts.length === 0)
    return next(new ErrorHandler("There is not any post", 401));

  res.status(200).json({
    success: true,
    message: "All posts found successfully",
    findPosts,
  });
});
