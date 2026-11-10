import React, { useState } from 'react';
import { X, Calculator, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Transport Internacional',
}) => {
  const [service, setService] = useState(defaultService);
  const [origin, setOrigin] = useState('Barcelona, Espanya');
  const [destination, setDestination] = useState('Rotterdam, Països Baixos');
  const [weightKg, setWeightKg] = useState('1200');
  const [speedTier, setSpeedTier] = useState<'standard' | 'express'>('standard');
  const [cargoType, setCargoType] = useState('Càrrega Estàndard / Paletitzada');

  const [submitted, setSubmitted] = useState(false);
  const [quoteCode, setQuoteCode] = useState('');

  if (!isOpen) return null;

  // Real-time calculation logic based on inputs
  const numericWeight = parseFloat(weightKg) || 100;
  const baseRatePerKg = service === 'Transport Internacional' ? 1.85 : service === 'Distribució Nacional' ? 0.95 : 1.25;
  const speedMultiplier = speedTier === 'express' ? 1.4 : 1.0;
  const estimatedCost = Math.round(numericWeight * baseRatePerKg * speedMultiplier + 85);
  const estimatedCO2Saved = Math.round(numericWeight * 0.14);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedCode = `TW-QUOTE-${Math.floor(1000 + Math.random() * 9000)}`;
    setQuoteCode(generatedCode);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#071f33] text-white rounded-2xl border border-slate-700 max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Tancar calculador de cotització"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase mb-2">
          <span>Configurador Dinàmic</span>
          <span aria-hidden="true">·</span>
          <span>Trans Worldwide</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Demanar Cotització de Transport
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mb-6">
          Calcula l’estimació instantània del teu transport multimodal segons volum, pes i requisits ecològics.
        </p>

        {submitted ? (
          <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Cotització Pre-assignada amb Èxit
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Hem generat el pressupost estimat de <strong className="text-white font-mono">{estimatedCost.toLocaleString()} €</strong> per al teu enviament des de <em>{origin}</em> fins a <em>{destination}</em>.
            </p>

            <div className="p-4 bg-slate-900/80 border border-slate-700 rounded-xl max-w-sm mx-auto space-y-1">
              <span className="text-xs text-slate-400 uppercase tracking-wider">Codi de Reserva Oficial</span>
              <div className="text-xl font-mono font-bold text-cyan-300">{quoteCode}</div>
              <p className="text-[11px] text-slate-400 mt-1">
                Vàlid durant 14 dies laborables per a qualsevol operació corporativa.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors cursor-pointer"
              >
                Recalcular Cotització
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors cursor-pointer"
              >
                Tancar Finestra
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Service Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Vector de Servei
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-2.5 text-sm bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 text-white"
              >
                <option value="Transport Internacional">Transport Internacional (Corredors Marítims i Aeris)</option>
                <option value="Distribució Nacional">Distribució Nacional (Troncal Elèctrica Peninsular)</option>
                <option value="Logística d’Última Milla">Logística d’Última Milla (Urban Pods Silenciosos)</option>
              </select>
            </div>

            {/* Origin & Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Origen de la Càrrega
                </label>
                <input
                  type="text"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  placeholder="Ciutat o codi postal d'origen"
                  className="w-full px-4 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 text-white font-mono"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Destinació Final
                </label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Ciutat o codi postal de destinació"
                  className="w-full px-4 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 text-white font-mono"
                  required
                />
              </div>
            </div>

            {/* Weight and Cargo Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Pes Brut Estimat (kg)
                </label>
                <input
                  type="number"
                  min="1"
                  max="100000"
                  value={weightKg}
                  onChange={(e) => setWeightKg(e.target.value)}
                  className="w-full px-4 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 text-white font-mono"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Tipologia de Càrrega
                </label>
                <select
                  value={cargoType}
                  onChange={(e) => setCargoType(e.target.value)}
                  className="w-full px-4 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 text-white"
                >
                  <option value="Càrrega Estàndard / Paletitzada">Càrrega Estàndard / Paletitzada</option>
                  <option value="Temperatura Controlada (Fred)">Temperatura Controlada (Fred)</option>
                  <option value="Mercaderia Fràgil d’Alt Valor">Mercaderia Fràgil d’Alt Valor</option>
                  <option value="Càrrega Voluminosa / Industrial">Càrrega Voluminosa / Industrial</option>
                </select>
              </div>
            </div>

            {/* Speed Tier: Segmented Control */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Règim d’Enviament
              </label>
              <div className="grid grid-cols-2 gap-3 p-1 bg-slate-900 rounded-lg border border-slate-800">
                <button
                  type="button"
                  onClick={() => setSpeedTier('standard')}
                  className={`py-2 px-3 text-xs font-medium rounded-md transition-colors cursor-pointer text-center ${
                    speedTier === 'standard'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Standard Eco-Optimitzat
                </button>
                <button
                  type="button"
                  onClick={() => setSpeedTier('express')}
                  className={`py-2 px-3 text-xs font-medium rounded-md transition-colors cursor-pointer text-center ${
                    speedTier === 'express'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Express Urgent Prioritari
                </button>
              </div>
            </div>

            {/* Real-time Calculation Summary Box (Audi Cockpit style) */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                  Estimació Tarifària Neta
                </span>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-300 tabular-nums">
                  ~{estimatedCost.toLocaleString()} <span className="text-sm font-sans text-white">€</span>
                </div>
                <div className="text-xs text-emerald-400 flex items-center gap-1 mt-0.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Estalvi ecològic: ~{estimatedCO2Saved} kg de CO₂ evitats</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-white hover:bg-cyan-50 rounded-lg transition-all duration-200 shadow-md cursor-pointer whitespace-nowrap"
              >
                <span>Generar Oferta Formal</span>
                <ArrowRight className="w-4 h-4 text-slate-900" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
