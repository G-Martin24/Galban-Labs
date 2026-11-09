/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Rocket,
  Globe,
  ShoppingBag,
  MessageSquare,
  Share2,
  Smartphone,
  ArrowUpRight,
  Check
} from 'lucide-react';
import { SERVICES, BRAND_CONFIG } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-6 h-6 text-cyan-400" />,
  Globe: <Globe className="w-6 h-6 text-blue-400" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-purple-400" />,
  MessageSquare: <MessageSquare className="w-6 h-6 text-emerald-400" />,
  Share2: <Share2 className="w-6 h-6 text-pink-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-indigo-400" />
};

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 relative bg-[#050814]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-3">
            <span>Servicios de Desarrollo</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Soluciones a Medida</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Soluciones digitales para tu negocio
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Cada desarrollo se adapta a las necesidades concretas de tu emprendimiento para ayudarte a mostrar tus productos, recibir consultas y vender más fácil.
          </p>
        </div>

        {/* Services Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const encodedServiceMsg = encodeURIComponent(
              `Hola Martín, me interesa consultar por el servicio de ${service.title} para mi negocio.`
            );
            const waUrl = `${BRAND_CONFIG.whatsappUrl}?text=${encodedServiceMsg}`;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between bg-gradient-to-b from-slate-900/90 to-[#0b1126]/90 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
              >
                {/* Top: Icon & Index */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-500/40 transition-all">
                      {iconMap[service.icon] || <Globe className="w-6 h-6 text-cyan-400" />}
                    </div>
                    <span className="text-xs font-mono text-slate-400 tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs font-medium text-cyan-400/90 uppercase tracking-wider mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-2 mb-8 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom: Action */}
                <div>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/70 hover:border-cyan-500/40 rounded-xl transition-all"
                  >
                    <span>Consultar por este servicio</span>
                    <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
