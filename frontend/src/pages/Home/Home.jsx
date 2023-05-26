import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Contact from "../Contact/Contact.jsx";
import About from "../About/About.jsx";
import Create from "../Create/Create.jsx";
import Post from "../../components/Posts/Post.jsx";

const Home = () => {
  return (
    <>
      
      {/* <div className="shadow-md w-full fixed top-0 left-0">
       <Navbar />
      </div> */}
     
      <div>This is home page</div>
      <div>
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/" element={<About />} />
          <Route path="/create" element={<Create />} />
        </Routes>

        <div>
          <Post />
        </div>
      </div>
    </>
  );
};

export default Home;
