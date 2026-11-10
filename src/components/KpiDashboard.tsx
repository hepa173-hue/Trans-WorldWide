import React, { useState, useEffect } from 'react';
import { Timer, Star, CheckCircle, TrendingUp, Activity, BarChart3 } from 'lucide-react';

interface KpiDashboardProps {
  isLightMode?: boolean;
}

export const KpiDashboard: React.FC<KpiDashboardProps> = ({ isLightMode = false }) => {
  // Animated counter state
  const [deliveryHours, setDeliveryHours] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [punctuality, setPunctuality] = useState(0);
  const [monthlyVolume, setMonthlyVolume] = useState(0);

  useEffect(() => {
    // Smooth counter-up animation on mount
    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // Ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setDeliveryHours(Number((18.4 * ease).toFixed(1)));
      setSatisfaction(Number((99.2 * ease).toFixed(1)));
      setPunctuality(Number((99.85 * ease).toFixed(2)));
      setMonthlyVolume(Math.round(48500 * ease));

      if (step >= steps) {
        clearInterval(timer);
        setDeliveryHours(18.4);
        setSatisfaction(99.2);
        setPunctuality(99.85);
        setMonthlyVolume(48500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const kpis = [
    {
      label: 'Temps Mitjà de Lliurament',
      value: `${deliveryHours}`,
      unit: 'h',
      sub: 'Reducció del 34% vs. mitjana del sector',
      icon: Timer,
      trend: '+12.5% velocitat',
      badge: 'SLA Express',
    },
    {
      label: 'Índex de Satisfacció B2B',
      value: `${satisfaction}`,
      unit: '%',
      sub: 'Basat en 1.840 auditories corporatives',
      icon: Star,
      trend: '4.98 / 5.0 Global',
      badge: 'Excel·lència',
    },
    {
      label: 'Taxa de Puntualitat Garantida',
      value: `${punctuality}`,
      unit: '%',
      sub: 'Compliment de finestres horàries certificades',
      icon: CheckCircle,
      trend: 'Zero incidències crítiques',
      badge: 'Auditada ISO 9001',
    },
    {
      label: 'Volum Mensual de Càrrega',
      value: monthlyVolume.toLocaleString(),
      unit: 't',
      sub: 'Mercaderia mobilitzada en trànsit actiu',
      icon: TrendingUp,
      trend: '+18.2% creixement 2026',
      badge: 'Capacitat Neta',
    },
  ];

  return (
    <section className={`py-20 relative overflow-hidden transition-colors duration-300 ${isLightMode ? 'bg-white text-slate-900 border-b border-slate-200' : 'bg-[#051522] text-white border-b border-slate-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase mb-3">
              <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Panell de KPI en Temps Real</span>
              <span aria-hidden="true">·</span>
              <span>Telemetria Central</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
              Mètriques de rendiment operatiu
            </h2>
            <p className={`mt-3 text-sm sm:text-base ${isLightMode ? 'text-slate-600' : 'text-slate-300'}`}>
              Dades agregades en viu procedents de la xarxa de satèl·lits i centres logístics automatitzats de Trans Worldwide.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono py-2 px-3.5 rounded-lg border bg-black/20 border-slate-700/60 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-bold uppercase">Sincronitzat amb Hubs BCN / RTM</span>
          </div>
        </div>

        {/* 4 Cards Grid with counter-up and hover spotlight / 3D elevation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div
                key={kpi.label}
                className={`group relative rounded-2xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between overflow-hidden cursor-default ${
                  isLightMode
                    ? 'bg-slate-50 border-slate-200 hover:border-[#0A3D62] hover:shadow-slate-200'
                    : 'bg-gradient-to-b from-slate-900/90 to-[#071d2f]/90 border-slate-700/80 hover:border-cyan-400/80 hover:shadow-cyan-950/40'
                }`}
              >
                {/* Spotlight subtle glow background on hover */}
                <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 blur-2xl transition-all duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/40 text-cyan-300 border border-white/10">
                      {kpi.badge}
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-bold font-mono text-cyan-300 tracking-tight tabular-nums mb-1 flex items-baseline gap-1">
                    <span>{kpi.value}</span>
                    <span className="text-base font-sans font-medium text-slate-400">{kpi.unit}</span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                    {kpi.label}
                  </h3>

                  <p className={`text-xs leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                    {kpi.sub}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-emerald-400 font-semibold">{kpi.trend}</span>
                  <span className={isLightMode ? 'text-slate-500' : 'text-slate-400'}>Index #{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
