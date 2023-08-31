import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../api/posts";

const AppContext = createContext();

export function AppProvider({ children }) {
  console.log("context is working");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [profileData, setProfileData] = useState({
    createdAt: "",
    email: "",
    name: "",
    updatedAt: "",
    _id: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const resp = await api.get(
          "http://localhost:5000/api/vichaar/getmyprofile"
        );
        // console.log(resp.data.user);
        setProfileData(resp.data.user);
        setLoading(false);
      } catch (error) {
        console.log(`error message: ${error.message}`);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const fetchposts = async () => {
    setLoading(true);
    try {
      const response = await api.get(
        "http://localhost:5000/api/vichaar/getallposts"
      );
      setPosts(response.data.findPosts);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`error message: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        profileData,
        setProfileData,
        posts,
        setPosts,
        loading,
        fetchposts
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
