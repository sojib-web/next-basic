"use client";

import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ correct import for App Router
import React from "react";

const AboutPage = () => {
  const router = useRouter(); // ✅ now this works
  const isLoggedIn = false;

  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/About/Address");
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <p className="font-bold text-3xl">AboutPage</p>
      <p>
        <Link href="/About/Address">Address Page</Link>
      </p>
      <button type="button" onClick={handleNavigation}>
        Go to Address
      </button>
    </div>
  );
};

export default AboutPage;
