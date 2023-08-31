import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/posts";
import AppContext from "../../context/AppContext";
import {toast} from 'react-toastify'

const DeletePopup = ({ setShowDeletePopup, postId }) => {
  const navigate = useNavigate();

  const { posts, setPosts } = useContext(AppContext);

  const closeDeletePopup = () => {
    setShowDeletePopup(false);
  };

  const handleDelete = async () => {
    try {
      await api.delete(`http://localhost:5000/api/vichaar/posts/${postId}`);
      const postsList = posts.filter((post) => post._id !== postId);
      setPosts(postsList);
      toast.success("Deleted successfully!", {
        position: "top-center",
        autoClose: 1000, 
      });
      navigate("/home");
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message, {
          position: "top-center",
          autoClose: 1000, 
        });
        //  console.log(err.response.data);
        
      } else {
        console.log(`error message: ${err.message}`);
      }
      closeDeletePopup();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black">
      <div className="bg-gradient-to-r from-lime-400 to-lime-200 text-black p-6 rounded-lg shadow-md relative">
        <button
          className="absolute top-2 right-2 text-red-500 hover:text-red-800"
          onClick={closeDeletePopup}
        >
          Close
        </button>
        <div className="text-center space-y-4 mt-4 ">
          <p>Are you sure you want to delete this post?</p>
          <div className="flex justify-evenly">
            <button
              className="bg-red-400 text-white py-2 px-4 rounded hover:bg-red-700"
              type="button"
              onClick={() => handleDelete()}
            >
              Yes
            </button>
            <button
              className="bg-lime-400 text-white py-2 px-4 rounded hover:bg-lime-700"
              type="button"
              onClick={closeDeletePopup}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
