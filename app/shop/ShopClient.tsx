"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const CATEGORIES = ["PLAY IT", "PICTURE IT", "CHOP IT", "STAND IT", "RENEW IT"];

export default function ShopClient({ products }: { products: any[] }) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredProducts = selectedCategory
        ? products.filter((p) => p.category === selectedCategory)
        : products;

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
            {/* --- SHOP HEADER --- */}
            <div className="flex flex-col mb-12 border-b border-gray-100 pb-8">
                <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-primary flex items-center gap-4 mb-4">
                    DO IT <span className="text-gray-200 text-3xl md:text-5xl font-light tracking-widest uppercase">Products</span>
                </h1>
                <div className="inline-block bg-secondary/10 text-secondary border border-secondary/20 px-4 py-2 rounded-md self-start">
                    <p className="text-xs md:text-sm font-semibold tracking-wider uppercase flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 animate-pulse"></span>
                        Items strictly for display (Not for sale)
                    </p>
                </div>
            </div>

            {/* --- SUB NAVBAR --- */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-16 text-[10px] md:text-xs font-heading font-bold tracking-[0.2em] uppercase text-gray-400">
                <button
                    onClick={() => setSelectedCategory(null)}
                    className={`hover:text-primary transition-colors ${!selectedCategory ? "text-primary border-b-2 border-primary pb-1" : "pb-1"}`}
                >
                    ALL
                </button>
                {CATEGORIES.map((cat, index) => (
                    <React.Fragment key={cat}>
                        <span className="text-gray-200">I</span>
                        <button
                            onClick={() => setSelectedCategory(cat)}
                            className={`hover:text-primary transition-colors ${selectedCategory === cat ? "text-primary border-b-2 border-primary pb-1" : "pb-1"}`}
                        >
                            {cat}
                        </button>
                    </React.Fragment>
                ))}
            </div>

            {/* --- PRODUCT GRID --- */}
            {filteredProducts.length === 0 ? (
                <div className="py-20 text-center border-2 border-dashed border-gray-100 rounded-3xl">
                    <p className="font-serif italic text-gray-400 text-xl">The collection is currently being curated.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {filteredProducts.map((product) => {
                        const coverImage = product.images?.find((i: any) => i.isCover) || product.images?.[0];
                        return (
                            <div key={product.id} className="group cursor-pointer">
                                <div className="relative aspect-[4/5] overflow-hidden bg-gray-50 rounded-lg mb-6">
                                    {coverImage ? (
                                        <Image
                                            src={coverImage.imageUrl}
                                            alt={product.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold tracking-widest text-gray-300 uppercase">
                                            Coming Soon
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <span className="text-[9px] font-bold tracking-[0.2em] text-secondary uppercase block mb-1">
                                                {product.category}
                                            </span>
                                            <h3 className="font-heading text-xl md:text-2xl font-bold text-primary group-hover:translate-x-1 transition-transform">
                                                {product.title}
                                            </h3>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-heading font-medium text-lg">
                                                {product.price ? `€${product.price.toLocaleString()}` : "Price on Request"}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="font-serif text-gray-500 text-sm italic leading-relaxed line-clamp-2">
                                        {product.description || "The story of this piece is waiting to be told."}
                                    </p>

                                    <button className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-primary group-hover:gap-4 transition-all pt-2">
                                        Inquire Details <MoveRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
