/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, Github, Globe, Terminal, CheckCircle2, Copy, Check } from 'lucide-react';

interface DeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentGuideModal: React.FC<DeploymentGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyCommand = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const gitCommands = [
    `git init\ngit add .\ngit commit -m "Initial commit - Galban Labs Portfolio"`,
    `git branch -M main\ngit remote add origin https://github.com/TU_USUARIO/galban-labs.git\ngit push -u origin main`
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#090e21] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#070b19]">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white">
              Guía de Despliegue: GitHub y Vercel
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Cerrar guía"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6 text-sm text-slate-300">
          <div>
            <p className="text-slate-200 leading-relaxed mb-4">
              Este proyecto está construido con <strong className="text-white">Vite, React y TypeScript</strong>, lo cual permite un despliegue gratuito, automático y de máxima velocidad en plataformas modernas como <strong className="text-cyan-400">Vercel</strong> o <strong className="text-purple-400">Netlify</strong>.
            </p>
          </div>

          {/* Step 1: GitHub */}
          <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800">
            <div className="flex items-center gap-2 text-white font-bold mb-3">
              <Github className="w-5 h-5 text-cyan-400" />
              <span>1. Subir el proyecto a GitHub</span>
            </div>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 text-xs sm:text-sm mb-4">
              <li>Creá una cuenta en <a href="https://github.com" target="_blank" rel="noreferrer" className="text-cyan-400 underline">github.com</a> si aún no tenés una.</li>
              <li>Creá un nuevo repositorio vacío llamado por ejemplo <code className="text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded">galban-labs</code>.</li>
              <li>En la terminal de tu computadora dentro de la carpeta del proyecto, ejecutá:</li>
            </ol>

            <div className="space-y-3">
              {gitCommands.map((cmd, idx) => (
                <div key={idx} className="relative rounded-lg bg-slate-950 p-3 font-mono text-xs text-slate-300 border border-slate-800">
                  <pre className="whitespace-pre-wrap">{cmd}</pre>
                  <button
                    onClick={() => copyCommand(cmd, idx)}
                    className="absolute top-2 right-2 p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                    title="Copiar comando"
                  >
                    {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Vercel */}
          <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800">
            <div className="flex items-center gap-2 text-white font-bold mb-3">
              <Globe className="w-5 h-5 text-emerald-400" />
              <span>2. Desplegar en Vercel (Gratis en 2 minutos)</span>
            </div>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 text-xs sm:text-sm">
              <li>Ingresá a <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-cyan-400 underline">vercel.com</a> e iniciá sesión con tu cuenta de GitHub.</li>
              <li>Hacé clic en <strong className="text-white">"Add New... -&gt; Project"</strong>.</li>
              <li>Seleccioná tu repositorio <code className="text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded">galban-labs</code> y hacé clic en <strong className="text-white">"Import"</strong>.</li>
              <li>Vercel detecta automáticamente que es un proyecto <strong className="text-white">Vite</strong>:
                <ul className="list-disc list-inside pl-4 pt-1 text-slate-400 text-xs">
                  <li>Framework Preset: <span className="text-white">Vite</span></li>
                  <li>Build Command: <code className="text-cyan-300">npm run build</code></li>
                  <li>Output Directory: <code className="text-cyan-300">dist</code></li>
                </ul>
              </li>
              <li>Hacé clic en <strong className="text-emerald-400">"Deploy"</strong> y en menos de 1 minuto tu web estará online con certificado SSL gratuito (https://...).</li>
              <li>Podés asignarle un dominio personalizado (ej. <code className="text-white">galbanlabs.com</code>) desde la pestaña "Domains" de Vercel.</li>
            </ol>
          </div>

          {/* Step 3: Local commands */}
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-3">
            <Terminal className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-400">
              <span className="font-semibold text-slate-200">Comandos para desarrollo local:</span>
              <div className="mt-1 font-mono text-cyan-300">
                npm install · npm run dev · npm run build
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#070b19] border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
