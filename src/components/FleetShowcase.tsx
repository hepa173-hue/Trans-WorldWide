import React, { useState } from 'react';
import { Truck, Shield, Zap, Gauge, ChevronRight, X, ArrowRight, BatteryCharging, Wind } from 'lucide-react';

export interface FleetVehicle {
  id: string;
  name: string;
  category: 'Camió Pesant' | 'Furgoneta Urbana' | 'Dron de Càrrega';
  tagline: string;
  image: string;
  specs: {
    capacity: string;
    range: string;
    speed: string;
    power: string;
  };
  features: string[];
  description: string;
}

const FLEET_DATA: FleetVehicle[] = [
  {
    id: 'e-tron-hauler',
    name: 'TW E-Tron Hauler X1',
    category: 'Camió Pesant',
    tagline: 'Transport pesant d’emissió zero per a corredors troncals intercontinentals',
    image: '/src/assets/images/fleet_electric_truck_1793896736442.jpg',
    specs: {
      capacity: '44 Tonelades (33 Palets)',
      range: '820 km (Megawatt Charging)',
      speed: '90 km/h (Autolimitada)',
      power: '750 kW (1.020 CV elèctrics)',
    },
    features: [
      'Cabina aerodinàmica de coeficient Cx 0.22 inspirada en superesportius.',
      'Megawatt Charging System (MCS): recàrrega de 20% a 80% en només 28 minuts.',
      'Conducció assistida N3 amb visió nocturna LIDAR per a rutes sense incidències.',
      'Sensorització de pes dinàmic per eix amb equilibri automàtic de suspensió pneumàtica.',
    ],
    description: 'El buc insígnia de la flota de carretera de Trans Worldwide. Dissenyat amb arquitectura elèctrica de 800V per garantir el màxim rendiment en autopistes sense generar cap gram d’emissió directa.',
  },
  {
    id: 'cyberlogic-van',
    name: 'CyberLogic Urban Pod',
    category: 'Furgoneta Urbana',
    tagline: 'Mobilitat urbana capil·lar d’alta eficiència per a centres històrics i zones ZBE',
    image: '/src/assets/images/fleet_urban_van_1793896736916.jpg',
    specs: {
      capacity: '1.800 kg / 12 m³ de volum',
      range: '380 km urbans',
      speed: '80 km/h màxima',
      power: '150 kW síncron permanent',
    },
    features: [
      'Radis de gir ultracompacte per maniobrar en carrers estrets i zones perimetrals.',
      'Compartiment interior modular amb prestatgeries robotitzades i refrigeració dual.',
      'Signatura lluminosa LED de seguretat per a vianants i funcionament 100% silenciós (< 42 dB).',
      'Portes corredisses automàtiques amb reconeixement de proximitat de l’operador.',
    ],
    description: 'La furgoneta elèctrica que reuneix l’estil minimalista i l’eficiència d’un vehicle premium de darrera fornada, adaptada per a les entregues de darrer quilòmetre més exigents.',
  },
  {
    id: 'aether-cargo-drone',
    name: 'Aether Cargo Drone V4',
    category: 'Dron de Càrrega',
    tagline: 'Vol autònom d’emergència per a mostres biomèdiques i recanvis industrials crítics',
    image: '/src/assets/images/fleet_cargo_drone_1793896737464.jpg',
    specs: {
      capacity: '120 kg de càrrega neta',
      range: '160 km d’abast de vol',
      speed: '140 km/h de creuer',
      power: '8 rotors coaxials de carboni',
    },
    features: [
      'Càpsula estanca refrigerada de grau clínic amb bateria independent.',
      'Navegació satel·lital multiconstel·lació redundada amb sistemes anticol·lisió IA.',
      'Aterratge i lliurament vertical de precisió centimètrica sobre plataformes TW Hub.',
      'Capacitat operativa en condicions meteorològiques de vent de fins a 65 km/h.',
    ],
    description: 'El nostre vector aeri no tripulat connecta terminals marítimes, laboratoris i centres de producció de forma instantània, esquivant qualsevol congestió de trànsit terrestre.',
  },
];

interface FleetShowcaseProps {
  onOpenQuoteWithVehicle?: (vehicleName: string) => void;
  isLightMode?: boolean;
}

