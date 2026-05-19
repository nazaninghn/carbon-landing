'use client';

import { useLanguage } from './LanguageProvider';

export function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-0.5 border border-border rounded-full p-0.5 bg-background">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
          language === 'en'
            ? 'bg-foreground text-background'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('tr')}
        className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
          language === 'tr'
            ? 'bg-foreground text-background'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        TR
      </button>
    </div>
  );
}
