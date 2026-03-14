"use server";

import { removeSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function logoutAction() {
    await removeSession();
    redirect("/login");
}
