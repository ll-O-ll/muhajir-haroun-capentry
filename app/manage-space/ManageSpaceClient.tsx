"use client";

import React, { useRef, useEffect, useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { createProjectAction, deleteProjectAction, updateDesignStatementAction, updateProcedureStepAction, createProductAction, deleteProductAction, toggleContactMessageReadAction, deleteContactMessageAction } from "@/app/actions/admin";
import { Loader2, Trash2, Edit2, Save, X, Settings2, Layout, ShoppingBag, Mail, CheckCircle, Circle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function SubmitButton({ label }: { label: string }) {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className={`px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded shadow hover:bg-primary/90 transition-colors flex items-center space-x-2 ${pending ? "opacity-70 cursor-not-allowed" : ""
                }`}
        >
            {pending && <Loader2 className="w-4 h-4 animate-spin" />}
            <span>{pending ? "Saving..." : label}</span>
        </button>
    );
}

export default function ManageSpaceClient({
    initialProjects,
    initialProducts,
    initialProcedureSteps,
    initialDesignStatements,
    initialContactMessages,
}: {
    initialProjects: any[];
    initialProducts: any[];
    initialProcedureSteps: any[];
    initialDesignStatements: any[];
    initialContactMessages: any[];
}) {
    const router = useRouter();
    const [activeSection, setActiveSection] = useState<"projects" | "shop" | "content" | "messages">("projects");
    const [activeContentCategory, setActiveContentCategory] = useState<"design-space" | "design-object">("design-space");

    // Form State
    const [projectState, projectAction] = useActionState(createProjectAction, null);
    const [productState, productAction] = useActionState(createProductAction, null);

    const projectFormRef = useRef<HTMLFormElement>(null);
    const productFormRef = useRef<HTMLFormElement>(null);

    // Procedure/Statement Editing State
    const [editingStepId, setEditingStepId] = useState<string | null>(null);
    const [isUpdating, setIsUpdating] = useState(false);

    // Clear forms on success
    useEffect(() => {
        if (projectState?.success) projectFormRef.current?.reset();
        if (productState?.success) productFormRef.current?.reset();
    }, [projectState, productState]);

    const handleDeleteProject = async (id: string) => {
        if (confirm("Are you sure you want to delete this project?")) {
            await deleteProjectAction(id);
            router.refresh();
        }
    };

    const handleDeleteProduct = async (id: string) => {
        if (confirm("Are you sure you want to delete this product?")) {
            await deleteProductAction(id);
            router.refresh();
        }
    };

    const handleUpdateStatement = async (e: React.FormEvent<HTMLFormElement>, category: string) => {
        e.preventDefault();
        setIsUpdating(true);
        const formData = new FormData(e.currentTarget);
        const content = formData.get("content") as string;
        await updateDesignStatementAction(category, content);
        setIsUpdating(false);
        router.refresh();
    };

    const handleUpdateStep = async (e: React.FormEvent<HTMLFormElement>, id: string | null, category: string, stepNumber: number) => {
        e.preventDefault();
        setIsUpdating(true);
        const formData = new FormData(e.currentTarget);
        const title = formData.get("title") as string;
        const description = formData.get("description") as string;

        await updateProcedureStepAction(id, {
            category,
            stepNumber,
            title,
            description
        });

        setEditingStepId(null);
        setIsUpdating(false);
        router.refresh();
    };

    const handleToggleRead = async (id: string, currentStatus: boolean) => {
        await toggleContactMessageReadAction(id, !currentStatus);
        router.refresh();
    };

    const handleDeleteMessage = async (id: string) => {
        if (confirm("Are you sure you want to delete this message?")) {
            await deleteContactMessageAction(id);
            router.refresh();
        }
    };

    const unreadCount = initialContactMessages.filter(m => !m.isRead).length;

    return (
        <div className="space-y-8">
            <div className="flex border-b border-gray-200 overflow-x-auto">
                <button
                    onClick={() => setActiveSection("projects")}
                    className={`px-6 py-4 font-heading uppercase tracking-widest text-xs flex items-center gap-2 transition-colors border-b-2 shrink-0 ${activeSection === "projects" ? "text-primary border-primary bg-primary/5" : "text-muted-foreground border-transparent hover:text-primary"
                        }`}
                >
                    <Layout className="w-4 h-4" />
                    Projects
                </button>
                <button
                    onClick={() => setActiveSection("shop")}
                    className={`px-6 py-4 font-heading uppercase tracking-widest text-xs flex items-center gap-2 transition-colors border-b-2 shrink-0 ${activeSection === "shop" ? "text-primary border-primary bg-primary/5" : "text-muted-foreground border-transparent hover:text-primary"
                        }`}
                >
                    <ShoppingBag className="w-4 h-4" />
                    Do It Shop
                </button>
                <button
                    onClick={() => setActiveSection("content")}
                    className={`px-6 py-4 font-heading uppercase tracking-widest text-xs flex items-center gap-2 transition-colors border-b-2 shrink-0 ${activeSection === "content" ? "text-primary border-primary bg-primary/5" : "text-muted-foreground border-transparent hover:text-primary"
                        }`}
                >
                    <Settings2 className="w-4 h-4" />
                    Site Content
                </button>
                <button
                    onClick={() => setActiveSection("messages")}
                    className={`px-6 py-4 font-heading uppercase tracking-widest text-xs flex items-center gap-2 transition-colors border-b-2 shrink-0 relative ${activeSection === "messages" ? "text-primary border-primary bg-primary/5" : "text-muted-foreground border-transparent hover:text-primary"
                        }`}
                >
                    <Mail className="w-4 h-4" />
                    Messages
                    {unreadCount > 0 && (
                        <span className="absolute top-2 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-white">
                            {unreadCount}
                        </span>
                    )}
                </button>
            </div>

            {activeSection === "projects" && (
                <div className="space-y-12 animate-in fade-in duration-500">
                    <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h2 className="font-heading text-2xl font-bold mb-6 text-primary">Projects Portfolio</h2>

                        <div className="mb-10 bg-gray-50/50 p-6 rounded-xl border-2 border-dashed border-gray-200">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800">Add New Project</h3>
                            <form action={projectAction} ref={projectFormRef} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                                        <input type="text" name="title" required className="w-full p-2.5 border border-gray-300 rounded focus:ring-primary focus:border-primary" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                                        <select name="category" required className="w-full p-2.5 border border-gray-300 rounded focus:ring-primary focus:border-primary">
                                            <option value="design-space">Design Space</option>
                                            <option value="design-object">Design Object</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                    <textarea name="description" rows={3} className="w-full p-2.5 border border-gray-300 rounded focus:ring-primary focus:border-primary"></textarea>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
                                    <input type="file" name="image" accept="image/*" className="w-full p-2.5 border border-gray-300 bg-white rounded focus:ring-primary focus:border-primary" />
                                </div>

                                {projectState?.error && <p className="text-red-600 text-sm font-medium">{projectState.error}</p>}
                                {projectState?.success && <p className="text-green-600 text-sm font-medium">{projectState.message}</p>}

                                <div className="flex justify-end pt-2">
                                    <SubmitButton label="Create Project" />
                                </div>
                            </form>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">All Projects</h3>
                            {initialProjects.length === 0 ? (
                                <p className="text-gray-500 italic text-sm">No projects created yet.</p>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {initialProjects.map((project) => {
                                        const coverImage = project.images?.find((img: any) => img.isCover) || project.images?.[0];

                                        return (
                                            <div key={project.id} className="border border-gray-200 rounded-lg overflow-hidden flex flex-col bg-white">
                                                <div className="relative h-48 bg-gray-100">
                                                    {coverImage ? (
                                                        <Image src={coverImage.imageUrl} alt={project.title} fill className="object-cover" />
                                                    ) : (
                                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm font-medium uppercase">No Image</div>
                                                    )}
                                                </div>
                                                <div className="p-4 flex-1 flex flex-col space-y-2">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <span className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-full uppercase tracking-wider">
                                                                {project.category === 'design-object' ? 'Design Object' : 'Design Space'}
                                                            </span>
                                                            <h4 className="font-bold text-gray-900 leading-tight mt-1">{project.title}</h4>
                                                        </div>
                                                        <button onClick={() => handleDeleteProject(project.id)} className="text-red-500 hover:text-red-700 p-1" title="Delete Project">
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            )}

            {activeSection === "shop" && (
                <div className="space-y-12 animate-in fade-in duration-500">
                    <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h2 className="font-heading text-2xl font-bold mb-6 text-primary">Do It Shop Inventory</h2>

                        <div className="mb-10 bg-gray-50/50 p-6 rounded-xl border-2 border-dashed border-gray-200">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800">Add New Product</h3>
                            <form action={productAction} ref={productFormRef} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="md:col-span-1">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                                        <input type="text" name="title" required className="w-full p-2.5 border border-gray-300 rounded focus:ring-primary focus:border-primary text-sm" />
                                    </div>
                                    <div className="md:col-span-1">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                                        <select name="category" required className="w-full p-2.5 border border-gray-300 rounded focus:ring-primary focus:border-primary text-sm">
                                            <option value="PLAY IT">PLAY IT</option>
                                            <option value="PICTURE IT">PICTURE IT</option>
                                            <option value="CHOP IT">CHOP IT</option>
                                            <option value="STAND IT">STAND IT</option>
                                            <option value="RENEW IT">RENEW IT</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-1">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Price (€)</label>
                                        <input type="number" step="0.01" name="price" className="w-full p-2.5 border border-gray-300 rounded focus:ring-primary focus:border-primary text-sm" placeholder="0.00" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                    <textarea name="description" rows={3} className="w-full p-2.5 border border-gray-300 rounded focus:ring-primary focus:border-primary text-sm" placeholder="Tell the story of this product..."></textarea>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
                                    <input type="file" name="image" accept="image/*" className="w-full p-2.5 border border-gray-300 bg-white rounded focus:ring-primary focus:border-primary text-sm" />
                                </div>

                                {productState?.error && <p className="text-red-600 text-sm font-medium">{productState.error}</p>}
                                {productState?.success && <p className="text-green-600 text-sm font-medium">{productState.message}</p>}

                                <div className="flex justify-end pt-2">
                                    <SubmitButton label="Add Product" />
                                </div>
                            </form>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Product List</h3>
                            {initialProducts.length === 0 ? (
                                <p className="text-gray-500 italic text-sm">No products in the shop yet.</p>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {initialProducts.map((product) => {
                                        const coverImage = product.images?.find((img: any) => img.isCover) || product.images?.[0];

                                        return (
                                            <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden flex flex-col bg-white">
                                                <div className="relative h-40 bg-gray-100">
                                                    {coverImage ? (
                                                        <Image src={coverImage.imageUrl} alt={product.title} fill className="object-cover" />
                                                    ) : (
                                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-[10px] font-bold uppercase tracking-widest">No Image</div>
                                                    )}
                                                </div>
                                                <div className="p-3 flex-1 flex flex-col space-y-2">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <span className="text-[9px] font-bold text-secondary bg-secondary/5 px-2 py-0.5 rounded-full uppercase tracking-wider">
                                                                {product.category}
                                                            </span>
                                                            <h4 className="font-bold text-gray-900 border-none leading-tight mt-1 truncate max-w-[120px]">{product.title}</h4>
                                                        </div>
                                                        <button onClick={() => handleDeleteProduct(product.id)} className="text-red-500 hover:text-red-700 p-1" title="Delete Product">
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                    <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-50">
                                                        <span className="text-xs font-heading font-medium text-primary">
                                                            {product.price ? `€${product.price.toFixed(2)}` : "Price on request"}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            )}

            {activeSection === "content" && (
                <div className="space-y-8 animate-in fade-in duration-500">
                    <div className="flex gap-4">
                        <button
                            onClick={() => setActiveContentCategory("design-space")}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeContentCategory === 'design-space' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                        >
                            Design Space
                        </button>
                        <button
                            onClick={() => setActiveContentCategory("design-object")}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeContentCategory === 'design-object' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                        >
                            Design Object
                        </button>
                    </div>

                    {/* --- DESIGN STATEMENT --- */}
                    <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h2 className="font-heading text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                            Design Statement
                            <span className="text-[10px] uppercase tracking-widest bg-primary/5 text-primary px-2 py-1 rounded">
                                {activeContentCategory === 'design-object' ? 'Design Objects' : 'Design Space'}
                            </span>
                        </h2>
                        <form onSubmit={(e) => handleUpdateStatement(e, activeContentCategory)} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Statement Content</label>
                                <textarea
                                    name="content"
                                    rows={4}
                                    defaultValue={initialDesignStatements.find(s => s.category === activeContentCategory)?.content || ""}
                                    className="w-full p-3 border border-gray-300 rounded focus:ring-primary focus:border-primary font-serif italic"
                                    placeholder={`Enter the design philosophy for ${activeContentCategory}...`}
                                ></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={isUpdating}
                                    className="px-6 py-2 bg-primary text-white rounded text-sm font-bold shadow hover:bg-primary/90 flex items-center gap-2"
                                >
                                    {isUpdating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                                    Save Statement
                                </button>
                            </div>
                        </form>
                    </section>

                    {/* --- PROCEDURES --- */}
                    <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h2 className="font-heading text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                            Procedures
                            <span className="text-[10px] uppercase tracking-widest bg-primary/5 text-primary px-2 py-1 rounded">
                                {activeContentCategory === 'design-object' ? 'Design Objects' : 'Design Space'}
                            </span>
                        </h2>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map(stepNum => {
                                const step = initialProcedureSteps.find(s => s.category === activeContentCategory && s.stepNumber === stepNum);
                                const isEditing = editingStepId === `${activeContentCategory}-${stepNum}`;

                                return (
                                    <div key={`${activeContentCategory}-${stepNum}`} className="p-4 border border-gray-100 rounded-xl bg-gray-50/50 transition-all hover:border-primary/20">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center gap-4">
                                                <span className="text-3xl font-heading text-primary/10">0{stepNum}</span>
                                                {!isEditing && (
                                                    <div>
                                                        <h4 className="font-bold uppercase tracking-widest text-xs text-gray-800">{step?.title || `Untitled Step ${stepNum}`}</h4>
                                                        <p className="text-[11px] text-gray-500 mt-0.5 max-w-xl">{step?.description || "Click edit to add a description for this phase."}</p>
                                                    </div>
                                                )}
                                            </div>
                                            {!isEditing ? (
                                                <button onClick={() => setEditingStepId(`${activeContentCategory}-${stepNum}`)} className="p-2 text-primary/40 hover:text-primary transition-colors">
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                            ) : (
                                                <button onClick={() => setEditingStepId(null)} className="p-2 text-gray-400 hover:text-gray-600">
                                                    <X className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>

                                        {isEditing && (
                                            <form onSubmit={(e) => handleUpdateStep(e, step?.id || null, activeContentCategory, stepNum)} className="space-y-4 mt-4 p-4 bg-white rounded-lg border border-primary/20 animate-in slide-in-from-top-2">
                                                <div className="grid grid-cols-1 gap-4">
                                                    <div>
                                                        <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Step Title</label>
                                                        <input name="title" defaultValue={step?.title || ""} placeholder="e.g., Inspiration" required className="w-full p-2 border border-gray-200 rounded text-sm focus:ring-1 focus:ring-primary outline-none" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Description / Bullet Points</label>
                                                        <textarea name="description" defaultValue={step?.description || ""} placeholder="e.g., Mood- und Materialboard • First Draft" className="w-full p-2 border border-gray-200 rounded text-sm h-20 focus:ring-1 focus:ring-primary outline-none" />
                                                    </div>
                                                </div>
                                                <div className="flex justify-end gap-2">
                                                    <button type="button" onClick={() => setEditingStepId(null)} className="px-4 py-1.5 text-xs text-gray-500 border border-gray-200 rounded hover:bg-gray-50">Cancel</button>
                                                    <button type="submit" disabled={isUpdating} className="px-4 py-1.5 text-xs bg-primary text-white rounded flex items-center gap-1 hover:bg-primary/90">
                                                        {isUpdating ? <Loader2 className="w-3 h-3 animate-spin" /> : <Save className="w-3 h-3" />}
                                                        Save Phase
                                                    </button>
                                                </div>
                                            </form>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </div>
            )}

            {activeSection === "messages" && (
                <div className="space-y-8 animate-in fade-in duration-500">
                    <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h2 className="font-heading text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                            Contact Inquiries
                            <span className="text-[10px] uppercase tracking-widest bg-primary/5 text-primary px-2 py-1 rounded">
                                {initialContactMessages.length} Total
                            </span>
                        </h2>

                        <div className="space-y-4">
                            {initialContactMessages.length === 0 ? (
                                <p className="text-gray-500 italic text-sm py-10 text-center border-2 border-dashed border-gray-50 rounded-xl">No messages yet.</p>
                            ) : (
                                <div className="grid grid-cols-1 gap-4">
                                    {initialContactMessages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={`p-6 rounded-2xl border transition-all ${msg.isRead ? "bg-white border-gray-100" : "bg-primary/[0.02] border-primary/10 ring-1 ring-primary/5 shadow-sm"}`}
                                        >
                                            <div className="flex justify-between items-start gap-4">
                                                <div className="space-y-2 flex-1">
                                                    <div className="flex items-center gap-3">
                                                        <h4 className={`font-bold text-gray-900 ${msg.isRead ? "" : "text-primary"}`}>{msg.name}</h4>
                                                        {!msg.isRead && (
                                                            <span className="px-2 py-0.5 rounded-full bg-secondary text-[8px] font-bold text-white uppercase tracking-widest">New</span>
                                                        )}
                                                        <span className="text-[10px] text-gray-400 font-medium">
                                                            {new Date(msg.createdAt).toLocaleDateString()} {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                                        <Mail className="w-3 h-3" />
                                                        {msg.contactDetails}
                                                    </p>
                                                    <div className="pt-2">
                                                        <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                                                            {msg.subject}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => handleToggleRead(msg.id, msg.isRead)}
                                                        className={`p-2 rounded-lg transition-colors ${msg.isRead ? "text-gray-400 hover:text-primary hover:bg-primary/5" : "text-primary hover:bg-primary/5"}`}
                                                        title={msg.isRead ? "Mark as unread" : "Mark as read"}
                                                    >
                                                        {msg.isRead ? <Circle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />}
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteMessage(msg.id)}
                                                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                        title="Delete message"
                                                    >
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
}

const navItems = [
    { name: "DESIGN SPACE", href: "/#design-space" },
    { name: "DESIGN OBJECTS", href: "/#design-objects" },
    { name: "DO IT SHOP", href: "/shop" },
    { name: "COLLABORATE", href: "/#collaborate" },
    { name: "CONTACT", href: "/#contact" },
];
