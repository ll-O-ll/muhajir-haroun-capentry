"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";

export default function LegalNoticePage() {
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
                    {isEn ? "Legal Notice" : "Rechtshinweise"}
                </h1>

                <div className="space-y-16 text-foreground/80 leading-relaxed italic text-lg">
                    <section className="space-y-6">
                        <p>
                            {isEn
                                ? "The websites of the sole proprietorship Carpentry and Interior Design in the Itinerant Trade are subject to German law. We reserve the right to make changes to the source code without prior notice."
                                : "Die Webseiten der Einzelunternehmung Tischler und Raumgestaltung im Reisegewerbe unterliegen dem deutschen Recht. Wir behalten uns das Recht vor, Änderungen am Quelltext ohne vorherige Ankündigung vorzunehmen."}
                        </p>
                        <p>
                            {isEn
                                ? "Despite careful control of the content, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content."
                                : "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich die jeweiligen Betreiber verantwortlich."}
                        </p>
                        <p>
                            {isEn
                                ? "The rights of use to the source code lie exclusively with the sole proprietorship Carpentry and Interior Design in the Itinerant Trade (Muhajir Haron). The copyrights to this source code are subject to German copyright law and require prior written consent for reproduction, editing, storage, and further uses."
                                : "Die Nutzungsrechte am Quelltext liegen exklusiv bei der Einzelunternehmung Tischler und Raumgestaltung im Reisegewerbe (Muhajir Haron). Die Urheberrechte an diesem Quelltext unterliegen dem deutschen Urheberrecht und erfordern für Vervielfältigung, Bearbeitung, Speicherung und weitere Verwendungen die vorherige schriftliche Zustimmung."}
                        </p>
                        <p>
                            {isEn
                                ? "The personal data collected in the course of e-mail correspondence serves exclusively to process inquiries and is protected against third parties."
                                : "Die im Rahmen des E-Mail-Verkehrs erfassten personenbezogenen Daten dienen ausschließlich der Bearbeitung von Anfragen und werden gegenüber Dritten geschützt."}
                        </p>
                        <p>
                            {isEn
                                ? "If you have any further questions, please feel free to contact us using the contact details provided."
                                : "Bei weiteren Fragen können Sie uns gerne über die angegebenen Kontaktmöglichkeiten erreichen."}
                        </p>
                    </section>

                    <section className="bg-muted/30 p-8 rounded-sm border-l-4 border-primary/20 not-italic">
                        <h2 className="font-heading uppercase tracking-widest text-xs text-primary mb-4 font-bold">
                            {isEn ? "How to find our workshop" : "So finden Sie unsere Werkstatt"}
                        </h2>
                        <p className="text-xl">
                            Friedrich-Engels-Straße 42<br />
                            14482 Potsdam<br />
                            {isEn ? "Germany" : "Deutschland"}
                        </p>
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
