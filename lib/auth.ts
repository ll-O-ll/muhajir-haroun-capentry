import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// Fallback secret for local development, MUST set in production
const secretKey = process.env.AUTH_SECRET || "super-secret-muhajir-key-2026";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("24h") // Sessions last 24 hours
        .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
}

export async function createSession(username: string) {
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    const session = await encrypt({ username, expires });

    // Add securely to Next.js cookies
    const cookieStore = await cookies();
    cookieStore.set("session", session, {
        expires,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
    });
}

export async function getSession() {
    const cookieStore = await cookies();
    const session = cookieStore.get("session")?.value;
    if (!session) return null;
    try {
        return await decrypt(session);
    } catch (error) {
        return null;
    }
}

export async function removeSession() {
    const cookieStore = await cookies();
    cookieStore.set("session", "", {
        expires: new Date(0),
        path: "/",
    });
}

export async function updateSession(request: NextRequest) {
    const session = request.cookies.get("session")?.value;
    if (!session) return;

    try {
        // Refresh the expiration time
        const parsed = await decrypt(session);
        parsed.expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
        const res = NextResponse.next();

        res.cookies.set({
            name: "session",
            value: await encrypt(parsed),
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            expires: parsed.expires,
            sameSite: "lax",
            path: "/",
        });

        return res;
    } catch (e) {
        return NextResponse.next();
    }
}
