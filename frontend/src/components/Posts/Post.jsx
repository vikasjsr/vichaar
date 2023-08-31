// import React from "react";
// import { Link } from "react-router-dom";

// const Post = ({ title, description, id, createdAt, author }) => {
//   return (
//     <div className="max-w-sm rounded-lg overflow-hidden p-4 shadow-xl  mb-4 mx-2 bg-gradient-to-r from-lime-200 to-lime-300">
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl text-lime-700 mb-2 flex">{title}</div>
//         <p className="text-gray-700 text-base mt-2">
//           {description.length > 20
//             ? description.slice(0, 50) + `.....`
//             : description}
//           <Link
//             to={`/home/${id}`}
//             className="ml-2 italic hover:text-blue-950 underline"
//           >
//             Read More
//           </Link>
//         </p>

//         <div className="mt-4 flex justify-between">
//         <span>{author}</span>
//         <span className="font-light">{createdAt.slice(0, 10)}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Post;

import React from "react";
import { Link } from "react-router-dom";

const Post = React.memo(({ title, description, id, createdAt, author }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden p-4 shadow-xl mb-4 mx-2 bg-gradient-to-r from-lime-200 to-lime-300">
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-lime-700 mb-2 flex">{title}</div>
        <p className="text-gray-700 text-base mt-2">
          {description.length > 20
            ? description.slice(0, 50) + `.....`
            : description}
          <Link
            to={`/home/${id}`}
            className="ml-2 italic hover:text-blue-950 underline"
          >
            Read More
          </Link>
        </p>

        <div className="mt-4 flex justify-between">
          <span>{author}</span>
          <span className="font-light">{createdAt.slice(0, 10)}</span>
        </div>
      </div>
    </div>
  );
});

export default Post;
