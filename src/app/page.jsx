import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Image } from '@/components/Image';
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
                <Link variant="inline" contentKey="cta_23" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-emerald-600 rounded-full hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600" href="contact.html"> Book Demo </Link>
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
              <Link contentKey="cta_24" className="mt-4 w-full text-center px-6 py-3 text-white bg-emerald-600 rounded-full hover:bg-emerald-700" href="contact.html"> Book Demo </Link>
            </div>
          </div>
        </header>
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
          {/* Background Blobs */}
          <div className="blob bg-emerald-300 w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="blob bg-teal-200 w-80 h-80 rounded-full bottom-0 right-0 translate-x-1/3 translate-y-1/3 animation-delay-2000"></div>
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Text Content */}
              <div className="lg:w-1/2 space-y-8">
                <Badge className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium"><Text className="relative flex h-2 w-2"><Text className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <Text className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" /></Text>
                 New: AI-Powered Supply Chain Analysis </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                   Decarbonize your business with 
                  <Text className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500"> precision </Text>
                   . 
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                   The all-in-one platform to measure, report, and reduce your carbon footprint. Turn sustainability into your competitive advantage. 
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link variant="inline" contentKey="cta_25" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-emerald-600 rounded-full hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200" href="contact.html"> Start Free Trial </Link>
                  <Link variant="inline" contentKey="cta_26" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-emerald-200" href="services.html"> View Demo </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
                  </div>
                  <p> Trusted by 500+ sustainability leaders </p>
                </div>
              </div>
              {/* Hero Image / Dashboard Preview */}
              <div className="lg:w-1/2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                  {/* Mockup Header */}
                  <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    </div>
                    <Badge className="ml-4 px-3 py-1 bg-white rounded-md text-xs text-slate-400 border border-slate-100 w-64"> ecotrack.io/dashboard </Badge>
                  </div>
                  {/* Mockup Content */}
                  <div className="p-6 grid grid-cols-2 gap-6">
                    {/* Stat Card 1 */}
                    <div className="col-span-2 bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-sm text-emerald-600 font-medium"> Total Carbon Offset </p>
                          <h3 className="text-3xl font-bold text-emerald-900"> 1,240 tCO2e </h3>
                        </div>
                        <Text className="px-2 py-1 bg-emerald-200 text-emerald-800 text-xs rounded-full font-medium"> +12% vs last month </Text>
                      </div>
                      <div className="h-2 bg-emerald-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-3/4 rounded-full"></div>
                      </div>
                    </div>
                    {/* Stat Card 2 */}
                    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
                      <p className="text-sm text-slate-500 mb-1"> Energy Usage </p>
                      <p className="text-2xl font-bold text-slate-800"> 450 MWh </p>
                      <p className="text-xs text-green-600 mt-2 flex items-center">
                        <Icon className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                         -5% reduction 
                      </p>
                    </div>
                    {/* Stat Card 3 */}
                    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
                      <p className="text-sm text-slate-500 mb-1"> Scope 3 Emissions </p>
                      <p className="text-2xl font-bold text-slate-800"> 890 tCO2e </p>
                      <p className="text-xs text-amber-600 mt-2 flex items-center">
                        <Icon className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                         Action needed 
                      </p>
                    </div>
                  </div>
                </div>
                {/* Floating Badge */}
                <div style={{ animationDuration: "3s" }} className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Icon className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500"> Status </p>
                    <p className="text-sm font-bold text-slate-800"> Net Zero Compliant </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trust Section */}
        <section id="trust_section" className="py-12 border-y border-slate-100 bg-white/50">
          <div className="container mx-auto px-4 max-w-7xl">
            <p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-wider"> Trusted by Sustainability Pioneers </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Partner Logos (Text-based SVGs for Professional Look) */}
              <Icon className="h-8 w-auto text-slate-800" viewBox="0 0 140 40" fill="currentColor"><Text> CarbonZero </Text></Icon>
              <Icon className="h-8 w-auto text-slate-800" viewBox="0 0 140 40" fill="currentColor"><Text> GreenGrid </Text></Icon>
              <Icon className="h-8 w-auto text-slate-800" viewBox="0 0 140 40" fill="currentColor"><Text> EcoSphere </Text></Icon>
              <Icon className="h-8 w-auto text-slate-800" viewBox="0 0 150 40" fill="currentColor"><Text> SustainFlow </Text></Icon>
              <Icon className="h-8 w-auto text-slate-800" viewBox="0 0 140 40" fill="currentColor"><Text> NetPositive </Text></Icon>
            </div>
          </div>
        </section>
        {/* Complete Carbon Intelligence */}
        <section id="complete_carbon_intelligence" className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"> Complete Carbon Intelligence </h2>
              <p className="text-lg text-slate-600">
                 From automated data collection to audit-ready reports, EcoTrack provides the tools you need to manage your environmental impact. 
              </p>
            </div>
            {/* Feature 1: Tracking */}
            <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 p-2">
                  <Image className="rounded-xl w-full h-auto" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Data Dashboard" />
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 space-y-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                  <Icon className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                </div>
                <h3 className="text-2xl font-bold text-slate-900"> Real-time Carbon Tracking </h3>
                <p className="text-slate-600 leading-relaxed">
                   Connect your utility bills, travel data, and supply chain records directly to EcoTrack. Our API integrations ensure your carbon data is always up-to-date and accurate, eliminating manual entry errors. 
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700">
                    <Icon className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                     Automated data ingestion 
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <Icon className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                     Scope 1, 2, and 3 coverage 
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <Icon className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                     Anomaly detection alerts 
                  </li>
                </ul>
              </div>
            </div>
            {/* Feature 2: Reporting */}
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2 space-y-6">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
                  <Icon className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                </div>
                <h3 className="text-2xl font-bold text-slate-900"> Audit-Ready Impact Reports </h3>
                <p className="text-slate-600 leading-relaxed">
                   Generate compliant sustainability reports with a single click. Whether it's for stakeholders, investors, or regulatory bodies, EcoTrack ensures your data meets global standards like GHG Protocol and TCFD. 
                </p>
                <Link variant="inline" className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center gap-1" href="services.html"> Explore Reporting Features 
                <Icon className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon></Link>
              </div>
              <div className="md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 p-2">
                  <Image className="rounded-xl w-full h-auto" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Reporting Interface" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Certified For Excellence */}
        <section id="certified_for_excellence" className="py-20 bg-emerald-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <Icon className="w-full h-full" viewBox="0 0 100 100"><path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor"></path></Icon>
          </div>
          <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-12"> Certified for Excellence </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-80">
              {/* Placeholder Certification Badges */}
              <div className="p-6 border border-emerald-700 rounded-xl bg-emerald-800/30 backdrop-blur-sm w-full">
                <p className="font-bold text-xl"> ISO 14001 </p>
                <p className="text-xs text-emerald-300 mt-1"> Environmental Management </p>
              </div>
              <div className="p-6 border border-emerald-700 rounded-xl bg-emerald-800/30 backdrop-blur-sm w-full">
                <p className="font-bold text-xl"> GHG Protocol </p>
                <p className="text-xs text-emerald-300 mt-1"> Standard Compliant </p>
              </div>
              <div className="p-6 border border-emerald-700 rounded-xl bg-emerald-800/30 backdrop-blur-sm w-full">
                <p className="font-bold text-xl"> B Corp </p>
                <p className="text-xs text-emerald-300 mt-1"> Pending Certification </p>
              </div>
              <div className="p-6 border border-emerald-700 rounded-xl bg-emerald-800/30 backdrop-blur-sm w-full">
                <p className="font-bold text-xl"> SOC 2 </p>
                <p className="text-xs text-emerald-300 mt-1"> Type II Secure </p>
              </div>
            </div>
          </div>
        </section>
        {/* Ready To Make A Measurable Impact */}
        <section id="ready_to_make_a_measurable_impact" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6"> Ready to make a measurable impact? </h2>
            <p className="text-xl text-slate-600 mb-10">
               Join hundreds of forward-thinking companies using EcoTrack to build a sustainable future. 
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link variant="inline" contentKey="cta_27" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-emerald-600 rounded-full hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200" href="contact.html"> Get Started Now </Link>
              <Link variant="inline" contentKey="cta_28" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-emerald-200" href="pricing.html"> View Pricing </Link>
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
                  <Link contentKey="cta_29" className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center hover:bg-emerald-800 transition-colors" href="#"><Text className="sr-only"> Twitter </Text>
                  <Icon className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></Icon></Link>
                  <Link contentKey="cta_30" className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center hover:bg-emerald-800 transition-colors" href="#"><Text className="sr-only"> LinkedIn </Text>
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
                  <Button contentKey="cta_31" className="w-full px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors text-sm" type="submit"> Subscribe </Button>
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
