import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, ArrowRight, Gauge, Zap, Shield, Cpu } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuoteWithService: (title: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenQuoteWithService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#071f33] text-white rounded-2xl border border-slate-700 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer border border-white/20"
          aria-label="Tancar fitxa tècnica"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image within modal */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071f33] via-transparent to-black/40" />

          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-xs uppercase tracking-widest text-cyan-300 font-mono bg-slate-900/80 px-2.5 py-1 rounded border border-white/10">
              {service.category} · Fitxa Tècnica
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Visió General del Vector
            </h3>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {service.detailedOverview}
            </p>
          </div>

          {/* Operational Metrics Grid */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Mètriques Operatives de Rendiment
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {service.operationalMetrics.map((item) => (
                <div
                  key={item.metric}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80"
                >
                  <div className="text-xs text-slate-400 leading-tight mb-1">{item.metric}</div>
                  <div className="text-2xl font-bold font-mono text-cyan-300 tabular-nums">
                    {item.value} <span className="text-xs text-slate-300 font-sans">{item.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Features */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Capacitats & Enginyeria de Flota
            </h3>
            <ul className="space-y-2.5">
              {service.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications Table */}
          <div className="pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Especificacions Tècniques
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900/50 p-4 rounded-xl border border-slate-800 text-xs">
              {service.specs.map((spec) => (
                <div key={spec.label} className="space-y-1">
                  <span className="text-slate-400">{spec.label}</span>
                  <p className="text-slate-100 font-semibold">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            >
              Tancar
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenQuoteWithService(service.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-lg cursor-pointer"
            >
              <span>Sol·licitar Cotització per aquest Vector</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
