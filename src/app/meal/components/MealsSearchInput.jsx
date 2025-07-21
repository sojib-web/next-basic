"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MealsSearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) {
      params.set("search", searchTerm);
    } else {
      params.delete("search");
    }
    router.push(`${pathname}?${params.toString()}`);
  }, [searchTerm]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-purple-800">
        🍽️ Meals Finder
      </h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for meals..."
        className="p-3 rounded-xl border border-purple-300 mb-8 w-full max-w-md"
      />
    </div>
  );
};

export default MealsSearchInput;
