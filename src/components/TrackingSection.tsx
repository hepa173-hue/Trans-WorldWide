import React, { useState } from 'react';
import { SAMPLE_TRACKINGS } from '../data/trackingData';
import { TrackingData } from '../types';
import { Search, Navigation, Thermometer, Leaf, CheckCircle2, Circle, Clock } from 'lucide-react';

export const TrackingSection: React.FC = () => {
  const [inputCode, setInputCode] = useState('TW-9021-INT');
  const [activeTracking, setActiveTracking] = useState<TrackingData | null>(
    SAMPLE_TRACKINGS['TW-9021-INT']
  );
  const [hasSearched, setHasSearched] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = inputCode.trim().toUpperCase();
    if (SAMPLE_TRACKINGS[cleanCode]) {
      setActiveTracking(SAMPLE_TRACKINGS[cleanCode]);
      setHasSearched(true);
    } else {
      // Generate a dynamic tracking view for any custom code entered
      setActiveTracking({
        code: cleanCode || 'TW-CUSTOM',
        status: 'En trànsit',
        origin: 'Port Tecnològic de Barcelona (ES)',
        destination: 'Hub Internacional Frankfurt (DE)',
        service: 'Transport Express Multimodal Trans Worldwide',
        eta: 'En 36 hores',
        temperature: '+3.8 °C (Temperatura nominal)',
        carbonSaved: '94.5 kg CO₂ estalviats',
        steps: [
          {
            title: 'Expedició registrada a la plataforma TW Cloud',
            location: 'Barcelona Terminal 1',
            time: 'Avui, 08:30',
            completed: true,
          },
          {
            title: 'Verificació automàtica de càrrega i sensors IOT',
            location: 'Hub Zero Emissions',
            time: 'Avui, 10:15',
            completed: true,
          },
          {
            title: 'Trànsit multimodal troncal d’alta velocitat',
            location: 'Corredor Mediterrani',
            time: 'En curs',
            completed: true,
          },
          {
            title: 'Lliurament programat',
            location: 'Destinació final',
            time: 'Demà, 18:00',
            completed: false,
          },
        ],
      });
      setHasSearched(true);
    }
  };

  return (
    <section className="py-20 bg-[#051522] text-white relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase mb-2">
            <span>Telemetria en Temps Real</span>
            <span aria-hidden="true">·</span>
            <span>MMI Logistics Interface</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Seguiment de comandes i flotes
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Introdueix el teu codi d’expedició per consultar la telemetria climàtica, l’estat cinètic i la reducció d’emissions del teu enviament.
          </p>

          {/* Preset Buttons for Quick Demo */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-slate-400">
            <span>Codis de demostració:</span>
            {Object.keys(SAMPLE_TRACKINGS).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => {
                  setInputCode(code);
                  setActiveTracking(SAMPLE_TRACKINGS[code]);
                  setHasSearched(true);
                }}
                className={`px-2.5 py-1 rounded font-mono text-xs transition-colors border ${
                  activeTracking?.code === code
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400'
                    : 'bg-slate-800/60 text-slate-300 border-slate-700 hover:border-slate-500'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row items-center gap-2 p-1.5 bg-[#0a2336] rounded-xl border border-slate-700 shadow-xl">
            <div className="flex items-center gap-3 px-3 w-full">
              <Search className="w-5 h-5 text-cyan-400 shrink-0" />
              <input
                type="text"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="Exemple: TW-9021-INT, TW-4482-NAC..."
                className="w-full bg-transparent text-white placeholder-slate-400 text-sm font-mono focus:outline-none py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              Consultar Telemetria
            </button>
          </div>
        </form>

        {/* Tracking Console Screen (Audi MMI style) */}
        {hasSearched && activeTracking && (
          <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#092235] to-[#061826] rounded-xl border border-slate-700/80 shadow-2xl p-6 sm:p-8">
            {/* Top Bar of Console */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-white tracking-wide">
                    {activeTracking.code}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    {activeTracking.status}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">{activeTracking.service}</p>
              </div>

              <div className="text-left sm:text-right">
                <div className="text-xs text-slate-400 uppercase tracking-wider">Arribada Estimada (ETA)</div>
                <div className="text-lg font-bold text-cyan-300 font-mono mt-0.5">{activeTracking.eta}</div>
              </div>
            </div>

            {/* Origin & Destination Route */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 border-b border-slate-800">
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Punt d’Origen</span>
                <p className="text-sm font-medium text-slate-200">{activeTracking.origin}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Destinació Final</span>
                <p className="text-sm font-medium text-slate-200">{activeTracking.destination}</p>
              </div>
            </div>

            {/* Environmental & Cold Chain Telemetry */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 border-b border-slate-800 bg-slate-900/40 rounded-lg px-4 my-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-cyan-950/60 border border-cyan-800 text-cyan-400">
                  <Thermometer className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Control Térmic IOT</div>
                  <div className="text-sm font-semibold text-slate-100 font-mono">{activeTracking.temperature}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-emerald-950/60 border border-emerald-800 text-emerald-400">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Petjada Ecològica Estalviada</div>
                  <div className="text-sm font-semibold text-emerald-300 font-mono">{activeTracking.carbonSaved}</div>
                </div>
              </div>
            </div>

            {/* Tracking Milestones Timeline */}
            <div className="pt-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-5">
                Seqüència de Trànsit Operativa
              </h4>

              <div className="space-y-6">
                {activeTracking.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-0.5">
                      {step.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className={`text-sm font-semibold ${step.completed ? 'text-white' : 'text-slate-400'}`}>
                          {step.title}
                        </span>
                        <span className="text-xs font-mono text-slate-400">{step.time}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{step.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
