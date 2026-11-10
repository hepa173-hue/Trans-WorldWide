/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesCatalog } from './components/ServicesCatalog';
import { LogisticsConfigurator } from './components/LogisticsConfigurator';
import { KpiDashboard } from './components/KpiDashboard';
import { FleetShowcase } from './components/FleetShowcase';
import { GlobalRoutes } from './components/GlobalRoutes';
import { FaqSection } from './components/FaqSection';
import { TrackingSection } from './components/TrackingSection';
import { AboutSection } from './components/AboutSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { LegalModal } from './components/LegalModal';
import { ChatbotWidget } from './components/ChatbotWidget';
import { CookieBanner } from './components/CookieBanner';
import { SERVICES_DATA } from './data/servicesData';
import { ServiceItem, TabType } from './types';
import {
  Home,
  LayoutGrid,
  Truck,
  Globe2,
  Info,
  Newspaper,
  HelpCircle,
  PhoneCall,
  ArrowRight,
  Sliders,
  Sparkles,
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('inici');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialService, setQuoteInitialService] = useState('Transport Internacional');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'avis' | 'privacitat' | 'cookies' | null>(null);

  // Dark / Light Mode with localStorage persistence
  const [isLightMode, setIsLightMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tw_theme_mode');
      if (saved) return saved === 'light';
    }
    return false; // Default to luxury dark corporate Audi style
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isLightMode) {
      root.classList.add('light');
      localStorage.setItem('tw_theme_mode', 'light');
    } else {
      root.classList.remove('light');
      localStorage.setItem('tw_theme_mode', 'dark');
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode((prev) => !prev);
  };

  // Scroll to top whenever tab changes
  const handleSelectTab = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setQuoteInitialService(serviceName);
    }
    setIsQuoteOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const tabMeta: Record<
    TabType,
    { title: string; subtitle: string; icon: React.FC<{ className?: string }> }
  > = {
    inici: {
      title: 'Inici',
      subtitle: 'Portada corporativa, indicadors KPI en temps real i telemetria en directe',
      icon: Home,
    },
    serveis: {
      title: 'Serveis & Configurador',
      subtitle: 'Catàleg de transport multimodal i configurador interactiu de càrrega',
      icon: LayoutGrid,
    },
    flota: {
      title: 'Flota Premium',
      subtitle: 'Showroom tecnològic de camions elèctrics pesants, pods urbans i drons',
      icon: Truck,
    },
    rutes: {
      title: 'Rutes & Mapa',
      subtitle: 'Mapa satel·lital interactiu amb corredors a Europa, Àsia i Amèrica',
      icon: Globe2,
    },
    'qui-som': {
      title: 'Qui Som',
      subtitle: 'Missió, valors corporatius, seu central a Barcelona i certificacions ISO',
      icon: Info,
    },
    blog: {
      title: 'Blog & Innovació',
      subtitle: 'Articles de recerca sobre descarbonització, telemetria i xarxes verdes',
      icon: Newspaper,
    },
    faqs: {
      title: 'FAQs',
      subtitle: 'Preguntes freqüents amb acordions sobre tarifació, terminis i duanes',
      icon: HelpCircle,
    },
    contacte: {
      title: 'Contacte Directe',
      subtitle: 'Seu central a la Zona Franca, dades oficials i formulari operatiu',
      icon: PhoneCall,
    },
  };

  const allTabs: TabType[] = [
    'inici',
    'serveis',
    'flota',
    'rutes',
    'qui-som',
    'blog',
    'faqs',
    'contacte',
  ];

  return (
    <div
      className={`min-h-screen flex flex-col font-['Plus_Jakarta_Sans',sans-serif] transition-colors duration-300 selection:bg-[#0A3D62] selection:text-white ${
        isLightMode ? 'bg-[#f1f5f9] text-slate-900' : 'bg-[#051929] text-slate-100'
      }`}
    >
      {/* 1. Navbar Superior amb control de pestanyes i Dark/Light toggle */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenQuote={() => handleOpenQuote()}
        isLightMode={isLightMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Area: Pestanyes completament independents */}
      <main className="flex-1 flex flex-col">
        {/* Secondary Tab Navigation Bar (Sticky beneath Navbar for fast tactile switching on desktop and mobile) */}
        <div
          className={`pt-20 border-b transition-colors duration-300 ${
            isLightMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#061b2d] border-slate-800'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between gap-4 overflow-x-auto scrollbar-none py-1">
              {/* Tab Pills Segmented Switcher for all separate sections */}
              <div
                className={`flex items-center gap-1.5 p-1 rounded-xl border shrink-0 ${
                  isLightMode ? 'bg-slate-100 border-slate-300' : 'bg-slate-900/90 border-slate-700/80'
                }`}
              >
                {allTabs.map((tab) => {
                  const meta = tabMeta[tab];
                  const Icon = meta.icon;
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => handleSelectTab(tab)}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'bg-[#0A3D62] text-white shadow-md shadow-cyan-950/50 border border-cyan-400/40'
                          : isLightMode
                          ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                      }`}
                    >
                      <Icon
                        className={`w-3.5 h-3.5 ${
                          isActive
                            ? 'text-cyan-300'
                            : isLightMode
                            ? 'text-slate-500'
                            : 'text-slate-400'
                        }`}
                      />
                      <span>{meta.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Status / Quick Indicator */}
              <div className="hidden lg:flex items-center gap-2 text-xs font-mono shrink-0">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className={isLightMode ? 'text-slate-600' : 'text-slate-400'}>
                  Pestanya activa:{' '}
                  <span className="text-cyan-400 font-bold uppercase">
                    {tabMeta[activeTab].title}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Tab Views (Cadascuna en la seva pròpia pestanya neta i aïllada) */}
        <div className="flex-1 animate-in fade-in duration-300">
          {/* PESTANYA 1: INICI (Hero Portada + Panell de KPI + Telemetria) */}
          {activeTab === 'inici' && (
            <div>
              <HeroSection
                onOpenQuote={() => handleOpenQuote()}
                onNavigateToServices={() => handleSelectTab('serveis')}
              />
              <KpiDashboard isLightMode={isLightMode} />
              <TrackingSection />

              {/* Panell d'accessos directes a totes les altres pestanyes */}
              <div
                className={`py-16 border-t ${
                  isLightMode ? 'bg-slate-50 border-slate-200' : 'bg-[#071f33] border-slate-800'
                }`}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Navega per les pestanyes de la web
                  </div>
                  <h3
                    className={`text-2xl sm:text-3xl font-bold ${
                      isLightMode ? 'text-slate-900' : 'text-white'
                    }`}
                  >
                    Totes les àrees disponibles en pestanyes independents
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => handleSelectTab('serveis')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <LayoutGrid className="w-3.5 h-3.5" />
                      <span>Serveis & Configurador</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectTab('flota')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <Truck className="w-3.5 h-3.5" />
                      <span>Flota Premium</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectTab('rutes')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <Globe2 className="w-3.5 h-3.5" />
                      <span>Rutes Globals</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectTab('qui-som')}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                        isLightMode
                          ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
                          : 'bg-white/5 hover:bg-white/10 text-white border-white/15'
                      }`}
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Qui Som</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectTab('blog')}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                        isLightMode
                          ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
                          : 'bg-white/5 hover:bg-white/10 text-white border-white/15'
                      }`}
                    >
                      <Newspaper className="w-3.5 h-3.5" />
                      <span>Blog</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectTab('faqs')}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                        isLightMode
                          ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
                          : 'bg-white/5 hover:bg-white/10 text-white border-white/15'
                      }`}
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>FAQs</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectTab('contacte')}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                        isLightMode
                          ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
                          : 'bg-white/5 hover:bg-white/10 text-white border-white/15'
                      }`}
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Contacte</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PESTANYA 2: SERVEIS & CONFIGURADOR */}
          {activeTab === 'serveis' && (
            <div className="py-2">
              <ServicesCatalog
                services={SERVICES_DATA}
                onSelectService={handleSelectService}
                onOpenQuoteWithService={(title) => handleOpenQuote(title)}
              />
              <LogisticsConfigurator
                onOpenQuoteWithDetails={(details) => handleOpenQuote(details)}
                isLightMode={isLightMode}
              />
            </div>
          )}

          {/* PESTANYA 3: FLOTA PREMIUM */}
          {activeTab === 'flota' && (
            <div className="py-2">
              <FleetShowcase
                onOpenQuoteWithVehicle={(name) => handleOpenQuote(`Vehicle Flota: ${name}`)}
                isLightMode={isLightMode}
              />
            </div>
          )}

          {/* PESTANYA 4: RUTES & MAPA */}
          {activeTab === 'rutes' && (
            <div className="py-2">
              <GlobalRoutes isLightMode={isLightMode} />
            </div>
          )}

          {/* PESTANYA 5: QUI SOM */}
          {activeTab === 'qui-som' && (
            <div className="py-2">
              <AboutSection />
            </div>
          )}

          {/* PESTANYA 6: BLOG */}
          {activeTab === 'blog' && (
            <div className="py-2">
              <BlogSection isLightMode={isLightMode} />
            </div>
          )}

          {/* PESTANYA 7: FAQS */}
          {activeTab === 'faqs' && (
            <div className="py-2">
              <FaqSection isLightMode={isLightMode} />
            </div>
          )}

          {/* PESTANYA 8: CONTACTE */}
          {activeTab === 'contacte' && (
            <div className="py-2">
              <ContactSection />
            </div>
          )}
        </div>
      </main>

      {/* 6. Footer Corporatiu amb accés a totes les pestanyes i avís explícit que és web educativa */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={quoteInitialService}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuoteWithService={(title) => handleOpenQuote(title)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating Concierge Chatbot Widget */}
      <ChatbotWidget
        onOpenQuote={() => handleOpenQuote()}
        isLightMode={isLightMode}
      />

      {/* Cookie Consent Banner */}
      <CookieBanner
        onOpenCookiesModal={() => setLegalModalType('cookies')}
        isLightMode={isLightMode}
      />
    </div>
  );
}
