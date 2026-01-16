import React from 'react';
import { cn } from '@/lib/utils';

interface IslamicPatternProps {
    className?: string;
    opacity?: number;
    color?: string; // Hex color
}

export function IslamicPattern({
    className,
    opacity = 0.05,
    color = "currentColor"
}: IslamicPatternProps) {
    return (
        <div className={cn("absolute inset-0 z-0 pointer-events-none overflow-hidden", className)}>
            <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
            >
                <defs>
                    <pattern
                        id="islamic-star"
                        x="0"
                        y="0"
                        width="60"
                        height="60"
                        patternUnits="userSpaceOnUse"
                        patternTransform="rotate(45)"
                    >
                        {/* Simple 8-point Star / Octagon Tessellation Base */}
                        <path
                            d="M30 0 L60 30 L30 60 L0 30 Z"
                            fill="none"
                            stroke={color}
                            strokeWidth="0.5"
                        />
                        <path
                            d="M30 0 L40 10 M60 30 L50 40 M30 60 L20 50 M0 30 L10 20"
                            fill="none"
                            stroke={color}
                            strokeWidth="0.5"
                        />
                        <rect x="0" y="0" width="60" height="60" fill="none" />
                        <circle cx="30" cy="30" r="10" fill="none" stroke={color} strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#islamic-star)" style={{ opacity }} />
            </svg>
        </div>
    );
}
