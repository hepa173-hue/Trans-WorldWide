import React, { useState } from 'react';
import { Sliders, Zap, ShieldCheck, Thermometer, Clock, ArrowRight, Check, Sparkles, Box } from 'lucide-react';

interface LogisticsConfiguratorProps {
  onOpenQuoteWithDetails: (configSummary: string) => void;
  isLightMode?: boolean;
}

export const LogisticsConfigurator: React.FC<LogisticsConfiguratorProps> = ({
  onOpenQuoteWithDetails,
  isLightMode = false,
}) => {
  const [serviceType, setServiceType] = useState<'internacional' | 'nacional' | 'ultima_milla'>('internacional');
  const [deliverySpeed, setDeliverySpeed] = useState<'standard' | 'expres'>('expres');
  const [cargoType, setCargoType] = useState<'general' | 'refrigerada' | 'fragil'>('refrigerada');
  const [advancedTracking, setAdvancedTracking] = useState<boolean>(true);
  const [weightKg, setWeightKg] = useState<number>(2400);

  // Dynamic calculations based on interactive configuration
  const baseCost = serviceType === 'internacional' ? 1450 : serviceType === 'nacional' ? 580 : 160;
  const speedMultiplier = deliverySpeed === 'expres' ? 1.45 : 1.0;
  const cargoMultiplier = cargoType === 'refrigerada' ? 1.35 : cargoType === 'fragil' ? 1.25 : 1.0;
  const trackingAddon = advancedTracking ? 45 : 0;
  const weightFactor = (weightKg / 1000) * (serviceType === 'internacional' ? 110 : 65);

  const totalEstimate = Math.round((baseCost * speedMultiplier * cargoMultiplier) + trackingAddon + weightFactor);
  const estimatedHours = serviceType === 'internacional' 
    ? (deliverySpeed === 'expres' ? '48 - 72 h' : '5 - 7 dies')
    : serviceType === 'nacional'
    ? (deliverySpeed === 'expres' ? '< 12 h (Nocturn)' : '24 h')
    : (deliverySpeed === 'expres' ? '45 - 60 min' : '2 - 3 h');

  const co2Reduction = serviceType === 'internacional' ? '38%' : serviceType === 'nacional' ? '62%' : '100%';

  const handleRequestQuote = () => {
    const summary = `${serviceType.toUpperCase()} | ${deliverySpeed.toUpperCase()} | Càrrega: ${cargoType.toUpperCase()} | Pes: ${weightKg}kg | Telemetria: ${advancedTracking ? 'SÍ' : 'NO'} | Est: ~${totalEstimate}€`;
    onOpenQuoteWithDetails(summary);
  };

  return (
    <section className={`py-20 relative overflow-hidden transition-colors duration-300 ${isLightMode ? 'bg-slate-50 text-slate-900 border-b border-slate-200' : 'bg-[#061826] text-white border-b border-slate-800'}`}>
      {/* Background cyber grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase mb-3">
            <Sliders className="w-4 h-4" />
            <span>Configurador Dinàmic de Servei</span>
            <span aria-hidden="true">·</span>
            <span>MMI Tech Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Personalitza la teva solució de transport
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${isLightMode ? 'text-slate-600' : 'text-slate-300'}`}>
            Ajusta en temps real les variables de la teva cadena logística: tipus de vector, règim de temps, control tèrmic i telemetria satel·lital.
          </p>
        </div>

        {/* 2-Column Split: Configurator Controls on Left, Live Audi-style Cockpit Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className={`lg:col-span-7 rounded-2xl p-6 sm:p-8 border shadow-xl backdrop-blur-md space-y-7 ${isLightMode ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-700/80'}`}>
            {/* Step 1: Tipus de Servei */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                1. Tipologia de Vector Logístic
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'internacional', label: 'Internacional', sub: 'Multimodal aeri & marítim' },
                  { id: 'nacional', label: 'Nacional', sub: 'Corredor elèctric peninsular' },
                  { id: 'ultima_milla', label: 'Última Milla', sub: 'Micro-hubs & pods urbans' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setServiceType(s.id as any)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden group ${
                      serviceType === s.id
                        ? isLightMode
                          ? 'border-[#0A3D62] bg-[#0A3D62]/5 ring-2 ring-[#0A3D62]'
                          : 'border-cyan-400 bg-cyan-950/40 ring-1 ring-cyan-400 shadow-lg shadow-cyan-950/50'
                        : isLightMode
                        ? 'border-slate-200 hover:border-slate-300 bg-slate-50'
                        : 'border-slate-800 hover:border-slate-700 bg-slate-950/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm">{s.label}</span>
                      {serviceType === s.id && (
                        <div className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </div>
                    <span className={`text-[11px] block leading-tight ${isLightMode ? 'text-slate-500' : 'text-slate-400'}`}>
                      {s.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Delivery Speed Toggle */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                2. Règim de Velocitat de Lliurament
              </label>
              <div className="grid grid-cols-2 gap-3 p-1.5 rounded-xl border bg-black/20 border-slate-700/50">
                <button
                  type="button"
                  onClick={() => setDeliverySpeed('standard')}
                  className={`py-3 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    deliverySpeed === 'standard'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-sm'
                      : isLightMode ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Clock className="w-4 h-4" />
                  <span>Estàndard Eco</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeliverySpeed('expres')}
                  className={`py-3 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    deliverySpeed === 'expres'
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                      : isLightMode ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  <span>Exprés Prioritari</span>
                </button>
              </div>
            </div>

            {/* Step 3: Cargo Type Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                3. Tipologia de Càrrega i Requisits Especials
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'general', label: 'General / Industrial', icon: Box, desc: 'Paletitzat estàndard' },
                  { id: 'refrigerada', label: 'Refrigerada / Farmàcia', icon: Thermometer, desc: 'IOT -20°C a +15°C' },
                  { id: 'fragil', label: 'Fràgil / Alt Valor', icon: ShieldCheck, desc: 'Amortiment cinètic' },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setCargoType(c.id as any)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        cargoType === c.id
                          ? isLightMode
                            ? 'border-[#0A3D62] bg-[#0A3D62]/5 font-semibold ring-1 ring-[#0A3D62]'
                            : 'border-cyan-400 bg-cyan-950/40 text-cyan-200 ring-1 ring-cyan-400'
                          : isLightMode
                          ? 'border-slate-200 hover:border-slate-300'
                          : 'border-slate-800 hover:border-slate-700 bg-slate-950/40'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-bold">{c.label}</span>
                      </div>
                      <span className={`text-[10px] block ${isLightMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        {c.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Weight Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  4. Pes de la Càrrega (kg)
                </label>
                <span className="font-mono text-sm font-bold text-cyan-300">
                  {weightKg.toLocaleString()} kg
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="25000"
                step="100"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className={`flex justify-between text-[10px] font-mono mt-1 ${isLightMode ? 'text-slate-500' : 'text-slate-400'}`}>
                <span>100 kg</span>
                <span>10.000 kg</span>
                <span>25.000 kg</span>
              </div>
            </div>

            {/* Step 5: Advanced Tracking Toggle */}
            <div className={`flex items-center justify-between p-4 rounded-xl border ${isLightMode ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/60 border-slate-800'}`}>
              <div className="space-y-0.5 pr-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Seguiment Avançat Satel·lital & IOT</span>
                </div>
                <p className={`text-xs ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                  Monitoratge per segon de vibracions, temperatura, humitat i obertura biomètrica de portes.
                </p>
              </div>

              {/* Futuristic Switch Toggle */}
              <button
                type="button"
                onClick={() => setAdvancedTracking(!advancedTracking)}
                className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 cursor-pointer relative shrink-0 ${
                  advancedTracking ? 'bg-cyan-500 shadow-md shadow-cyan-500/40' : 'bg-slate-700'
                }`}
                aria-label="Toggle seguiment avançat"
              >
                <div
                  className={`w-6 h-6 rounded-full bg-slate-950 shadow-md transform transition-transform duration-300 ${
                    advancedTracking ? 'translate-x-6' : 'translate-x-0'
                  } flex items-center justify-center`}
                >
                  <div className={`w-2 h-2 rounded-full ${advancedTracking ? 'bg-cyan-300' : 'bg-slate-400'}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Live Cockpit "Servei Configurat" Preview (Audi MMI style) */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`rounded-2xl p-6 sm:p-7 border shadow-2xl relative overflow-hidden backdrop-blur-md ${isLightMode ? 'bg-gradient-to-b from-white to-slate-100 border-slate-300' : 'bg-gradient-to-b from-[#092235] to-[#04131f] border-cyan-500/40'}`}>
              {/* Cockpit ambient top accent glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="text-xs uppercase tracking-widest font-mono text-cyan-300 font-bold">
                    Vista Prèvia · Servei Configurat
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  LIVE CALC
                </span>
              </div>

              {/* Spec Rows */}
              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                  <span className={isLightMode ? 'text-slate-500' : 'text-slate-400'}>Vector Principal</span>
                  <span className="font-bold uppercase tracking-wider text-cyan-300">
                    {serviceType.replace('_', ' ')}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                  <span className={isLightMode ? 'text-slate-500' : 'text-slate-400'}>Finestra d'Entrega</span>
                  <span className="font-mono font-bold">{estimatedHours}</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                  <span className={isLightMode ? 'text-slate-500' : 'text-slate-400'}>Modalitat de Càrrega</span>
                  <span className="font-semibold uppercase">{cargoType}</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                  <span className={isLightMode ? 'text-slate-500' : 'text-slate-400'}>Massa Total</span>
                  <span className="font-mono font-bold">{weightKg.toLocaleString()} kg</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                  <span className={isLightMode ? 'text-slate-500' : 'text-slate-400'}>Telemetria IOT</span>
                  <span className={`font-semibold ${advancedTracking ? 'text-emerald-400' : 'text-slate-500'}`}>
                    {advancedTracking ? 'Activa (Canal 24/7)' : 'Bàsica'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1.5">
                  <span className={isLightMode ? 'text-slate-500' : 'text-slate-400'}>Emissions Evitades</span>
                  <span className="font-mono font-bold text-emerald-400">-{co2Reduction} CO₂</span>
                </div>
              </div>

              {/* Price & CTA Block with Neon Pulse effect */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                <div>
                  <span className={`text-[11px] uppercase tracking-wider block ${isLightMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    Tarifa Estimada Personalitzada
                  </span>
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-cyan-300 tabular-nums mt-1">
                    ~{totalEstimate.toLocaleString()} <span className="text-base font-sans text-white">€</span>
                  </div>
                  <p className={`text-[11px] mt-1 ${isLightMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    Preu orientatiu sense IVA subjecte a auditoria dimensional i inspecció duanera.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleRequestQuote}
                  className="w-full group inline-flex items-center justify-center gap-3 px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-white hover:to-cyan-100 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 active:scale-[0.98] cursor-pointer animate-neon-pulse"
                >
                  <span>Sol·licitar Cotització Personalitzada</span>
                  <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
