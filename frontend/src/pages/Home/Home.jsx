import React, { useContext, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import AppContext from "../../context/AppContext.js";
import Post from "../../components/Posts/Post.jsx";
// import api from "../../api/posts.js"

const Home = () => {
  const { posts, loading, fetchposts } = useContext(AppContext);

  useEffect(() => {
    fetchposts();
  }, []);

  return (
    <div>
      <div className="w-full h-20">
        <Navbar />
      </div>

      <div className="flex flex-wrap w-full justify-center align-middle p-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {posts.length > 0 ? (
              posts.map((post) => (
                <Post
                  key={post._id}
                  title={post.title}
                  description={post.description}
                  id={post._id}
                  createdAt={post.createdAt}
                  author={post.author}
                />
              ))
            ) : (
              <div>
                <h1 className="text-2xl">No posts to show</h1>
              </div>
            )}
          </>
        )}
      </div>

      <div className="w-full h-20">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
