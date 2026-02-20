'use client';

import { Badge } from '@/components/Badge';
import { Icon } from '@/components/Icon';
import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import { Text } from '@/components/Text';
import { useLanguage } from '@/components/LanguageProvider';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export default function AboutPage() {
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
              <Link variant="nav" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="/methodology">{t.nav.methodology}</Link>
              <Link variant="nav" className="text-sm font-medium text-emerald-600 transition-colors" href="/about">{t.nav.about}</Link>
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
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1920&q=80"
            alt="Sustainability background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-emerald-50/88 to-white/95"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <Badge className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
            {t.nav.about}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">{t.about.title}</h1>
          
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>{t.about.text1}</p>
            <p>{t.about.text2}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Icon className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </Icon>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                {t.about.text2}
              </p>
            </div>
            
            <div className="bg-teal-50 rounded-2xl p-8 border border-teal-200">
              <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Icon className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </Icon>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To become a leading platform for carbon intelligence and sustainability assessment, supporting organizations worldwide in their environmental performance journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Company Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
              {t.about.parentCompany.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.about.parentCompany.title}</h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-lg">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </Icon>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Academia Danışmanlık</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {t.about.parentCompany.description}
                </p>
              </div>
            </div>
            
            <div className="border-t border-slate-200 pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Icon className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </Icon>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.about.parentCompany.location}
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </Icon>
                <p className="text-sm text-slate-600">Tel: 212-613 58 80</p>
              </div>
              
              <div className="pt-4">
                <Link 
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full hover:shadow-lg hover:shadow-emerald-200 transition-all hover:scale-105"
                  href="https://www.academiadanismanlik.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.about.parentCompany.website}
                  <Icon className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </Icon>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4">
                <Icon className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </Icon>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Accuracy</h3>
              <p className="text-slate-600">Reliable methodologies aligned with international standards</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4">
                <Icon className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </Icon>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparency</h3>
              <p className="text-slate-600">Clear reporting and structured data presentation</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4">
                <Icon className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </Icon>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation</h3>
              <p className="text-slate-600">Digital solutions for modern sustainability challenges</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.finalCta.title}</h2>
          <Link variant="inline" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-emerald-600 rounded-full hover:bg-emerald-700" href="/contact">
            {t.finalCta.button2}
          </Link>
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
