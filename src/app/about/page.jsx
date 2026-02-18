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
                <Link variant="inline" contentKey="cta_26" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-emerald-600 rounded-full hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600" href="contact.html"> Book Demo </Link>
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
              <Link contentKey="cta_27" className="mt-4 w-full text-center px-6 py-3 text-white bg-emerald-600 rounded-full hover:bg-emerald-700" href="contact.html"> Book Demo </Link>
            </div>
          </div>
        </header>
        {/* Our Mission Is Net Zero */}
        <section id="our_mission_is_net_zero" className="bg-emerald-900 text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image variant="cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80" alt="Forest Background" />
          </div>
          <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6"> Our Mission is Net Zero </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
               We believe that what gets measured gets managed. We're building the operating system for the sustainable economy. 
            </p>
          </div>
        </section>
        {/* Why We Started Ecotrack */}
        <section id="why_we_started_ecotrack" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg prose-slate mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-6"> Why we started EcoTrack </h2>
              <p className="text-slate-600 mb-6">
                 Climate change is the defining challenge of our time. While many organizations have pledged to reduce their carbon footprint, few have the tools to accurately measure their progress. Spreadsheets and estimated averages aren't enough anymore. 
              </p>
              <p className="text-slate-600 mb-6">
                 Founded in 2022 by a team of climate scientists and software engineers, EcoTrack was built to bridge the gap between intention and action. We provide granular, real-time data that empowers businesses to make decisions that are good for the planet and their bottom line. 
              </p>
              <blockquote className="border-l-4 border-emerald-500 pl-6 italic text-xl text-slate-800 my-10">
                 "We are not just building software; we are building the infrastructure for a regenerative future." 
              </blockquote>
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section id="stats_section" className="py-16 bg-emerald-50 border-y border-emerald-100">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <p className="text-4xl font-bold text-emerald-700 mb-2"> 1M+ </p>
                <p className="text-slate-600 font-medium"> Tons of CO2e Tracked </p>
              </div>
              <div className="p-6 border-t md:border-t-0 md:border-l border-emerald-200">
                <p className="text-4xl font-bold text-emerald-700 mb-2"> 500+ </p>
                <p className="text-slate-600 font-medium"> Enterprise Partners </p>
              </div>
              <div className="p-6 border-t md:border-t-0 md:border-l border-emerald-200">
                <p className="text-4xl font-bold text-emerald-700 mb-2"> 50+ </p>
                <p className="text-slate-600 font-medium"> Countries Supported </p>
              </div>
            </div>
          </div>
        </section>
        {/* Meet The Team */}
        <section id="meet_the_team" className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4"> Meet the Team </h2>
              <p className="text-slate-600">
                 Experts in sustainability, data science, and enterprise software. 
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <Image variant="cover" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="CEO" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm"> "Sustainability is the new digital transformation." </p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900"> Sarah Chen </h3>
                <p className="text-emerald-600 font-medium"> CEO & Co-Founder </p>
              </div>
              {/* Team Member 2 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <Image variant="cover" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" alt="CTO" />
                </div>
                <h3 className="text-xl font-bold text-slate-900"> David Miller </h3>
                <p className="text-emerald-600 font-medium"> CTO </p>
              </div>
              {/* Team Member 3 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <Image variant="cover" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80" alt="Head of Science" />
                </div>
                <h3 className="text-xl font-bold text-slate-900"> Dr. Elena Rodriguez </h3>
                <p className="text-emerald-600 font-medium"> Head of Climate Science </p>
              </div>
            </div>
          </div>
        </section>
        {/* Our Values */}
        <section id="our_values" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6"> Our Values </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
                      <Icon className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900"> Radical Transparency </h3>
                      <p className="text-slate-600">
                         We believe in open data and honest reporting. No greenwashing, just facts. 
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
                      <Icon className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900"> Action Over Words </h3>
                      <p className="text-slate-600">
                         Pledges are good, but reduction is better. We focus on tangible impact. 
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
                      <Icon className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></Icon>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900"> Collaboration </h3>
                      <p className="text-slate-600">
                         Solving the climate crisis requires everyone working together. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image variant="cover" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Team Collaboration" />
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
                  <Link contentKey="cta_28" className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center hover:bg-emerald-800 transition-colors" href="#"><Text className="sr-only"> Twitter </Text>
                  <Icon className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></Icon></Link>
                  <Link contentKey="cta_29" className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center hover:bg-emerald-800 transition-colors" href="#"><Text className="sr-only"> LinkedIn </Text>
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
                  <Button contentKey="cta_30" className="w-full px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors text-sm" type="submit"> Subscribe </Button>
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
