import React from 'react';
import { ArrowUp, ShieldAlert } from 'lucide-react';
import { TabType } from '../types';

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
  onOpenLegal: (type: 'avis' | 'privacitat' | 'cookies') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051522] text-slate-400 border-t border-slate-800 relative">
      {/* Student Notice Banner (Mandatory requirement prominently displayed) */}
      <div className="bg-[#0A3D62] text-white py-3 px-4 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-cyan-300 shrink-0" />
            <span className="font-semibold tracking-wide">
              Web de prova generada en l’àmbit estudiantil.
            </span>
          </div>
          <span className="text-cyan-200/90 text-[11px]">
            Projecte acadèmic de disseny web i simulació corporativa per a l’empresa fictícia Trans Worldwide.
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center p-1 shadow-sm">
                <img
                  src="/src/assets/images/logo_icon_only.png"
                  alt="Trans Worldwide Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(6,182,212,0.4)]"
                />
              </div>
              <span className="text-base font-bold tracking-wider uppercase text-white font-['Plus_Jakarta_Sans']">
                Trans Worldwide
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Solucions integrals de transport i logística multimodal d’alta precisió. Disseny futurista, flotes descarbonitzades i connectivitat satel·lital en temps real.
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              HUB GLOBAL BCN · LAT: 41.3851° N · LON: 2.1734° E
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Pestanyes del Lloc
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectTab('inici')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Inici
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectTab('serveis')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Serveis & Configurador
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectTab('flota')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Flota Premium
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectTab('rutes')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Rutes & Mapa
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectTab('qui-som')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Qui Som
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectTab('blog')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Blog & Innovació
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectTab('faqs')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Preguntes Freqüents (FAQs)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectTab('contacte')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Contacte Directe
                </button>
              </li>
            </ul>
          </div>

          {/* Services Quick Mirror */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Vectors de Flota
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectTab('serveis')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Transport Internacional
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectTab('serveis')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Distribució Nacional
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectTab('serveis')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Logística d’Última Milla
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectTab('inici')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Telemetria & Seguiment IOT
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links (Ficticis) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Marc Legal Fictici
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('avis')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Avís Legal
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacitat')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Política de Privacitat
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('cookies')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Política de Cookies
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Educational Indicator */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400 text-center sm:text-left space-y-1">
            <p>
              © {new Date().getFullYear()} Trans Worldwide Logistics. Web de prova generada en l’àmbit estudiantil.
            </p>
            <p className="text-[11px] text-cyan-300 font-medium">
              Nota important: Aquesta és una web educativa creada amb fins formatius i de pràctica de desenvolupament web.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer border border-white/5"
          >
            <span>Tornar a dalt</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
