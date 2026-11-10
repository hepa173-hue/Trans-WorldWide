import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { TabType } from '../types';

interface NavbarProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onOpenQuote: () => void;
  isLightMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenQuote,
  isLightMode,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; tab: TabType }[] = [
    { label: 'Inici', tab: 'inici' },
    { label: 'Serveis', tab: 'serveis' },
    { label: 'Flota', tab: 'flota' },
    { label: 'Rutes', tab: 'rutes' },
    { label: 'Qui Som', tab: 'qui-som' },
    { label: 'Blog', tab: 'blog' },
    { label: 'FAQs', tab: 'faqs' },
    { label: 'Contacte', tab: 'contacte' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isLightMode
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3.5'
            : 'bg-[#0A3D62]/90 backdrop-blur-md shadow-lg border-b border-white/10 py-3.5'
          : isLightMode
          ? 'bg-white/85 backdrop-blur-sm border-b border-slate-200 py-5'
          : 'bg-[#0A3D62]/75 backdrop-blur-sm border-b border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark with official 3D globe emblem */}
          <button
            type="button"
            onClick={() => onSelectTab('inici')}
            className="flex items-center gap-3 tracking-tight group whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            <div className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-transparent border border-cyan-400/30 group-hover:border-cyan-400/80 p-1 transition-all duration-300 shadow-sm group-hover:shadow-cyan-500/20">
              <img
                src="/src/assets/images/logo_icon_only.png"
                alt="Trans Worldwide Logo Oficial"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(6,182,212,0.5)] transform group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold tracking-wider uppercase font-['Plus_Jakarta_Sans'] ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                Trans Worldwide
              </span>
              <span className={`text-[10px] tracking-[0.25em] font-medium uppercase -mt-0.5 ${isLightMode ? 'text-[#0A3D62]' : 'text-cyan-200/80'}`}>
                Smart Logistics
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links as Tab Switchers */}
          <nav className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => {
              const isActive = activeTab === link.tab;
              return (
                <button
                  key={link.tab}
                  type="button"
                  onClick={() => onSelectTab(link.tab)}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors relative py-1 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? isLightMode ? 'text-[#0A3D62] font-bold' : 'text-cyan-300 font-bold'
                      : isLightMode ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-200 ${
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Theme Toggle & Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Dark / Light Toggle */}
            <button
              type="button"
              onClick={onToggleTheme}
              className={`p-2 rounded-lg border transition-all cursor-pointer flex items-center justify-center ${
                isLightMode
                  ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
                  : 'bg-white/10 hover:bg-white/15 border-white/15 text-cyan-300 hover:text-white'
              }`}
              title={isLightMode ? 'Canviar a Mode Fosc' : 'Canviar a Mode Clar'}
              aria-label="Toggle tema fosc / clar"
            >
              {isLightMode ? <Moon className="w-4 h-4 text-[#0A3D62]" /> : <Sun className="w-4 h-4 text-amber-300" />}
            </button>

            <button
              onClick={onOpenQuote}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-white hover:bg-cyan-50 rounded-md transition-all duration-200 shadow-sm hover:shadow-cyan-500/20 active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Demanar Cotització</span>
              <ArrowUpRight className="w-4 h-4 text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile hamburger & theme toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className={`p-2 rounded-md border text-xs cursor-pointer ${
                isLightMode ? 'bg-slate-100 border-slate-300 text-slate-900' : 'bg-white/10 border-white/15 text-cyan-300'
              }`}
              aria-label="Toggle tema"
            >
              {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-300" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md border transition-colors cursor-pointer ${
                isLightMode ? 'text-slate-800 bg-slate-100 border-slate-300' : 'text-slate-200 hover:text-white bg-white/5 border-white/10'
              }`}
              aria-label="Alternar menú de navegació"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className={`xl:hidden border-b px-4 pt-3 pb-6 mt-3 space-y-3 shadow-2xl ${isLightMode ? 'bg-white border-slate-200' : 'bg-[#0A3D62] border-white/15'}`}>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeTab === link.tab;
              return (
                <button
                  key={link.tab}
                  type="button"
                  onClick={() => {
                    onSelectTab(link.tab);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 text-sm font-medium rounded-md text-left transition-colors cursor-pointer ${
                    isActive
                      ? isLightMode
                        ? 'bg-[#0A3D62]/10 text-[#0A3D62] font-bold border-l-2 border-[#0A3D62]'
                        : 'bg-cyan-500/20 text-cyan-300 font-semibold border-l-2 border-cyan-400'
                      : isLightMode
                      ? 'text-slate-700 hover:bg-slate-100'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-white hover:bg-cyan-50 rounded-md transition-colors cursor-pointer"
            >
              <span>Demanar Cotització</span>
              <ArrowUpRight className="w-4 h-4 text-slate-900" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
