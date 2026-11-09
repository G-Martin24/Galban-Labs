/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BRAND_CONFIG } from '../data/portfolioData';

interface BrandLogoProps {
  className?: string;
  variant?: 'dark-mode' | 'original-transparent';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = 'h-9 md:h-10 w-auto',
  variant = 'dark-mode',
  showTagline = false,
}) => {
  const logoSrc =
    variant === 'dark-mode'
      ? BRAND_CONFIG.logoDarkMode
      : BRAND_CONFIG.logoTransparent;

  return (
    <div className="flex items-center gap-3">
      <img
        src={logoSrc}
        alt="Galban Labs - Soluciones Digitales"
        className={`object-contain transition-transform duration-200 hover:scale-[1.02] ${className}`}
        loading="eager"
      />
      {showTagline && (
        <span className="hidden lg:inline-block text-xs font-medium text-slate-400 pl-2 border-l border-slate-700/60">
          Soluciones Digitales
        </span>
      )}
    </div>
  );
};
