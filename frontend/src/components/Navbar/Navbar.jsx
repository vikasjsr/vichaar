import React, { useState } from "react";
import { navLinks } from "./Navbar.js";
import { NavLink, Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800 justify-center"
        >
          <span className="text-3xl text-black mr-1 pt-2">
            <BsPencilSquare />
          </span>
          <div>vichaar</div>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {navLinks.map((Link) => (
            <NavLink
              to={`/${Link.link}`}
              key={Link.title}
              className="md:ml-8 text-xl md:my-0 my-7"
            >
              <span className="capitalize">{Link.title}</span>
            </NavLink>
          ))}
        </ul>

        <div className="flex justify-between">
          <NavLink
            to={`./login`}
            key={Link.title}
            className="md:ml-8 text-xl md:my-0 my-7"
          >
            <span className="capitalize">Login</span>
          </NavLink>
          |
          <NavLink
            to={`./register`}
            key={Link.title}
            className="text-xl"
          >
            <span className="capitalize">Register</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
