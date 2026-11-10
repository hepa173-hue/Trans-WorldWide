import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    serviceType: 'Transport Internacional',
    message: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.company.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Si us plau, omple tots els camps obligatoris del formulari.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Si us plau, introdueix una adreça de correu electrònic corporativa vàlida.');
      return;
    }

    if (!formData.consent) {
      setErrorMessage('Cal acceptar la política de tractament de dades per a tràmits operatius.');
      return;
    }

    setLoading(true);

    // Simulate real enterprise dispatch processing
    setTimeout(() => {
      const generatedId = `TW-OP-${Math.floor(10000 + Math.random() * 90000)}`;
      setTicketId(generatedId);
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      serviceType: 'Transport Internacional',
      message: '',
      consent: false,
    });
  };

  return (
    <section id="contacte" className="py-24 bg-[#ECECEC] text-[#2C3E50] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Office Data & Corporate Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#0A3D62] uppercase mb-3">
                <span>Centre Operatiu Global</span>
                <span aria-hidden="true">·</span>
                <span>Contacte Directe</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A3D62] mb-6">
                Parlem sobre la teva operativa logística
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                El nostre equip d’enginyeria de rutes i consultoria operativa respon en menys de 2 hores laborables a qualsevol sol·licitud corporativa.
              </p>

              {/* Office Information Cards */}
              <div className="space-y-4">
                {/* Visual Headquarters Building Card */}
                <div className="relative rounded-xl overflow-hidden border border-slate-300 shadow-sm bg-slate-900 group">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img
                      src="/src/assets/images/headquarters_clean.jpg"
                      alt="Seu Corporativa Trans Worldwide a Barcelona"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 inline-block mb-1">
                        Seu Central
                      </span>
                      <p className="text-xs font-semibold text-white">
                        Edifici Nexus B · Zona Franca Barcelona
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-300 shadow-sm">
                  <div className="p-2.5 rounded-lg bg-[#0A3D62]/5 text-[#0A3D62] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Adreça Central</h3>
                    <p className="text-sm font-semibold text-[#0A3D62] mt-0.5">
                      Passeig de la Innovació Logística, 42
                    </p>
                    <p className="text-xs text-slate-600">Edifici Nexus B, 08039 Barcelona (Zona Franca)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-300 shadow-sm">
                  <div className="p-2.5 rounded-lg bg-[#0A3D62]/5 text-[#0A3D62] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Atenció Telefònica</h3>
                    <p className="text-sm font-semibold text-[#0A3D62] mt-0.5 font-mono">
                      +34 930 845 200 / +34 902 440 220
                    </p>
                    <p className="text-xs text-slate-600">Línia directa d’operacions i despatx urgent</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-300 shadow-sm">
                  <div className="p-2.5 rounded-lg bg-[#0A3D62]/5 text-[#0A3D62] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Correu Corporatiu</h3>
                    <p className="text-sm font-semibold text-[#0A3D62] mt-0.5 font-mono">
                      contacte@transworldwide-logistics.com
                    </p>
                    <p className="text-xs text-slate-600">Atenció a clients B2B i cotitzacions</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-300 shadow-sm">
                  <div className="p-2.5 rounded-lg bg-[#0A3D62]/5 text-[#0A3D62] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Horari Operatiu</h3>
                    <p className="text-sm font-semibold text-[#0A3D62] mt-0.5">
                      Dilluns a Divendres, 08:00 – 19:30 CET
                    </p>
                    <p className="text-xs text-slate-600">Suport de monitoratge de càrrega actiu 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-300 text-xs text-slate-500">
              <span className="font-semibold text-[#0A3D62]">Trans Worldwide S.A.</span> · NIF Fictici: A-08992144
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-300 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A3D62]">
                    Consulta Operativa Registrada
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    Gràcies, <strong className="text-slate-900">{formData.name}</strong>. Hem generat l’expedient de seguiment corresponent per a <strong className="text-slate-900">{formData.company}</strong>. El teu gestor s’hi posarà en contacte avui mateix.
                  </p>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg max-w-xs mx-auto">
                    <span className="text-xs text-slate-500 uppercase tracking-wider block">Identificador de Sol·licitud</span>
                    <span className="text-lg font-mono font-bold text-[#0A3D62]">{ticketId}</span>
                  </div>

                  <button
                    onClick={handleReset}
                    className="mt-6 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A3D62] hover:bg-[#072841] rounded-md transition-colors cursor-pointer"
                  >
                    Enviar una altra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-200 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-[#0A3D62]">
                      Sol·licitud de Consulta Operativa
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Emplena les dades per rebre assessorament personalitzat i proposta de rutes.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-md">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Nom i Cognoms *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Marta Font"
                        className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:bg-white text-slate-900 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Empresa / Organització *
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ex: PharmaTech Global"
                        className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:bg-white text-slate-900 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Correu Electrònic Corporatiu *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="marta.font@empresa.com"
                        className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:bg-white text-slate-900 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Àmbit d’Interès Operatiu
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:bg-white text-slate-900 transition-colors"
                      >
                        <option value="Transport Internacional">Transport Internacional</option>
                        <option value="Distribució Nacional">Distribució Nacional</option>
                        <option value="Logística d’Última Milla">Logística d’Última Milla</option>
                        <option value="Gestió de Cadena de Fred">Gestió de Cadena de Fred</option>
                        <option value="Auditoria de Flota Sostenible">Auditoria de Flota Sostenible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Consulta Operativa / Detalls de Càrrega *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Indica el volum aproximat, freqüència d'enviaments, requeriments tèrmics o rutes requerides..."
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:bg-white text-slate-900 transition-colors"
                      required
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-slate-300 text-[#0A3D62] focus:ring-[#0A3D62]"
                      required
                    />
                    <label htmlFor="consent" className="text-xs text-slate-600 leading-normal">
                      Accepto el tractament de dades amb finalitat de gestió operativa i enviament de la proposta de serveis de Trans Worldwide.
                    </label>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full group inline-flex items-center justify-center gap-3 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0A3D62] hover:bg-[#07243a] rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer disabled:opacity-75"
                    >
                      {loading ? (
                        <span>Tramitant Expedient...</span>
                      ) : (
                        <>
                          <span>Enviar Consulta Operativa</span>
                          <Send className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
