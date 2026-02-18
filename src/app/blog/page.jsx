import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Image } from '@/components/Image';
import { Input } from '@/components/Input';
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
                <Link variant="inline" contentKey="cta_19" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-emerald-600 rounded-full hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600" href="contact.html"> Book Demo </Link>
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
              <Link contentKey="cta_20" className="mt-4 w-full text-center px-6 py-3 text-white bg-emerald-600 rounded-full hover:bg-emerald-700" href="contact.html"> Book Demo </Link>
            </div>
          </div>
        </header>
        {/* Sustainability Insights */}
        <section id="sustainability_insights" className="bg-white py-20 border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <Text variant="bold" className="text-emerald-600 font-semibold tracking-wide uppercase text-sm"> The Green Ledger </Text>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6"> Sustainability Insights </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
               Expert analysis on climate policy, carbon markets, and ESG reporting. 
            </p>
          </div>
        </section>
        {/* The New Sec Climate Disclosure Rules What You Need To Know */}
        <section id="the_new_sec_climate_disclosure_rules_what_you_need_to_know" className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
              <Image variant="cover" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80" alt="Featured Post" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                <Text variant="bold" className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4 w-fit"> Regulation </Text>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                   The New SEC Climate Disclosure Rules: What You Need to Know 
                </h2>
                <p className="text-slate-200 text-lg max-w-2xl mb-6">
                   A comprehensive guide to the upcoming mandatory climate risk disclosures for public companies. 
                </p>
                <div className="flex items-center gap-4 text-slate-300 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-500"></div>
                    <Text> Dr. Elena Rodriguez </Text>
                  </div>
                  <Text> • </Text>
                  <Text> Oct 12, 2023 </Text>
                  <Text> • </Text>
                  <Text> 8 min read </Text>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How Techcorp Reduced Scope 3 Emissions By 40 */}
        <section id="how_techcorp_reduced_scope_3_emissions_by_40" className="pb-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Post 1 */}
              <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-shadow group">
                <div className="overflow-hidden h-48">
                  <Image variant="cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=800&q=80" alt="Post 1" />
                </div>
                <div className="p-6">
                  <Text variant="bold" className="text-emerald-600 text-xs font-bold uppercase tracking-wider"> Case Study </Text>
                  <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3 group-hover:text-emerald-600 transition-colors"> How TechCorp Reduced Scope 3 Emissions by 40% </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                     Learn how a leading software company engaged their supply chain to achieve massive reductions. 
                  </p>
                  <Link variant="inline" className="text-emerald-600 font-semibold text-sm hover:text-emerald-700 inline-flex items-center" href="#"> Read Story 
                  <Icon className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon></Link>
                </div>
              </article>
              {/* Post 2 */}
              <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-shadow group">
                <div className="overflow-hidden h-48">
                  <Image variant="cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80" alt="Post 2" />
                </div>
                <div className="p-6">
                  <Text variant="bold" className="text-emerald-600 text-xs font-bold uppercase tracking-wider"> Carbon Markets </Text>
                  <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3 group-hover:text-emerald-600 transition-colors"> Understanding High-Quality Carbon Removal </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                     Why avoidance offsets are out, and permanent removal is in. A guide for buyers. 
                  </p>
                  <Link variant="inline" className="text-emerald-600 font-semibold text-sm hover:text-emerald-700 inline-flex items-center" href="#"> Read Article 
                  <Icon className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon></Link>
                </div>
              </article>
              {/* Post 3 */}
              <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-shadow group">
                <div className="overflow-hidden h-48">
                  <Image variant="cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Post 3" />
                </div>
                <div className="p-6">
                  <Text variant="bold" className="text-emerald-600 text-xs font-bold uppercase tracking-wider"> Product Update </Text>
                  <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3 group-hover:text-emerald-600 transition-colors"> Introducing Automated Utility Data Sync </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                     Connect over 5,000 utility providers directly to EcoTrack for real-time energy monitoring. 
                  </p>
                  <Link variant="inline" className="text-emerald-600 font-semibold text-sm hover:text-emerald-700 inline-flex items-center" href="#"> Learn More 
                  <Icon className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon></Link>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* Subscribe To The Green Ledger */}
        <section id="subscribe_to_the_green_ledger" className="py-20 bg-emerald-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4"> Subscribe to The Green Ledger </h2>
            <p className="text-slate-600 mb-8">
               Join 15,000+ sustainability leaders receiving our weekly insights. 
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input className="flex-1 px-6 py-4 rounded-full border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none" type="email" placeholder="Enter your email address" />
              <Button contentKey="cta_21" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-colors shadow-lg shadow-emerald-200" type="submit"> Subscribe </Button>
            </form>
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
                  <Link contentKey="cta_22" className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center hover:bg-emerald-800 transition-colors" href="#"><Text className="sr-only"> Twitter </Text>
                  <Icon className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></Icon></Link>
                  <Link contentKey="cta_23" className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center hover:bg-emerald-800 transition-colors" href="#"><Text className="sr-only"> LinkedIn </Text>
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
                  <Input variant="text" className="w-full px-4 py-3 bg-emerald-900/50 border border-emerald-800 rounded-lg focus:outline-none focus:border-emerald-500 text-white placeholder-emerald-400/50 text-sm" type="email" placeholder="Enter your email" />
                  <Button contentKey="cta_24" className="w-full px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors text-sm" type="submit"> Subscribe </Button>
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
