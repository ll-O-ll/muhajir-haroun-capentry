"use client"

import { useLanguage } from '@/app/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const GermanFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className="w-[1.2rem] h-[0.9rem] rounded-sm shadow-sm inline-block shrink-0">
        <rect width="5" height="3" y="0" x="0" fill="#000" />
        <rect width="5" height="2" y="1" x="0" fill="#D00" />
        <rect width="5" height="1" y="2" x="0" fill="#FFCE00" />
    </svg>
);

const UKFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-[1.2rem] h-[0.9rem] rounded-sm shadow-sm inline-block shrink-0">
        <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
        </clipPath>
        <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </g>
    </svg>
);

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        const nextLang = language === 'en' ? 'de' : 'en';
        setLanguage(nextLang);
    };

    return (
        <Button
            variant="ghost"
            onClick={toggleLanguage}
            className="hover:bg-transparent flex items-center gap-2 px-2"
        >
            <Globe className="h-5 w-5 hover:text-secondary transition-colors" />
            <span className="font-medium text-xs sm:text-sm flex items-center gap-1.5">
                {language === 'en' ? (
                    <>EN <UKFlag /></>
                ) : (
                    <>DE <GermanFlag /></>
                )}
            </span>
            <span className="sr-only">Switch Language</span>
        </Button>
    );
}
