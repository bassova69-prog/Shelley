import React from 'react';
import { ASSETS } from '../constants';

export const Hero = () => {
  return (
    // Utilisation de 100dvh (dynamic viewport height) pour une compatibilité parfaite mobile
    <div id="home" className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center">
      
      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center">
        
        {/* Ajout de mt-16 md:mt-24 pour descendre l'ensemble (logo + texte) un peu plus bas que le centre */}
        <div className="space-y-4 px-6 max-w-4xl mx-auto flex flex-col items-center mt-16 md:mt-24">
            
            {/* Logo intégré directement dans le Hero pour scroller avec la page */}
            <div className="relative mb-8 transform hover:scale-105 transition-transform duration-500">
                {/* Effet de lueur */}
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-orange-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <img 
                    src={ASSETS.LOGO_URL} 
                    alt="Shelley Nails Logo" 
                    className="relative h-40 w-40 md:h-64 md:w-64 rounded-full object-cover border-4 border-white/40 shadow-2xl"
                />
            </div>

            {/* Texte ajusté avec des marges standards maintenant que le logo est dans le flux */}
            <div className="font-serif italic text-lg md:text-2xl text-stone-800 font-medium tracking-wide leading-relaxed">
                <p>Nail Artist & Coach.</p>
                <p className="mt-2 text-stone-700">Spécialiste de la pose de gel et du Nail Art à domicile sur Créteil et Paris Sud.</p>
            </div>

            <p className="font-sans text-sm md:text-base text-stone-700 mt-6 max-w-2xl mx-auto leading-relaxed opacity-90 px-4">
                L’expertise et la créativité au bout de vos doigts. Depuis plusieurs années, je vous accompagne pour sublimer vos mains avec passion. Je mise sur des finitions parfaites et un accueil personnalisé. Ma spécialité : la pose américaine et les designs tendances.
            </p>

            <div className="w-12 h-0.5 bg-stone-900/20 mx-auto mt-8 mb-8"></div>

        </div>

      </div>
    </div>
  );
};