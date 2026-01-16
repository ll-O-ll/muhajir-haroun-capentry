"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface CarouselProjectCardProps {
    title: string
    category: string
    images: string[]
    className?: string
}

export function CarouselProjectCard({ title, category, images, className }: CarouselProjectCardProps) {
    return (
        <Card className={cn("group overflow-hidden rounded-none border-0 bg-transparent relative", className)}>
            <CardContent className="p-0 space-y-4">
                <Carousel className="w-full relative group/carousel">
                    <CarouselContent>
                        {images.map((src, index) => (
                            <CarouselItem key={index}>
                                <div className="relative w-full overflow-hidden bg-muted aspect-[4/5] border border-secondary/20 transition-colors duration-300">
                                    <Image
                                        src={src || "/placeholder.svg"}
                                        alt={`${title} - Image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* Controls visible on hover */}
                    <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 pointer-events-none px-4">
                        <CarouselPrevious className="pointer-events-auto h-10 w-10 border-secondary text-secondary hover:bg-secondary hover:text-primary-foreground relative left-0 translate-x-0" />
                        <CarouselNext className="pointer-events-auto h-10 w-10 border-secondary text-secondary hover:bg-secondary hover:text-primary-foreground relative right-0 translate-x-0" />
                    </div>
                </Carousel>

                <div className="space-y-1">
                    <div className="text-xs font-sans uppercase tracking-widest text-muted-foreground">
                        {category}
                    </div>
                    <div className="text-xl font-heading font-bold uppercase tracking-tight text-primary dark:text-secondary decoration-secondary decoration-2 underline-offset-4">
                        {title}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
