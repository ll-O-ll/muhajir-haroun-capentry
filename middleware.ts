import { NextRequest, NextResponse } from "next/server";
import { decrypt, updateSession } from "./lib/auth";

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Protect the entire /manage-space route (and sub-routes)
    const isProtectedRoute = path.startsWith("/manage-space");

    if (isProtectedRoute) {
        const session = request.cookies.get("session")?.value;

        // Check if session exists and is valid
        if (!session) {
            return NextResponse.redirect(new URL("/login", request.url));
        }

        try {
            const parsedSession = await decrypt(session);
            if (!parsedSession) {
                return NextResponse.redirect(new URL("/login", request.url));
            }
        } catch (e) {
            // If verification fails (e.g. tampered or expired token), prompt login again
            return NextResponse.redirect(new URL("/login", request.url));
        }

        // Otherwise, session is valid, update expiration window
        return await updateSession(request) || NextResponse.next();
    }

    // Allow public routes to proceed normally
    return NextResponse.next();
}

// Ensure middleware specifically runs on these routes to improve speed
export const config = {
    matcher: ["/manage-space/:path*"],
};
