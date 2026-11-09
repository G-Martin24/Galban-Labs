/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Laptop,
  Smartphone,
  MessageCircle,
  ShoppingBag,
  Zap,
  ShieldCheck,
  Menu,
  Lock,
  CheckCircle2
} from 'lucide-react';

export const HeroDeviceMockup: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none select-none">
      {/* Decorative ambient background aura */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-purple-600/30 rounded-3xl blur-xl opacity-80 pointer-events-none" />

      {/* Main Container Frame */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/95 shadow-2xl shadow-black/80">
        {/* Device Showcase Top Header Bar */}
        <div className="px-3.5 sm:px-4 py-2.5 bg-[#050814] border-b border-slate-800 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-300 font-medium min-w-0">
            <div className="flex items-center gap-1.5 text-cyan-400 shrink-0">
              <Laptop className="w-4 h-4" />
              <span className="text-slate-600">/</span>
              <Smartphone className="w-3.5 h-3.5 text-purple-400" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-200 truncate">
              Diseño adaptable a todos los dispositivos
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-[10px] sm:text-[11px] font-medium text-cyan-300 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Mobile First</span>
          </div>
        </div>

        {/* Device Showcase Canvas */}
        <div className="relative p-2.5 sm:p-4 bg-gradient-to-b from-[#090e23] via-[#070b1a] to-[#04060e] overflow-hidden min-h-[320px] sm:min-h-[350px]">
          {/* LAPTOP / DESKTOP MOCKUP SCREEN */}
          <div className="rounded-xl overflow-hidden border border-slate-700/70 bg-[#070b19] shadow-xl">
            {/* Desktop browser top chrome */}
            <div className="px-3 py-1.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-2 text-xs">
              {/* Traffic light dots */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>

              {/* URL address bar */}
              <div className="flex-1 max-w-[220px] sm:max-w-[260px] mx-auto flex items-center justify-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-950/90 border border-slate-800 text-[10px] sm:text-[11px] font-mono text-slate-400 truncate">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="text-slate-300">galbanlabs.com</span>
                <span className="text-cyan-400/90">/tu-negocio</span>
              </div>

              <div className="text-[10px] text-emerald-400 font-mono hidden sm:flex items-center gap-1 shrink-0">
                <CheckCircle2 className="w-3 h-3" />
                <span>Seguro</span>
              </div>
            </div>

            {/* Desktop Website Content */}
            <div className="p-3 sm:p-4 space-y-3 pr-36 sm:pr-48">
              {/* Mini Website Header */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center text-[9px] font-black text-white">
                    G
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-white tracking-tight">
                    Tu Marca Online
                  </span>
                </div>

                <div className="hidden sm:flex items-center gap-2.5 text-[10px] text-slate-400">
                  <span className="text-cyan-300 font-medium">Inicio</span>
                  <span>Servicios</span>
                  <span>Contacto</span>
                </div>

                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-[9px] font-semibold text-emerald-400">
                  <MessageCircle className="w-2.5 h-2.5" />
                  <span>WhatsApp</span>
                </div>
              </div>

              {/* Mini Hero Area in Desktop View */}
              <div className="space-y-1.5 pt-0.5">
                <div className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold text-cyan-400 uppercase tracking-wider">
                  <span>Página Web Profesional</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-400">Posadas</span>
                </div>

                <div className="text-sm sm:text-base font-extrabold text-white leading-tight tracking-tight">
                  Potenciá tus ventas con una web moderna
                </div>

                <p className="text-[11px] sm:text-xs text-slate-300 leading-snug">
                  Atendé consultas de tus clientes las 24 hs directamente en tu WhatsApp.
                </p>

                <div className="pt-1 flex items-center gap-2">
                  <div className="px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[10px] sm:text-[11px] font-semibold flex items-center gap-1 shadow-sm shadow-cyan-500/20">
                    <MessageCircle className="w-3 h-3" />
                    <span>Pedir presupuesto</span>
                  </div>
                  <div className="px-2 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-[10px] font-medium border border-slate-700/60 hidden sm:block">
                    Ver catálogo
                  </div>
                </div>
              </div>

              {/* Mini Service Highlights in Desktop View */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800/90">
                  <div className="flex items-center gap-1 text-cyan-400 mb-0.5">
                    <ShoppingBag className="w-3 h-3" />
                    <span className="text-[10px] font-bold text-white">Catálogo Online</span>
                  </div>
                  <div className="text-[9px] text-slate-400 leading-tight">
                    Productos con fotos y precios
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800/90">
                  <div className="flex items-center gap-1 text-emerald-400 mb-0.5">
                    <Zap className="w-3 h-3" />
                    <span className="text-[10px] font-bold text-white">Carga Rápida</span>
                  </div>
                  <div className="text-[9px] text-slate-400 leading-tight">
                    Optimizado para teléfonos
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OVERLAPPING SMARTPHONE MOCKUP */}
          <div className="absolute right-2.5 bottom-2.5 sm:right-4 sm:bottom-3 w-36 sm:w-44 rounded-[1.5rem] bg-[#050814] border-2 border-slate-700 shadow-2xl shadow-black p-1.5 sm:p-2 z-20 transition-transform duration-300 hover:scale-[1.02]">
            {/* Phone speaker / Dynamic Island notch */}
            <div className="w-10 sm:w-12 h-3 mx-auto bg-slate-950 rounded-full mb-1 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
            </div>

            {/* Phone Screen Canvas */}
            <div className="rounded-xl bg-gradient-to-b from-[#090e24] via-[#060a18] to-[#040711] border border-slate-800 p-2 text-white space-y-1.5">
              {/* Mobile Header */}
              <div className="flex items-center justify-between pb-1 border-b border-slate-800 text-[9px]">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-cyan-400 text-slate-950 font-black text-[7px] flex items-center justify-center">
                    G
                  </span>
                  <span className="font-bold text-slate-200">Tu Negocio</span>
                </div>
                <Menu className="w-3 h-3 text-slate-400" />
              </div>

              {/* Mobile Hero */}
              <div className="space-y-0.5">
                <span className="text-[7px] sm:text-[8px] font-semibold text-cyan-400 uppercase tracking-wider block">
                  100% Adaptada a móvil
                </span>
                <div className="text-[10px] sm:text-xs font-bold text-white leading-tight">
                  Tus clientes te encuentran fácil
                </div>
                <div className="text-[8px] sm:text-[9px] text-slate-300 leading-tight">
                  Navegación táctil rápida sin esperas.
                </div>
              </div>

              {/* Mobile Product / Service preview card */}
              <div className="p-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[8px] space-y-1">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="font-semibold text-white">Catálogo de productos</span>
                  <span className="text-emerald-400 font-bold">$</span>
                </div>
                <div className="p-1 rounded bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-[8px] text-slate-300 truncate">Pedido rápido</span>
                  <span className="text-[8px] font-bold text-emerald-400">Pedir</span>
                </div>
              </div>

              {/* Mobile WhatsApp Button */}
              <div className="w-full py-1.5 px-1.5 rounded-md bg-emerald-500 text-white text-[8px] sm:text-[9px] font-bold flex items-center justify-center gap-1 shadow-sm shadow-emerald-500/30">
                <MessageCircle className="w-2.5 h-2.5 shrink-0" />
                <span className="truncate">Consultar WhatsApp</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="px-3.5 sm:px-4 py-2 bg-[#050814] border-t border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="text-[11px] sm:text-xs font-medium text-slate-300">
              Interfaces modernas, rápidas y pensadas para vender
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] text-cyan-400 font-medium shrink-0">
            Desktop · Tablet · Smartphone
          </span>
        </div>
      </div>
    </div>
  );
};
