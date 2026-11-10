import React, { useState, useEffect } from 'react';
import { Cookie, Shield, Check, X } from 'lucide-react';

interface CookieBannerProps {
  onOpenCookiesModal: () => void;
  isLightMode?: boolean;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenCookiesModal, isLightMode = false }) => {
  const [accepted, setAccepted] = useState(true); // default true to avoid flash, then check localStorage

  useEffect(() => {
    const hasConsent = localStorage.getItem('tw_cookie_consent');
    if (!hasConsent) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('tw_cookie_consent', 'accepted');
    setAccepted(true);
  };

  const handleDecline = () => {
    localStorage.setItem('tw_cookie_consent', 'necessary_only');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <aside
      aria-label="Consentiment de cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 animate-in slide-in-from-bottom-6 duration-500"
    >
      <div
        className={`p-5 rounded-2xl border shadow-2xl backdrop-blur-xl ${
          isLightMode
            ? 'bg-white/95 text-slate-900 border-slate-300'
            : 'bg-[#061e31]/95 text-white border-cyan-400/40 shadow-cyan-950/50'
        }`}
      >
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-400 shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-tight">
              Preferències de Privacitat & Cookies
            </h4>
            <p className={`text-xs mt-1 leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-slate-300'}`}>
              Utilitzem tecnologies d’emmagatzematge local per optimitzar la configuració de vectors i recordar el mode visual triat.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/10 text-xs">
          <button
            type="button"
            onClick={onOpenCookiesModal}
            className="text-[11px] underline text-cyan-300 hover:text-white transition-colors cursor-pointer"
          >
            Configurar detalls
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDecline}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                isLightMode ? 'bg-slate-200 text-slate-700 hover:bg-slate-300' : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              Només essencials
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm cursor-pointer"
            >
              Acceptar Totes
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
