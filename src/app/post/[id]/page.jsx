// app/post/[id]/page.jsx
import React from "react";

export const getSinglePost = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  console.log("Fetched Post:", data);
  return data;
};

const SinglePost = async ({ params }) => {
  console.log("Params:", params); // { id: '7' }

  const post = await getSinglePost(params.id);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-5">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-xl w-full">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">
          {post.title}
        </h1>
        <p className="text-gray-700">{post.body}</p>
        <p className="mt-4 text-gray-500 text-sm">Post ID: {post.id}</p>
      </div>
    </div>
  );
};

export default SinglePost;
