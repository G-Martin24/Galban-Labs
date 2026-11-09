/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Laptop, Smartphone, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/15 to-purple-600/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-600/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 blur-[110px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Clean editorial kicker (unboxed, no pill badges) */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-4">
              <span>Desarrollo Web Profesional</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Argentina</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 [text-wrap:balance]">
              Llevá tu negocio a internet
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Páginas web personalizadas, modernas y adaptadas a celulares para negocios, profesionales y emprendimientos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href={BRAND_CONFIG.whatsappDefaultMsg}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Quiero una página web</span>
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
              >
                <span>Ver servicios</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Trust points */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Adaptada 100% a celulares</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Contacto directo por WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Atención personalizada</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual of Laptop & Smartphone */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 via-blue-600/30 to-purple-600/30 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />

              {/* Main device mockup frame */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/90 shadow-2xl shadow-black/60">
                {!imgError ? (
                  <img
                    src="/src/assets/images/hero_devices_mockup_1794193697880.jpg"
                    alt="Visualización de sitios web responsivos en laptop y smartphone creados por Galban Labs"
                    className="w-full h-auto aspect-[16/9] object-cover transition-transform duration-500 hover:scale-[1.02]"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  /* Stylized CSS fallback composition if image cannot load */
                  <div className="w-full aspect-[16/9] bg-gradient-to-br from-slate-900 via-[#0b1126] to-[#101735] p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <Laptop className="w-4 h-4 text-cyan-400" />
                        <span>Desktop & Mobile Viewport</span>
                      </div>
                      <Smartphone className="w-4 h-4 text-purple-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-6 w-3/4 bg-slate-800 rounded animate-pulse" />
                      <div className="h-4 w-1/2 bg-slate-800/60 rounded" />
                      <div className="grid grid-cols-3 gap-2 pt-2">
                        <div className="h-16 bg-slate-800/40 rounded border border-cyan-500/20" />
                        <div className="h-16 bg-slate-800/40 rounded border border-blue-500/20" />
                        <div className="h-16 bg-slate-800/40 rounded border border-purple-500/20" />
                      </div>
                    </div>
                    <div className="text-right text-xs text-cyan-400 font-medium">
                      Galban Labs Preview
                    </div>
                  </div>
                )}

                {/* Subtle caption overlay */}
                <div className="px-4 py-3 bg-[#070b19]/80 backdrop-blur-sm border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-slate-300">Interfaces modernas y adaptadas</span>
                  <span className="text-cyan-400">Mobile First · Rendimiento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
