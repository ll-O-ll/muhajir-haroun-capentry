"use client";

import React from "react";
import Link from "next/link";
import { logoutAction } from "@/app/actions/logout";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <h1 className="font-heading font-bold uppercase tracking-widest text-primary">
                            Admin Portal
                        </h1>
                        <nav className="hidden md:flex space-x-4">
                            <Link href="/manage-space" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                                Dashboard
                            </Link>
                        </nav>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link href="/" target="_blank" className="text-sm text-gray-500 hover:text-primary transition-colors pr-4 border-r border-gray-200">
                            View Live Site &nearr;
                        </Link>
                        <form action={logoutAction}>
                            <button type="submit" className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
                                Sign Out
                            </button>
                        </form>
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
        </div>
    );
}
