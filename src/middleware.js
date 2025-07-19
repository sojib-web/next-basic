import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const dummyData = {
    role: "user",
    email: "test@admin.com",
  };
  let isServicesPage = request.nextUrl.pathname.startsWith("/Service");
  let isAdmin = dummyData.role === "admin";

  if (isServicesPage && !isAdmin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
  //   console.log("Path Namess", request.nextUrl.pathname.startsWith("/Service"));
  //   return NextResponse.next();
}
