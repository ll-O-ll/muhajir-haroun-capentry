"use server";

import prisma from "@/lib/prisma";

export async function getProjectsAction() {
    try {
        const projects = await prisma.project.findMany({
            orderBy: { createdAt: "desc" },
            include: {
                images: {
                    orderBy: { createdAt: "desc" }
                }
            },
        });
        return projects;
    } catch (error) {
        console.error("Failed to fetch projects:", error);
        return [];
    }
}

export async function getProcedureStepsAction(category: string) {
    try {
        const steps = await prisma.procedureStep.findMany({
            where: { category },
            orderBy: { stepNumber: "asc" },
        });
        return steps;
    } catch (error) {
        console.error("Failed to fetch procedure steps:", error);
        return [];
    }
}

export async function getDesignStatementAction(category: string) {
    try {
        const statement = await prisma.designStatement.findUnique({
            where: { category },
        });
        return statement;
    } catch (error) {
        console.error("Failed to fetch design statement:", error);
        return null;
    }
}
