import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "./Navbar";
import { TfiWrite } from "react-icons/tfi";

// TfiWrite

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-6 bg-lime-700 fixed nav">
      <Link to={"/home"}>
        <div className="flex text-2xl items-center">
          <h3 className="text-black font-signature ml-2 italic font-semibold underline">
            vichaar
          </h3>
          <TfiWrite className="ml-2" />
        </div>
      </Link>

      <ul className="hidden md:flex">
        {links.map(({ id, link, title }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-lime-400 duration-200 link-underline"
          >
            <Link to={link} smooth duration={500}>
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-lime-500 to-lime-400 font-medium">
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
