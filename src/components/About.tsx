/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  User,
  MessageCircle,
  ArrowRight,
  Code2,
  GraduationCap,
  Sparkles,
  Instagram,
  Github
} from 'lucide-react';
import { ABOUT_INFO, BRAND_CONFIG } from '../data/portfolioData';

export const About: React.FC = () => {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="sobre-mi" className="py-24 relative overflow-hidden bg-[#050814]/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section kicker */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-3">
            <span>Sobre mí</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Quién está detrás de Galban Labs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            {ABOUT_INFO.greeting}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Rounded Professional Photo Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Subtle ambient aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/30 via-blue-600/20 to-purple-600/30 rounded-3xl blur-lg opacity-75" />

              {/* Main Card with Photo */}
              <div className="relative bg-gradient-to-b from-slate-900 via-[#0b1126] to-[#070b19] border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-5">
                {/* Photo frame */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
                  {!photoError ? (
                    <img
                      src={ABOUT_INFO.photoPath}
                      alt="Martín Galban - Fundador de Galban Labs"
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                      onError={() => setPhotoError(true)}
                    />
                  ) : (
                    /* Elegant placeholder if photo needs to be configured */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-900/90 text-slate-400">
                      <div className="w-20 h-20 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-4 text-cyan-400">
                        <User className="w-10 h-10" />
                      </div>
                      <span className="text-sm font-semibold text-white mb-1">
                        Foto de Martín Galban
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {ABOUT_INFO.photoPath}
                      </span>
                    </div>
                  )}

                  {/* Trust badge overlay */}
                  <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2.5 rounded-xl bg-[#070b19]/85 backdrop-blur-md border border-slate-700/60 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-white">Martín Galban</div>
                      <div className="text-[11px] text-cyan-400">Fundador · Galban Labs</div>
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      Posadas, Argentina
                    </div>
                  </div>
                </div>

                {/* Quick credentials strip */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">Ciencia de Datos e IA</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <Code2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="truncate">Desarrollo Web</span>
                  </div>
                </div>

                {/* Social Links under photo card */}
                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-center gap-3">
                  <a
                    href={BRAND_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram de Galban Labs"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-pink-500/40 text-xs text-slate-300 hover:text-white transition-all group"
                  >
                    <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href={BRAND_CONFIG.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub de Martín Galban"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-xs text-slate-300 hover:text-white transition-all group"
                  >
                    <Github className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Exact Spanish Narrative & Approach */}
          <div className="lg:col-span-7 space-y-6">
            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              {ABOUT_INFO.paragraph1}
            </p>

            {/* Paragraph 2 */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {ABOUT_INFO.paragraph2}
            </p>

            {/* Paragraph 3 */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 to-[#0b1126]/90 border border-cyan-500/30 text-slate-200">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base leading-relaxed">
                  {ABOUT_INFO.paragraph3}
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              {ABOUT_INFO.highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1.5 text-cyan-300">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action buttons and Social Badges */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={BRAND_CONFIG.whatsappDefaultMsg}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl shadow-md shadow-cyan-500/25 transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Hablar directamente con Martín</span>
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors"
              >
                <span>Ver proyectos propios</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>

              <div className="flex items-center justify-center gap-2 sm:ml-auto">
                <a
                  href={BRAND_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Galban Labs"
                  title="Instagram de Galban Labs"
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-pink-500/40 text-slate-400 hover:text-pink-400 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href={BRAND_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub de Martín Galban"
                  title="GitHub de Martín Galban"
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
