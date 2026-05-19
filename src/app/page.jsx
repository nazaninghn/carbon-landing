'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Icon }             from '@/components/Icon';
import { Image }            from '@/components/Image';
import { Link }             from '@/components/Link';
import { Text }             from '@/components/Text';
import { useLanguage }      from '@/components/LanguageProvider';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ScrollReveal }     from '@/components/ScrollReveal';

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Page() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isEN = t.hero.title.includes('Carbon');

  const navLinks = [
    { href: '/',            label: t.nav.home        },
    { href: '/products',    label: t.nav.products    },
    { href: '/methodology', label: t.nav.methodology },
    { href: '/about',       label: t.nav.about       },
    { href: '/contact',     label: t.nav.contact     },
  ];

  return (
    <div className="bg-white">

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="h-screen overflow-hidden relative bg-background">

        {/* Video BG */}
        <video
          src={HERO_VIDEO}
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Top fade for navbar legibility */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/60 to-transparent z-[1] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">

          {/* ── Navbar ─────────────────────────────────────── */}
          <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
            <a href="/" className="flex items-center gap-2.5">
              <img src="/logo.png" alt="Carbonless" className="w-12 h-12 object-contain" />
              <span className="text-lg font-semibold tracking-tight text-foreground">Carbonless</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <a href="/contact"
                className="hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity">
                {t.hero.cta2}
              </a>
              <button onClick={() => setMenuOpen(v => !v)}
                className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-full border border-border bg-background/80"
                aria-label="Toggle menu">
                <Menu className={`w-4 h-4 absolute transition-all duration-300 ${menuOpen ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`} />
                <X    className={`w-4 h-4 absolute transition-all duration-300 ${menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
              </button>
            </div>
          </nav>

          {/* Mobile backdrop */}
          <div
            className={`md:hidden fixed inset-0 z-20 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          </div>

          {/* Mobile drawer */}
          <div className={`md:hidden fixed top-0 right-0 bottom-0 z-30 w-72 bg-background shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full pt-20 px-6 pb-8">
              {navLinks.map((link, i) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium text-foreground py-4 border-b border-border"
                  style={{ transitionDelay: menuOpen ? `${100 + i * 50}ms` : '0ms' }}>
                  {link.label}
                </a>
              ))}
              <a href="/contact" onClick={() => setMenuOpen(false)}
                className="mt-6 flex items-center justify-center bg-foreground text-background text-sm font-semibold px-5 py-3 rounded-full">
                {t.hero.cta2}
              </a>
            </div>
          </div>

          {/* ── Hero body — centered ───────────────────────── */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center pb-8">

            <motion.div {...fadeUp(0)} className="mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/90 px-4 py-1.5 text-sm text-muted-foreground">
                {isEN ? 'ISO 14064-1 & GHG Protocol Aligned ✨' : 'ISO 14064-1 & GHG Protokolü Uyumlu ✨'}
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="font-display text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.92] tracking-tight text-foreground max-w-4xl"
            >
              {isEN ? (
                <>Carbon & <em className="italic">Sustainability</em><br />Intelligence Platform.</>
              ) : (
                <>Karbon & <em className="italic">Sürdürülebilirlik</em><br />Zeka Platformu.</>
              )}
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="/products"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity">
                {t.hero.cta1}
              </a>
              <a href="/contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium border border-border bg-background/80 text-foreground hover:bg-background transition-colors">
                {t.hero.cta2}
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          METHODOLOGY
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
                {t.methodologySection.badge}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                {t.methodologySection.title}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t.methodologySection.text}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHAT WE DO / FEATURES
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
                {t.whatWeDo.title}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                {t.whatWeDo.sectionTitle}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t.whatWeDo.text}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.whatWeDo.features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="group bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={[
                        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
                        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
                        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
                        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
                      ][i]}
                      alt={feature}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-emerald-600" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </Icon>
                      </div>
                      <h3 className="text-base font-semibold text-foreground">{feature}</h3>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PRODUCTS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
                {t.products.title}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                {t.products.sectionTitle}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Carbonless */}
            <ScrollReveal delay={80}>
              <div className="group bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1000&q=80"
                    alt="Carbon"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <h3 className="text-2xl font-display text-white mb-1">{t.products.academiaCarbonTitle}</h3>
                    <span className="text-xs font-medium text-emerald-300 uppercase tracking-wider">ISO 14064-1 · GHG Protocol</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{t.products.academiaCarbonDesc}</p>
                  <ul className="space-y-2.5 mb-6">
                    {t.products.academiaCarbonFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-2.5 h-2.5 text-emerald-600" viewBox="0 0 24 24" fill="none">
                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </Icon>
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/products"
                    className="inline-flex items-center justify-center w-full rounded-full py-3 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity">
                    {t.products.button}
                    <Icon className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </Icon>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Sustindex */}
            <ScrollReveal delay={160}>
              <div className="group bg-white rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1000&q=80"
                    alt="Sustainability"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <h3 className="text-2xl font-display text-white mb-1">{t.products.sustindexTitle}</h3>
                    <span className="text-xs font-medium text-teal-300 uppercase tracking-wider">ESG · KPI Scoring</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{t.products.sustindexDesc}</p>
                  <ul className="space-y-2.5 mb-6">
                    {t.products.sustindexFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                        <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-2.5 h-2.5 text-teal-600" viewBox="0 0 24 24" fill="none">
                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </Icon>
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/products"
                    className="inline-flex items-center justify-center w-full rounded-full py-3 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity">
                    {t.products.button}
                    <Icon className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </Icon>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
                {t.howItWorks.title}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                {t.howItWorks.sectionTitle}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.howItWorks.steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 p-6 pt-8 relative">
                  <div className="absolute -top-4 left-6 w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-sm font-bold shadow-md shadow-emerald-200">
                    {i + 1}
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2 mt-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STANDARDS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
                {t.standards.title}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                {t.standards.sectionTitle}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{t.standards.text}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {t.standards.list.map((standard, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="group bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 rounded-2xl p-5 text-center transition-all duration-300 hover:shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 group-hover:border-emerald-200 flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <Icon className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </Icon>
                  </div>
                  <p className="text-sm font-semibold text-foreground">{standard}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-foreground">
        <div className="absolute inset-0 opacity-20">
          <Image src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-6">
              {isEN ? 'Get Started' : 'Başlayın'}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-8 leading-tight">
              {t.finalCta.title}
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/products"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium bg-white text-foreground hover:bg-gray-100 transition-colors">
                {t.finalCta.button1}
              </Link>
              <Link href="/contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium border border-white/30 text-white hover:bg-white/10 transition-colors">
                {t.finalCta.button2}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════ */}
      <footer className="bg-white border-t border-gray-100 py-14 md:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            <div className="space-y-4">
              <a href="/" className="flex items-center gap-2.5">
                <img src="/logo.png" alt="Carbonless" className="w-12 h-12 object-contain" />
                <div>
                  <Text className="text-sm font-bold text-foreground">Carbonless</Text>
                  <Text className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wider">Network</Text>
                </div>
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.footer.description}</p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-5">{t.footer.platformTitle}</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link className="hover:text-foreground transition-colors" href="/products">Carbonless</Link></li>
                <li><Link className="hover:text-foreground transition-colors" href="/products">Sustindex</Link></li>
                <li><Link className="hover:text-foreground transition-colors" href="/methodology">{t.nav.methodology}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-5">{t.footer.companyTitle}</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link className="hover:text-foreground transition-colors" href="/about">{t.nav.about}</Link></li>
                <li><Link className="hover:text-foreground transition-colors" href="/contact">{t.nav.contact}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-5">{t.footer.contactTitle}</h3>
              <p className="text-sm text-muted-foreground mb-5">info@carbonless.network</p>
              <Link href="/contact"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity">
                {t.footer.getStarted}
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">{t.footer.copyright}</p>
            <a href="https://www.linkedin.com/company/carbonless-network/" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-100 hover:bg-foreground rounded-full flex items-center justify-center transition-colors group"
              aria-label="LinkedIn">
              <Icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-background transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </Icon>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
