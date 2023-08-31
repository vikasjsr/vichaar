import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Temp = () => {
  const navigate = useNavigate();
  console.log('Temp is rend.')

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/login");
    }
  }, []);

  return <div>redirecting....</div>;
};

export default Temp;
