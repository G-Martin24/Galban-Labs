/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Palette,
  Smartphone,
  Compass,
  MessageCircle,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { BENEFITS } from '../data/portfolioData';

const benefitIcons: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-5 h-5 text-cyan-400" />,
  Smartphone: <Smartphone className="w-5 h-5 text-blue-400" />,
  Compass: <Compass className="w-5 h-5 text-purple-400" />,
  MessageCircle: <MessageCircle className="w-5 h-5 text-emerald-400" />,
  Zap: <Zap className="w-5 h-5 text-amber-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-indigo-400" />
};

export const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-3">
            <span>Enfoque y Calidad</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Resultados Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Una web pensada para ayudarte a crecer
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Construimos cada sitio priorizando la velocidad, la claridad para tus clientes y la facilidad para contactarte. Sin trucos ni promesas irreales.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-7 transition-all duration-200 hover:bg-slate-900/90 group"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {benefitIcons[benefit.icon] || <ShieldCheck className="w-5 h-5 text-cyan-400" />}
              </div>
              <h3 className="text-lg font-bold text-white mb-2.5">
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Honest statement note */}
        <div className="mt-14 max-w-2xl mx-auto text-center px-4 py-3 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400">
          En Galban Labs creemos en el trabajo transparente: te entregamos una web técnicamente sólida y rápida, lista para ser compartida en tus redes, tarjetas y campañas.
        </div>
      </div>
    </section>
  );
};
