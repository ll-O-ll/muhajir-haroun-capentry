"use client"

import { useLanguage } from "@/app/contexts/LanguageContext"
import { ProjectCard } from "@/components/ProjectCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ProjectsPage() {
    const { t, dir } = useLanguage()

    return (
        <div dir={dir} className="min-h-screen bg-background text-foreground font-sans selection:bg-black selection:text-white pt-24 px-4 pb-12">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-border pb-8">
                    <div>
                        <Button asChild variant="ghost" className="pl-0 hover:bg-transparent text-muted-foreground hover:text-foreground mb-4 uppercase tracking-wider">
                            <Link href="/">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Home
                            </Link>
                        </Button>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                            {t.projects.title}
                        </h1>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProjectCard
                        title={t.projects.tambourineman.title}
                        category="2019 • Music Cupboard"
                        imageSrc="/images/tambourineman.png"
                        className="bg-card"
                    />
                    <div className="space-y-4 md:col-span-2 lg:col-span-1 p-6 md:p-8 bg-muted/20 border border-border">
                        <h3 className="text-xl font-bold uppercase">{t.projects.tambourineman.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {t.projects.tambourineman.desc}
                        </p>
                    </div>

                    <ProjectCard
                        title={t.projects.worldmap.title}
                        category="2025 • Discovery Cupboard"
                        imageSrc="/images/worldmap.png"
                        className="bg-card"
                    />
                    <div className="space-y-4 md:col-span-2 lg:col-span-1 p-6 md:p-8 bg-muted/20 border border-border">
                        <h3 className="text-xl font-bold uppercase">{t.projects.worldmap.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {t.projects.worldmap.desc}
                        </p>
                    </div>


                    <ProjectCard
                        title={t.projects.kufic.title}
                        category="20XX • Furniture Series"
                        imageSrc="/images/kufic.png"
                        className="bg-card"
                    />
                    <div className="p-6 md:p-8 bg-muted/20 border border-border">
                        <p className="text-muted-foreground leading-relaxed">
                            {t.projects.kufic.desc}
                        </p>
                    </div>

                    <ProjectCard
                        title={t.projects.chess.title}
                        category="Online Market"
                        imageSrc="/images/chess.png"
                        className="bg-card"
                    />
                    <ProjectCard
                        title={t.projects.honey.title}
                        category="Picture Frames"
                        imageSrc="/images/honey-frames.png"
                        className="bg-card"
                    />
                </div>
            </div>
        </div>
    )
}
