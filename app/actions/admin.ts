"use server";

import prisma from "@/lib/prisma";
import { put, del } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export async function createProjectAction(prevState: any, formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const image = formData.get("image") as File;

    if (!title) {
        return { error: "Title is required for a project." };
    }

    try {
        let imageUrl: string | null = null;

        // Handle Blob Upload if an image was provided
        if (image && image.size > 0) {
            const blob = await put(`projects/${Date.now()}-${image.name}`, image, {
                access: "public",
            });
            imageUrl = blob.url;
        }

        // Create the Project in Neon, and optionally the associated ProjectImage
        await prisma.project.create({
            data: {
                title,
                description: description || null,
                category: category || null,
                images: imageUrl
                    ? {
                        create: [
                            {
                                imageUrl,
                                isCover: true,
                            },
                        ],
                    }
                    : undefined,
            },
        });

        // Invalidate the cache for the home page so the new project appears immediately
        revalidatePath("/", "page");
        revalidatePath("/manage-space", "page");

        return { success: true, message: "Project created successfully!" };
    } catch (error: any) {
        console.error("Error creating project:", error);
        return { error: `Failed to create project: ${error.message}` };
    }
}

export async function deleteProjectAction(projectId: string) {
    try {
        // Determine associated images to clean up from Vercel Blob
        const project = await prisma.project.findUnique({
            where: { id: projectId },
            include: { images: true },
        });

        if (project && project.images.length > 0) {
            const urlsToDelete = project.images.map((img: any) => img.imageUrl);
            // We wrap this in a try-catch so failing to delete a blob doesn't crash the DB deletion
            try {
                await del(urlsToDelete);
            } catch (e) {
                console.warn("Failed to delete blob storage image:", e);
            }
        }

        // Delete from Database (Cascade will handle the ProjectImage rows)
        await prisma.project.delete({
            where: { id: projectId },
        });

        revalidatePath("/", "page");
        revalidatePath("/manage-space", "page");

        return { success: true };
    } catch (error) {
        console.error("Error deleting project:", error);
        return { error: "Failed to delete project." };
    }
}

export async function updateDesignStatementAction(category: string, content: string) {
    try {
        await prisma.designStatement.upsert({
            where: { category },
            update: { content },
            create: { category, content },
        });
        revalidatePath("/", "page");
        return { success: true, message: "Design statement updated!" };
    } catch (error) {
        console.error("Error updating design statement:", error);
        return { error: "Failed to update design statement." };
    }
}

export async function updateProcedureStepAction(id: string | null, data: { category: string, stepNumber: number, title: string, description?: string }) {
    try {
        if (id) {
            await prisma.procedureStep.update({
                where: { id },
                data,
            });
        } else {
            await prisma.procedureStep.upsert({
                where: {
                    category_stepNumber: {
                        category: data.category,
                        stepNumber: data.stepNumber
                    }
                },
                update: {
                    title: data.title,
                    description: data.description
                },
                create: data,
            });
        }
        revalidatePath("/", "page");
        return { success: true, message: "Procedure step updated!" };
    } catch (error) {
        console.error("Error updating procedure step:", error);
        return { error: "Failed to update procedure step." };
    }
}

export async function createProductAction(prevState: any, formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const priceStr = formData.get("price") as string;
    const category = formData.get("category") as string;
    const image = formData.get("image") as File;

    if (!title || !category) {
        return { error: "Title and Category are required." };
    }

    const price = priceStr ? parseFloat(priceStr) : null;

    try {
        let imageUrl: string | null = null;
        if (image && image.size > 0) {
            const blob = await put(`products/${Date.now()}-${image.name}`, image, {
                access: "public",
            });
            imageUrl = blob.url;
        }

        await prisma.product.create({
            data: {
                title,
                description: description || null,
                price,
                category,
                images: imageUrl
                    ? {
                        create: [
                            {
                                imageUrl,
                                isCover: true,
                            },
                        ],
                    }
                    : undefined,
            },
        });

        revalidatePath("/shop", "page");
        revalidatePath("/manage-space", "page");

        return { success: true, message: "Product added to shop!" };
    } catch (error: any) {
        console.error("Error creating product:", error);
        return { error: `Failed to create product: ${error.message}` };
    }
}

export async function deleteProductAction(productId: string) {
    try {
        const product = await prisma.product.findUnique({
            where: { id: productId },
            include: { images: true },
        });

        if (product && product.images.length > 0) {
            const urlsToDelete = product.images.map((img: any) => img.imageUrl);
            try {
                await del(urlsToDelete);
            } catch (e) {
                console.warn("Failed to delete blob storage image:", e);
            }
        }

        await prisma.product.delete({
            where: { id: productId },
        });

        revalidatePath("/shop", "page");
        revalidatePath("/manage-space", "page");

        return { success: true };
    } catch (error) {
        console.error("Error deleting product:", error);
        return { error: "Failed to delete product." };
    }
}

export async function toggleContactMessageReadAction(messageId: string, isRead: boolean) {
    try {
        await prisma.contactMessage.update({
            where: { id: messageId },
            data: { isRead },
        });
        revalidatePath("/manage-space", "page");
        return { success: true };
    } catch (error) {
        console.error("Error updating message status:", error);
        return { error: "Failed to update message status." };
    }
}

export async function deleteContactMessageAction(messageId: string) {
    try {
        await prisma.contactMessage.delete({
            where: { id: messageId },
        });
        revalidatePath("/manage-space", "page");
        return { success: true };
    } catch (error) {
        console.error("Error deleting message:", error);
        return { error: "Failed to delete message." };
    }
}
