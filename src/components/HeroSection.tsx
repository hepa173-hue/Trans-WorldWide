import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Globe2, Gauge } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuote: () => void;
  onNavigateToServices?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote, onNavigateToServices }) => {
  return (
    <section id="inici" className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#051929]">
      {/* Background Hero Image with Measured Gradient Scrim for WCAG AA compliance */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/src/assets/images/highway_truck_clean.jpg"
          alt="Camió de flota pesant Trans Worldwide en ruta d’alta eficiència"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer gradient: deep corporate blue scrim and subtle cinematic vignetting */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051929] via-[#051929]/85 to-[#0A3D62]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#051929] via-transparent to-[#051929]/70" />
        {/* Subtle high-tech geometric hairline accent */}
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 max-w-3xl">
            {/* Official Logo Brand Mark Badge without background */}
            <div className="inline-flex items-center gap-3.5 mb-6 p-1.5 pr-4 rounded-full bg-white/5 border border-cyan-400/30 backdrop-blur-md">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center p-1">
                <img
                  src="/src/assets/images/logo_icon_only.png"
                  alt="Trans Worldwide Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(6,182,212,0.6)]"
                />
              </div>
              <div className="flex items-center gap-2 text-xs tracking-[0.2em] text-cyan-300 font-semibold uppercase">
                <span>Trans Worldwide Global 2026</span>
                <span aria-hidden="true" className="text-cyan-400/40">·</span>
                <span>Smart Logistics</span>
              </div>
            </div>

            {/* Headline - clamp-sized, balanced, premium automotive bold/light elegance */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] text-balance mb-6">
              Logística intel·ligent per a un món en moviment
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-10">
              Solucions globals de transport amb tecnologia d’avantguarda. Connexions multimodals, traçabilitat contínua i flotes d’emissió zero per a cadenes de subministrament exigents.
            </p>

            {/* Dual CTAs: Primary & Secondary */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 text-sm font-semibold tracking-wider uppercase text-slate-950 bg-white hover:bg-cyan-50 rounded-md transition-all duration-200 shadow-lg shadow-black/20 hover:shadow-cyan-400/20 active:scale-[0.98] whitespace-nowrap cursor-pointer"
              >
                <span>Demanar Cotització</span>
                <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onNavigateToServices}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wider uppercase text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-md backdrop-blur-sm transition-all duration-200 active:scale-[0.98] whitespace-nowrap cursor-pointer"
              >
                <span>Veure Serveis</span>
              </button>
            </div>
          </div>

          {/* Right Floating Badge / Live Telemetry Highlight Card */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#071f33]/90 border border-cyan-400/30 backdrop-blur-md shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs uppercase tracking-wider text-cyan-300 font-mono font-semibold">
                  Unitat Operativa En Ruta
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  GPS Connectat
                </span>
              </div>

              <div className="relative rounded-xl overflow-hidden aspect-[16/10] border border-white/10">
                <img
                  src="/src/assets/images/fleet_clean.jpg"
                  alt="Terminal de Flota Connectada"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs">
                  <div className="font-semibold text-white">Hub Principal Trans Worldwide</div>
                  <div className="text-[11px] text-slate-300">Terminal de càrrega ràpida Barcelona</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-slate-400 text-[10px] block">Unitats Operatives</span>
                  <span className="text-white font-mono font-bold text-base">880+</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-slate-400 text-[10px] block">CO₂ Evitat Anual</span>
                  <span className="text-emerald-400 font-mono font-bold text-base">-38.4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Column KPI Metrics Strip (Audi-style telemetry bar) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 bg-slate-900/80 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl">
          <div className="space-y-1 pr-4 border-r border-white/10">
            <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Gauge className="w-3.5 h-3.5" />
              <span>Precisió de Lliurament</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
              99.85<span className="text-cyan-400 text-lg">%</span>
            </div>
            <p className="text-xs text-slate-400">SLA certificat per contracte</p>
          </div>

          <div className="space-y-1 px-0 sm:px-4 border-r-0 sm:border-r border-white/10">
            <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Corredors Actius</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
              140<span className="text-cyan-400 text-lg">+</span>
            </div>
            <p className="text-xs text-slate-400">Països i hubs intercontinentals</p>
          </div>

          <div className="space-y-1 pr-4 border-r border-white/10 mt-4 sm:mt-0">
            <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>Flota Descarbonitzada</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
              100<span className="text-cyan-400 text-lg">%</span>
            </div>
            <p className="text-xs text-slate-400">Objectiu 2030 en trànsit actiu</p>
          </div>

          <div className="space-y-1 px-0 sm:px-4 mt-4 sm:mt-0">
            <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Telemetria Bioclimàtica</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
              24<span className="text-cyan-400 text-lg">/7</span>
            </div>
            <p className="text-xs text-slate-400">Sensorització satel·lital en viu</p>
          </div>
        </div>
      </div>
    </section>
  );
};
