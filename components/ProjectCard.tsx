import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    category: string;
    imageSrc?: string;
    className?: string;
}

export function ProjectCard({ title, category, imageSrc, className }: ProjectCardProps) {
    return (
        <Card className={cn("group overflow-hidden rounded-none border-0 bg-transparent", className)}>
            <CardContent className="p-0 space-y-4">
                <div className="relative w-full overflow-hidden bg-muted aspect-[4/5] border border-secondary/20 group-hover:border-secondary transition-colors duration-300">
                    {imageSrc ? (
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-secondary/30 font-heading font-bold text-6xl uppercase transform -rotate-12 select-none">
                            DO IT
                        </div>
                    )}
                </div>
                <div className="space-y-1">
                    <div className="text-xs font-sans uppercase tracking-widest text-muted-foreground">
                        {category}
                    </div>
                    <div className="text-xl font-heading font-bold uppercase tracking-tight text-primary dark:text-secondary group-hover:underline decoration-secondary decoration-2 underline-offset-4">
                        {title}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
