"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import Image from "next/image";

export function Navbar() {
    const { t, dir } = useLanguage();
    const [isOpen, setIsOpen] = React.useState(false);

    const navItems = [
        { label: t.nav.mission, href: '/#mission' },
        { label: t.nav.services, href: '/#services' },
        { label: 'Projects', href: '/projects' },
        { label: t.nav.products, href: '#products' },
        { label: t.nav.contact, href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-secondary/30 bg-background/95 backdrop-blur-md" dir={dir}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-24 items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <div className="relative w-12 h-12 transition-transform group-hover:scale-105">
                            <Image
                                src="/images/mh-logo.png"
                                alt="Muhajir Haroun Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="ml-3 font-heading text-lg font-light tracking-widest uppercase text-foreground/80 hidden sm:block">
                            Carpentry
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm font-medium transition-colors hover:text-secondary tracking-widest uppercase font-heading"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        <div className="w-px h-6 bg-border mx-2" />
                        <LanguageSwitcher />
                    </div>

                    {/* Mobile Nav */}
                    <div className="md:hidden flex items-center gap-4">
                        <LanguageSwitcher />
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="shrink-0">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <div className="flex flex-col gap-8 mt-10">
                                    <div className="flex flex-col gap-4">
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="text-lg font-medium hover:text-muted-foreground transition-colors uppercase tracking-widest text-right"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
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
