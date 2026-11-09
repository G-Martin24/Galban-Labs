/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, ExternalLink, MessageCircle, Globe, Edit3 } from 'lucide-react';
import { ProjectItem, BRAND_CONFIG } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isRealUrl = project.liveUrl && !project.liveUrl.includes('[tu-proyecto') && !project.liveUrl.includes('[tu-url');

  const labelStyles: Record<string, string> = {
    'Proyecto propio': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    'Demo': 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    'Proyecto para cliente': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
  };

  const encodedWhatsAppMsg = encodeURIComponent(
    `Hola Martín, vi el proyecto "${project.name}" en el portfolio de Galban Labs y quiero consultar por uno similar para mi negocio.`
  );
  const waUrl = `${BRAND_CONFIG.whatsappUrl}?text=${encodedWhatsAppMsg}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#090e21] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#070b19]/90">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${labelStyles[project.label] || 'bg-slate-800 text-slate-300 border-slate-700'}`}>
              {project.label}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400">{project.type}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {/* Main preview image */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 mb-6 bg-slate-950">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto aspect-[16/9] object-cover"
            />
          </div>

          <div className="mb-4">
            <div className="text-xs font-mono text-cyan-400 mb-1">
              Tipo: {project.type}
            </div>
            <h3 className="text-2xl font-bold text-white">
              {project.name}
            </h3>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-6">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Descripción del proyecto
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Live URL box */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-medium text-slate-400 flex items-center gap-1.5 mb-1">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>URL del proyecto en vivo:</span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-cyan-300 break-all">
                {project.liveUrl}
              </div>
            </div>

            {isRealUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 shrink-0 transition-colors"
              >
                <span>Abrir sitio en vivo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-[11px] text-amber-300/90 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1.5 rounded-lg shrink-0">
                URL editable en portfolioData.ts
              </span>
            )}
          </div>

          {/* Helper note for Martín */}
          {project.isPlaceholder && (
            <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-900/40 text-xs text-blue-200 flex items-start gap-2.5 mb-6">
              <Edit3 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Espacio editable:</span> Podés reemplazar el nombre, descripción, imagen y link en vivo editando la constante <code className="text-cyan-300 bg-slate-950 px-1 py-0.5 rounded">PROJECTS</code> dentro de <code className="text-cyan-300 bg-slate-950 px-1 py-0.5 rounded">src/data/portfolioData.ts</code>.
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors"
            >
              Cerrar
            </button>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-md shadow-cyan-500/25 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
