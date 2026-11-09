/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ExternalLink, Check, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 relative bg-[#050814]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-3">
              <span>Proyectos Realizados</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Desarrollos Propios</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
              Proyectos y ejemplos
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Aplicaciones web y conceptos digitales desarrollados por Galban Labs. Proyectos propios funcionales disponibles para explorar en vivo.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 shrink-0 self-start md:self-auto">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>3 proyectos propios en vivo</span>
          </div>
        </div>

        {/* 3 Responsive Real Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="flex flex-col bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 group"
            >
              {/* Card Image Slot with screenshot preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-slate-800/80 flex items-center justify-center p-2 sm:p-3">
                <img
                  src={project.image}
                  alt={`Captura de pantalla de ${project.name}`}
                  className="w-full h-full object-contain sm:object-cover rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />

                {/* Small "Proyecto propio" badge as requested */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-cyan-300 bg-[#070b19]/90 backdrop-blur-md px-3 py-1 rounded-md border border-cyan-500/40 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{project.label}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  {/* Project Type */}
                  <div className="text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wide">
                    {project.type}
                  </div>

                  {/* Project Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>

                  {/* Features list */}
                  <div className="mb-6 pt-4 border-t border-slate-800/80">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Funcionalidades principales:
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action: “Ver proyecto” button that opens live URL in new tab */}
                <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-md shadow-cyan-500/25 transition-all duration-200 active:scale-95 group/btn"
                  >
                    <span>Ver proyecto</span>
                    <ExternalLink className="w-4 h-4 text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>

                  <span className="text-[11px] text-slate-400 font-mono hidden sm:inline-block truncate max-w-[150px]">
                    {project.liveUrl.replace('https://', '').replace('/', '')}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
