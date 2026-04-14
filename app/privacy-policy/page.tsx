"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { Shield, Lock, Eye, FileText, Info, ChevronLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
    const { language, dir } = useLanguage();
    const isEn = language === "en";

    return (
        <div className="min-h-screen bg-background pt-32 pb-24" dir={dir}>
            <main className="max-w-4xl mx-auto px-6">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm font-heading uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    {isEn ? "Back to Home" : "Zurück zur Startseite"}
                </Link>
                
                <div className="space-y-12 animate-in fade-in duration-700">
                    <header className="space-y-4 border-b border-secondary/10 pb-8">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter text-primary">
                            {isEn ? (
                                <>Privacy<span className="text-secondary font-light"> Policy</span></>
                            ) : (
                                <>Datenschutz<span className="text-secondary font-light">erklärung</span></>
                            )}
                        </h1>
                        <p className="text-sm font-heading font-bold uppercase tracking-widest text-secondary/60">
                            {isEn ? "Datenschutzerklärung" : "Privacy Policy"}
                        </p>
                    </header>

                    <section className="prose prose-slate max-w-none space-y-12">
                        <div className="space-y-4">
                            <p className="text-xl leading-relaxed font-serif text-foreground/80 italic border-l-4 border-secondary/20 pl-6">
                                {isEn
                                    ? "The use of this website is generally possible without providing personal data. As far as on our sides personal data (such as name, address or email addresses) are collected, this is as far as possible on a voluntary basis. These data will not be passed on to third parties without your explicit consent."
                                    : "Die Nutzung dieser Website ist in der Regel ohne die Angabe personenbezogener Daten möglich. Soweit Daten wie Name, Anschrift oder E-Mail-Adresse erfasst werden, erfolgt dies freiwillig. Ohne Ihre ausdrückliche Zustimmung geben wir diese Daten nicht an Dritte weiter."}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-4">
                                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <h2 className="text-lg font-heading font-bold uppercase tracking-widest text-primary">
                                    {isEn ? "Security" : "Sicherheit"}
                                </h2>
                                <p className="text-sm text-gray-500 font-serif leading-relaxed">
                                    {isEn
                                        ? "Please note that data transmission over the Internet (e.g. communication by e-mail) can have security vulnerabilities. Complete protection of data against access by third parties is not possible."
                                        : "Bitte beachten Sie, dass die Datenübertragung im Internet (z. B. bei E-Mail-Kommunikation) Sicherheitsrisiken birgt. Ein lückenloser Schutz vor unbefugtem Zugriff ist nicht möglich."}
                                </p>
                            </div>

                            <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-4">
                                <div className="w-10 h-10 bg-secondary/5 rounded-xl flex items-center justify-center text-secondary">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <h2 className="text-lg font-heading font-bold uppercase tracking-widest text-primary">
                                    {isEn ? "SSL Encryption" : "SSL-Verschlüsselung"}
                                </h2>
                                <p className="text-sm text-gray-500 font-serif leading-relaxed">
                                    {isEn
                                        ? 'You can recognize an encrypted connection by the fact that the address line of the browser changes to "https://" and by the lock symbol in your browser line. If SSL encryption is activated, the data you transmit to us cannot be read by third parties.'
                                        : "Dies erkennen Sie an der URL mit „https://“ und dem Schloss-Symbol in Ihrem Browser. Bei aktivierter SSL-Verschlüsselung sind Ihre übermittelten Daten vor dem Zugriff Dritter geschützt."}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <Eye className="w-5 h-5 text-secondary" />
                                <h2 className="text-xl font-heading font-bold uppercase tracking-widest text-primary">
                                    {isEn ? "Server Log Files" : "Server-Log-Files"}
                                </h2>
                            </div>
                            <p className="text-sm text-gray-500 font-serif leading-relaxed">
                                {isEn
                                    ? "Our provider automatically collects and stores information in so-called server log files, which your browser automatically transmits to us, including:"
                                    : "Unser Provider erhebt automatisch Informationen, die Ihr Browser übermittelt, darunter:"}
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                                {(isEn ? [
                                    "Hostname of the accessing computer",
                                    "Used operating system",
                                    "Browser type and version",
                                    "Referrer URL",
                                    "Time of the server inquiry"
                                ] : [
                                    "Hostname des Rechners",
                                    "Verwendetes Betriebssystem",
                                    "Browsertyp und -version",
                                    "Referrer-URL",
                                    "Uhrzeit der Serveranfrage"
                                ]).map((item) => (
                                    <li key={item} className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest text-gray-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-gray-500 font-serif leading-relaxed pt-2 italic">
                                {isEn
                                    ? "These data are anonymous and will not be combined with other data sources. We reserve the right to check this data retrospectively if we become aware of specific indications of illegal use."
                                    : "Diese Daten sind anonym und werden nicht mit anderen Datenquellen zusammengeführt. Bei Verdacht auf rechtswidrige Nutzung behalten wir uns vor, diese Daten zu überprüfen."}
                            </p>
                        </div>

                        <div className="space-y-6 pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                                <Info className="w-5 h-5 text-secondary" />
                                <h2 className="text-xl font-heading font-bold uppercase tracking-widest text-primary">
                                    {isEn ? "Information, Deletion, Blocking" : "Auskunft, Löschung, Sperrung"}
                                </h2>
                            </div>
                            <p className="text-base text-gray-600 font-serif leading-relaxed">
                                {isEn
                                    ? "You have the right to be provided at any time with information free of charge about your stored personal data, as well as a right to correction, blocking or deletion of this data. For questions regarding your data, you can contact us at any time at the address given in the imprint."
                                    : "Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten sowie auf Berichtigung, Sperrung oder Löschung dieser Daten. Für Fragen zu Ihren Daten können Sie uns jederzeit über die im Impressum angegebene Adresse kontaktieren."}
                            </p>
                        </div>

                        <div className="p-8 bg-primary text-white rounded-3xl space-y-4">
                            <div className="flex items-center gap-3 text-secondary">
                                <FileText className="w-5 h-5" />
                                <h2 className="text-xs font-heading font-bold uppercase tracking-[0.2em]">
                                    {isEn ? "Objection to Advertising" : "Werbewiderspruch"}
                                </h2>
                            </div>
                            <p className="text-sm font-serif leading-relaxed opacity-90">
                                {isEn
                                    ? "We hereby object to the use of contact data published within the scope of the imprint obligation for sending unsolicited advertising and informational materials. We expressly reserve the right to take legal action in the event of unsolicited promotional information."
                                    : "Wir widersprechen der Nutzung der im Impressum veröffentlichten Kontaktdaten für unaufgeorderte Werbung. Bei unerwünschten Werbeinformationen behalten wir uns rechtliche Schritte vor."}
                            </p>
                        </div>

                        {/* Reisegewerbe Section */}
                        <div className="space-y-8 pt-8 border-t border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-widest text-primary">
                                {isEn ? "What is the Itinerant Trade?" : "Was ist Reisegewerbe?"}
                            </h2>

                            <div className="space-y-6 text-base text-gray-600 font-serif leading-relaxed">
                                <p>
                                    {isEn
                                        ? "The itinerant trade represents a special form of commercial activity which requires a special permit and is regulated by law. Various activities can be carried out in this area, ranging from selling goods to providing services."
                                        : "Das Reisegewerbe stellt eine spezielle Form der gewerblichen Tätigkeit dar, für die eine besondere Erlaubnis erforderlich ist und die gesetzlich geregelt ist. In diesem Bereich können vielfältige Tätigkeiten ausgeübt werden, von Warenverkäufen bis hin zu Dienstleistungen."}
                                </p>
                                <p>
                                    {isEn
                                        ? "A common issue is that itinerant traders are monitored by regulatory agencies or chambers of crafts and sometimes face accusations for executing master-level work, even though they are subject to the Trade Regulation Act (GewO) rather than the Crafts Code (HwO). Advantageously, itinerant traders may carry out any craft activity under § 55 GewO as long as it is noted in their itinerant trade card."
                                        : "Ein häufiges Problem ist, dass Reisegewerbetreibende von Ordnungsämtern oder Handwerkskammern kontrolliert und manchmal wegen der Ausführung meisterpflichtiger Arbeiten angeklagt werden, obwohl sie der Gewerbeordnung (GewO) und nicht der Handwerksordnung (HwO) unterliegen. Vorteilhaft ist, dass Reisegewerbetreibende gemäß § 55 GewO alle handwerklichen Tätigkeiten ausüben dürfen, sofern diese in ihrer Reisegewerbekarte vermerkt sind."}
                                </p>
                                <p>
                                    {isEn
                                        ? "The essential legal requirement is that the initiative to provide the service must come from the provider. The Federal Constitutional Court has clarified that the main difference between an itinerant trade and a standing trade lies in the interaction: The itinerant trader visits the customer, whereas in the standing trade, the customer comes to the craftsman."
                                        : "Die wesentliche gesetzliche Anforderung ist, dass die Initiative zur Leistungserbringung vom Anbieter ausgehen muss. Das Bundesverfassungsgericht hat klargestellt, dass der Hauptunterschied zwischen Reisegewerbe und stehenden Gewerben in der Interaktion liegt: Der Reisegewerbetreibende sucht den Kunden auf, während beim stehenden Gewerbe der Kunde zum Handwerker kommt."}
                                </p>
                                <p>
                                    {isEn
                                        ? "Another ruling (OLG Frankfurt am Main – Az. 6 U 178/08) confirms the legitimacy of our website."
                                        : "Ein weiteres Urteil (OLG Frankfurt am Main – Az. 6 U 178/08) bestätigt die Legitimität unserer Website."}
                                </p>
                                <p>
                                    {isEn
                                        ? "For us, the itinerant trade is not just a possibility, but a tribute to the ancient craftsmanship based on the constitutionally guaranteed freedom to practice a profession (Art. 12 Para. 1 GG). The itinerant trade is defined in Part III of the Trade Regulation Act, especially in § 55:"
                                        : "Für uns ist das Reisegewerbe nicht nur eine Möglichkeit, sondern eine Hommage an die alte Handwerkskunst, die auf der grundgesetzlich garantierten Berufsausübungsfreiheit (Art. 12 Abs. 1 GG) basiert. Das Reisegewerbe wird in Teil III der Gewerbeordnung, insbesondere in § 55, definiert:"}
                                </p>

                                <blockquote className="border-l-4 border-secondary/30 pl-6 py-4 bg-muted/20 rounded-r-lg italic text-foreground/70">
                                    {isEn
                                        ? 'An itinerant trade is operated by anyone who commercially, without prior order, outside their commercial establishment (§ 42 Abs. 2) or without having one, 1. independently or dependently in person offers goods for sale or seeks orders (distributes) or purchases, offers services or seeks orders for services or 2. independently exercises entertaining activities as a showman or in the manner of a showman.'
                                        : 'Ein Reisegewerbe betreibt, wer gewerbsmäßig ohne vorhergehende Bestellung außerhalb seiner gewerblichen Niederlassung (§ 42 Abs. 2) oder ohne eine solche zu haben 1. selbständig oder unselbständig in eigener Person Waren feilbietet oder Bestellungen aufsucht (vertreibt) oder ankauft, Leistungen anbietet oder Bestellungen auf Leistungen aufsucht oder 2. selbständig unterhaltende Tätigkeiten als Schausteller oder nach Schaustellerart ausübt.'}
                                </blockquote>

                                <p>
                                    {isEn
                                        ? 'The restrictions on professional craft practice due to compulsory master craftsmen only apply to the so-called "standing trade" according to the Crafts Code – not to the itinerant trade.'
                                        : 'Die Beschränkungen handwerklicher Berufsausübung durch den Meisterzwang bestehen nach der Handwerksordnung nur für das so genannte "stehende Gewerbe" – nicht für das Reisegewerbe.'}
                                </p>
                                <p>
                                    {isEn ? "In §1 HwO it states:" : "In §1 HwO heißt es:"}
                                </p>

                                <blockquote className="border-l-4 border-secondary/30 pl-6 py-4 bg-muted/20 rounded-r-lg italic text-foreground/70">
                                    {isEn
                                        ? '"(1) The independent operation of a craft requiring licensing as a standing trade is only permitted for natural and legal persons and partnerships registered in the register of craftsmen."'
                                        : '"(1) Der selbstständige Betrieb eines zulassungspflichtigen Handwerks als stehendes Gewerbe ist nur den in der Handwerksrolle eingetragenen natürlichen und juristischen Personen und Personengesellschaften gestattet."'}
                                </blockquote>

                                <p>
                                    {isEn
                                        ? "Since the activity in the itinerant trade is not entered in the register of craftsmen, it is not affected by compulsory master craftsmen."
                                        : "Da die Tätigkeit im Reisegewerbe nicht in die Handwerksrolle eingetragen wird, ist sie vom Meisterzwang nicht betroffen."}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
