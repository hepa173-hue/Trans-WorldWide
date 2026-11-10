import React from 'react';
import { ShieldCheck, Cpu, Leaf, Globe2, Award, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Cpu,
      title: 'Precisió Tecnològica',
      description: 'Integrem sistemes predictius d’encaminament dinàmic i sensorització IOT contínua per eliminar retards i optimitzar consums.',
    },
    {
      icon: Leaf,
      title: 'Sostenibilitat Real',
      description: 'Liderem la descarbonització logística amb flotes elèctriques pures, vaixells de propulsió híbrida eòlica i biocombustibles.',
    },
    {
      icon: ShieldCheck,
      title: 'Seguretat & Fiabilitat',
      description: 'Garantim un nivell de servei (SLA) del 99.85% amb traçabilitat integral de temperatura, humitat i integritat biomètrica.',
    },
    {
      icon: Compass,
      title: 'Visió Global Connectada',
      description: 'Connectem més de 140 països a través de nodes multimodals sincronitzats amb plataformes de dades d’accés obert per als clients.',
    },
  ];

  return (
    <section id="qui-som" className="py-24 bg-[#ECECEC] text-[#2C3E50] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#0A3D62] uppercase mb-3">
              <span>Qui Som</span>
              <span aria-hidden="true">·</span>
              <span>Propòsit & Identitat</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A3D62] leading-tight text-balance">
              Redefinim el transport amb enginyeria d’alta gamma
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              <strong className="text-[#0A3D62] font-semibold">Trans Worldwide</strong> és una companyia de transport i logística multimodal d’alta precisió. Inspirant-nos en els estàndards més exigents del disseny i l’enginyeria de l’automoció de luxe, unim flotes modernes, solucions digitals connectades i una infraestructura capil·lar sense emissions.
            </p>
            <p>
              La nostra missió és transformar les cadenes de subministrament globals en circuits intel·ligents, silenciosos i sostenibles, garantint la màxima traçabilitat per a les indústries farmacèutica, aeroespacial, tecnològica i de comerç d’alt valor.
            </p>
          </div>
        </div>

        {/* Corporate Facilities & Fleet Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Headquarters Building Feature */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-300 shadow-lg bg-slate-900 group">
            <div className="aspect-[4/5] sm:aspect-[3/4] lg:h-full relative overflow-hidden">
              <img
                src="/src/assets/images/headquarters_clean.jpg"
                alt="Seu Central i Hub Corporatiu Trans Worldwide a Barcelona"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/95 via-[#0A3D62]/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 inline-block">
                  Seu Central · Barcelona Tech Hub
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  Centre d'Operacions i Intel·ligència Logística
                </h3>
                <p className="text-xs text-slate-200 line-clamp-2">
                  Instal·lacions d'avantguarda amb monitoratge de rutes 24/7, despatx de duanes automatitzat i gestió de flotes connectades.
                </p>
              </div>
            </div>
          </div>

          {/* Connected Fleet & Infrastructure Feature */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-lg bg-slate-900 group">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src="/src/assets/images/fleet_clean.jpg"
                  alt="Flota corporativa de camions d'alta eficiència Trans Worldwide"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/95 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 inline-block">
                    Flota Pròpia · E-Tron & Euro VI-E
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Més de 880 unitats equipades amb aerodinàmica avançada
                  </h3>
                  <p className="text-xs text-slate-200">
                    Capacitat de càrrega homogènia, sensors telemàtics de pressió de càrrega i estacions de recàrrega ràpida pròpies.
                  </p>
                </div>
              </div>
            </div>

            {/* Strategic highlights strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-300/80 shadow-sm">
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Superfície Logística</div>
                <div className="text-2xl font-bold text-[#0A3D62] font-mono mt-1">125.000 <span className="text-xs font-sans text-slate-600">m²</span></div>
                <p className="text-[11px] text-slate-500 mt-0.5">Molls de càrrega intel·ligents</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-300/80 shadow-sm">
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Flota Sostenible</div>
                <div className="text-2xl font-bold text-[#0A3D62] font-mono mt-1">880+ <span className="text-xs font-sans text-slate-600">Vehicles</span></div>
                <p className="text-[11px] text-slate-500 mt-0.5">Pla de transició verda 2030</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-300/80 shadow-sm col-span-2 sm:col-span-1">
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Traçabilitat Satèl·lit</div>
                <div className="text-2xl font-bold text-[#0A3D62] font-mono mt-1">100% <span className="text-xs font-sans text-slate-600">IOT</span></div>
                <p className="text-[11px] text-slate-500 mt-0.5">Control d'integritat cada segon</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Values Cards in clean structured gray / corporate blue palette */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-xl p-7 border border-slate-300/80 shadow-sm hover:shadow-md hover:border-[#0A3D62] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#0A3D62]/5 border border-[#0A3D62]/15 flex items-center justify-center text-[#0A3D62] mb-6 group-hover:bg-[#0A3D62] group-hover:text-white transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-mono text-slate-400 mb-1">Pilar 0{idx + 1}</div>
                  <h3 className="text-lg font-bold text-[#0A3D62] mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Trust Strip */}
        <div className="mt-16 p-8 bg-white rounded-xl border border-slate-300/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-[#0A3D62]">
              Compromís de neutralitat climàtica i certificacions ISO
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Operacions auditades sota les normes ISO 9001 (Qualitat), ISO 14001 (Gestió Ambiental) i ISO 28000 (Seguretat en la Cadena de Subministrament).
            </p>
          </div>
          <div className="flex items-center gap-6 shrink-0 text-xs font-semibold text-[#0A3D62] uppercase tracking-wider">
            <span className="px-3 py-1.5 rounded bg-slate-100 border border-slate-200">ISO 9001</span>
            <span className="px-3 py-1.5 rounded bg-slate-100 border border-slate-200">ISO 14001</span>
            <span className="px-3 py-1.5 rounded bg-slate-100 border border-slate-200">ISO 28000</span>
          </div>
        </div>
      </div>
    </section>
  );
};
