"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";

export default function ImpressumPage() {
    const { language, dir } = useLanguage();
    const isEn = language === "en";

    return (
        <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8 font-serif" dir={dir}>
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm font-heading uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12"
                >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    {isEn ? "Back to Home" : "Zurück zur Startseite"}
                </Link>

                <h1 className="text-4xl md:text-5xl font-heading uppercase tracking-[0.2em] text-primary mb-12">
                    {isEn ? "Imprint" : "Impressum"}
                </h1>

                <div className="space-y-12 text-foreground/80 leading-relaxed italic text-lg">
                    <section className="bg-muted/30 p-8 rounded-sm border-l-4 border-primary/20">
                        <h2 className="font-heading uppercase tracking-widest text-sm text-primary mb-4 not-italic font-bold">
                            {isEn ? "Notice" : "Hinweis"}
                        </h2>
                        <p>
                            {isEn
                                ? "The contact information provided below is intended to fulfill legal requirements and is meant for our existing customers as well as interested parties in the itinerant trade. Please note that these contact details should not be used for accepting orders or customer communication."
                                : "Die im Folgenden angegebenen Kontaktinformationen dienen der Erfüllung gesetzlicher Vorgaben und sind sowohl für unsere Bestandskunden als auch für interessierte Personen im Reisegewerbe gedacht. Bitte beachten Sie, dass diese Kontaktdaten nicht zur Auftragsannahme oder Kundenkommunikation genutzt werden sollten."}
                        </p>
                    </section>

                    <section className="space-y-6 not-italic">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-primary/10 pt-8">
                            <div>
                                <h3 className="font-heading uppercase tracking-widest text-[10px] text-muted-foreground mb-2">
                                    {isEn ? "Company Name" : "Name des Unternehmens"}
                                </h3>
                                <p className="font-medium">
                                    {isEn ? "Carpentry and Interior Design in the Itinerant Trade" : "Tischler und Raumgestaltung im Reisegewerbe"}
                                </p>
                            </div>
                            <div>
                                <h3 className="font-heading uppercase tracking-widest text-[10px] text-muted-foreground mb-2">
                                    {isEn ? "Website" : "Webseite"}
                                </h3>
                                <p className="font-medium">www.raumwerkharon.de</p>
                            </div>
                            <div>
                                <h3 className="font-heading uppercase tracking-widest text-[10px] text-muted-foreground mb-2">
                                    {isEn ? "Owner" : "Inhaber"}
                                </h3>
                                <p className="font-medium">Muhajir Haron</p>
                            </div>
                            <div>
                                <h3 className="font-heading uppercase tracking-widest text-[10px] text-muted-foreground mb-2">
                                    {isEn ? "Email" : "E-Mail"}
                                </h3>
                                <p className="font-medium">info@raumwerkharon.de</p>
                            </div>
                            <div>
                                <h3 className="font-heading uppercase tracking-widest text-[10px] text-muted-foreground mb-2">
                                    {isEn ? "Phone" : "Telefon"}
                                </h3>
                                <p className="font-medium">+49 157 5199 73 23</p>
                            </div>
                            <div>
                                <h3 className="font-heading uppercase tracking-widest text-[10px] text-muted-foreground mb-2">
                                    {isEn ? "VAT ID" : "USt-IdNr."}
                                </h3>
                                <p className="font-medium">DE460284621</p>
                            </div>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-primary/10 pt-12">
                        <div>
                            <h3 className="font-heading uppercase tracking-widest text-xs text-primary mb-4 not-italic font-bold">
                                {isEn ? "Address (Private Residence)" : "Adresse (Privat Wohnung)"}
                            </h3>
                            <p className="not-italic">
                                Karl-Liebknecht-Straße 45<br />
                                14482 Potsdam<br />
                                {isEn ? "Germany" : "Deutschland"}
                            </p>
                        </div>
                        <div>
                            <h3 className="font-heading uppercase tracking-widest text-xs text-primary mb-4 not-italic font-bold">
                                {isEn ? "Workshop" : "Werkstatt"}
                            </h3>
                            <p className="not-italic">
                                Friedrich-Engels-Straße 42<br />
                                14482 Potsdam<br />
                                {isEn ? "Germany" : "Deutschland"}
                            </p>
                        </div>
                    </section>

                    <section className="border-t border-primary/10 pt-12 not-italic">
                        <p className="text-base text-foreground/70 font-serif italic">
                            {isEn
                                ? "For detailed information on legal aspects, please refer to the following section:"
                                : "Für detaillierte Informationen zu den rechtlichen Aspekten verweisen wir auf die folgende Rubrik:"}
                        </p>
                        <Link
                            href="/legal-notice"
                            className="inline-flex items-center mt-4 font-heading uppercase tracking-widest text-sm text-primary hover:text-secondary transition-colors font-bold not-italic"
                        >
                            {isEn ? "Legal Notice →" : "Rechtshinweise →"}
                        </Link>
                    </section>
                </div>

                <div className="mt-20 pt-10 border-t border-primary/10">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-heading">
                        © {new Date().getFullYear()} Muhajir Haron
                    </p>
                </div>
            </div>
        </div>
    );
}
