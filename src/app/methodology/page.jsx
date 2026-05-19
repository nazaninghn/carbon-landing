'use client';

import { Icon }         from '@/components/Icon';
import { useLanguage }  from '@/components/LanguageProvider';
import Navbar           from '@/components/Navbar';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function MethodologyPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white text-foreground">
      <Navbar currentPath="/methodology" />

      {/* Page header */}
      <section className="pt-28 pb-16 px-6 text-center border-b border-border">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
            {t.nav.methodology}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-5">
            {t.methodology.title}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {t.methodologySection.text}
          </p>
        </div>
      </section>

      {/* Carbon Calculation Steps */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Process</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">{t.methodology.carbonTitle}</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.methodology.carbonSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 rounded-2xl p-6 pt-8 relative transition-all duration-300 hover:shadow-md">
                  <div className="absolute -top-4 left-6 w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-sm font-bold shadow-md shadow-emerald-100">
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

      {/* Sustainability Assessment */}
      <section className="py-20 md:py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Assessment</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5 leading-tight">{t.methodology.sustainabilityTitle}</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">{t.methodology.sustainabilityText}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { label: 'Data Input',  sub: 'Structured data collection', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
              { label: 'Scoring',     sub: 'KPI-based evaluation',       icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
              { label: 'Reporting',   sub: 'Performance analysis',       icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white border border-gray-100 hover:border-emerald-200 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none">
                      <path d={item.icon} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </Icon>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-20 md:py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">{t.standards.title}</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5 leading-tight">{t.standards.sectionTitle}</h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">{t.standards.text}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.standards.list.map((s, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 rounded-2xl p-5 text-center transition-all duration-300 hover:shadow-md">
                  <div className="w-9 h-9 rounded-lg bg-white border border-gray-100 flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <Icon className="w-4.5 h-4.5 text-emerald-600" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </Icon>
                  </div>
                  <p className="text-xs font-semibold text-foreground">{s}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-center px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-7 leading-tight">{t.finalCta.title}</h2>
          <a href="/contact"
            className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium bg-white text-foreground hover:bg-gray-100 transition-colors">
            {t.finalCta.button2}
          </a>
        </div>
      </section>

      <footer className="py-8 border-t border-border px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="text-xs text-muted-foreground">{t.footer.copyright}</p>
          <a href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Carbonless Network</a>
        </div>
      </footer>
    </div>
  );
}
