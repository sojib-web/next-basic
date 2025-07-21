"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname, pathname.includes("dashboard")); // will log current route path

  if (!pathname.includes("dashboard")) {
    return (
      <div>
        <nav className="flex justify-center py-4">
          <ul className="flex justify-between w-1/2 space-x-4">
            <li>
              <Link href="/" className={pathname === "/" ? "font-bold" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/post"
                className={pathname.startsWith("/post") ? "font-bold" : ""}
              >
                post
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className={pathname.startsWith("/About") ? "font-bold" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/About/Address"
                className={
                  pathname.startsWith("/About/Address") ? "font-bold" : ""
                }
              >
                Address
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default NavBar;
