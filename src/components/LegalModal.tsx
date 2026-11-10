import React from 'react';
import { X, ShieldAlert } from 'lucide-react';

interface LegalModalProps {
  type: 'avis' | 'privacitat' | 'cookies' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    avis: {
      title: 'Avís Legal (Context Estudiantil)',
      subtitle: 'Informació identificativa i marc legal de simulació',
      text: [
        'Aquest lloc web correspon exclusivament a una prova i projecte pràctic generat en l’àmbit estudiantil i acadèmic.',
        'L’empresa "Trans Worldwide" i totes les marques, serveis, rutes, tarifes i especificacions tècniques descrites en aquesta plataforma són de caràcter estrictament fictici, sense vinculació comercial ni mercantil real.',
        'Les dades de contacte, identificadors d’expedient i adreces físiques han estat creades per a fins didàctics de desenvolupament web i disseny d’interfícies digitals.',
      ],
    },
    privacitat: {
      title: 'Política de Privacitat',
      subtitle: 'Protecció de dades fictícia per a entorns de laboratori acadèmic',
      text: [
        'En compliment del marc de simulació acadèmica, s’informa que qualsevol dada introduïda als formularis d’aquesta web de prova s’executa exclusivament a nivell de memòria de client (browser session) i no s’emmagatzema ni es transmet a cap servidor extern ni base de dades persistent.',
        'No es recopilen dades de caràcter personal real amb finalitats comercials ni de segmentació publicitària.',
        'L’usuari pot utilitzar dades figurades en totes les interaccions del formulari per a comprovar el disseny i funcionament de la interfície.',
      ],
    },
    cookies: {
      title: 'Política de Cookies',
      subtitle: 'Informació sobre galetes i emmagatzematge local',
      text: [
        'Aquest lloc web utilitza exclusivament tecnologies tècniques necessàries per a la renderització correcta dels components interactius i estils de la interfície web.',
        'No s’utilitzen galetes de tercers per a rastreig publicitari, perfilat ni monetització de trànsit.',
        'En tractar-se d’una web de prova desenvolupada en l’àmbit estudiantil, la privacitat del visitant roman íntegrament salvaguardada en tot moment.',
      ],
    },
  };

  const item = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#071f33] text-white rounded-2xl border border-slate-700 max-w-xl w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Tancar avís legal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-300 uppercase mb-2">
          <ShieldAlert className="w-4 h-4" />
          <span>Web de prova generada en l’àmbit estudiantil</span>
        </div>

        <h2 className="text-2xl font-bold text-white mb-1">{item.title}</h2>
        <p className="text-xs text-slate-400 mb-6">{item.subtitle}</p>

        <div className="space-y-3 text-slate-300 text-sm leading-relaxed border-t border-slate-700/80 pt-4">
          {item.text.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-slate-700/80 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors cursor-pointer"
          >
            Entès
          </button>
        </div>
      </div>
    </div>
  );
};
