import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, User, ShieldCheck } from 'lucide-react';

interface ChatbotWidgetProps {
  onOpenQuote?: () => void;
  isLightMode?: boolean;
}

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ onOpenQuote, isLightMode = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'bot' | 'user'; text: string; time: string }[]>([
    {
      sender: 'bot',
      text: 'Hola! Sóc l’assistent intel·ligent de Trans Worldwide. En què puc ajudar-te avui?',
      time: 'Ara mateix',
    },
  ]);
  const [inputText, setInputText] = useState('');

  const quickPrompts = [
    'Quines rutes feu?',
    'Com demanar cotització?',
    'Teniu flota elèctrica?',
    'Puc seguir un paquet?',
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg = {
      sender: 'user' as const,
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    // Simulated luxury concierge bot response
    setTimeout(() => {
      let reply = 'Gràcies per la teva consulta! El nostre equip d’enginyeria logística pot gestionar la teva sol·licitud.';
      const lower = text.toLowerCase();

      if (lower.includes('cotitzaci') || lower.includes('preu') || lower.includes('tarifa')) {
        reply = 'Pots utilitzar el nostre configurador dinàmic a la pestanya Serveis o polsar el botó "Demanar Cotització" per obtenir una oferta instantània.';
      } else if (lower.includes('ruta') || lower.includes('on')) {
        reply = 'Connectem més de 140 països mitjançant corredors transeuropeus electrificats, rutes marítimes eòliques a Àsia i enllaços transatlàntics amb Amèrica.';
      } else if (lower.includes('flota') || lower.includes('elèctric') || lower.includes('camió')) {
        reply = 'La nostra flota inclou camions pesants TW E-Tron Hauler de 800V, furgonetes urbanes silencioses i drons autònoms per a càrregues crítiques.';
      } else if (lower.includes('seguir') || lower.includes('paquet') || lower.includes('on està')) {
        reply = 'Pots introduir el codi d’expedició (per exemple, TW-9021-INT) al nostre panell de telemetria en directe a la pàgina d’Inici.';
      }

      const botReply = {
        sender: 'bot' as const,
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botReply]);
    }, 600);
  };

  return (
    <>
      {/* Floating Futuristic Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-3.5 rounded-full bg-gradient-to-tr from-[#0A3D62] via-cyan-600 to-cyan-400 text-white shadow-2xl hover:shadow-cyan-400/40 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer animate-neon-pulse flex items-center justify-center"
          aria-label="Obrir assistent de Trans Worldwide"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <Bot className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-900" />
            </>
          )}
        </button>
      </div>

      {/* Concierge Modal Window (Audi Luxury style) */}
      {isOpen && (
        <div className="fixed bottom-22 right-6 z-40 w-92 sm:w-96 rounded-2xl border shadow-2xl overflow-hidden backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-300 flex flex-col max-h-[540px] bg-[#071f33]/95 text-white border-cyan-400/30">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#0A3D62] to-[#07243a] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Trans Worldwide Concierge
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Assistent Virtual Actiu</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 text-xs max-h-72">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-cyan-500 text-slate-950 font-medium rounded-br-none'
                      : 'bg-slate-900/90 text-slate-200 border border-slate-700/80 rounded-bl-none'
                  }`}
                >
                  <p>{m.text}</p>
                  <span className="text-[9px] opacity-60 block mt-1 font-mono text-right">
                    {m.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick suggestions pills */}
          <div className="px-3 py-2 bg-black/20 border-t border-white/5 flex gap-1.5 overflow-x-auto scrollbar-none">
            {quickPrompts.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => handleSend(q)}
                className="text-[10px] whitespace-nowrap px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/10 transition-colors cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#051522] border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escriu la teva consulta logística..."
              className="flex-1 bg-slate-900/80 text-white placeholder-slate-400 text-xs px-3 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              className="p-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-colors cursor-pointer"
              aria-label="Enviar missatge"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
