"use client";

import React, { useEffect, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { loginAction } from "@/app/actions/auth";
import { Loader2 } from "lucide-react";
import Link from "next/link";

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className={`w-full py-4 bg-primary text-primary-foreground font-heading uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2 ${pending ? "opacity-70 cursor-not-allowed" : ""
                }`}
        >
            {pending ? (
                <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Authenticating...</span>
                </>
            ) : (
                <span>Enter Workspace</span>
            )}
        </button>
    );
}

export default function LoginPage() {
    const [state, formAction] = useActionState(loginAction, null);

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">

            {/* Back to Home Link */}
            <div className="absolute top-8 left-8">
                <Link href="/" className="font-heading uppercase tracking-widest text-sm text-muted-foreground hover:text-primary transition-colors">
                    &larr; Return to Public Site
                </Link>
            </div>

            <div className="w-full max-w-md space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-heading font-bold uppercase tracking-[0.2em] text-primary">
                        Admin Access
                    </h1>
                    <p className="text-muted-foreground font-serif tracking-wide italic">
                        Secure portal for managing the Design Space.
                    </p>
                </div>

                <form action={formAction} className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                required
                                className="w-full p-4 bg-transparent border-b border-primary/20 text-primary font-sans focus:outline-none focus:border-primary transition-colors rounded-none"
                                placeholder="Enter admin username"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                required
                                className="w-full p-4 bg-transparent border-b border-primary/20 text-primary font-sans focus:outline-none focus:border-primary transition-colors rounded-none"
                                placeholder="••••••••••••"
                            />
                        </div>
                    </div>

                    {state?.error && (
                        <div className="p-4 bg-red-50 text-red-600 border border-red-200 text-sm font-sans">
                            {state.error}
                        </div>
                    )}

                    <SubmitButton />
                </form>
            </div>
        </div>
    );
}
