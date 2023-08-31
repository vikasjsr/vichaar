import React, { useContext, useEffect, useState } from "react";
import format from "date-fns/format";
import api from "../../api/posts";
import AppContext from "../../context/AppContext";
import {toast} from 'react-toastify'

const UpdatePopup = ({ setShowUpdatePopup, postId }) => {
  const { posts, setPosts } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const closeUpdatePopup = () => {
    setShowUpdatePopup(false);
  };

  const handleEdit = async () => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = {
      title,
      datetime,
      description,
    };
    try {
      const response = await api.put(
        `http://localhost:5000/api/vichaar/posts/${postId}`,
        updatedPost
      );
      // Update the state after the API call

      console.log(response);

      setPosts((prevPosts) =>
        prevPosts.map((post) => (post._id === postId ? { updatedPost } : post))
      );
      setTitle("");
      setDescription("");
      closeUpdatePopup();
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message, {
          position: "top-center",
          autoClose: 1000,
        });
        //  console.log(err.response.data);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  console.log("update is working");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black">
      <div className="bg-gradient-to-r from-lime-200 to-lime-400 p-6 rounded-lg shadow-md relative">
        <button
          className="absolute top-2 right-2 text-red-800 hover:text-gray-800"
          onClick={closeUpdatePopup}
        >
          Close
        </button>
        <form className="space-y-4 mt-4" onClick={(e) => e.preventDefault()}>
          <input
            className="w-full p-2 border rounded"
            type="text"
            value={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Update title"
          />
          <textarea
            className="w-full p-2 border rounded"
            rows="4"
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Update description"
          ></textarea>

          <button
            className="bg-lime-800 text-white py-2 px-4 rounded hover:text-lime-300"
            type="submit"
            onClick={() => handleEdit()}
          >
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePopup;
