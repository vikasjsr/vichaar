import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UpdatePopup from "../../components/PopUps/UpdatePopup";
import DeletePopup from "../../components/PopUps/DeletePopup";
import AppContext from "../../context/AppContext";

const PostDetails = () => {
  const { postId } = useParams();

  const { posts } = useContext(AppContext);
  
  const post = posts.find((post) => post._id === postId);
  // console.log(post);

  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const openUpdatePopup = () => {
    setShowUpdatePopup(true);
  };

  const openDeletePopup = () => {
    setShowDeletePopup(true);
  };

  console.log('details is rend.')

  return (
    <section className="px-4 py-8 lg:py-16 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-2xl md:text-4xl tracking-tight text-center text-lime-800 italic font-semibold">
        {post.title}
      </h2>
      <p className="mb-10 md:mb-10 text-sm md:text-base font-light text-center text-gray-900">
        {post.description}
      </p>

      <div className="flex flex-col justify-center md:flex-row md:items-center">
        <button
          onClick={openUpdatePopup}
          className="bg-lime-700 p-3 rounded-2xl mb-2 md:mb-0 md:mr-2 hover:bg-lime-400 hover:text-black"
        >
          Click here to update Post
        </button>
        <button
          onClick={openDeletePopup}
          className="bg-red-400 p-3 rounded-2xl hover:bg-red-950 hover:text-white"
        >
          Click here to Delete Post
        </button>
      </div>

      {/* Update Post Popup */}
      {showUpdatePopup && (
        <UpdatePopup setShowUpdatePopup={setShowUpdatePopup} postId={postId} post={post} />
      )}

      {/* Delete Confirmation Popup */}
      {showDeletePopup && (
        <DeletePopup setShowDeletePopup={setShowDeletePopup} postId={postId} post={post}/>
      )}
    </section>
  );
};

export default PostDetails;
