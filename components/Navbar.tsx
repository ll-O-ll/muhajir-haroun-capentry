"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import Image from "next/image";

export function Navbar() {
    const { t, dir } = useLanguage();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);

    // Hide Navbar on admin routes
    if (pathname?.startsWith('/manage-space')) {
        return null;
    }

    const navItems = [
        { label: 'DESIGN SPACE', href: '/#design-space' },
        { label: 'DESIGN OBJECT', href: '/#design-objects' },
        { label: 'COLLABORATE', href: '/#collaborate' },
        { label: 'DO IT DESIGNS', href: '/shop' },
        { label: 'CONTACT', href: '/#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-secondary/30 bg-background/95 backdrop-blur-md" dir={dir}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-24 items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center group shrink-0 mr-4">
                        <div className="relative w-[200px] h-14 sm:w-[260px] sm:h-16 lg:w-[280px] lg:h-16 xl:w-[360px] xl:h-18 transition-transform origin-left group-hover:scale-105">
                            <Image
                                src="/images/harun-logo.png"
                                alt="Muhajir Haroun Logo"
                                fill
                                priority
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-4">
                        <div className="flex items-center gap-2 xl:gap-3">
                            {navItems.map((item, index) => (
                                <React.Fragment key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-[11px] xl:text-xs font-medium transition-colors hover:text-secondary tracking-widest uppercase font-heading whitespace-nowrap"
                                    >
                                        {item.label}
                                    </Link>
                                    {index < navItems.length - 1 && (
                                        <span className="text-foreground/30 text-[10px] font-medium">|</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        <div className="w-px h-6 bg-border mx-1" />

                        <div className="flex flex-col items-end shrink-0">
                            <LanguageSwitcher />
                            <div className="flex gap-2 mt-1">
                                <Link href="/impressum" className="text-[8px] xl:text-[9px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">Impressum</Link>
                                <span className="text-[8px] text-muted-foreground/30">•</span>
                                <Link href="/legal-notice" className="text-[8px] xl:text-[9px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">Legal</Link>
                                <span className="text-[8px] text-muted-foreground/30">•</span>
                                <Link href="/privacy-policy" className="text-[8px] xl:text-[9px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">Datenschutz</Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Nav */}
                    <div className="lg:hidden flex items-center gap-4">
                        <LanguageSwitcher />
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="shrink-0">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[80vw] max-w-[400px]">
                                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                                <div className="flex flex-col justify-between h-full py-10">
                                    <div className="flex flex-col gap-6 items-center">
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="text-base sm:text-lg font-medium hover:text-muted-foreground transition-colors uppercase tracking-wider sm:tracking-widest text-center"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="flex flex-col items-center gap-4 pt-10 border-t border-border/50">
                                        <div className="flex gap-4">
                                            <Link
                                                href="/impressum"
                                                onClick={() => setIsOpen(false)}
                                                className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                Impressum
                                            </Link>
                                            <Link
                                                href="/legal-notice"
                                                onClick={() => setIsOpen(false)}
                                                className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                Legal
                                            </Link>
                                            <Link
                                                href="/privacy-policy"
                                                onClick={() => setIsOpen(false)}
                                                className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                Datenschutz
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
