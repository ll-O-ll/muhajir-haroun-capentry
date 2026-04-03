"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getProjectsAction, getProcedureStepsAction, getDesignStatementAction } from "@/app/actions/designSpace";
import { Loader2 } from "lucide-react";

interface Project {
    id: string;
    title: string;
    description: string | null;
    category: string | null;
    images: {
        imageUrl: string;
        isCover: boolean;
    }[];
}

interface ProcedureStep {
    stepNumber: number;
    title: string;
    description: string | null;
}

const DEFAULT_PROCEDURES = [
    {
        stepNumber: 1,
        title: "Inspiration",
        description: "Mood- und Materialboard • First Draft"
    },
    {
        stepNumber: 2,
        title: "Groundplan",
        description: "Analyses • Concept Design • Lighting • Final Draft"
    },
    {
        stepNumber: 3,
        title: "Faceplan",
        description: "Planning Aspects • Construction Detail Planning"
    },
    {
        stepNumber: 4,
        title: "Production",
        description: "Cuttinglist • Producing Process"
    },
    {
        stepNumber: 5,
        title: "Delivery & Mounting",
        description: ""
    }
];

const DEFAULT_STATEMENT = "At Muhajir Haroun, every object is more than just furniture—it is a narrative of form and function. Our design philosophy centers on the dialogue between material integrity and human experience. We approach each piece as a unique challenge, seeking to distill complex needs into elegant, enduring solutions that enrich the spaces they inhabit.";

export default function DesignObjectsContents() {
    const [activeTab, setActiveTab] = useState<"statement" | "projects" | "procedure">("statement");
    const [projects, setProjects] = useState<Project[]>([]);
    const [procedures, setProcedures] = useState<ProcedureStep[]>(DEFAULT_PROCEDURES);
    const [statement, setStatement] = useState(DEFAULT_STATEMENT);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const [allProjects, dbProcedures, dbStatement] = await Promise.all([
                    getProjectsAction(),
                    getProcedureStepsAction('design-object'),
                    getDesignStatementAction('design-object')
                ]);

                // Filter only projects belonging to Design Object
                const filtered = allProjects.filter((p: any) => p.category === 'design-object');
                setProjects(filtered);

                if (dbProcedures && dbProcedures.length > 0) {
                    setProcedures(dbProcedures);
                }

                if (dbStatement) {
                    setStatement(dbStatement.content);
                }
            } catch (error) {
                console.error("Error fetching design objects:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="space-y-12">
            {/* Tabs */}
            <div className="flex justify-center space-x-4 sm:space-x-8 border-b border-primary/10 pb-4 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                <button
                    onClick={() => setActiveTab("statement")}
                    className={`font-heading uppercase tracking-widest text-xs sm:text-sm transition-colors whitespace-nowrap ${activeTab === "statement" ? "text-primary border-b-2 border-primary pb-4 -mb-4.5" : "text-muted-foreground hover:text-primary"
                        }`}
                >
                    1 - Design Statement
                </button>
                <button
                    onClick={() => setActiveTab("projects")}
                    className={`font-heading uppercase tracking-widest text-xs sm:text-sm transition-colors whitespace-nowrap ${activeTab === "projects" ? "text-primary border-b-2 border-primary pb-4 -mb-4.5" : "text-muted-foreground hover:text-primary"
                        }`}
                >
                    2 - Projects
                </button>
                <button
                    onClick={() => setActiveTab("procedure")}
                    className={`font-heading uppercase tracking-widest text-xs sm:text-sm transition-colors whitespace-nowrap ${activeTab === "procedure" ? "text-primary border-b-2 border-primary pb-4 -mb-4.5" : "text-muted-foreground hover:text-primary"
                        }`}
                >
                    3 - Procedure
                </button>
            </div>

            {/* Content Area */}
            <div className="min-h-[400px]">
                {activeTab === "statement" && (
                    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-700 py-8">
                        <div className="space-y-6 text-xl md:text-2xl leading-relaxed font-light text-foreground/90 font-serif italic text-center md:text-left whitespace-pre-wrap">
                            {statement}
                        </div>
                    </div>
                )}

                {activeTab === "projects" && (
                    <div className="space-y-12 animate-in fade-in duration-700">
                        {loading ? (
                            <div className="flex justify-center items-center h-64">
                                <Loader2 className="w-8 h-8 animate-spin text-primary/20" />
                            </div>
                        ) : projects.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {projects.map((project) => {
                                    const coverImage = project.images.find((img: any) => img.isCover) || project.images[0];
                                    return (
                                        <div key={project.id} className="group cursor-pointer space-y-4">
                                            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                                                {coverImage ? (
                                                    <Image
                                                        src={coverImage.imageUrl}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-muted-foreground">
                                                        Coming Soon
                                                    </div>
                                                )}
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Design Object</p>
                                                <h3 className="font-heading uppercase tracking-widest text-sm">{project.title}</h3>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-64 text-muted-foreground italic font-serif">
                                No design objects created yet. Check back soon.
                            </div>
                        )}
                    </div>
                )}

                {activeTab === "procedure" && (
                    <div className="max-w-2xl mx-auto space-y-12 animate-in fade-in duration-700">
                        {procedures.map((step) => (
                            <div key={step.stepNumber} className="flex space-x-8 group">
                                <span className="font-heading text-4xl text-primary/10 transition-colors group-hover:text-primary/30">
                                    0{step.stepNumber}
                                </span>
                                <div className="space-y-3 pt-2">
                                    <h3 className="font-heading uppercase tracking-widest text-sm">{step.title}</h3>
                                    {step.description && (
                                        <p className="text-muted-foreground text-sm font-serif leading-relaxed italic">
                                            {step.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
