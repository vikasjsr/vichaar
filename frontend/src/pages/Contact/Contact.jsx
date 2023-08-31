// import React from "react";
// import { FaTelegramPlane } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <section className="px-4 py-8 lg:py-16 mx-auto max-w-screen-md">
//       <h2 className="mb-4 text-2xl md:text-4xl tracking-tight text-center text-lime-800 italic font-semibold">
//         Crafting Your Story
//       </h2>
//       <p className="mb-6 md:mb-10 text-sm md:text-base font-light text-center text-gray-900">
//         Create a New Blog Post Unleash your creativity and share your thoughts
//         with the world by creating a new blog post on our platform. Our
//         user-friendly create page makes it easy to compose your post. Start
//         shaping your narrative today and watch your words come to life!
//       </p>
//       <form className="space-y-6 md:space-y-8" onSubmit={() => {}}>
//         <div>
//           <label
//             htmlFor="title"
//             className="block text-sm md:text-base font-medium text-[#07074D]"
//           >
//             Your e-mail
//           </label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={""}
//             onChange={() => {}}
//             className="w-full mt-2 bg-white rounded-md py-2 md:py-3 px-3 md:px-4 text-base md:text-sm font-medium text-[#6B7280] outline-none focus:border-lime-400 focus:shadow-md"
//             placeholder="Your title"
//             required
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="title"
//             className="block text-sm md:text-base font-medium text-[#07074D]"
//           >
//             Your subject
//           </label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={""}
//             onChange={() => {}}
//             className="w-full mt-2 bg-white rounded-md py-2 md:py-3 px-3 md:px-4 text-base md:text-sm font-medium text-[#6B7280] outline-none focus:border-lime-400 focus:shadow-md"
//             placeholder="Your title"
//             required
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="description"
//             className="block text-sm md:text-base font-medium text-[#07074D]"
//           >
//             Your message
//           </label>
//           <textarea
//             id="description"
//             rows="6"
//             name="description"
//             value={""}
//             onChange={() => {}}
//             className="w-full mt-2 bg-white rounded-md py-2 md:py-3 px-3 md:px-4 text-base md:text-sm font-medium text-[#6B7280] outline-none focus:border-lime-400 focus:shadow-md"
//             placeholder="Leave your message..."
//           ></textarea>
//         </div>
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="hover:shadow-form rounded-md bg-lime-700 hover:bg-lime-600 py-2 md:py-3 px-8 md:px-10 text-center text-base md:text-sm font-semibold text-white outline-none"
//           >
//             <FaTelegramPlane className="text-xl md:text-2xl" />
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Contact;

import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="px-4 py-8 lg:py-16 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-2xl md:text-4xl tracking-tight text-center text-lime-800 italic font-semibold">
        Contact Us
      </h2>
      <p className="mb-6 md:mb-10 text-sm md:text-base font-light text-center text-gray-900">
        Have questions or feedback? Feel free to get in touch with our team. Use
        the form below to reach out to us, and we'll get back to you as soon as
        possible.
      </p>
      <form className="space-y-6 md:space-y-8" onSubmit={() => {}}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm md:text-base font-medium text-[#07074D]"
          >
            Your E-mail
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={""}
            onChange={() => {}}
            className="w-full mt-2 bg-white rounded-md py-2 md:py-3 px-3 md:px-4 text-base md:text-sm font-medium text-[#6B7280] outline-none focus:border-lime-400 focus:shadow-md"
            placeholder="Your e-mail"
            required
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm md:text-base font-medium text-[#07074D]"
          >
            Your Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={""}
            onChange={() => {}}
            className="w-full mt-2 bg-white rounded-md py-2 md:py-3 px-3 md:px-4 text-base md:text-sm font-medium text-[#6B7280] outline-none focus:border-lime-400 focus:shadow-md"
            placeholder="Your subject"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm md:text-base font-medium text-[#07074D]"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows="6"
            name="message"
            value={""}
            onChange={() => {}}
            className="w-full mt-2 bg-white rounded-md py-2 md:py-3 px-3 md:px-4 text-base md:text-sm font-medium text-[#6B7280] outline-none focus:border-lime-400 focus:shadow-md"
            placeholder="Leave your message..."
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="hover:shadow-form rounded-md bg-lime-700 hover:bg-lime-600 py-2 md:py-3 px-8 md:px-10 text-center text-base md:text-sm font-semibold text-white outline-none"
          >
            <FaTelegramPlane className="text-xl md:text-2xl" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
