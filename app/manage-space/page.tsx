import React from "react";
import prisma from "@/lib/prisma";
import ManageSpaceClient from "./ManageSpaceClient";

export const dynamic = "force-dynamic";

export default async function ManageSpacePage() {
    // Fetch existing projects
    const projects = await prisma.project.findMany({
        orderBy: { createdAt: "desc" },
        include: { images: true },
    });

    // Fetch initial shop products
    const products = await prisma.product.findMany({
        orderBy: { createdAt: "desc" },
        include: { images: true },
    });

    // Fetch procedure steps
    const procedureSteps = await prisma.procedureStep.findMany({
        orderBy: { stepNumber: "asc" },
    });

    // Fetch design statements
    const designStatements = await prisma.designStatement.findMany();

    // Fetch contact messages
    const contactMessages = await prisma.contactMessage.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div>
            <ManageSpaceClient
                initialProjects={projects}
                initialProducts={products}
                initialProcedureSteps={procedureSteps}
                initialDesignStatements={designStatements}
                initialContactMessages={contactMessages}
            />
        </div>
    );
}
