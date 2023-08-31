import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../api/posts";

const AppContext = createContext();

export function AppProvider({ children, navigateFunction }) {
  const [posts, setPosts] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileData, setProfileData] = useState({
    createdAt: "",
    email: "",
    name: "",
    updatedAt: "",
    _id: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (navigateFunction) {
      navigateFunction(navigate);
    }
  }, [navigateFunction]);

  const submitHandler = async (e, navigate) => {
    e.preventDefault();
    try {
      const response = await api.post(
        "http://localhost:5000/api/vichaar/login",
        { email, password }
      );
      const user = response.data.user;
      setProfileData(user);
      setIsAuthenticated(true);
      navigate("/home");
    } catch (error) {
      console.log("Wrong Credentials!");
    }
  };

  const logoutHandler = (navigate) => {
    setProfileData({
      createdAt: "",
      email: "",
      name: "",
      updatedAt: "",
      _id: "",
    });
    setIsAuthenticated(false);
    navigate("/login");
  };

  useEffect(() => {
    const fetchposts = async () => {
      try {
        const response = await api.get(
          "http://localhost:5000/api/vichaar/getallposts"
        );
        setPosts(response.data.findPosts);
      } catch (err) {
        console.log("Error fetching posts:", err);
      }
    };

    fetchposts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        posts,
        setPosts,
        email,
        setEmail,
        password,
        setPassword,
        profileData,
        isAuthenticated,
        submitHandler,
        logoutHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;


// import React, { useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AppProvider from "./AppContext";
// import PrivateRoute from "./PrivateRoute";
// import Login from "./pages/Auth/Login";
// import Home from "./pages/Home/Home";
// import Register from "./pages/Auth/Register";
// import CreatePost from "./pages/CreatePost/CreatePost";
// import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";
// import Profile from "./pages/Profile/Profile";
// import PostDetails from "./pages/PostDetails/PostDetails";
// import NotFound from "./pages/404/NotFound";

// function App() {
//   const [navigateFunction, setNavigateFunction] = useState(null);

//   return (
//     <AppProvider navigateFunction={setNavigateFunction}>
//       <BrowserRouter>
//         {navigateFunction && (
//           <Routes>
//             <Route path="/" element={<Temp />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />

//             {/* Use PrivateRoute for protected routes */}
//             <PrivateRoute path="/home" element={<Home />} />
//             <PrivateRoute path="/create" element={<CreatePost />} />
//             <PrivateRoute path="/profile" element={<Profile />} />

//             <Route path="/home/:postId" element={<PostDetails />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />

//             {/* 404 Page */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>     
//         )}
//       </BrowserRouter>
//     </AppProvider>
//   );
// }

// export default App;
