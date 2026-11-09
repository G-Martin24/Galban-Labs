/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageSquare, LayoutGrid, Code, Rocket, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS, BRAND_CONFIG } from '../data/portfolioData';

const stepIcons = [
  <MessageSquare key="1" className="w-5 h-5 text-cyan-400" />,
  <LayoutGrid key="2" className="w-5 h-5 text-blue-400" />,
  <Code key="3" className="w-5 h-5 text-purple-400" />,
  <Rocket key="4" className="w-5 h-5 text-emerald-400" />
];

export const Process: React.FC = () => {
  return (
    <section id="proceso" className="py-24 relative bg-[#050814]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-3">
            <span>Metodología Ágil</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Paso a Paso</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
            ¿Cómo trabajamos?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Un proceso simple y transparente de 4 pasos para que tengas tu página web online sin complicaciones ni demoras.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                {/* Header: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center">
                    {stepIcons[idx]}
                  </div>
                  <span className="text-2xl font-black text-slate-400 font-mono">
                    {step.step}
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                  {step.timeframe}
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Step indicator */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Paso {idx + 1} de 4</span>
                {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden lg:block" />}
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Callout */}
        <div className="mt-14 text-center">
          <a
            href={BRAND_CONFIG.whatsappDefaultMsg}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>¿Tenés dudas sobre cómo empezar? Escribinos por WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
