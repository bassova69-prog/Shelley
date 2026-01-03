import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-transparent text-charcoal py-12 border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        <h2 className="font-logo text-blade-effect text-5xl mb-6">Shelley Nails</h2>
        <div className="flex space-x-6 mb-8 text-sm font-medium">
            <a href={SOCIAL_LINKS.INSTAGRAM} className="hover:opacity-50 transition-opacity uppercase tracking-wider">Instagram</a>
            <a href={SOCIAL_LINKS.TIKTOK} className="hover:opacity-50 transition-opacity uppercase tracking-wider">TikTok</a>
            <a href="mailto:contact@shelleynails.com" className="hover:opacity-50 transition-opacity uppercase tracking-wider">Email</a>
        </div>
        {/* Suppression de l'opacité et mise en gras pour confirmer visuellement la MAJ sur mobile */}
        <p className="text-xs font-bold uppercase tracking-widest text-charcoal">
          © {new Date().getFullYear()} Shelley Nails • v1.0.86 • MAJ OK
        </p>
      </div>
    </footer>
  );
};