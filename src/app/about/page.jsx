'use client';

import { Icon }         from '@/components/Icon';
import { Link }         from '@/components/Link';
import { useLanguage }  from '@/components/LanguageProvider';
import Navbar           from '@/components/Navbar';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white text-foreground">
      <Navbar currentPath="/about" />

      {/* Page header */}
      <section className="pt-28 pb-16 px-6 text-center border-b border-border">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
            {t.nav.about}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-5">
            {t.about.title}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{t.about.text1}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <ScrollReveal>
              <div className="bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 rounded-2xl p-8 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </Icon>
                </div>
                <h2 className="font-display text-2xl text-foreground mb-3">Mission</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.about.text2}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="bg-gray-50 hover:bg-teal-50 border border-gray-100 hover:border-teal-200 rounded-2xl p-8 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </Icon>
                </div>
                <h2 className="font-display text-2xl text-foreground mb-3">Vision</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To become a leading platform for carbon intelligence and sustainability assessment, supporting organizations worldwide in their environmental performance journey.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Our Values</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">What We Stand For</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Accuracy',      body: 'Reliable methodologies aligned with international standards.',       icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
              { title: 'Transparency',  body: 'Clear reporting and structured environmental data presentation.',     icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
              { title: 'Innovation',    body: 'Scalable digital tools for modern sustainability challenges.',        icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
            ].map((v, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white border border-gray-100 hover:border-emerald-200 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none">
                      <path d={v.icon} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </Icon>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Company */}
      <section className="py-20 md:py-24 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">{t.about.parentCompany.badge}</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5 leading-tight">{t.about.parentCompany.title}</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </Icon>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Academia Danışmanlık</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.about.parentCompany.description}</p>
                </div>
              </div>

              <div className="border-t border-border pt-5 space-y-3">
                <div className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </Icon>
                  <p className="text-sm text-muted-foreground">{t.about.parentCompany.location}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </Icon>
                  <p className="text-sm text-muted-foreground">Tel: 212-613 58 80</p>
                </div>
                <div className="pt-3">
                  <Link href="https://www.academiadanismanlik.com/" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity">
                    {t.about.parentCompany.website}
                    <Icon className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </Icon>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
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
