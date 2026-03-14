"use client"

import { useLanguage } from '@/app/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        const nextLang = language === 'en' ? 'de' : language === 'de' ? 'ar' : 'en';
        setLanguage(nextLang);
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="hover:bg-transparent"
        >
            <Globe className="h-5 w-5 hover:text-secondary transition-colors" />
            <span className="sr-only">Switch Language</span>
        </Button>
    );
}
