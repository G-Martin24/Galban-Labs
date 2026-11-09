/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle, Mail, Instagram, Github, ArrowUp, Heart } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BRAND_CONFIG, NAV_LINKS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#050814] pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#inicio" className="inline-block">
              <BrandLogo className="h-9 w-auto" />
            </a>
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              {BRAND_CONFIG.tagline}
            </p>
            <p className="text-xs text-slate-400">
              Desarrollado con dedicación por Martín Galban desde Posadas, Misiones, Argentina para todo el país.
            </p>

            {/* Social media icons under brand */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Galban Labs"
                title="Instagram de Galban Labs"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 flex items-center justify-center text-slate-400 hover:text-pink-400 transition-all hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={BRAND_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Martín Galban"
                title="GitHub de Martín Galban"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Navegación
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Contacto y Redes
            </div>
            <div>
              <a
                href={BRAND_CONFIG.whatsappDefaultMsg}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{BRAND_CONFIG.whatsappNumber}</span>
              </a>
            </div>
            <div>
              <a
                href={`mailto:${BRAND_CONFIG.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{BRAND_CONFIG.email}</span>
              </a>
            </div>
            <div>
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Galban Labs"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>{BRAND_CONFIG.instagram}</span>
              </a>
            </div>
            <div>
              <a
                href={BRAND_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Martín Galban"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>github.com/{BRAND_CONFIG.github}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {BRAND_CONFIG.name}. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Hecho con <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" /> y React + TypeScript
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
