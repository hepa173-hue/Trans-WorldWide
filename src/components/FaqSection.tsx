import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Clock, FileText, Truck, Zap } from 'lucide-react';

interface FaqItem {
  id: string;
  category: 'Logística' | 'Temps' | 'Tarifes' | 'Sostenibilitat';
  question: string;
  answer: string;
}

const FAQS_DATA: FaqItem[] = [
  {
    id: 'temps-lliurament',
    category: 'Temps',
    question: 'Quins són els temps reals de trànsit nacional i internacional?',
    answer: 'Per a la distribució nacional peninsular disposem d’un servei garantit inferior a 24 hores (amb opció express nocturna < 12 hores). En trànsit internacional, els corredors aeris prioritari operen en 24-48 hores i els corredors multimodals marítims d’alta eficiència entre 5 i 11 dies segons destinació.',
  },
  {
    id: 'calcul-tarifes',
    category: 'Tarifes',
    question: 'Com es calculen les tarifes i quins conceptes inclouen?',
    answer: 'El nostre sistema calcula automàticament la tarifa segons volum cubat, pes brut real, tipologia de càrrega (estàndard, refrigerada o fràgil) i modalitat de seguiment telemàtic. Totes les cotitzacions inclouen assegurança bàsica a tot risc, gestió digitalitzada de documents de trànsit i accés complet a la plataforma de telemetria en directe.',
  },
  {
    id: 'cadena-fred',
    category: 'Logística',
    question: 'Quin nivell de precisió garanteix el transport en cadena de fred?',
    answer: 'Comptem amb contenidors isotèrmics actius i furgonetes amb doble evaporador capaços de mantenir rangs des de -20°C fins a +15°C amb una desviació màxima inferior a 0.5°C. Els sensors IOT transmeten la lectura cinètica i tèrmica cada 3 segons.',
  },
  {
    id: 'flota-sostenible',
    category: 'Sostenibilitat',
    question: 'Com audita Trans Worldwide l’estalvi d’emissions de CO₂?',
    answer: 'Generem un certificat mensual d’estalvi d’emissions auditables sota la norma ISO 14064 per a cada client. La nostra flota utilitza electricitat 100% renovable certificada d’origen i vaixells híbrids amb propulsió assistida per veles rígides automatitzades.',
  },
  {
    id: 'incidencies-duaneres',
    category: 'Logística',
    question: 'Com s’agilitza el despatx de duanes en enviaments transoceànics?',
    answer: 'Disposem d’autorització OEA (Operador Econòmic Simplificat) i sistemes de transmissió prèvia de dades que permeten la validació documental mentre la mercaderia encara és en trànsit marítim o aeri, eliminant demores a molls portuaris.',
  },
];

interface FaqSectionProps {
  isLightMode?: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ isLightMode = false }) => {
  const [openId, setOpenId] = useState<string>('temps-lliurament');
  const [activeCategory, setActiveCategory] = useState<string>('Tots');

  const categories = ['Tots', 'Logística', 'Temps', 'Tarifes', 'Sostenibilitat'];

  const filteredFaqs = activeCategory === 'Tots'
    ? FAQS_DATA
    : FAQS_DATA.filter((f) => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${isLightMode ? 'bg-white text-slate-900 border-b border-slate-200' : 'bg-[#061826] text-white border-b border-slate-800'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase mb-3">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span>Preguntes Freqüents</span>
            <span aria-hidden="true">·</span>
            <span>Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Respostes clares a qüestions operatives
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${isLightMode ? 'text-slate-600' : 'text-slate-300'}`}>
            Tot el que necessites saber sobre la contractació de vectors, temps d’entrega, telemetria i tarifació.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : isLightMode
                    ? 'bg-slate-100 text-slate-600 hover:text-slate-900'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions Container */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? isLightMode
                      ? 'bg-slate-50 border-[#0A3D62]/40 shadow-md'
                      : 'bg-slate-900/90 border-cyan-400/60 shadow-lg shadow-cyan-950/30'
                    : isLightMode
                    ? 'bg-white border-slate-200 hover:border-slate-300'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/30 text-cyan-300 border border-white/5">
                      {faq.category}
                    </span>
                    <span className="font-bold text-sm sm:text-base text-white">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-cyan-400 text-slate-950' : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Body */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
