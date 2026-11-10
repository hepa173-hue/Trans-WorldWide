import React from 'react';
import { ServiceItem } from '../types';
import { ArrowRight, ChevronRight, Layers, SlidersHorizontal } from 'lucide-react';

interface ServicesCatalogProps {
  services: ServiceItem[];
  onSelectService: (service: ServiceItem) => void;
  onOpenQuoteWithService: (serviceTitle: string) => void;
}

export const ServicesCatalog: React.FC<ServicesCatalogProps> = ({
  services,
  onSelectService,
  onOpenQuoteWithService,
}) => {
  return (
    <section id="serveis" className="py-24 bg-[#071d2f] text-white relative overflow-hidden">
      {/* Background architectural fine lines */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase mb-3">
              <span>Enginyeria de Transport Global</span>
              <span aria-hidden="true">·</span>
              <span>Catàleg de Serveis</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
              Vectors de mobilitat d’alt rendiment
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Tres solucions d’avantguarda inspirades en la precisió automobilística alemanya per gestionar qualsevol escala logística amb màxima eficiència i transparència.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400 border-l md:border-l border-slate-700/60 pl-4 py-1">
            <div>
              <div className="text-white font-semibold">Configurador de Ruta</div>
              <div>Especificacions tècniques en directe</div>
            </div>
          </div>
        </div>

        {/* 3 Premium Futuristic Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="group relative flex flex-col rounded-xl bg-gradient-to-b from-[#0c283f] to-[#061826] border border-slate-700/70 hover:border-cyan-400/80 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-950/40 overflow-hidden"
            >
              {/* Image Frame with Automotive Studio Vibe */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c283f] via-transparent to-black/30" />

                {/* Vector index & Category */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-200 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                    0{index + 1}
                  </span>
                  <span className="text-[11px] font-medium tracking-wide text-white/90 bg-slate-900/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-cyan-400/90 font-medium mt-1 mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Technical Specs Strip (Automotive spec sheet style) */}
                  <div className="grid grid-cols-2 gap-2.5 py-4 my-2 border-y border-slate-700/60 text-xs">
                    {service.specs.slice(0, 4).map((spec) => (
                      <div key={spec.label} className="flex flex-col">
                        <span className="text-slate-400 text-[11px] font-medium">{spec.label}</span>
                        <span className="text-slate-100 font-semibold truncate">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions: Més Detalls + Cotitzar */}
                <div className="pt-6 mt-4 flex items-center justify-between gap-3 border-t border-slate-800">
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-cyan-300 hover:text-white transition-colors cursor-pointer py-1.5"
                  >
                    <span>Més Detalls</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteWithService(service.title)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-slate-800/80 hover:bg-cyan-600 rounded transition-colors border border-white/10"
                  >
                    <span>Cotitzar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
