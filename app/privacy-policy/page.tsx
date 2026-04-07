"use client";

import React from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { Shield, Lock, Eye, FileText, Info } from "lucide-react";

export default function PrivacyPolicyPage() {
    const { dir } = useLanguage();

    return (
        <div className="min-h-screen bg-background pt-32 pb-24" dir={dir}>
            <main className="max-w-4xl mx-auto px-6">
                <div className="space-y-12 animate-in fade-in duration-700">
                    <header className="space-y-4 border-b border-secondary/10 pb-8">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter text-primary">
                            Datenschutz<span className="text-secondary font-light">erklärung</span>
                        </h1>
                        <p className="text-sm font-heading font-bold uppercase tracking-widest text-secondary/60">
                            Privacy Policy
                        </p>
                    </header>

                    <section className="prose prose-slate max-w-none space-y-12">
                        <div className="space-y-4">
                            <p className="text-xl leading-relaxed font-serif text-foreground/80 italic border-l-4 border-secondary/20 pl-6">
                                Die Nutzung dieser Website ist in der Regel ohne die Angabe personenbezogener Daten möglich. Soweit Daten wie Name, Anschrift oder E-Mail-Adresse erfasst werden, erfolgt dies freiwillig. Ohne Ihre ausdrückliche Zustimmung geben wir diese Daten nicht an Dritte weiter.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-4">
                                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <h2 className="text-lg font-heading font-bold uppercase tracking-widest text-primary">Sicherheit</h2>
                                <p className="text-sm text-gray-500 font-serif leading-relaxed">
                                    Bitte beachten Sie, dass die Datenübertragung im Internet (z. B. bei E-Mail-Kommunikation) Sicherheitsrisiken birgt. Ein lückenloser Schutz vor unbefugtem Zugriff ist nicht möglich.
                                </p>
                            </div>

                            <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-4">
                                <div className="w-10 h-10 bg-secondary/5 rounded-xl flex items-center justify-center text-secondary">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <h2 className="text-lg font-heading font-bold uppercase tracking-widest text-primary">SSL-Verschlüsselung</h2>
                                <p className="text-sm text-gray-500 font-serif leading-relaxed">
                                    Dies erkennen Sie an der URL mit „https://“ und dem Schloss-Symbol in Ihrem Browser. Bei aktivierter SSL-Verschlüsselung sind Ihre übermittelten Daten vor dem Zugriff Dritter geschützt.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <Eye className="w-5 h-5 text-secondary" />
                                <h2 className="text-xl font-heading font-bold uppercase tracking-widest text-primary">Server-Log-Files</h2>
                            </div>
                            <p className="text-sm text-gray-500 font-serif leading-relaxed">
                                Unser Provider erhebt automatisch Informationen, die Ihr Browser übermittelt, darunter:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                                {[
                                    "Hostname des Rechners",
                                    "Verwendetes Betriebssystem",
                                    "Browsertyp und -version",
                                    "Referrer-URL",
                                    "Uhrzeit der Serveranfrage"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest text-gray-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-gray-500 font-serif leading-relaxed pt-2 italic">
                                Diese Daten sind anonym und werden nicht mit anderen Datenquellen zusammengeführt. Bei Verdacht auf rechtswidrige Nutzung behalten wir uns vor, diese Daten zu überprüfen.
                            </p>
                        </div>

                        <div className="space-y-6 pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                                <Info className="w-5 h-5 text-secondary" />
                                <h2 className="text-xl font-heading font-bold uppercase tracking-widest text-primary">Auskunft, Löschung, Sperrung</h2>
                            </div>
                            <p className="text-base text-gray-600 font-serif leading-relaxed">
                                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten sowie auf Berichtigung, Sperrung oder Löschung dieser Daten. Für Fragen zu Ihren Daten können Sie uns jederzeit über die im Impressum angegebene Adresse kontaktieren.
                            </p>
                        </div>

                        <div className="p-8 bg-primary text-white rounded-3xl space-y-4">
                            <div className="flex items-center gap-3 text-secondary">
                                <FileText className="w-5 h-5" />
                                <h2 className="text-xs font-heading font-bold uppercase tracking-[0.2em]">Werbewiderspruch</h2>
                            </div>
                            <p className="text-sm font-serif leading-relaxed opacity-90">
                                Wir widersprechen der Nutzung der im Impressum veröffentlichten Kontaktdaten für unaufgeorderte Werbung. Bei unerwünschten Werbeinformationen behalten wir uns rechtliche Schritte vor.
                            </p>
                        </div>

                        {/* Reisegewerbe Section */}
                        <div className="space-y-8 pt-8 border-t border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-widest text-primary">
                                Was ist Reisegewerbe?
                            </h2>

                            <div className="space-y-6 text-base text-gray-600 font-serif leading-relaxed">
                                <p>
                                    Das Reisegewerbe stellt eine spezielle Form der gewerblichen Tätigkeit dar, für die eine besondere Erlaubnis erforderlich ist und die gesetzlich geregelt ist. In diesem Bereich können vielfältige Tätigkeiten ausgeübt werden, von Warenverkäufen bis hin zu Dienstleistungen.
                                </p>
                                <p>
                                    Ein häufiges Problem ist, dass Reisegewerbetreibende von Ordnungsämtern oder Handwerkskammern kontrolliert und manchmal wegen der Ausführung meisterpflichtiger Arbeiten angeklagt werden, obwohl sie der Gewerbeordnung (GewO) und nicht der Handwerksordnung (HwO) unterliegen. Vorteilhaft ist, dass Reisegewerbetreibende gemäß § 55 GewO alle handwerklichen Tätigkeiten ausüben dürfen, sofern diese in ihrer Reisegewerbekarte vermerkt sind.
                                </p>
                                <p>
                                    Die wesentliche gesetzliche Anforderung ist, dass die Initiative zur Leistungserbringung vom Anbieter ausgehen muss. Das Bundesverfassungsgericht hat klargestellt, dass der Hauptunterschied zwischen Reisegewerbe und stehenden Gewerben in der Interaktion liegt: Der Reisegewerbetreibende sucht den Kunden auf, während beim stehenden Gewerbe der Kunde zum Handwerker kommt.
                                </p>
                                <p>
                                    Ein weiteres Urteil (OLG Frankfurt am Main – Az. 6 U 178/08) bestätigt die Legitimität unserer Website.
                                </p>
                                <p>
                                    Für uns ist das Reisegewerbe nicht nur eine Möglichkeit, sondern eine Hommage an die alte Handwerkskunst, die auf der grundgesetzlich garantierten Berufsausübungsfreiheit (Art. 12 Abs. 1 GG) basiert. Das Reisegewerbe wird in Teil III der Gewerbeordnung, insbesondere in § 55, definiert:
                                </p>

                                <blockquote className="border-l-4 border-secondary/30 pl-6 py-4 bg-muted/20 rounded-r-lg italic text-foreground/70">
                                    Ein Reisegewerbe betreibt, wer gewerbsmäßig ohne vorhergehende Bestellung außerhalb seiner gewerblichen Niederlassung (§ 42 Abs. 2) oder ohne eine solche zu haben 1. selbständig oder unselbständig in eigener Person Waren feilbietet oder Bestellungen aufsucht (vertreibt) oder ankauft, Leistungen anbietet oder Bestellungen auf Leistungen aufsucht oder 2. selbständig unterhaltende Tätigkeiten als Schausteller oder nach Schaustellerart ausübt.
                                </blockquote>

                                <p>
                                    Die Beschränkungen handwerklicher Berufsausübung durch den Meisterzwang bestehen nach der Handwerksordnung nur für das so genannte &quot;stehende Gewerbe&quot; – nicht für das Reisegewerbe.
                                </p>
                                <p>
                                    In §1 HwO heißt es:
                                </p>

                                <blockquote className="border-l-4 border-secondary/30 pl-6 py-4 bg-muted/20 rounded-r-lg italic text-foreground/70">
                                    &bdquo;(1) Der selbstständige Betrieb eines zulassungspflichtigen Handwerks als stehendes Gewerbe ist nur den in der Handwerksrolle eingetragenen natürlichen und juristischen Personen und Personengesellschaften gestattet.&ldquo;
                                </blockquote>

                                <p>
                                    Da die Tätigkeit im Reisegewerbe nicht in die Handwerksrolle eingetragen wird, ist sie vom Meisterzwang nicht betroffen.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
