import NextLink from 'next/link';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Link } from '@/components/Link';
import { Text } from '@/components/Text';

export const metadata = {
  title: 'Climate Tech - Free Tailwind Template',
  description:  'Download this free Tailwind CSS Saas website template for Climate Tech. Features a modern design, fully responsive layout, and includes 6 pre-built pages like blog.html, index.html, about.html.',
};

export default function Page() {
  return (
    <div className="bg-slate-50 text-slate-900 pt-20">
      <>
        <header id="main-header" className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 transition-all duration-300">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link className="flex items-center gap-2 group" href="index.html"><div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200 group-hover:shadow-emerald-300 transition-all">
                <Icon className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
              </div>
              <Text variant="bold" className="text-xl font-bold text-emerald-950 tracking-tight"> EcoTrack </Text></Link>
              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-8">
                <Link variant="nav" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors nav-link" href="index.html"> Home </Link>
                <Link variant="nav" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors nav-link" href="services.html"> Platform </Link>
                <Link variant="nav" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors nav-link" href="about.html"> Mission </Link>
                <Link variant="nav" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors nav-link" href="blog.html"> Insights </Link>
                <Link variant="nav" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors nav-link" href="pricing.html"> Pricing </Link>
              </nav>
              {/* CTA & Mobile Toggle */}
              <div className="flex items-center gap-4">
                <Link variant="inline" contentKey="cta_22" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-emerald-600 rounded-full hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600" href="contact.html"> Book Demo </Link>
                <Button className="md:hidden p-2 text-gray-600 hover:text-emerald-600 transition-colors" id="mobile-menu-btn"><Icon className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon></Button>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          <div id="mobile-menu" className="fixed inset-0 z-40 bg-white transform translate-x-full transition-transform duration-300 md:hidden pt-24 px-6">
            <div className="flex flex-col gap-6 text-lg font-medium text-gray-800">
              <Link className="hover:text-emerald-600 transition-colors" href="index.html"> Home </Link>
              <Link className="hover:text-emerald-600 transition-colors" href="services.html"> Platform </Link>
              <Link className="hover:text-emerald-600 transition-colors" href="about.html"> Mission </Link>
              <Link className="hover:text-emerald-600 transition-colors" href="blog.html"> Insights </Link>
              <Link className="hover:text-emerald-600 transition-colors" href="pricing.html"> Pricing </Link>
              <Link contentKey="cta_23" className="mt-4 w-full text-center px-6 py-3 text-white bg-emerald-600 rounded-full hover:bg-emerald-700" href="contact.html"> Book Demo </Link>
            </div>
          </div>
        </header>
        {/* Simple Transparent Pricing */}
        <section id="simple_transparent_pricing" className="bg-emerald-900 text-white py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Icon className="w-full h-full" viewBox="0 0 100 100"><path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor"></path></Icon>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6"> Simple, Transparent Pricing </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
               Choose the plan that fits your sustainability journey. No hidden fees. 
            </p>
          </div>
        </section>
        {/* Small Business */}
        <section id="small_business" className="py-24 -mt-16 relative z-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex flex-col">
                <div className="mb-4">
                  <Text variant="bold" className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full"> Starter </Text>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2"> Small Business </h3>
                <p className="text-slate-500 text-sm mb-6"> For companies just starting their climate journey. </p>
                <div className="mb-6">
                  <Text variant="bold" className="text-4xl font-bold text-slate-900"> $299 </Text>
                  <Text className="text-slate-500"> /month </Text>
                </div>
                <Link contentKey="cta_24" className="block w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-center rounded-lg transition-colors mb-8" href="contact.html"> Start Free Trial </Link>
                <ul className="space-y-4 text-sm text-slate-600 flex-1">
                  <li className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                     Scope 1 & 2 Tracking 
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                     Basic Reporting 
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                     1 User Seat 
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                     Email Support 
                  </li>
                </ul>
              </div>
              {/* Growth Plan */}
              <div className="bg-white rounded-2xl shadow-2xl border-2 border-emerald-500 p-8 flex flex-col relative transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md"> Most Popular </div>
                <div className="mb-4">
                  <Text variant="bold" className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full"> Growth </Text>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2"> Mid-Market </h3>
                <p className="text-slate-500 text-sm mb-6"> Automated data collection for growing teams. </p>
                <div className="mb-6">
                  <Text variant="bold" className="text-4xl font-bold text-slate-900"> $899 </Text>
                  <Text className="text-slate-500"> /month </Text>
                </div>
                <NextLink href="/contact" className="block w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-center rounded-lg transition-colors mb-8 shadow-lg shadow-emerald-200"> Get Started </NextLink>
                <ul className="space-y-4 text-sm text-slate-600 flex-1">
                  <li className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                    <strong> Everything in Starter, plus: </strong>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                     Scope 3 (Supply Chain) 
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                     API Integrations (ERP, Utility) 
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                     5 User Seats 
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                     Audit-Ready Reports 
                  </li>
                </ul>
              </div>
              {/* Enterprise Plan */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex flex-col">
                <div className="mb-4">
                  <Text variant="bold" className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full"> Enterprise </Text>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2"> Global Corp </h3>
                <p className="text-slate-500 text-sm mb-6"> Full customization and dedicated support. </p>
                <div className="mb-6">
                  <Text variant="bold" className="text-4xl font-bold text-slate-900"> Custom </Text>
                </div>
                <Link contentKey="cta_26" className="block w-full py-3 px-4 bg-slate-800 hover:bg-slate-900 text-white font-semibold text-center rounded-lg transition-colors mb-8" href="contact.html"> Contact Sales </Link>
                <ul className="space-y-4 text-sm text-slate-600 flex-1">
                  <li className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                    <strong> Everything in Growth, plus: </strong>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                     Unlimited Seats 
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                     Dedicated Success Manager 
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                     Custom Emission Factors 
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                     SSO & Advanced Security 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Frequently Asked Questions */}
        <section id="frequently_asked_questions" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12"> Frequently Asked Questions </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-lg text-slate-900 mb-2"> Do you offer a free trial? </h3>
                <p className="text-slate-600">
                   Yes, we offer a 14-day free trial for our Starter and Growth plans. No credit card required. 
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-lg text-slate-900 mb-2"> Is my data secure? </h3>
                <p className="text-slate-600">
                   Absolutely. We are SOC 2 Type II compliant and use bank-grade encryption for all data transmission and storage. 
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-lg text-slate-900 mb-2"> Can I upgrade later? </h3>
                <p className="text-slate-600">
                   Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of the next billing cycle. 
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-emerald-950 text-emerald-100 py-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <Icon className="w-full h-full" viewBox="0 0 100 100"><path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor"></path></Icon>
          </div>
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              {/* Brand Column */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
                    <Icon className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                  </div>
                  <Text variant="bold" className="text-xl font-bold text-white tracking-tight"> EcoTrack </Text>
                </div>
                <p className="text-emerald-200/80 text-sm leading-relaxed">
                   Empowering businesses to measure, reduce, and report their carbon footprint with precision and transparency. Join the movement towards Net Zero. 
                </p>
                <div className="flex gap-4">
                  <Link contentKey="cta_27" className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center hover:bg-emerald-800 transition-colors" href="#"><Text className="sr-only"> Twitter </Text>
                  <Icon className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></Icon></Link>
                  <Link contentKey="cta_28" className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center hover:bg-emerald-800 transition-colors" href="#"><Text className="sr-only"> LinkedIn </Text>
                  <Icon className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></Icon></Link>
                </div>
              </div>
              {/* Product Links */}
              <div>
                <h3 className="text-white font-semibold mb-6"> Platform </h3>
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link className="hover:text-emerald-400 transition-colors" href="services.html#tracking"> Carbon Tracking </Link>
                  </li>
                  <li>
                    <Link className="hover:text-emerald-400 transition-colors" href="services.html#supply-chain"> Supply Chain </Link>
                  </li>
                  <li>
                    <Link className="hover:text-emerald-400 transition-colors" href="services.html#reporting"> ESG Reporting </Link>
                  </li>
                  <li>
                    <Link className="hover:text-emerald-400 transition-colors" href="services.html#offsets"> Carbon Offsets </Link>
                  </li>
                  <li>
                    <Link className="hover:text-emerald-400 transition-colors" href="pricing.html"> Enterprise Pricing </Link>
                  </li>
                </ul>
              </div>
              {/* Company Links */}
              <div>
                <h3 className="text-white font-semibold mb-6"> Company </h3>
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link className="hover:text-emerald-400 transition-colors" href="about.html"> About Us </Link>
                  </li>
                  <li>
                    <Link className="hover:text-emerald-400 transition-colors" href="about.html#careers"> Careers </Link>
                  </li>
                  <li>
                    <Link className="hover:text-emerald-400 transition-colors" href="blog.html"> Blog </Link>
                  </li>
                  <li>
                    <Link className="hover:text-emerald-400 transition-colors" href="contact.html"> Contact </Link>
                  </li>
                  <li>
                    <Link className="hover:text-emerald-400 transition-colors" href="#"> Partners </Link>
                  </li>
                </ul>
              </div>
              {/* Newsletter */}
              <div>
                <h3 className="text-white font-semibold mb-6"> Stay Updated </h3>
                <p className="text-emerald-200/80 text-sm mb-4">
                   Get the latest sustainability insights delivered to your inbox. 
                </p>
                <form className="space-y-3">
                  <input placeholder="Enter your email" type="email" className="w-full px-4 py-3 bg-emerald-900/50 border border-emerald-800 rounded-lg focus:outline-none focus:border-emerald-500 text-white placeholder-emerald-400/50 text-sm" />
                  <Button contentKey="cta_29" className="w-full px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors text-sm" type="submit"> Subscribe </Button>
                </form>
              </div>
            </div>
            {/* Bottom Bar */}
            <div className="pt-8 border-t border-emerald-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-emerald-400/60">
              <p> © 2024 EcoTrack Technologies Inc. All rights reserved. </p>
              <div className="flex gap-6">
                <Link className="hover:text-emerald-400 transition-colors" href="#"> Privacy Policy </Link>
                <Link className="hover:text-emerald-400 transition-colors" href="#"> Terms of Service </Link>
                <Link className="hover:text-emerald-400 transition-colors" href="#"> Cookie Settings </Link>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}
