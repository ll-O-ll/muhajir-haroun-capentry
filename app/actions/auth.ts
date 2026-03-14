"use server";

import { createSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const validUsername = process.env.ADMIN_USERNAME;
    const validPassword = process.env.ADMIN_PASSWORD;

    if (!username || !password) {
        return { error: "Username and password are required." };
    }

    if (username === validUsername && password === validPassword) {
        // Both match environment variables, authorized!
        await createSession(username);
        // Redirect to the protected dashboard
        redirect("/manage-space");
    } else {
        return { error: "Invalid credentials. Please try again." };
    }
}
