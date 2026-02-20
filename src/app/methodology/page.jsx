'use client';

import { Badge } from '@/components/Badge';
import { Icon } from '@/components/Icon';
import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import { Text } from '@/components/Text';
import { useLanguage } from '@/components/LanguageProvider';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export default function MethodologyPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-50 text-slate-900 pt-20">
      {/* Header */}
      <header id="main-header" className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            <Link className="flex items-center gap-2 group" href="/">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image 
                  src="/logo.png"
                  alt="Carbonless Network Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <Text variant="bold" className="text-xl font-bold text-emerald-950 tracking-tight">Carbonless Network</Text>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link variant="nav" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="/">{t.nav.home}</Link>
              <Link variant="nav" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="/products">{t.nav.products}</Link>
              <Link variant="nav" className="text-sm font-medium text-emerald-600 transition-colors" href="/methodology">{t.nav.methodology}</Link>
              <Link variant="nav" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="/about">{t.nav.about}</Link>
              <Link variant="nav" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="/contact">{t.nav.contact}</Link>
            </nav>
            
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <Link variant="inline" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-emerald-600 rounded-full hover:bg-emerald-700" href="/contact">{t.hero.cta2}</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
            alt="Analytics background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-emerald-50/88 to-white/95"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl text-center relative z-10">
          <Badge className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
            {t.nav.methodology}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t.methodology.title}</h1>
        </div>
      </section>

      {/* Carbon Calculation Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{t.methodology.carbonTitle}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.methodology.carbonSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-emerald-300 transition-all h-full">
                  <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
                
                {index < t.methodology.carbonSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <Icon className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="none">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </Icon>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Assessment */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{t.methodology.sustainabilityTitle}</h2>
            
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <p className="text-lg text-slate-600 leading-relaxed text-center">
                {t.methodology.sustainabilityText}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4">
                    <Icon className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </Icon>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Data Input</h3>
                  <p className="text-sm text-slate-600">Structured data collection</p>
                </div>
                
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4">
                    <Icon className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </Icon>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Scoring</h3>
                  <p className="text-sm text-slate-600">KPI-based evaluation</p>
                </div>
                
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4">
                    <Icon className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </Icon>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Reporting</h3>
                  <p className="text-sm text-slate-600">Performance analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">{t.standards.title}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">{t.standards.text}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {t.standards.list.map((standard, index) => (
              <div key={index} className="p-6 border-2 border-emerald-200 rounded-xl bg-white hover:border-emerald-300 hover:shadow-lg transition-all text-center">
                <p className="font-bold text-lg text-slate-900">{standard}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 text-slate-600 py-12 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <p className="text-sm">© 2026 Carbonless Network. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
