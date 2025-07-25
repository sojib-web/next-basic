"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";

const UserInfo = () => {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className="mt-4 text-gray-700">
      <p>Logged in as: {session.user.email}</p>
      <button
        onClick={() => signOut()}
        className="bg-red-600 text-white px-4 py-2 rounded mt-2"
      >
        Log out
      </button>
    </div>
  );
};

export default UserInfo;
