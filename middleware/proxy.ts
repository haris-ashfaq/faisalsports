import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;
    
    // Public routes that don't require authentication
    const publicRoutes = ["/", "/login", "/signup", "/api/auth", "/favicon.ico", "/_next"];
    
    // Check if the current path is public
    const isPublicRoute = publicRoutes.some((path) => 
        pathname === path || pathname.startsWith(path + "/")
    );

    if (isPublicRoute) {
        return NextResponse.next();
    }

    // Get the token and check authentication
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });
    
    if (!token) {
        // Redirect to login if no token is present
        const loginUrl = new URL("/login", req.url);
        loginUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(loginUrl);
    }

    // Optional: Add admin-only route checks here if needed
    // if (pathname.startsWith("/admin") && token.role !== "admin") {
    //     return NextResponse.redirect(new URL("/", req.url));
    // }

    return NextResponse.next();
}

