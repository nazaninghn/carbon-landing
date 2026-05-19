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

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link className="flex items-center gap-2.5 group" href="/">
              <div className="relative w-9 h-9 md:w-12 md:h-12 flex items-center justify-center">
                <Image src="/logo.png" alt="Carbonless Network Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <Text className="text-base md:text-xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Carbonless</Text>
                <Text className="text-[10px] md:text-xs text-emerald-600 font-bold tracking-widest">NETWORK</Text>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link className="text-sm font-bold text-emerald-600" href="/">{t.nav.home}</Link>
              <Link className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors" href="/products">{t.nav.products}</Link>
              <Link className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors" href="/methodology">{t.nav.methodology}</Link>
              <Link className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors" href="/about">{t.nav.about}</Link>
              <Link className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors" href="/contact">{t.nav.contact}</Link>
            </nav>

            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <Link className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full hover:shadow-lg hover:shadow-emerald-200 transition-all hover:scale-105" href="/contact">
                {t.hero.cta2}
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-700 hover:text-emerald-600 transition-colors"
                aria-label="Toggle menu"
              >
                <Icon className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  )}
                </Icon>
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-slate-200 py-4">
              <nav className="flex flex-col gap-1">
                {[
                  { href: '/', label: t.nav.home, active: true },
                  { href: '/products', label: t.nav.products },
                  { href: '/methodology', label: t.nav.methodology },
                  { href: '/about', label: t.nav.about },
                  { href: '/contact', label: t.nav.contact },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${item.active ? 'text-emerald-600 bg-emerald-50' : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'}`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  className="inline-flex items-center justify-center mx-4 mt-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.hero.cta2}
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-16 md:pt-20"
        style={{ background: 'linear-gradient(135deg, #041409 0%, #071f0e 45%, #0a2e14 75%, #041409 100%)' }}
      >
        {/* Grid / HUD overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(74,222,128,1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            opacity: 0.055,
          }}
        />

        {/* Sky glow */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] lg:w-[1000px] h-[350px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(74,222,128,0.16) 0%, transparent 65%)' }}
        />

        {/* Side blobs */}
        <div className="absolute top-1/3 -left-32 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.13) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.11) 0%, transparent 70%)' }} />

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-50 animate-bounce-slow" />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-teal-300 opacity-40 animate-pulse" style={{ animationDelay: '1.2s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 rounded-full bg-green-400 opacity-25 animate-bounce-slow" style={{ animationDelay: '2.4s' }} />

        <div className="relative z-10 container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-10 md:py-14 lg:py-20">

            {/* Left: text */}
            <div className="space-y-5 md:space-y-7 text-center lg:text-left order-2 lg:order-1">

              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 backdrop-blur-sm animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-emerald-300 text-xs sm:text-sm font-bold tracking-wide">{t.hero.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-[1.08] animate-slide-up">
                {t.hero.title.includes('Carbon') ? (
                  <>
                    <span className="text-white">Carbon &amp;</span>
                    <br />
                    <span
                      className="text-transparent bg-clip-text"
                      style={{ backgroundImage: 'linear-gradient(90deg, #4ade80, #86efac, #5eead4)' }}
                    >
                      Sustainability
                    </span>
                    <br />
                    <span className="text-white">Intelligence</span>
                  </>
                ) : (
                  <>
                    <span className="text-white">Karbon ve</span>
                    <br />
                    <span
                      className="text-transparent bg-clip-text"
                      style={{ backgroundImage: 'linear-gradient(90deg, #4ade80, #86efac, #5eead4)' }}
                    >
                      Sürdürülebilirlik
                    </span>
                    <br />
                    <span className="text-white">Zeka Platformu</span>
                  </>
                )}
              </h1>

              <p className="text-sm sm:text-base md:text-lg leading-[1.75] max-w-lg mx-auto lg:mx-0 animate-fade-in-delay" style={{ color: 'rgba(167,243,208,0.65)' }}>
                {t.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-in-delay-2">
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-black rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(74,222,128,0.45)]"
                  style={{ background: 'linear-gradient(135deg, #22c55e, #10b981)', color: '#041409' }}
                >
                  {t.hero.cta1}
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </Icon>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 text-emerald-300 hover:text-white"
                  style={{ border: '2px solid rgba(74,222,128,0.35)' }}
                >
                  {t.hero.cta2}
                </Link>
              </div>

              <div className="flex items-center gap-4 justify-center lg:justify-start animate-fade-in-delay-3">
                <div className="flex -space-x-2">
                  {[
                    'linear-gradient(135deg,#4ade80,#14b8a6)',
                    'linear-gradient(135deg,#22d3ee,#3b82f6)',
                    'linear-gradient(135deg,#2dd4bf,#22c55e)',
                  ].map((g, i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 shadow-lg" style={{ background: g, borderColor: '#041409' }} />
                  ))}
                  <div className="w-9 h-9 rounded-full border-2 flex items-center justify-center font-black text-emerald-300" style={{ background: 'rgba(20,83,45,0.8)', borderColor: '#041409', fontSize: '9px' }}>
                    500+
                  </div>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-black text-white">500+ Organizations</p>
                  <p className="text-[11px] sm:text-xs" style={{ color: 'rgba(134,239,172,0.6)' }}>{t.hero.trusted}</p>
                </div>
              </div>

              {/* Compliance badges */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start animate-fade-in-delay-3">
                {['ISO 14064-1', 'GHG Protocol', 'ESG'].map((label) => (
                  <span
                    key={label}
                    className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold"
                    style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.25)', color: '#86efac' }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Image + floating cards */}
            <div className="relative animate-fade-in-delay order-1 lg:order-2">

              {/* Dot grids — desktop only */}
              <div className="hidden lg:grid absolute -top-3 -left-3 gap-1.5 z-20" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
                {Array(12).fill(0).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(74,222,128,0.3)' }} />
                ))}
              </div>
              <div className="hidden lg:grid absolute -bottom-3 -right-3 gap-1.5 z-20" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
                {Array(12).fill(0).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(20,184,166,0.3)' }} />
                ))}
              </div>

              {/* Main image card */}
              <div
                className="relative rounded-xl sm:rounded-2xl overflow-hidden"
                style={{
                  border: '1px solid rgba(74,222,128,0.2)',
                  boxShadow: '0 0 60px rgba(74,222,128,0.1), 0 30px 60px rgba(0,0,0,0.5)',
                }}
              >
                {/* LIVE indicator */}
                <div
                  className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full z-20"
                  style={{ background: 'rgba(4,20,9,0.75)', backdropFilter: 'blur(10px)', border: '1px solid rgba(74,222,128,0.25)' }}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  <span className="text-[10px] font-bold text-emerald-300">LIVE</span>
                </div>

                {/* The hero image — prominent and full-width */}
                <Image
                  src="/hero.jpg"
                  alt="Carbon Intelligence Platform — Sustainability Analytics"
                  className="w-full h-auto object-cover"
                />

                {/* Subtle bottom gradient for stats readability */}
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{ background: 'linear-gradient(to top, rgba(4,20,9,0.88) 0%, rgba(4,20,9,0.4) 55%, transparent 100%)', paddingTop: '60px' }}
                >
                  <div className="p-3 sm:p-4">
                    <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                      {[
                        { val: '92%', sub: 'Accuracy' },
                        { val: '500+', sub: 'Organizations' },
                        { val: 'ISO 14064', sub: 'GHG Protocol' },
                        { val: 'Real-time', sub: 'Monitoring' },
                      ].map((s) => (
                        <div
                          key={s.sub}
                          className="rounded-lg p-2 text-center"
                          style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}
                        >
                          <p className="text-xs sm:text-sm font-black text-white leading-none mb-0.5">{s.val}</p>
                          <p className="text-[9px] sm:text-[10px]" style={{ color: 'rgba(167,243,208,0.75)' }}>{s.sub}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating: Bar Chart — desktop only */}
              <div
                className="hidden lg:block absolute -left-14 top-1/3 rounded-2xl p-3.5 shadow-2xl w-40 z-10"
                style={{ background: 'rgba(4,20,9,0.9)', backdropFilter: 'blur(20px)', border: '1px solid rgba(74,222,128,0.2)' }}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <p className="text-[9px] font-bold uppercase tracking-wider" style={{ color: 'rgba(134,239,172,0.7)' }}>CO₂ Reduction</p>
                  <span className="text-[9px] font-black text-emerald-400">↓ 42%</span>
                </div>
                <div className="flex items-end gap-1 h-12">
                  {[35, 52, 40, 68, 55, 78, 65].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 5 ? '#4ade80' : 'rgba(74,222,128,0.28)' }} />
                  ))}
                </div>
                <div className="flex justify-between mt-1.5">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                    <span key={i} className="text-[8px]" style={{ color: 'rgba(134,239,172,0.4)' }}>{d}</span>
                  ))}
                </div>
              </div>

              {/* Floating: Accuracy ring — desktop only */}
              <div
                className="hidden lg:block absolute -right-10 top-6 rounded-2xl p-3.5 shadow-2xl z-10 text-center"
                style={{ background: 'rgba(4,20,9,0.9)', backdropFilter: 'blur(20px)', border: '1px solid rgba(74,222,128,0.2)', minWidth: '88px' }}
              >
                <svg width="44" height="44" className="mx-auto mb-1.5" viewBox="0 0 44 44">
                  <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(74,222,128,0.15)" strokeWidth="4" />
                  <circle
                    cx="22" cy="22" r="18" fill="none"
                    stroke="#4ade80" strokeWidth="4" strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 18 * 0.92} ${2 * Math.PI * 18 * 0.08}`}
                    strokeDashoffset={2 * Math.PI * 18 * 0.25}
                  />
                  <text x="22" y="26" textAnchor="middle" fill="#4ade80" fontSize="9" fontWeight="900">92%</text>
                </svg>
                <p className="text-[9px] font-bold" style={{ color: 'rgba(134,239,172,0.7)' }}>Accuracy</p>
              </div>

              {/* Floating: ISO badge — desktop only */}
              <div
                className="hidden lg:block absolute -right-10 bottom-20 rounded-xl px-3 py-2.5 shadow-xl z-10"
                style={{ background: 'rgba(74,222,128,0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(74,222,128,0.3)' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(74,222,128,0.2)' }}>
                    <Icon className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </Icon>
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-emerald-300">ISO 14064-1</p>
                    <p className="text-[9px]" style={{ color: 'rgba(134,239,172,0.6)' }}>Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: 'linear-gradient(to top, #ffffff, transparent)' }} />
      </section>

      {/* ── Methodology ────────────────────────────────────── */}
      <section className="py-12 md:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="inline-flex px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-bold mb-4">
                {t.methodologySection.badge}
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4">
                {t.methodologySection.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-[1.7]">
                {t.methodologySection.text}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────── */}
      <section className="py-14 md:py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 lg:mb-16">
              <Badge className="inline-flex px-3 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-bold mb-4 shadow-sm">
                {t.whatWeDo.title}
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4">
                {t.whatWeDo.sectionTitle}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
                {t.whatWeDo.text}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7">
            {t.whatWeDo.features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card3D>
                  <div className="group relative h-full bg-white rounded-xl overflow-hidden border-2 border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all">
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <Image
                        src={[
                          "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
                          "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
                          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
                          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
                        ][index]}
                        alt={feature}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30">
                          <Icon className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </Icon>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 md:p-6">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">{feature}</h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
                    </div>
                  </div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ───────────────────────────────────────── */}
      <section className="py-14 md:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14 lg:mb-16">
              <Badge className="inline-flex px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-bold mb-4">
                {t.products.title}
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4">
                {t.products.sectionTitle}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {/* Carbonless */}
            <ScrollReveal delay={100}>
              <Card3D>
                <div className="group h-full bg-white rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-emerald-300 shadow-lg hover:shadow-xl transition-all">
                  <div className="relative h-52 sm:h-64 md:h-72 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1000&q=80"
                      alt="Carbon data"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/88 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl sm:text-2xl font-black text-white mb-1">{t.products.academiaCarbonTitle}</h3>
                      <p className="text-emerald-200 text-xs sm:text-sm font-semibold">ISO 14064-1 &amp; GHG Protocol</p>
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="text-slate-600 leading-relaxed mb-5 text-sm sm:text-base">
                      {t.products.academiaCarbonDesc}
                    </p>
                    <ul className="space-y-2.5 mb-6">
                      {t.products.academiaCarbonFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 bg-emerald-100 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon className="w-3 h-3 text-emerald-600" viewBox="0 0 24 24" fill="none">
                              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </Icon>
                          </div>
                          <span className="text-slate-700 text-sm font-semibold">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      className="group/btn inline-flex items-center justify-center w-full px-6 py-3 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full shadow-md hover:shadow-lg hover:shadow-emerald-200 transition-all hover:scale-105"
                      href="/products"
                    >
                      {t.products.button}
                      <Icon className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </Icon>
                    </Link>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            {/* Sustindex */}
            <ScrollReveal delay={200}>
              <Card3D>
                <div className="group h-full bg-white rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-cyan-300 shadow-lg hover:shadow-xl transition-all">
                  <div className="relative h-52 sm:h-64 md:h-72 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1000&q=80"
                      alt="Sustainability"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/88 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl sm:text-2xl font-black text-white mb-1">{t.products.sustindexTitle}</h3>
                      <p className="text-cyan-200 text-xs sm:text-sm font-semibold">ESG &amp; KPI-Based Scoring</p>
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="text-slate-600 leading-relaxed mb-5 text-sm sm:text-base">
                      {t.products.sustindexDesc}
                    </p>
                    <ul className="space-y-2.5 mb-6">
                      {t.products.sustindexFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 bg-cyan-100 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon className="w-3 h-3 text-cyan-600" viewBox="0 0 24 24" fill="none">
                              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </Icon>
                          </div>
                          <span className="text-slate-700 text-sm font-semibold">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      className="group/btn inline-flex items-center justify-center w-full px-6 py-3 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full shadow-md hover:shadow-lg hover:shadow-cyan-200 transition-all hover:scale-105"
                      href="/products"
                    >
                      {t.products.button}
                      <Icon className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </Icon>
                    </Link>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────── */}
      <section className="py-14 md:py-20 lg:py-28 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <Badge className="inline-flex px-3 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-bold mb-4 shadow-sm">
                {t.howItWorks.title}
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
                {t.howItWorks.sectionTitle}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {t.howItWorks.steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card3D>
                  <div className="relative h-full bg-white rounded-xl p-5 md:p-6 border-2 border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all mt-6">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white text-lg md:text-xl font-black shadow-lg shadow-emerald-200">
                      {index + 1}
                    </div>
                    <div className="pt-6 md:pt-8">
                      <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                    </div>
                  </div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Standards ──────────────────────────────────────── */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-12">
              <Badge className="inline-flex px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-bold mb-4">
                {t.standards.title}
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4">
                {t.standards.sectionTitle}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">{t.standards.text}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {t.standards.list.map((standard, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <Card3D>
                  <div className="group bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 hover:border-emerald-300 rounded-xl p-5 md:p-6 text-center hover:shadow-lg transition-all">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md shadow-emerald-200 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </Icon>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg font-black text-slate-900">{standard}</p>
                  </div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="relative py-16 md:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1920&q=80"
            alt="Nature"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/95 via-teal-600/95 to-cyan-600/95" />
        </div>

        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <ScrollReveal>
            <div className="bg-white/10 backdrop-blur-2xl border-2 border-white/30 rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                {t.finalCta.title}
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link
                  className="group inline-flex items-center justify-center px-6 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-black text-emerald-700 bg-white rounded-full shadow-2xl hover:shadow-white/50 transition-all hover:scale-105"
                  href="/products"
                >
                  {t.finalCta.button1}
                  <Icon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </Icon>
                </Link>
                <Link
                  className="inline-flex items-center justify-center px-6 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-black text-white border-4 border-white/50 rounded-full hover:bg-white/10 hover:border-white transition-all hover:scale-105"
                  href="/contact"
                >
                  {t.finalCta.button2}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="bg-slate-50 text-slate-600 py-12 md:py-16 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <Image src="/logo.png" alt="Carbonless Network Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <Text className="text-base font-black text-slate-900">Carbonless</Text>
                  <Text className="text-[10px] text-emerald-600 font-bold">NETWORK</Text>
                </div>
              </div>
              <p className="text-sm leading-relaxed">{t.footer.description}</p>
            </div>

            <div>
              <h3 className="text-slate-900 font-black mb-4 text-sm">{t.footer.platformTitle}</h3>
              <ul className="space-y-2.5 text-sm">
                <li><Link className="hover:text-emerald-600 transition-colors" href="/products">Carbonless</Link></li>
                <li><Link className="hover:text-emerald-600 transition-colors" href="/products">Sustindex</Link></li>
                <li><Link className="hover:text-emerald-600 transition-colors" href="/methodology">{t.nav.methodology}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-900 font-black mb-4 text-sm">{t.footer.companyTitle}</h3>
              <ul className="space-y-2.5 text-sm">
                <li><Link className="hover:text-emerald-600 transition-colors" href="/about">{t.nav.about}</Link></li>
                <li><Link className="hover:text-emerald-600 transition-colors" href="/contact">{t.nav.contact}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-900 font-black mb-4 text-sm">{t.footer.contactTitle}</h3>
              <p className="text-sm mb-4">info@carbonless.network</p>
              <Link
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full shadow-md hover:shadow-lg hover:shadow-emerald-200 transition-all hover:scale-105"
                href="/contact"
              >
                {t.footer.getStarted}
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs sm:text-sm text-slate-500">{t.footer.copyright}</p>
              <a
                href="https://www.linkedin.com/company/carbonless-network/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-200 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Icon className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </Icon>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
