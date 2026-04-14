"use client";

import React, { useState, useRef, useTransition } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactAction } from "@/app/actions/contact";
import { useLanguage } from "@/app/contexts/LanguageContext";

const pageContent = {
    de: {
        title: "Kontaktformular",
        nameLabel: "Ihr Name",
        namePlaceholder: "Name",
        contactLabel: "Ihre Kontaktdaten",
        contactPlaceholder: "E-Mail oder Telefon",
        topicLabel: "Anliegen: Thema",
        topicPlaceholder: "Worum geht es in Ihrem Anliegen?",
        words: "Wörter",
        disclaimer: "Bitte beachten Sie: Über dieses Formular kommt kein Vertrag zustande. Wir werden uns zur weiteren Absprache mit Ihnen in Verbindung setzen.",
        privacyIntro: "Bitte machen Sie sich vor dem Versand mit unserer Datenschutzerklärung vertraut. Ohne Ihre Zustimmung zur Datenspeicherung kann das Formular nicht abgesendet werden.",
        privacyCheckbox: "Ich bin mit der Datenschutzerklärung der Firma Tischler und Raumgestaltung im Reisegewerbe nach Paragraph 55 GewO vertraut und einverstanden, dass meine Daten gespeichert werden.",
        errorConsent: "Bitte stimmen Sie der Datenschutzerklärung zu.",
        errorTopic: "Das Thema darf nicht mehr als 9 Wörter enthalten.",
        success: "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.",
        submit: "SENDEN",
        submitting: "SENDEN..."
    },
    en: {
        title: "Contact Form",
        nameLabel: "Your Name",
        namePlaceholder: "Name",
        contactLabel: "Your Contact Details",
        contactPlaceholder: "Email or Phone",
        topicLabel: "Topic: Subject",
        topicPlaceholder: "What is your inquiry about?",
        words: "words",
        disclaimer: "Please note: No contract is established through this form. We will contact you to discuss further details.",
        privacyIntro: "Please familiarize yourself with our privacy policy before sending. The form cannot be submitted without your consent to data storage.",
        privacyCheckbox: "I am familiar with the privacy policy of the carpentry and interior design company in the itinerant trade according to Paragraph 55 GewO and agree that my data will be saved.",
        errorConsent: "Please agree to the privacy policy.",
        errorTopic: "The topic must not contain more than 9 words.",
        success: "Thank you! Your message has been sent successfully.",
        submit: "SEND",
        submitting: "SENDING..."
    }
};

export default function ContactForm() {
    const { language } = useLanguage();
    const t = pageContent[language === 'de' ? 'de' : 'en'];
    const [isPending, startTransition] = useTransition();
    const [state, setState] = useState<{ success?: boolean; error?: string } | null>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const [subject, setSubject] = useState("");
    const [consent, setConsent] = useState(false);

    const wordCount = subject.trim() === "" ? 0 : subject.trim().split(/\s+/).length;
    const isSubjectInvalid = wordCount > 9;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!consent) {
            setState({ error: t.errorConsent });
            return;
        }

        if (isSubjectInvalid) {
            setState({ error: t.errorTopic });
            return;
        }

        const formData = new FormData(e.currentTarget);

        startTransition(async () => {
            const result = await submitContactAction(formData);
            setState(result);
            if (result.success) {
                formRef.current?.reset();
                setSubject("");
                setConsent(false);
            }
        });
    };

    return (
        <section id="contact" className="max-w-3xl mx-auto py-24 px-4 scroll-mt-24">
            <div className="space-y-6 text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-widest text-primary">Contact</h2>
                <div className="w-12 h-1 bg-secondary mx-auto"></div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="font-heading text-2xl font-bold mb-8 text-primary uppercase tracking-tight">{t.title}</h3>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block ml-1">
                                {t.nameLabel}
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder={t.namePlaceholder}
                                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none font-medium"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block ml-1">
                                {t.contactLabel}
                            </label>
                            <input
                                type="text"
                                name="contactDetails"
                                required
                                placeholder={t.contactPlaceholder}
                                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none font-medium"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center px-1">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">
                                {t.topicLabel}
                            </label>
                            <span className={`text-[10px] font-bold ${isSubjectInvalid ? "text-red-500" : "text-gray-300"}`}>
                                {wordCount}/9 {t.words}
                            </span>
                        </div>
                        <textarea
                            name="subject"
                            required
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder={t.topicPlaceholder}
                            rows={3}
                            className={`w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 transition-all outline-none font-medium resize-none ${isSubjectInvalid ? "ring-2 ring-red-100" : "focus:ring-primary/20"}`}
                        />
                    </div>

                    {/* Important Legal Disclaimer */}
                    <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
                        <p className="text-xs text-secondary font-medium leading-relaxed uppercase tracking-wider text-center">
                            {t.disclaimer}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <p className="text-xs text-gray-500 font-serif leading-relaxed italic">
                            {t.privacyIntro}
                        </p>

                        <label className="flex items-start gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={consent}
                                onChange={(e) => setConsent(e.target.checked)}
                                className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                            />
                            <span className="text-[11px] text-gray-600 leading-tight">
                                {t.privacyCheckbox}
                            </span>
                        </label>
                    </div>

                    {state?.error && (
                        <div className="flex items-center gap-2 text-red-500 text-xs font-bold animate-in fade-in slide-in-from-top-1">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            {state.error}
                        </div>
                    )}

                    {state?.success && (
                        <div className="flex items-center gap-2 text-green-500 text-xs font-bold animate-in fade-in slide-in-from-top-1">
                            <CheckCircle2 className="w-4 h-4 shrink-0" />
                            {t.success}
                        </div>
                    )}

                    <div className="flex justify-center md:justify-end pt-4">
                        <button
                            type="submit"
                            disabled={isPending || isSubjectInvalid || !consent}
                            className={`px-10 py-4 bg-primary text-white rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center gap-3 transition-all ${isPending || isSubjectInvalid || !consent ? "opacity-50 cursor-not-allowed scale-95" : "hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 active:scale-95"}`}
                        >
                            {isPending ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                            ) : null}
                            {isPending ? t.submitting : t.submit}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
