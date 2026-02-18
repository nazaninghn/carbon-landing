'use client';

import { useLanguage } from './LanguageProvider';

export function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-emerald-100">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${
          language === 'en'
            ? 'bg-emerald-600 text-white'
            : 'text-gray-600 hover:text-emerald-600'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('tr')}
        className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${
          language === 'tr'
            ? 'bg-emerald-600 text-white'
            : 'text-gray-600 hover:text-emerald-600'
        }`}
      >
        TR
      </button>
    </div>
  );
}
