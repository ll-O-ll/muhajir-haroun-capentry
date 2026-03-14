import prisma from "@/lib/prisma";
import ShopClient from "./ShopClient";

export const metadata = {
    title: "Do It Shop | Raumwerk Harun",
    description: "Curated collection of unique furniture, pictures, and spatial objects designed by Muhajir Harun.",
};

export default async function ShopPage() {
    const products = await prisma.product.findMany({
        where: {
            // Optional: you could add an isPublished flag later
        },
        include: {
            images: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return <ShopClient products={products} />;
}
