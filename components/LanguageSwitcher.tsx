"use client"

import { useLanguage } from '@/app/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2">
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage('en')}
                className={cn("px-2 font-mono text-xs", language === 'en' && "font-bold underline")}
            >
                EN
            </Button>
            <span className="text-muted-foreground/30">|</span>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage('de')}
                className={cn("px-2 font-mono text-xs", language === 'de' && "font-bold underline")}
            >
                DE
            </Button>
            <span className="text-muted-foreground/30">|</span>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage('ar')}
                className={cn("px-2 font-mono text-xs", language === 'ar' && "font-bold underline")}
            >
                AR
            </Button>
        </div>
    );
}
