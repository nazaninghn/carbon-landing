'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { LanguageSwitcher } from './LanguageSwitcher';

export default function Navbar({ currentPath = '' }) {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/',            label: t.nav.home        },
    { href: '/products',    label: t.nav.products    },
    { href: '/methodology', label: t.nav.methodology },
    { href: '/about',       label: t.nav.about       },
    { href: '/contact',     label: t.nav.contact     },
  ];

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 h-14 md:h-16">
          <a href="/" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Carbonless" className="w-12 h-12 object-contain" />
            <span className="text-lg font-semibold tracking-tight text-foreground">Carbonless</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                className={`text-sm transition-colors ${
                  currentPath === link.href
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a href="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity">
              {t.hero.cta2}
            </a>
            <button onClick={() => setMenuOpen(v => !v)}
              className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-full border border-border bg-background"
              aria-label="Toggle menu">
              <Menu className={`w-4 h-4 absolute transition-all duration-300 ${menuOpen ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`} />
              <X    className={`w-4 h-4 absolute transition-all duration-300 ${menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden fixed top-0 right-0 bottom-0 z-50 w-72 bg-background shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-20 px-6 pb-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-foreground py-4 border-b border-border">
              {link.label}
            </a>
          ))}
          <a href="/contact" onClick={() => setMenuOpen(false)}
            className="mt-6 flex items-center justify-center bg-foreground text-background text-sm font-semibold px-5 py-3 rounded-full">
            {t.hero.cta2}
          </a>
        </div>
      </div>
    </>
  );
}
