'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Badge }          from '@/components/Badge';
import { Icon }           from '@/components/Icon';
import { Image }          from '@/components/Image';
import { Link }           from '@/components/Link';
import { Text }           from '@/components/Text';
import { useLanguage }    from '@/components/LanguageProvider';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Card3D }         from '@/components/Card3D';
import { ScrollReveal }   from '@/components/ScrollReveal';
import FadeIn             from '@/components/FadeIn';
import AnimatedHeading    from '@/components/AnimatedHeading';

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4';

export default function Page() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isEN = t.hero.title.includes('Carbon');

  const headingLines = isEN
    ? ['Carbon & Sustainability', 'Intelligence Platform.']
    : ['Karbon & Sürdürülebilirlik', 'Zeka Platformu.'];

  const navLinks = [
    { href: '/',            label: t.nav.home        },
    { href: '/products',    label: t.nav.products    },
    { href: '/methodology', label: t.nav.methodology },
    { href: '/about',       label: t.nav.about       },
    { href: '/contact',     label: t.nav.contact     },
  ];

  return (
    <div className="bg-white">

      {/* ════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-screen sm:h-screen overflow-hidden bg-black">

        {/* ── Video — raw, no overlay ──────────────────────── */}
        <video
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ── All content sits above the video ─────────────── */}
        <div className="relative z-10 h-full flex flex-col px-6 md:px-12 lg:px-16 pt-6">

          {/* ── Navbar ───────────────────────────────────────── */}
          <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">

            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Carbonless" className="w-7 h-7 object-contain" />
              <span className="text-2xl font-semibold tracking-tight text-white">
                Carbonless
              </span>
            </a>

            {/* Center links — desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    i === 0
                      ? 'font-semibold text-white'
                      : 'font-medium text-white/70 hover:text-gray-300'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right — CTA + language + hamburger */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <a
                href="/contact"
                className="hidden sm:inline-flex bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                {t.hero.cta2}
              </a>
              <button
                onClick={() => setMenuOpen(v => !v)}
                className="md:hidden relative flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-white"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                <Menu className={`w-5 h-5 absolute transition-all duration-300 ${menuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
                <X    className={`w-5 h-5 absolute transition-all duration-300 ${menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
              </button>
            </div>
          </div>

          {/* ── Mobile overlay ───────────────────────────────── */}
          <div
            className={`md:hidden fixed inset-0 z-20 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          </div>

          {/* ── Mobile drawer ────────────────────────────────── */}
          <div
            className={`md:hidden fixed top-0 right-0 bottom-0 z-20 w-[80%] max-w-xs bg-black/90 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex flex-col h-full pt-20 px-7 pb-8 gap-1">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-xl font-semibold text-white py-4 border-b border-white/10 transition-all duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}
                  style={{ transitionDelay: menuOpen ? `${150 + i * 60}ms` : '0ms' }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className={`mt-6 flex items-center justify-center bg-white text-black text-sm font-semibold px-5 py-3 rounded-lg transition-all duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}
                style={{ transitionDelay: menuOpen ? '430ms' : '0ms' }}
              >
                {t.hero.cta2}
              </a>
            </div>
          </div>

          {/* ── Hero content — pushed to bottom ──────────────── */}
          <div className="flex-1 flex flex-col justify-end pb-12 lg:pb-16">
            <div className="lg:grid lg:grid-cols-2 lg:items-end">

              {/* Left column */}
              <div>
                <AnimatedHeading
                  lines={headingLines}
                  className="font-normal mb-4 text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                  initialDelay={200}
                  charDelay={30}
                />

                <FadeIn delay={800} duration={1000}>
                  <p className="text-base md:text-lg text-gray-300 mb-5 max-w-lg">
                    {t.hero.subtitle}
                  </p>
                </FadeIn>

                <FadeIn delay={1200} duration={1000} className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    {t.hero.cta2}
                  </a>
                  <a
                    href="/products"
                    className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
                  >
                    {t.hero.cta1}
                  </a>
                </FadeIn>
              </div>

              {/* Right column — tag */}
              <FadeIn delay={1400} duration={1000} className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
                <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                  <p className="text-lg md:text-xl lg:text-2xl font-light text-white">
                    {isEN
                      ? 'ISO 14064-1. GHG Protocol. ESG.'
                      : 'ISO 14064-1. GHG Protokolü. ESG.'}
                  </p>
                </div>
              </FadeIn>

            </div>
          </div>
        </div>
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
                    <p className="text-slate-600 leading-relaxed mb-5 text-sm sm:text-base">{t.products.academiaCarbonDesc}</p>
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
                    <Link className="group/btn inline-flex items-center justify-center w-full px-6 py-3 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full shadow-md hover:shadow-lg hover:shadow-emerald-200 transition-all hover:scale-105" href="/products">
                      {t.products.button}
                      <Icon className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </Icon>
                    </Link>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

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
                    <p className="text-slate-600 leading-relaxed mb-5 text-sm sm:text-base">{t.products.sustindexDesc}</p>
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
                    <Link className="group/btn inline-flex items-center justify-center w-full px-6 py-3 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full shadow-md hover:shadow-lg hover:shadow-cyan-200 transition-all hover:scale-105" href="/products">
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
          <Image src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1920&q=80" alt="Nature" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/95 via-teal-600/95 to-cyan-600/95" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <ScrollReveal>
            <div className="bg-white/10 backdrop-blur-2xl border-2 border-white/30 rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                {t.finalCta.title}
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link className="group inline-flex items-center justify-center px-6 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-black text-emerald-700 bg-white rounded-full shadow-2xl hover:shadow-white/50 transition-all hover:scale-105" href="/products">
                  {t.finalCta.button1}
                  <Icon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </Icon>
                </Link>
                <Link className="inline-flex items-center justify-center px-6 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-black text-white border-4 border-white/50 rounded-full hover:bg-white/10 hover:border-white transition-all hover:scale-105" href="/contact">
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
              <Link className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full shadow-md hover:shadow-lg hover:shadow-emerald-200 transition-all hover:scale-105" href="/contact">
                {t.footer.getStarted}
              </Link>
            </div>
          </div>
          <div className="pt-6 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs sm:text-sm text-slate-500">{t.footer.copyright}</p>
              <a href="https://www.linkedin.com/company/carbonless-network/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-200 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all hover:scale-110 group" aria-label="LinkedIn">
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
