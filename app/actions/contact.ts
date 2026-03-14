"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitContactAction(formData: FormData) {
    try {
        const name = formData.get("name") as string;
        const contactDetails = formData.get("contactDetails") as string;
        const subject = formData.get("subject") as string;

        if (!name || !contactDetails || !subject) {
            return { error: "Alle Felder sind erforderlich." };
        }

        // Final word count check on server side
        const wordCount = subject.trim().split(/\s+/).length;
        if (wordCount > 9) {
            return { error: "Das Thema darf nicht mehr als 9 Wörter enthalten." };
        }

        await prisma.contactMessage.create({
            data: {
                name,
                contactDetails,
                subject,
            },
        });

        // Revalidate the admin dashboard if we add a messages view there later
        revalidatePath("/manage-space");

        return { success: true };
    } catch (error) {
        console.error("Contact submission error:", error);
        return { error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." };
    }
}
