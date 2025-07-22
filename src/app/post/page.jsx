import Link from "next/link";
// import React, { useEffect, useState } from "react";

export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

export const metadata = {
  title: "All post",
  description: "Loading JSON Placeholder posts using Server Components.",
};

const Posts = async () => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getPosts();
  //     setPosts(data);
  //   };

  //   fetchData();
  // }, []);

  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-fuchsia-100 via-purple-100 to-rose-200 py-12 px-4">
      <h1 className="text-5xl font-extrabold text-center text-purple-800 mb-10 drop-shadow-lg">
        📢 Trending Posts
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {posts.slice(0, 9).map((singlePost) => (
          <div
            key={singlePost.id}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-200 hover:scale-105 transform transition duration-300 group"
          >
            <div className="p-6 flex flex-col justify-between h-full">
              <h2 className="text-2xl font-bold mb-4 text-purple-900 group-hover:text-purple-700 transition">
                {singlePost.title}
              </h2>
              <p className="text-gray-700 mb-6 line-clamp-3">
                {singlePost.body}
              </p>
              <Link
                href={`/post/${singlePost.id}`}
                className="mt-auto inline-block text-center bg-purple-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:bg-purple-700 transition duration-300"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
