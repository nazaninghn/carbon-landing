import NextImage from 'next/image';
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
                <Link variant="inline" contentKey="cta_28" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-emerald-600 rounded-full hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600" href="contact.html"> Book Demo </Link>
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
              <Link contentKey="cta_29" className="mt-4 w-full text-center px-6 py-3 text-white bg-emerald-600 rounded-full hover:bg-emerald-700" href="contact.html"> Book Demo </Link>
            </div>
          </div>
        </header>
        {/* Comprehensive Climate Intelligence */}
        <section id="comprehensive_climate_intelligence" className="bg-white py-20 border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <Text variant="bold" className="text-emerald-600 font-semibold tracking-wide uppercase text-sm"> Our Platform </Text>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6"> Comprehensive Climate Intelligence </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
               One platform to manage your entire environmental footprint. From data collection to disclosure. 
            </p>
          </div>
        </section>
        {/* Automated Carbon Accounting */}
        <section id="automated_carbon_accounting" className="py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative">
                  {/* Abstract UI representation */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                      <Text variant="bold" className="font-bold text-slate-700"> Emission Sources </Text>
                      <Text className="text-emerald-600 font-medium"> Live Data </Text>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        <Icon className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-slate-800"> Electricity (Scope 2) </p>
                        <p className="text-xs text-slate-500"> Grid Mix • NY Office </p>
                      </div>
                      <Text variant="bold" className="font-bold text-slate-900"> 45.2 tCO2e </Text>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                        <Icon className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-slate-800"> Business Travel (Scope 3) </p>
                        <p className="text-xs text-slate-500"> Flights & Hotels </p>
                      </div>
                      <Text variant="bold" className="font-bold text-slate-900"> 12.8 tCO2e </Text>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                        <Icon className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-slate-800"> Cloud Services (Scope 3) </p>
                        <p className="text-xs text-slate-500"> AWS & Azure </p>
                      </div>
                      <Text variant="bold" className="font-bold text-slate-900"> 8.4 tCO2e </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-4">
                  <Icon className="w-8 h-8" viewBox="0 0 24 24" fill="none"><path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                </div>
                <h2 className="text-3xl font-bold text-slate-900"> Automated Carbon Accounting </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                   Stop relying on spreadsheets. Our engine automatically converts your operational data into carbon equivalents using the latest emission factors (IPCC, DEFRA, EPA). 
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon className="w-6 h-6 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                    <div>
                      <h4 className="font-bold text-slate-900"> Activity-Based Data </h4>
                      <p className="text-sm text-slate-600">
                         Ingest data from ERPs, utility providers, and travel platforms. 
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon className="w-6 h-6 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                    <div>
                      <h4 className="font-bold text-slate-900"> Spend-Based Estimation </h4>
                      <p className="text-sm text-slate-600">
                         Fill data gaps by estimating emissions based on financial spend. 
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Supply Chain Scope 3 Analysis */}
        <section id="supply_chain_scope_3_analysis" className="py-24 bg-slate-100">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 order-2 lg:order-1 space-y-6">
                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-4">
                  <Icon className="w-8 h-8" viewBox="0 0 24 24" fill="none"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                </div>
                <h2 className="text-3xl font-bold text-slate-900"> Supply Chain (Scope 3) Analysis </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                   For most companies, over 80% of emissions sit in the supply chain. Engage your suppliers and track their progress towards decarbonization. 
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon className="w-6 h-6 text-teal-500 shrink-0" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                    <div>
                      <h4 className="font-bold text-slate-900"> Supplier Engagement Portal </h4>
                      <p className="text-sm text-slate-600"> Send surveys and data requests directly to vendors. </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon className="w-6 h-6 text-teal-500 shrink-0" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                    <div>
                      <h4 className="font-bold text-slate-900"> Product Carbon Footprint (PCF) </h4>
                      <p className="text-sm text-slate-600"> Calculate the lifecycle emissions of your products. </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <NextImage src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" alt="Supply Chain Logistics" fill sizes="100vw" className="rounded-2xl shadow-xl w-full" />
              </div>
            </div>
          </div>
        </section>
        {/* High Quality Carbon Removal */}
        <section id="high_quality_carbon_removal" className="py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-900 p-6 rounded-xl text-white">
                    <p className="text-sm text-emerald-300 mb-2"> Reforestation </p>
                    <p className="font-bold text-lg"> Amazon Project </p>
                    <p className="text-xs mt-4 opacity-70"> Verra Certified </p>
                  </div>
                  <div className="bg-teal-800 p-6 rounded-xl text-white">
                    <p className="text-sm text-teal-300 mb-2"> Direct Air Capture </p>
                    <p className="font-bold text-lg"> Climeworks </p>
                    <p className="text-xs mt-4 opacity-70"> Gold Standard </p>
                  </div>
                  <div className="bg-green-800 p-6 rounded-xl text-white">
                    <p className="text-sm text-green-300 mb-2"> Blue Carbon </p>
                    <p className="font-bold text-lg"> Mangrove Restore </p>
                    <p className="text-xs mt-4 opacity-70"> Plan Vivo </p>
                  </div>
                  <div className="bg-emerald-800 p-6 rounded-xl text-white flex items-center justify-center">
                    <Text variant="bold" className="font-bold text-xl"> +50 More </Text>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-4">
                  <Icon className="w-8 h-8" viewBox="0 0 24 24" fill="none"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                </div>
                <h2 className="text-3xl font-bold text-slate-900"> High-Quality Carbon Removal </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                   Not all offsets are created equal. We curate a marketplace of high-quality, verified carbon removal projects so you can offset your residual emissions with confidence. 
                </p>
                <Link variant="inline" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700" href="contact.html"> View Project Portfolio 
                <Icon className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon></Link>
              </div>
            </div>
          </div>
        </section>
        {/* See The Platform In Action */}
        <section id="see_the_platform_in_action" className="py-20 bg-emerald-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6"> See the platform in action </h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
               Schedule a personalized demo to see how EcoTrack can help your specific industry. 
            </p>
            <Link variant="inline" contentKey="cta_30" className="inline-block px-8 py-4 bg-white text-emerald-700 font-bold rounded-full hover:bg-emerald-50 transition-colors shadow-lg" href="contact.html"> Book a Demo </Link>
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
                  <Link contentKey="cta_31" className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center hover:bg-emerald-800 transition-colors" href="#"><Text className="sr-only"> Twitter </Text>
                  <Icon className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></Icon></Link>
                  <Link contentKey="cta_32" className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center hover:bg-emerald-800 transition-colors" href="#"><Text className="sr-only"> LinkedIn </Text>
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
                  <Button contentKey="cta_33" className="w-full px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors text-sm" type="submit"> Subscribe </Button>
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
