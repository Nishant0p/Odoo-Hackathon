import { NextResponse } from "next/server";

export function middleware(request) {
  // Example: Check if user is authenticated via cookies
  // You can adjust this logic based on how you store your auth tokens
  const token = request.cookies.get("token");

  // If there's no token, redirect unauthenticated users to the login page
  // DISABLED TEMPORARILY: Allow access to all pages without authentication
  /*
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  */

  // Continue to the requested page if authenticated
  return NextResponse.next();
}

export const config = {
  // Apply this middleware only to the protected routes specified in your requirements
  matcher: [
    "/dashboard/:path*",
    "/trips/:path*",
    "/search/:path*",
    "/profile/:path*",
    "/admin/:path*"
  ],
};
