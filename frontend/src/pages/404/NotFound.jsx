import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="px-4 py-8 lg:py-16 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-2xl md:text-4xl tracking-tight text-center text-lime-800 italic font-semibold">
        404 error occured
      </h2>
      <p className="mb-10 md:mb-10 text-sm md:text-base font-light text-center text-gray-900">
        A 404 page is a standard error page displayed by a web server when a
        user attempts to access a URL that doesn't correspond to a valid
        resource or page on the website. It serves as a user-friendly way to
        inform visitors that the requested content could not be found, often
        including a brief message, relevant branding, and sometimes suggestions
        for navigating back to valid pages. The "404" code is derived from the
        HTTP status code indicating "Not Found," and the page is designed to
        enhance user experience by providing guidance when encountering broken
        or non-existent links.
      </p>

      <Link to={"/home"} className="">Get back to home</Link>
    </section>
  );
};

export default NotFound;
