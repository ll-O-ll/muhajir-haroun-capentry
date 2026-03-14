import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function LegalNoticePage() {
    return (
        <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8 font-serif">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm font-heading uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12"
                >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-heading uppercase tracking-[0.2em] text-primary mb-12">
                    Rechtshinweise
                </h1>

                <div className="space-y-16 text-foreground/80 leading-relaxed italic text-lg">
                    <section className="space-y-6">
                        <h2 className="font-heading uppercase tracking-widest text-sm text-primary not-italic font-bold">Geltungsbereich</h2>
                        <p>
                            Die Webseiten der Einzelunternehmung Tischler und Raumgestaltung im Reisegewerbe unterliegen dem deutschen Recht. Wir behalten uns das Recht vor, Änderungen am Quelltext ohne vorherige Ankündigung vorzunehmen.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="font-heading uppercase tracking-widest text-sm text-primary not-italic font-bold">Haftung für Links</h2>
                        <p>
                            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich die jeweiligen Betreiber verantwortlich.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="font-heading uppercase tracking-widest text-sm text-primary not-italic font-bold">Urheberrecht</h2>
                        <p>
                            Die Nutzungsrechte am Quelltext liegen exklusiv bei der Einzelunternehmung Tischler und Raumgestaltung im Reisegewerbe (Muhajir Haron). Die Urheberrechte an diesem Quelltext unterliegen dem deutschen Urheberrecht und erfordern für Vervielfältigung, Bearbeitung, Speicherung und weitere Verwendungen die vorherige schriftliche Zustimmung.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="font-heading uppercase tracking-widest text-sm text-primary not-italic font-bold">Datenschutz</h2>
                        <p>
                            Die im Rahmen des E-Mail-Verkehrs erfassten personenbezogenen Daten dienen ausschließlich der Bearbeitung von Anfragen und werden gegenüber Dritten geschützt.
                            Bei weiteren Fragen können Sie uns gerne über die angegebenen Kontaktmöglichkeiten erreichen.
                        </p>
                    </section>

                    <section className="bg-muted/30 p-8 rounded-sm border-l-4 border-primary/20 not-italic">
                        <h2 className="font-heading uppercase tracking-widest text-xs text-primary mb-4 font-bold">Anschrift Werkstatt</h2>
                        <p className="text-xl">
                            Friedrich-Engels-Straße 42<br />
                            14482 Potsdam
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
