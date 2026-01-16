import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    className?: string;
    titleClassName?: string;
}

export function ServiceCard({ title, description, className, titleClassName }: ServiceCardProps) {
    return (
        <Card className={cn("bg-card border-none shadow-none rounded-none p-6 md:p-10 transition-all hover:bg-muted/50", className)}>
            <CardHeader className="p-0 mb-4">
                <CardTitle className={cn("text-3xl md:text-5xl font-black uppercase tracking-tighter", titleClassName)}>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed max-w-sm">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}