export const FleetShowcase: React.FC<FleetShowcaseProps> = ({
  onOpenQuoteWithVehicle,
  isLightMode = false,
}) => {
  const [selectedVehicle, setSelectedVehicle] = useState<FleetVehicle | null>(null);

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${isLightMode ? 'bg-slate-100 text-slate-900 border-b border-slate-200' : 'bg-[#071d2f] text-white border-b border-slate-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase mb-3">
              <Truck className="w-4 h-4 text-cyan-400" />
              <span>Flota Tecnològica Premium</span>
              <span aria-hidden="true">·</span>
              <span>Enginyeria d’Avantguarda</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Vehicles inspirats en l’alta automoció
            </h2>
            <p className={`mt-4 text-base sm:text-lg leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-slate-300'}`}>
              Una gamma de màquines elèctriques, aerodinàmiques i connectades pensades per establir nous estàndards de velocitat, autonomia i respecte pel planeta.
            </p>
          </div>

          <div className="text-xs font-mono text-cyan-300 border-l border-cyan-500/40 pl-4 py-1">
            <span>ZERO EMISSIONS DIRECTES</span>
            <div className="text-slate-400 font-sans text-[11px]">Flota pròpia de nova generació</div>
          </div>
        </div>

        {/* 3 Premium Vehicle Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FLEET_DATA.map((vehicle, idx) => (
            <article
              key={vehicle.id}
              className={`group relative rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden flex flex-col justify-between ${
                isLightMode
                  ? 'bg-white border-slate-300 hover:border-[#0A3D62] hover:shadow-slate-300'
                  : 'bg-gradient-to-b from-[#0c283f] to-[#061826] border-slate-700 hover:border-cyan-400 hover:shadow-cyan-950/60'
              }`}
            >
              {/* Spotlight top rim light */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Vehicle Image Frame */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-950">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c283f] via-transparent to-black/30" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-200 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                    Model 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-medium tracking-wide text-white/95 bg-[#0A3D62]/80 backdrop-blur-md px-2.5 py-1 rounded border border-cyan-400/30">
                    {vehicle.category}
                  </span>
                </div>
              </div>

              {/* Vehicle Body Info */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    {vehicle.name}
                  </h3>
                  <p className="text-xs text-cyan-400 font-medium mt-1 mb-3">
                    {vehicle.tagline}
                  </p>
                  <p className={`text-xs leading-relaxed mb-6 line-clamp-2 ${isLightMode ? 'text-slate-600' : 'text-slate-300'}`}>
                    {vehicle.description}
                  </p>

                  {/* Technical Specs Strip (Car Brochure style) */}
                  <div className="grid grid-cols-2 gap-2.5 py-3 border-y border-slate-700/60 text-xs">
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase tracking-wider block">Capacitat</span>
                      <span className="text-white font-semibold font-mono">{vehicle.specs.capacity}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase tracking-wider block">Autonomia</span>
                      <span className="text-cyan-300 font-semibold font-mono">{vehicle.specs.range}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase tracking-wider block">Velocitat de Creuer</span>
                      <span className="text-white font-semibold font-mono">{vehicle.specs.speed}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase tracking-wider block">Propulsió Neta</span>
                      <span className="text-white font-semibold font-mono">{vehicle.specs.power}</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-6 mt-4 flex items-center justify-between gap-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setSelectedVehicle(vehicle)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-cyan-300 hover:text-white transition-colors cursor-pointer py-1.5"
                  >
                    <span>Veure Detalls</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {onOpenQuoteWithVehicle && (
                    <button
                      type="button"
                      onClick={() => onOpenQuoteWithVehicle(vehicle.name)}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm cursor-pointer"
                    >
                      Reservar Vector
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Vehicle Technical Details Modal */}
      {selectedVehicle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#071f33] text-white rounded-2xl border border-slate-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8">
            <button
              onClick={() => setSelectedVehicle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Tancar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-6 border border-white/10">
              <img
                src={selectedVehicle.image}
                alt={selectedVehicle.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase mb-1">
              <span>{selectedVehicle.category}</span>
              <span aria-hidden="true">·</span>
              <span>Enginyeria Oficial</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedVehicle.name}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedVehicle.description}
            </p>

            {/* Spec Sheet Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-xs mb-6">
              <div>
                <span className="text-slate-400 text-[10px] block">Capacitat</span>
                <span className="font-bold text-white font-mono">{selectedVehicle.specs.capacity}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">Autonomia</span>
                <span className="font-bold text-cyan-300 font-mono">{selectedVehicle.specs.range}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">Velocitat</span>
                <span className="font-bold text-white font-mono">{selectedVehicle.specs.speed}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">Potència</span>
                <span className="font-bold text-white font-mono">{selectedVehicle.specs.power}</span>
              </div>
            </div>

            {/* Key Features List */}
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Innovacions & Equipament de Sèrie
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 mb-6">
              {selectedVehicle.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-700/80 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedVehicle(null)}
                className="px-5 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-white/5 transition-colors cursor-pointer"
              >
                Tancar
              </button>
              {onOpenQuoteWithVehicle && (
                <button
                  type="button"
                  onClick={() => {
                    const name = selectedVehicle.name;
                    setSelectedVehicle(null);
                    onOpenQuoteWithVehicle(name);
                  }}
                  className="px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md cursor-pointer"
                >
                  Demanar Cotització
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
