'use client';

import { Icon }             from '@/components/Icon';
import { Image }            from '@/components/Image';
import { Link }             from '@/components/Link';
import { useLanguage }      from '@/components/LanguageProvider';
import Navbar               from '@/components/Navbar';
import { ScrollReveal }     from '@/components/ScrollReveal';

export default function ProductsPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white text-foreground">
      <Navbar currentPath="/products" />

      {/* Page header */}
      <section className="pt-28 pb-16 px-6 text-center border-b border-border">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
            {t.products.title}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-5">
            {t.products.sectionTitle}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            {t.whatWeDo.text2}
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 md:py-28 px-6">
        <div className="container mx-auto max-w-5xl space-y-16">

          {/* Carbonless */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="rounded-2xl overflow-hidden border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=900&q=80"
                  alt="Carbon"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">Platform 01</span>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                  {t.products.academiaCarbonTitle}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                  {t.products.academiaCarbonDesc}
                </p>
                <ul className="space-y-3 mb-8">
                  {t.products.academiaCarbonFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-2.5 h-2.5 text-emerald-600" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </Icon>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity">
                  {t.products.button}
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="border-t border-border" />

          {/* Sustindex */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-1 lg:order-2 rounded-2xl overflow-hidden border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=900&q=80"
                  alt="Sustainability"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="order-2 lg:order-1">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-600 mb-3">Platform 02</span>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                  {t.products.sustindexTitle}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                  {t.products.sustindexDesc}
                </p>
                <ul className="space-y-3 mb-8">
                  {t.products.sustindexFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                      <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-2.5 h-2.5 text-teal-600" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </Icon>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity">
                  {t.products.button}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-center px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-7 leading-tight">{t.finalCta.title}</h2>
          <Link href="/contact"
            className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium bg-white text-foreground hover:bg-gray-100 transition-colors">
            {t.finalCta.button2}
          </Link>
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
