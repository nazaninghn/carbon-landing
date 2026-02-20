'use client';

import { useState } from 'react';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Image } from '@/components/Image';
import { Input } from '@/components/Input';
import { Link } from '@/components/Link';
import { Text } from '@/components/Text';
import { useLanguage } from '@/components/LanguageProvider';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export default function ContactPage() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <Link variant="nav" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="/about">{t.nav.about}</Link>
              <Link variant="nav" className="text-sm font-medium text-emerald-600 transition-colors" href="/contact">{t.nav.contact}</Link>
            </nav>
            
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-emerald-50/88 to-white/95"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <Badge className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
            {t.nav.contact}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t.contact.title}</h1>
          <p className="text-xl text-slate-600">{t.contact.subtitle}</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="406a5beb-159f-4fa6-abd6-ebf7311f7fcd" />
              
              {/* Optional: Redirect after submission */}
              <input type="hidden" name="redirect" value="false" />
              
              {/* Optional: Custom subject */}
              <input type="hidden" name="subject" value="New Contact Form Submission from Carbonless Network" />
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.name}</label>
                <Input 
                  type="text" 
                  name="name"
                  placeholder={t.contact.name} 
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.email}</label>
                <Input 
                  type="email" 
                  name="email"
                  placeholder="info@carbonless.network" 
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.message}</label>
                <textarea 
                  name="message"
                  rows="6" 
                  placeholder={t.contact.message} 
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                ></textarea>
              </div>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <div className="flex items-center gap-2 text-emerald-800">
                    <Icon className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </Icon>
                    <span className="font-semibold">Message sent successfully!</span>
                  </div>
                </div>
              )}
              
              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2 text-red-800">
                    <Icon className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </Icon>
                    <span className="font-semibold">Something went wrong. Please try again.</span>
                  </div>
                </div>
              )}
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-emerald-600 rounded-full hover:bg-emerald-700 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : t.contact.send}
              </Button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-slate-200 text-center">
              <p className="text-slate-600 mb-2">{t.contact.email}</p>
              <a href="mailto:info@carbonless.network" className="text-emerald-600 font-semibold hover:text-emerald-700">
                info@carbonless.network
              </a>
            </div>
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
