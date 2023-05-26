import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Post } from "../models/Post.js";

// to create a post
export const createPost = catchAsyncError(async (req, res, next) => {
  const { title, desc } = req.body;
  if (!(title && desc))
    return next(new ErrorHandler("Please enter all field", 400));
  //   title must be unique
  const availablePost = await Post.findOne({ title });

  if (availablePost)
    return next(
      new ErrorHandler(
        "Post Already present..for changing the data please update the post",
        401
      )
    );

  const post = await Post.create({
    title,
    desc,
    createdby: req.user._id,
  });

  res.status(200).json({
    success: true,
    message: "Post added successfully",
    post,
  });
});

// to delete a post
export const deletePost = catchAsyncError(async (req, res, next) => {
  const findPost = await Post.findById(req.params.id);

  if (!findPost) return next(new ErrorHandler("Post not found", 401));

  if (req.user._id.equals(findPost.createdby)) {
    await findPost.deleteOne();

    res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });
  } else
    return next(
      new ErrorHandler("You are authorized to delete this post", 401)
    );
});

// to update a post
export const updateePost = catchAsyncError(async (req, res, next) => {
  const findPost = await Post.findById(req.params.id);

  if (!findPost) return next(new ErrorHandler("Post not found", 401));

  if (req.user._id.equals(findPost.createdby)) {
    await findPost.updateOne(
      {
        $set: req.body, //take argument {title or description} to update post;
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Post updated successfully",
    });
  } else
    return next(
      new ErrorHandler("You are authorized to update this post", 401)
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
