"use server";

import prisma from "@/lib/prisma";

export async function getProductsAction() {
    try {
        return await prisma.product.findMany({
            include: { images: true },
            orderBy: { createdAt: "desc" },
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}
