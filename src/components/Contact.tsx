/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  MessageCircle,
  Mail,
  Instagram,
  Github,
  Send,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  MapPin
} from 'lucide-react';
import { BRAND_CONFIG } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  business: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    business: '',
    service: 'Landing page',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) {
      errs.name = 'Por favor ingresá tu nombre.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Por favor ingresá tu correo electrónico.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'El formato de correo no es válido.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Por favor escribí un mensaje o consulta.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'El mensaje debe tener al menos 10 caracteres.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  // Build direct WhatsApp link with form contents
  const generateWhatsAppUrl = () => {
    const text = `Hola Martín! Mi nombre es ${formData.name || 'un visitante'}${
      formData.business ? ` de "${formData.business}"` : ''
    }. Te escribo desde la web de Galban Labs. Consulta: ${
      formData.message || 'Quisiera asesoramiento para una página web.'
    }`;
    return `${BRAND_CONFIG.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contacto" className="py-24 relative bg-[#050814]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-3">
                <span>Canales Directos</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-400">Contacto</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
                Hablemos sobre tu proyecto
              </h2>

              <p className="text-base text-slate-300 leading-relaxed mb-8">
                El canal más rápido y directo para comunicarte conmigo es WhatsApp. Respondemos consultas sobre presupuestos, plazos e ideas para tu página web.
              </p>

              {/* Contact list cards */}
              <div className="space-y-4 mb-8">
                {/* WhatsApp (Primary) */}
                <a
                  href={BRAND_CONFIG.whatsappDefaultMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/40 hover:border-emerald-400/80 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      Canal Principal · WhatsApp
                    </div>
                    <div className="text-base font-bold text-white truncate">
                      {BRAND_CONFIG.whatsappNumber}
                    </div>
                    <div className="text-xs text-slate-400">
                      Hacé clic para abrir chat directo
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-emerald-400 shrink-0 opacity-60 group-hover:opacity-100" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BRAND_CONFIG.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-slate-400">
                      Correo Electrónico
                    </div>
                    <div className="text-sm font-semibold text-white truncate">
                      {BRAND_CONFIG.email}
                    </div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={BRAND_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Galban Labs"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-105 transition-transform shrink-0">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-slate-400">
                      Instagram
                    </div>
                    <div className="text-sm font-semibold text-white truncate">
                      {BRAND_CONFIG.instagram}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 shrink-0 group-hover:text-pink-400" />
                </a>

                {/* GitHub */}
                <a
                  href={BRAND_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub de Martín Galban"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                    <Github className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-slate-400">
                      GitHub
                    </div>
                    <div className="text-sm font-semibold text-white truncate">
                      github.com/{BRAND_CONFIG.github}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 shrink-0 group-hover:text-cyan-400" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/60 flex items-center justify-center text-slate-400 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-400">
                      Ubicación
                    </div>
                    <div className="text-sm text-slate-200">
                      {BRAND_CONFIG.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative">
              <h3 className="text-xl font-bold text-white mb-2">
                Envianos un mensaje
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Completá el formulario para contarnos sobre tu negocio o servicio.
              </p>

              {/* Prototype Disclaimer Banner required by user brief */}
              <div className="mb-6 p-4 rounded-xl bg-blue-950/40 border border-blue-800/50 flex items-start gap-3 text-xs text-blue-200">
                <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Aviso de contacto:</span> Este formulario es actualmente un prototipo visual interactivo. Para una respuesta inmediata, te recomendamos usar el botón directo de{' '}
                  <a
                    href={BRAND_CONFIG.whatsappDefaultMsg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-cyan-300 font-semibold hover:text-cyan-200"
                  >
                    WhatsApp
                  </a>.
                </div>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-4 rounded-2xl bg-slate-950/80 border border-emerald-500/30 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    ¡Campos validados con éxito!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Como este formulario es un prototipo visual sin base de datos, hacé clic a continuación para enviar tu consulta directamente a Martín por WhatsApp con los datos ya cargados:
                  </p>
                  <div className="pt-2">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-600/30 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Enviar esta consulta por WhatsApp</span>
                    </a>
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-400 hover:text-white underline"
                    >
                      Volver a editar formulario
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Nombre completo *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej: Laura Gómez"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border ${
                        errors.name ? 'border-rose-500' : 'border-slate-800'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400">{errors.name}</p>
                    )}
                  </div>

                  {/* Email & Business 2-column */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Correo electrónico *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu@email.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border ${
                          errors.email ? 'border-rose-500' : 'border-slate-800'
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-400">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="business"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Nombre de tu negocio o emprendimiento
                      </label>
                      <input
                        id="business"
                        type="text"
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        placeholder="Ej: Café Aroma / Taller Textil"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service selector */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      ¿Qué tipo de solución necesitás?
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                    >
                      <option value="Landing page">Landing page para captar clientes</option>
                      <option value="Página web para negocio">Página web completa para negocio</option>
                      <option value="Catálogo online">Catálogo online de productos</option>
                      <option value="Integración con WhatsApp">Integración con WhatsApp</option>
                      <option value="Aplicación a medida">Aplicación web a medida</option>
                      <option value="Otro">Otra consulta</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Mensaje o consulta *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Contanos brevemente qué querés lograr con tu página web..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border ${
                        errors.message ? 'border-rose-500' : 'border-slate-800'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-400">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700/90 border border-slate-700 rounded-xl transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Validar y enviar</span>
                    </button>

                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-md shadow-emerald-500/20 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>O enviar directo a WhatsApp</span>
                    </a>
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
