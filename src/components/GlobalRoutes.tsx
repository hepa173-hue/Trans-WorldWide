import React, { useState } from 'react';
import { Globe2, Navigation, MapPin, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

interface RouteItem {
  id: string;
  name: string;
  region: 'Europa' | 'Àsia' | 'Amèrica';
  transitTime: string;
  frequency: string;
  mode: string;
  co2Savings: string;
  hubs: string[];
  description: string;
  pathCoordinates: string;
}

const ROUTES_DATA: RouteItem[] = [
  {
    id: 'corredor-mediterrani-nordic',
    name: 'Corredor Transeuropeu Blau',
    region: 'Europa',
    transitTime: '18 - 24 hores',
    frequency: 'Sortides diàries cada 2 hores',
    mode: 'Electrificat Troncal + H₂ Verd',
    co2Savings: '-58% vs. gasoil clàssic',
    hubs: ['Barcelona (Zona Franca)', 'Lió Hyper-Hub', 'Frankfurt Terminal 3', 'Rotterdam Port'],
    description: 'Connexió troncal d’alta velocitat que uneix la península ibèrica amb el cor industrial d’Alemanya i els Països Baixos mitjançant combois elèctrics de megawatt charging.',
    pathCoordinates: 'M 400 360 Q 420 310 460 270 T 520 210',
  },
  {
    id: 'corredor-pacific-asia',
    name: 'Corredor Transpacífic Seda Digital',
    region: 'Àsia',
    transitTime: '3.5 dies (Aeri) / 11 dies (Marítim)',
    frequency: '4 vols xàrter setmanals / 2 vaixells eòlics',
    mode: 'Vaixell Híbrid Veles Rígides + Càrrega Aèria Directa',
    co2Savings: '-42% d’empremta marítima',
    hubs: ['Port de Barcelona', 'Dubai Gateway Air', 'Singapur Hub Marítim', 'Shanghai Tech Zone'],
    description: 'Enllaç marítim i aeri ultraràpid per a càrrega d’alta tecnologia i semiconductors, optimitzat per models d’intel·ligència artificial cinètica marina.',
    pathCoordinates: 'M 420 360 Q 600 390 750 420 T 880 340',
  },
  {
    id: 'corredor-transatlantic-america',
    name: 'Corredor Transatlàntic Express',
    region: 'Amèrica',
    transitTime: '24 - 48 hores porta a porta',
    frequency: '5 freqüències setmanals',
    mode: 'Aeronaval Sincronitzat + Distribució Interestatal',
    co2Savings: '-34% d’emissions logístiques',
    hubs: ['Barcelona Terminal T1', 'Hub Atlàntic Açores', 'Nova York JFK Logistics', 'Miami Gateway Hub'],
    description: 'Via transatlàntica prioritari per a trameses farmacèutiques sensibles a la temperatura amb traçabilitat contínua per satèl·lit i duanes anticipades.',
    pathCoordinates: 'M 390 350 Q 260 320 180 330 T 120 380',
  },
];

interface GlobalRoutesProps {
  isLightMode?: boolean;
}

export const GlobalRoutes: React.FC<GlobalRoutesProps> = ({ isLightMode = false }) => {
  const [activeRegion, setActiveRegion] = useState<'Europa' | 'Àsia' | 'Amèrica'>('Europa');
  const [selectedRoute, setSelectedRoute] = useState<RouteItem>(ROUTES_DATA[0]);

  const handleSelectRoute = (route: RouteItem) => {
    setSelectedRoute(route);
    setActiveRegion(route.region);
  };

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${isLightMode ? 'bg-slate-50 text-slate-900 border-b border-slate-200' : 'bg-[#051522] text-white border-b border-slate-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase mb-3">
              <Globe2 className="w-4 h-4 text-cyan-400" />
              <span>Xarxa de Rutes Globals</span>
              <span aria-hidden="true">·</span>
              <span>Corredors Intercontinentals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Mobilitat connectada a escala planetària
            </h2>
            <p className={`mt-4 text-base sm:text-lg leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-slate-300'}`}>
              Connectem els tres grans eixos del comerç mundial amb rutes predictives i control d’emissions garantit per contracte.
            </p>
          </div>

          {/* Region Tabs Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl border bg-black/20 border-slate-700/60 shrink-0">
            {(['Europa', 'Àsia', 'Amèrica'] as const).map((reg) => (
              <button
                key={reg}
                type="button"
                onClick={() => {
                  setActiveRegion(reg);
                  const matching = ROUTES_DATA.find((r) => r.region === reg);
                  if (matching) setSelectedRoute(matching);
                }}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeRegion === reg
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                    : isLightMode ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive World Map & Route Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Futuristic Map Canvas (Placeholder stylisé cyber-vectoriel) */}
          <div className={`lg:col-span-7 rounded-2xl p-6 sm:p-8 border shadow-xl relative overflow-hidden flex flex-col justify-between ${isLightMode ? 'bg-white border-slate-300' : 'bg-gradient-to-b from-[#082236] to-[#04121d] border-slate-700/80'}`}>
            <div className="flex items-center justify-between pb-3 border-b border-white/10 z-10">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                  Visualitzador Satel·lital de Corredors
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                TRAÇABILITAT ACTIVA
              </span>
            </div>

            {/* Futuristic Vector Map Representation with SVG Routes */}
            <div className="relative my-6 aspect-[16/9] w-full flex items-center justify-center">
              <svg viewBox="0 0 1000 500" className="w-full h-full text-slate-700 opacity-60">
                <defs>
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
                    <stop offset="100%" stopColor="#0A3D62" stopOpacity="0.8" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Simplified Continents Contours (Clean Cyber Blueprint) */}
                {/* North America */}
                <path d="M 120 120 Q 200 100 240 180 T 180 320 Q 150 360 120 400 Z" fill="currentColor" opacity="0.25" />
                {/* South America */}
                <path d="M 230 330 Q 300 370 280 460 T 230 490 Z" fill="currentColor" opacity="0.2" />
                {/* Europe */}
                <path d="M 420 140 Q 520 130 540 220 T 440 280 Q 400 290 390 250 Z" fill="currentColor" opacity="0.35" />
                {/* Africa */}
                <path d="M 420 280 Q 530 290 520 440 T 430 470 Z" fill="currentColor" opacity="0.2" />
                {/* Asia */}
                <path d="M 540 130 Q 820 120 860 260 T 720 390 Q 640 370 560 300 Z" fill="currentColor" opacity="0.3" />
                {/* Oceania */}
                <path d="M 780 390 Q 890 380 870 470 T 790 460 Z" fill="currentColor" opacity="0.2" />

                {/* Animated Connection Lines for active routes */}
                {ROUTES_DATA.map((r) => {
                  const isSelected = selectedRoute.id === r.id;
                  return (
                    <g key={r.id}>
                      <path
                        d={r.pathCoordinates}
                        fill="none"
                        stroke={isSelected ? 'url(#routeGradient)' : '#334155'}
                        strokeWidth={isSelected ? '3.5' : '1.5'}
                        strokeDasharray={isSelected ? '8 4' : '4 4'}
                        filter={isSelected ? 'url(#glow)' : undefined}
                        className={isSelected ? 'animate-pulse' : ''}
                      />
                    </g>
                  );
                })}

                {/* Hub Node Markers */}
                {/* Barcelona Central Hub */}
                <circle cx="410" cy="265" r="7" fill="#06b6d4" className="animate-ping opacity-75" />
                <circle cx="410" cy="265" r="5" fill="#38bdf8" />
                <text x="415" y="255" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="monospace">BCN HUB</text>

                {/* Frankfurt */}
                <circle cx="465" cy="210" r="4" fill="#ffffff" />
                {/* Rotterdam */}
                <circle cx="445" cy="195" r="4" fill="#ffffff" />
                {/* New York */}
                <circle cx="210" cy="220" r="4" fill="#ffffff" />
                {/* Shanghai */}
                <circle cx="810" cy="270" r="4" fill="#ffffff" />
                {/* Dubai */}
                <circle cx="590" cy="290" r="4" fill="#ffffff" />
              </svg>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10 text-xs font-mono">
              <span className="text-cyan-300">
                Punt Neuràlgic: <strong className="text-white">Port Tecnològic de Barcelona</strong>
              </span>
              <span className="text-slate-400">Lat: 41.3851° N · Long: 2.1734° E</span>
            </div>
          </div>

          {/* Route Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {ROUTES_DATA.map((route) => {
              const isSelected = selectedRoute.id === route.id;
              return (
                <div
                  key={route.id}
                  onClick={() => handleSelectRoute(route)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? isLightMode
                        ? 'bg-white border-[#0A3D62] shadow-xl ring-2 ring-[#0A3D62]/40'
                        : 'bg-gradient-to-r from-cyan-950/40 to-[#071f33] border-cyan-400 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-400'
                      : isLightMode
                      ? 'bg-slate-100 hover:bg-white border-slate-200'
                      : 'bg-slate-900/60 hover:bg-slate-800/80 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/40 text-cyan-300 border border-white/10">
                      {route.region}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {route.transitTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1.5 flex items-center justify-between">
                    <span>{route.name}</span>
                    {isSelected && <ArrowRight className="w-4 h-4 text-cyan-400" />}
                  </h3>

                  <p className={`text-xs mb-3 leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-slate-300'}`}>
                    {route.description}
                  </p>

                  <div className="space-y-1.5 text-[11px] pt-3 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className={isLightMode ? 'text-slate-600' : 'text-slate-300'}>
                        Freqüència: <strong className="text-white">{route.frequency}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="text-emerald-400 font-semibold">{route.co2Savings}</span>
                    </div>
                  </div>

                  {/* Hubs pill list */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-2">
                    {route.hubs.map((hub) => (
                      <span
                        key={hub}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/30 text-slate-300 border border-white/5"
                      >
                        {hub}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
