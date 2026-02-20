'use client';

import { Badge } from '@/components/Badge';
import { Icon } from '@/components/Icon';
import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import { Text } from '@/components/Text';
import { useLanguage } from '@/components/LanguageProvider';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export default function ProductsPage() {
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
              <Link variant="nav" className="text-sm font-medium text-emerald-600 transition-colors" href="/products">{t.nav.products}</Link>
              <Link variant="nav" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="/methodology">{t.nav.methodology}</Link>
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
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920&q=80"
            alt="Carbon data background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-emerald-50/88 to-white/95"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl text-center relative z-10">
          <Badge className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
            {t.products.title}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t.products.title}</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t.whatWeDo.text}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Carbonless */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-200 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <Icon className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </Icon>
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.products.academiaCarbonTitle}</h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                {t.products.academiaCarbonDesc}
              </p>
              
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">Features</h3>
                <ul className="space-y-3">
                  {t.products.academiaCarbonFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <Icon className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </Icon>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link variant="inline" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-emerald-600 rounded-full hover:bg-emerald-700 hover:shadow-lg" href="/contact">
                {t.products.button}
              </Link>
            </div>

            {/* Sustindex */}
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 border border-teal-200 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-20 h-20 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-6">
                <Icon className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </Icon>
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.products.sustindexTitle}</h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                {t.products.sustindexDesc}
              </p>
              
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">Features</h3>
                <ul className="space-y-3">
                  {t.products.sustindexFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <Icon className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </Icon>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link variant="inline" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-teal-600 rounded-full hover:bg-teal-700 hover:shadow-lg" href="/contact">
                {t.products.button}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.finalCta.title}</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link variant="inline" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-emerald-600 rounded-full hover:bg-emerald-700" href="/contact">
              {t.finalCta.button2}
            </Link>
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
