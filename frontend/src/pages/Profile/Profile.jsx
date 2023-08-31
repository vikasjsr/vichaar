import React, { useContext, useEffect } from "react";
import ProfileImg from "./profile.png";
import api from "../../api/posts";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";

const Profile = () => {
  const navigate = useNavigate();

  const { profileData, setProfileData } = useContext(AppContext);
  console.log(profileData);

  

  const handleLogout = async () => {
    try {
      const response = await api.get(
        "http://localhost:5000/api/vichaar/logout"
      );
      if (response.data.success) {
        // Redirect to the login page or any other desired page
        navigate("/login");
      } else {
        // Handle logout failure
      }
    } catch (error) {
      // Handle error
      console.error("Logout error:", error);
    }
  };

  return (
    <section className="px-4 py-8 lg:py-16 mx-auto max-w-screen-md">
      <div className="flex flex-col items-center">
        <div className="rounded-full overflow-hidden w-32 h-32">
          <img
            src={ProfileImg} // Assuming you have a profile image URL in user data
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="mt-4 text-2xl md:text-4xl text-lime-800 italic font-semibold">
          {profileData.name}
        </h2>

        <div className="mt-4 text-black text-base font-light grid grid-cols-2 gap-4 leading-loose">
          <div className="text-left">
            <p>
              <span className="font-bold">E-mail: </span>
              {profileData.email}
            </p>
            <p>
              <span className="font-bold">Name: </span>
              {profileData.name}
            </p>
            <p>
              <span className="font-bold"> Interest:</span>
              {profileData.createdAt}
            </p>
            <p>
              <span className="font-bold">Education:</span>
               {profileData.Education}
            </p>
            <p>
              <span className="font-bold">About:</span> profileData.About
            </p>
          </div>
        </div>
      </div>

      <button onClick={handleLogout}>Logout</button>
    </section>
  );
};

export default Profile;
