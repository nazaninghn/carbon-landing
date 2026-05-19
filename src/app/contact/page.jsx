'use client';

import { useState }    from 'react';
import { Icon }        from '@/components/Icon';
import { useLanguage } from '@/components/LanguageProvider';
import Navbar          from '@/components/Navbar';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function ContactPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = e => {
    e.preventDefault();
    setSent(true);
  };

  const isEN = t.hero?.title?.includes('Carbon');

  return (
    <div className="bg-white text-foreground">
      <Navbar currentPath="/contact" />

      {/* Page header */}
      <section className="pt-28 pb-16 px-6 text-center border-b border-border">
        <div className="max-w-xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
            {t.nav.contact}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-5">
            {isEN ? "Let's Talk" : 'Bize Ulaşın'}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {isEN
              ? 'Reach out and we will get back to you within 24 hours.'
              : '24 saat içinde size geri döneceğiz.'}
          </p>
        </div>
      </section>

      {/* Contact layout */}
      <section className="py-20 md:py-28 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Info */}
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Contact Info</span>
                  <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-5">
                    {isEN ? 'Get in Touch' : 'İletişime Geçin'}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {isEN
                      ? 'We are here to help you with carbon accounting, sustainability assessment, and platform onboarding.'
                      : 'Karbon muhasebesi, sürdürülebilirlik değerlendirmesi ve platform entegrasyonu konularında size yardımcı olmaktan memnuniyet duyarız.'}
                  </p>
                </div>

                <div className="space-y-5">
                  {[
                    { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Email', value: 'info@carbonless.network' },
                    { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', label: 'Phone', value: '212-613 58 80' },
                    { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z', label: 'Location', value: t.about?.parentCompany?.location ?? 'Istanbul, Turkey' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none">
                          <path d={item.icon} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </Icon>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</p>
                        <p className="text-sm text-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Parent Company</p>
                  <a href="https://www.academiadanismanlik.com/" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-emerald-600 transition-colors font-medium">
                    Academia Danışmanlık
                    <Icon className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </Icon>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={100}>
              {sent ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </Icon>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {isEN ? 'Message Sent!' : 'Mesajınız Gönderildi!'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isEN ? "We'll be in touch within 24 hours." : '24 saat içinde geri döneceğiz.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                      {isEN ? 'Name' : 'Ad Soyad'}
                    </label>
                    <input
                      name="name" value={form.name} onChange={handle} required
                      placeholder={isEN ? 'Your name' : 'Adınız'}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-border bg-gray-50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-emerald-400 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                      {isEN ? 'Email' : 'E-posta'}
                    </label>
                    <input
                      name="email" type="email" value={form.email} onChange={handle} required
                      placeholder={isEN ? 'your@email.com' : 'eposta@adresiniz.com'}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-border bg-gray-50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-emerald-400 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                      {isEN ? 'Message' : 'Mesaj'}
                    </label>
                    <textarea
                      name="message" value={form.message} onChange={handle} required rows={5}
                      placeholder={isEN ? 'How can we help you?' : 'Size nasıl yardımcı olabiliriz?'}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-border bg-gray-50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-emerald-400 focus:bg-white transition-colors resize-none"
                    />
                  </div>
                  <button type="submit"
                    className="w-full flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity">
                    {isEN ? 'Send Message' : 'Mesaj Gönder'}
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
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
