"use client"

import { useLanguage } from '@/app/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

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
            <span className="font-medium text-xs sm:text-sm">
                {language === 'en' ? 'EN 🇬🇧' : 'DE 🇩🇪'}
            </span>
            <span className="sr-only">Switch Language</span>
        </Button>
    );
}
