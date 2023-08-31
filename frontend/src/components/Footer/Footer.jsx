import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-20 px-6 bg-lime-700 fixed bottom-0 flex items-center justify-center">
      <p className="text-black font-medium">
        © {new Date().getFullYear()} Vichaar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
