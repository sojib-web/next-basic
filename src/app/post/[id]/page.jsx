// app/post/[id]/page.jsx
import React from "react";

export const getSinglePost = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "no-store" }
  );
  return response.json();
};

export async function generateMetadata({ params }) {
  const id = (await params).id;

  // fetch post information
  const post = await getSinglePost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

// export const metadata = {
//   title: "Single post",
//   description: "Loading JSON Placeholder posts using Server Components.",
// };
const SinglePost = async ({ params }) => {
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
