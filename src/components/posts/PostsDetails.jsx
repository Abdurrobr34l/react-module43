import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";

const PostsDetails = () => {
  const posts = useLoaderData();

  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center flex-3">
      <h1 className="mt-10 text-5xl">Posts Details</h1>

      <div
        key={posts.id}
        className="flex flex-col justify-between my-10 p-4 md:max-w-[500px] border-2 rounded-xl"
      >
        <h2 className="text-cyan-400 first-letter:uppercase">{posts.title}</h2>
        <p className="mt-2 first-letter:uppercase">{posts.body}</p>

        <button onClick={navigateBack} className="mt-5 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg transition-all">Go Back</button>
      </div>
    </div>
  );
};

export default PostsDetails;
