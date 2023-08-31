import React, { useContext, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../../api/posts";
import AppContext from "../../context/AppContext";

const CreatePost = () => {
  const navigate = useNavigate();

  const { posts, setPosts } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newPost = { title, description };
    try {
      const response = await api.post(
        "http://localhost:5000/api/vichaar/createpost",
        newPost
      );

      // console.log(response.data.post);

      const allPosts = [...posts, response.data.post];
      setPosts(allPosts);
      setTitle("");
      setDescription("");
      setIsSubmitting(false);
      toast.success("Created successfully!", {
        position: "top-center",
        autoClose: 1000,
      });
      navigate("/home");
    } catch (err) {
      console.log(`Error: ${err.message}`);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-4 py-8 lg:py-16 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-2xl md:text-4xl tracking-tight text-center text-lime-800 italic font-semibold">
        Crafting Your Story
      </h2>
      <p className="mb-6 md:mb-10 text-sm md:text-base font-light text-center text-gray-900">
        Create a New Blog Post Unleash your creativity and share your thoughts
        with the world by creating a new blog post on our platform. Our
        user-friendly create page makes it easy to compose your post. Start
        shaping your narrative today and watch your words come to life!
      </p>
      <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="title"
            className="block text-sm md:text-base font-medium text-[#07074D]"
          >
            Your Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="w-full mt-2 bg-white rounded-md py-2 md:py-3 px-3 md:px-4 text-base md:text-sm font-medium text-[#6B7280] outline-none focus:border-lime-400 focus:shadow-md"
            placeholder="Your title"
            required
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm md:text-base font-medium text-[#07074D]"
          >
            Your Post
          </label>
          <textarea
            id="description"
            rows="6"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="w-full mt-2 bg-white rounded-md py-2 md:py-3 px-3 md:px-4 text-base md:text-sm font-medium text-[#6B7280] outline-none focus:border-lime-400 focus:shadow-md"
            placeholder="Leave your message..."
            required
          ></textarea>
        </div>

        {/* <div>
          <label
            htmlFor="image"
            className="block text-sm md:text-base font-medium text-[#07074D]"
          >
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="image"
            name="image"
            onChange={(e) => {
              const selectedImage = e.target.files[0];
              // You can save the selectedImage in state or handle it as needed.
            }}
            className="w-full mt-2"
          />
        </div> */}

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="hover:shadow-form rounded-md bg-lime-700 hover:bg-lime-600 py-2 md:py-3 px-8 md:px-10 text-center text-base md:text-sm font-semibold text-white outline-none"
          >
            <FaTelegramPlane className="text-xl md:text-2xl" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
