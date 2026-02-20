'use client';

import { useState } from 'react';
import { Badge } from '@/components/Badge';
import { Icon } from '@/components/Icon';
import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import { Text } from '@/components/Text';
import { useLanguage } from '@/components/LanguageProvider';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Card3D } from '@/components/Card3D';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function Page() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Clean Modern Header */}
      <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            <Link className="flex items-center gap-3 group" href="/">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Image 
                  src="/logo.png"
                  alt="Carbonless Network Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <Text className="text-xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Carbonless</Text>
                <Text className="text-xs text-emerald-600 font-bold tracking-widest">NETWORK</Text>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link className="text-sm font-bold text-emerald-600" href="/">{t.nav.home}</Link>
              <Link className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors" href="/products">{t.nav.products}</Link>
              <Link className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors" href="/methodology">{t.nav.methodology}</Link>
              <Link className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors" href="/about">{t.nav.about}</Link>
              <Link className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors" href="/contact">{t.nav.contact}</Link>
            </nav>
            
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <Link className="hidden md:inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full hover:shadow-xl hover:shadow-emerald-300 transition-all hover:scale-105" href="/contact">
                {t.hero.cta2}
              </Link>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-700 hover:text-emerald-600 transition-colors"
                aria-label="Toggle menu"
              >
                <Icon className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  )}
                </Icon>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-slate-200 py-4">
              <nav className="flex flex-col gap-4">
                <Link className="text-sm font-bold text-emerald-600 px-4 py-2" href="/" onClick={() => setMobileMenuOpen(false)}>{t.nav.home}</Link>
                <Link className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors px-4 py-2" href="/products" onClick={() => setMobileMenuOpen(false)}>{t.nav.products}</Link>
                <Link className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors px-4 py-2" href="/methodology" onClick={() => setMobileMenuOpen(false)}>{t.nav.methodology}</Link>
                <Link className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors px-4 py-2" href="/about" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</Link>
                <Link className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors px-4 py-2" href="/contact" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</Link>
                <Link className="inline-flex items-center justify-center mx-4 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full" href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  {t.hero.cta2}
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Beautiful Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1920&q=80"
            alt="Sustainability background"
            className="w-full h-full object-cover opacity-[0.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/92 via-white/88 to-emerald-50/85"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <Badge className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-emerald-200 shadow-sm animate-fade-in">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span className="text-sm font-bold text-emerald-700">{t.hero.badge}</span>
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight animate-slide-up mb-6 lg:mb-8">
                {t.hero.title.includes('Carbon') ? (
                  <>
                    <span className="text-slate-900">Carbon &</span>
                    <br />
                    <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Sustainability</span>
                    <br />
                    <span className="text-slate-900">Intelligence</span>
                  </>
                ) : (
                  <>
                    <span className="text-slate-900">Karbon ve</span>
                    <br />
                    <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Sürdürülebilirlik</span>
                    <br />
                    <span className="text-slate-900">Zeka Platformu</span>
                  </>
                )}
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 leading-[1.6] max-w-xl mx-auto lg:mx-0 animate-fade-in-delay">
                {t.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-delay-2 justify-center lg:justify-start">
                <Link className="group inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 transition-all hover:scale-105" href="/products">
                  {t.hero.cta1}
                  <Icon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </Icon>
                </Link>
                
                <Link className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-slate-700 bg-white border-2 border-slate-200 rounded-full hover:border-emerald-300 hover:shadow-lg transition-all hover:scale-105" href="/contact">
                  {t.hero.cta2}
                </Link>
              </div>
              
              <div className="flex items-center gap-6 pt-8 animate-fade-in-delay-3 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-4 border-white shadow-lg"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-white shadow-lg"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 border-4 border-white shadow-lg"></div>
                  <div className="w-12 h-12 rounded-full bg-slate-100 border-4 border-white shadow-lg flex items-center justify-center text-emerald-600 font-black text-xs">
                    500+
                  </div>
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900">500+ Organizations</p>
                  <p className="text-xs text-slate-500">{t.hero.trusted}</p>
                </div>
              </div>
            </div>

            <Card3D className="animate-fade-in-delay">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur-3xl opacity-20"></div>
                
                <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
                  <div className="relative h-[500px] sm:h-[600px] lg:h-[650px] overflow-hidden group flex items-start justify-center pt-8">
                    <Image 
                      src="/hero.jpg"
                      alt="Carbon footprint visualization"
                      className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* Bottom Stats Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 bg-gradient-to-t from-emerald-900/95 via-emerald-900/85 to-transparent">
                      <div className="text-white space-y-3 sm:space-y-4">
                        <div>
                          <p className="text-xs sm:text-sm font-bold mb-1 sm:mb-2 text-emerald-200">Carbon Intelligence Platform</p>
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black leading-tight">Measure, Analyze, and Manage Sustainability Systems</h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2 sm:px-4 sm:py-3 border border-white/30">
                            <p className="text-xs text-emerald-100 mb-1">Accuracy</p>
                            <p className="text-xl sm:text-2xl font-black">98%</p>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2 sm:px-4 sm:py-3 border border-white/30">
                            <p className="text-xs text-emerald-100 mb-1">Organizations</p>
                            <p className="text-xl sm:text-2xl font-black">500+</p>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2 sm:px-4 sm:py-3 border border-white/30">
                            <p className="text-xs text-emerald-100 mb-1">Framework</p>
                            <p className="text-base sm:text-lg font-black">ISO 14064-1</p>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2 sm:px-4 sm:py-3 border border-white/30">
                            <p className="text-xs text-emerald-100 mb-1">Methodology</p>
                            <p className="text-base sm:text-lg font-black">Standards</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <ScrollReveal>
              <div className="space-y-2">
                <p className="text-5xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">500+</p>
                <p className="text-sm text-slate-600 font-semibold">Organizations</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="space-y-2">
                <p className="text-5xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">1.2M</p>
                <p className="text-sm text-slate-600 font-semibold">tCO2e Tracked</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="space-y-2">
                <p className="text-5xl font-black bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">98%</p>
                <p className="text-sm text-slate-600 font-semibold">Accuracy</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="space-y-2">
                <p className="text-5xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">24/7</p>
                <p className="text-sm text-slate-600 font-semibold">Support</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="inline-flex px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-6">
                {t.methodologySection.badge}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                {t.methodologySection.title}
              </h2>
              <p className="text-xl text-slate-600 leading-[1.6]">
                {t.methodologySection.text}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <Badge className="inline-flex px-4 py-2 rounded-full bg-white border border-emerald-200 text-emerald-700 text-sm font-bold mb-6 shadow-sm">
                {t.whatWeDo.title}
              </Badge>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
                {t.whatWeDo.sectionTitle}
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                {t.whatWeDo.text}
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.whatWeDo.features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card3D>
                  <div className="group relative h-full bg-white rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-emerald-300 hover:shadow-2xl transition-all">
                    <div className="relative h-64 overflow-hidden">
                      <Image 
                        src={[
                          "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
                          "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
                          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
                          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                        ][index]}
                        alt={feature}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                      <div className="absolute bottom-6 left-6">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30">
                          <Icon className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none">
                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </Icon>
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-black text-slate-900 mb-3">{feature}</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                    </div>
                  </div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Badge className="inline-flex px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-6">
                {t.products.title}
              </Badge>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
                {t.products.sectionTitle}
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal delay={100}>
              <Card3D>
                <div className="group h-full bg-white rounded-3xl overflow-hidden border-2 border-slate-200 hover:border-emerald-300 shadow-xl hover:shadow-2xl transition-all">
                  <div className="relative h-80 overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1000&q=80"
                      alt="Carbon data"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-black text-white mb-2">{t.products.academiaCarbonTitle}</h3>
                      <p className="text-emerald-200 text-sm font-semibold">ISO 14064-1 & GHG Protocol</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                      {t.products.academiaCarbonDesc}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {t.products.academiaCarbonFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none">
                              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </Icon>
                          </div>
                          <span className="text-slate-700 font-semibold">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link className="group/btn inline-flex items-center justify-center w-full px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 transition-all hover:scale-105" href="/products">
                      {t.products.button}
                      <Icon className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </Icon>
                    </Link>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card3D>
                <div className="group h-full bg-white rounded-3xl overflow-hidden border-2 border-slate-200 hover:border-cyan-300 shadow-xl hover:shadow-2xl transition-all">
                  <div className="relative h-80 overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1000&q=80"
                      alt="Sustainability"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-black text-white mb-2">{t.products.sustindexTitle}</h3>
                      <p className="text-cyan-200 text-sm font-semibold">ESG & KPI-Based Scoring</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                      {t.products.sustindexDesc}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {t.products.sustindexFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon className="w-4 h-4 text-cyan-600" viewBox="0 0 24 24" fill="none">
                              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </Icon>
                          </div>
                          <span className="text-slate-700 font-semibold">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link className="group/btn inline-flex items-center justify-center w-full px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full shadow-lg shadow-cyan-200 hover:shadow-xl hover:shadow-cyan-300 transition-all hover:scale-105" href="/products">
                      {t.products.button}
                      <Icon className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </Icon>
                    </Link>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Badge className="inline-flex px-4 py-2 rounded-full bg-white border border-emerald-200 text-emerald-700 text-sm font-bold mb-6 shadow-sm">
                {t.howItWorks.title}
              </Badge>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
                {t.howItWorks.sectionTitle}
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.howItWorks.steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card3D>
                  <div className="relative h-full bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-emerald-200">
                      {index + 1}
                    </div>
                    <div className="pt-8">
                      <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <Badge className="inline-flex px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-6">
                {t.standards.title}
              </Badge>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
                {t.standards.sectionTitle}
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t.standards.text}</p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {t.standards.list.map((standard, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <Card3D>
                  <div className="group bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 hover:border-emerald-300 rounded-2xl p-8 text-center hover:shadow-xl transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </Icon>
                    </div>
                    <p className="text-xl font-black text-slate-900">{standard}</p>
                  </div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1920&q=80"
            alt="Nature"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/95 via-teal-600/95 to-cyan-600/95"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <ScrollReveal>
            <div className="bg-white/10 backdrop-blur-2xl border-2 border-white/30 rounded-3xl p-16 shadow-2xl">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                {t.finalCta.title}
              </h2>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link className="group inline-flex items-center justify-center px-12 py-5 text-xl font-black text-emerald-700 bg-white rounded-full shadow-2xl hover:shadow-white/50 transition-all hover:scale-105" href="/products">
                  {t.finalCta.button1}
                  <Icon className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </Icon>
                </Link>
                
                <Link className="inline-flex items-center justify-center px-12 py-5 text-xl font-black text-white border-4 border-white/50 rounded-full hover:bg-white/10 hover:border-white transition-all hover:scale-105" href="/contact">
                  {t.finalCta.button2}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 text-slate-600 py-20 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <Image 
                    src="/logo.png"
                    alt="Carbonless Network Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <Text className="text-lg font-black text-slate-900">Carbonless</Text>
                  <Text className="text-xs text-emerald-600 font-bold">NETWORK</Text>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                {t.footer.description}
              </p>
            </div>
            
            <div>
              <h3 className="text-slate-900 font-black mb-6">{t.footer.platformTitle}</h3>
              <ul className="space-y-3 text-sm">
                <li><Link className="hover:text-emerald-600 transition-colors" href="/products">Academia Carbon</Link></li>
                <li><Link className="hover:text-emerald-600 transition-colors" href="/products">Sustindex</Link></li>
                <li><Link className="hover:text-emerald-600 transition-colors" href="/methodology">{t.nav.methodology}</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-slate-900 font-black mb-6">{t.footer.companyTitle}</h3>
              <ul className="space-y-3 text-sm">
                <li><Link className="hover:text-emerald-600 transition-colors" href="/about">{t.nav.about}</Link></li>
                <li><Link className="hover:text-emerald-600 transition-colors" href="/contact">{t.nav.contact}</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-slate-900 font-black mb-6">{t.footer.contactTitle}</h3>
              <p className="text-sm mb-4">info@carbonless.network</p>
              <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 transition-all hover:scale-105" href="/contact">
                {t.footer.getStarted}
              </Link>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
