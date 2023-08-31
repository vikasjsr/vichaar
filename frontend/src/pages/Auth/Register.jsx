import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/posts";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      await api
        .post("http://localhost:5000/api/vichaar/register", {
          name,
          email,
          password,
        })
        .then((res) => {
          if (res) {
            navigate("/login");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center p-4 md:p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form
          method="POST"
          className="rounded-lg p-8 bg-gradient-to-r from-lime-500 to-lime-400 shadow-xl"
          onSubmit={registerHandler}
        >
          <div className="text-center text-2xl text-lime-800 italic font-semibold">
            Register
          </div>

          <div className="mb-3 md:mb-5">
            <label
              htmlFor="email"
              className="mb-1 md:mb-3 block text-base font-medium text-[#07074D]"
            >
              Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="enter your name"
              className="w-full bg-white rounded-md py-3 px-4 md:px-6 text-base font-medium text-[#6B7280] outline-none focus:border-lime-400 focus:shadow-md"
            />
          </div>

          <div className="mb-3 md:mb-5">
            <label
              htmlFor="email"
              className="mb-1 md:mb-3 block text-base font-medium text-[#07074D]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email"
              className="w-full bg-white rounded-md py-3 px-4 md:px-6 text-base font-medium text-[#6B7280] outline-none focus:border-lime-400 focus:shadow-md"
            />
          </div>

          <div className="mb-3 md:mb-5">
            <label
              htmlFor="email"
              className="mb-1 md:mb-3 block text-base font-medium text-[#07074D]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter your password"
              className="w-full bg-white rounded-md py-3 px-4 md:px-6 text-base font-medium text-[#6B7280] outline-none focus:border-lime-400 focus:shadow-md"
            />
          </div>

          <div className="flex flex-col md:flex-row">
            <button
              type="submit"
              className="hover:shadow-form w-full md:w-min rounded-md bg-lime-700 hover:bg-lime-600 py-3 md:py-2 px-8 md:px-4 text-center text-base font-semibold text-white outline-none mb-3 md:mb-0 md:mr-4"
            >
              Register
            </button>

            <div className="text-md mt-3 md:mt-0 flex items-center">
              Already registered?{" "}
              <Link
                className="text-lime-900 ml-1 underline font-bold"
                to={"/login"}
              >
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
