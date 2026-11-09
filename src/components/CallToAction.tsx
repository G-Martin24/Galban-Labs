/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/portfolioData';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0b1126] via-[#101735] to-[#151c44] border border-cyan-500/30 p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Subtle glow circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[90px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-[90px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs md:text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-4">
              Impulsá Tu Marca Online
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 [text-wrap:balance]">
              ¿Querés llevar tu negocio a internet?
            </h2>

            <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
              Contame qué necesitás y recibí una propuesta personalizada para tu página web.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={BRAND_CONFIG.whatsappDefaultMsg}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Hablar por WhatsApp</span>
              </a>

              <a
                href="#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/80 rounded-xl transition-colors"
              >
                <span>Enviar formulario</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
              <span>✓ Respuesta rápida por chat</span>
              <span aria-hidden="true">·</span>
              <span>✓ Asesoramiento sin costo</span>
              <span aria-hidden="true">·</span>
              <span>✓ Presupuesto claro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
