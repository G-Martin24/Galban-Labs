/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BRAND_CONFIG } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      {/* Small dismissable bubble tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-slate-700/80 shadow-xl text-xs text-white backdrop-blur-md animate-in fade-in slide-in-from-right-3">
          <span>¿Tenés dudas? Escribinos</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Cerrar sugerencia"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={BRAND_CONFIG.whatsappDefaultMsg}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Galban Labs por WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>
    </div>
  );
};
