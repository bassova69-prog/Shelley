import React from 'react';
import { Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const TribalBackground = () => (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08] mix-blend-multiply overflow-hidden">
         {/* Motif tribal 'traits' symétrique inspiré style Y2K/Sigil */}
        <svg viewBox="0 0 1000 1000" className="w-[140%] h-[140%] text-[#3a3530] fill-current animate-[pulse_8s_ease-in-out_infinite]" preserveAspectRatio="xMidYMid slice">
            <g transform="translate(500, 500)">
                {/* Upper Left Wing */}
                <path d="M0,0 C-20,-50 -50,-150 -150,-250 C-100,-200 -50,-180 0,-120 C50,-180 100,-200 150,-250 C50,-150 20,-50 0,0 Z" />
                {/* Extended Spikes */}
                <path d="M0,-50 C-60,-150 -180,-300 -300,-400 C-250,-300 -200,-200 -180,-100 C-250,-150 -350,-150 -450,-100 C-300,-100 -200,-50 -100,0 C-200,20 -350,100 -400,200 C-300,100 -200,80 -100,100" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" />
                <path d="M0,-50 C60,-150 180,-300 300,-400 C250,-300 200,-200 180,-100 C250,-150 350,-150 450,-100 C300,-100 200,-50 100,0 C200,20 350,100 400,200 C300,100 200,80 100,100" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" />
                
                {/* Lower Structure */}
                 <path d="M0,50 C-30,150 -80,300 -20,450 C-40,300 -10,200 0,150 C10,200 40,300 20,450 C80,300 30,150 0,50 Z" />
                 <path d="M-20,200 C-80,250 -150,350 -200,450" fill="none" stroke="currentColor" strokeWidth="10" />
                 <path d="M20,200 C80,250 150,350 200,450" fill="none" stroke="currentColor" strokeWidth="10" />
            </g>
        </svg>
    </div>
);

export const Hero = () => {
  return (
    <div id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      <TribalBackground />

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center">
        
        <div className="space-y-4 px-6 max-w-4xl mx-auto flex flex-col items-center">
            
            {/* Logo Lockup Style - Side by Side */}
            <div className="flex items-center justify-center gap-3 md:gap-5 transform hover:scale-105 transition-transform duration-700 ease-out py-8">
                {/* Application de la font-logo (Pirata One) avec l'effet lame (étirement vertical + gradient) */}
                {/* Suppression de text-stone-900 pour laisser voir le gradient */}
                <h1 className="font-logo text-blade-effect text-7xl md:text-[9rem] leading-none z-10 relative px-4 py-2">
                    Shelley Nails
                </h1>
                <Heart className="w-4 h-4 md:w-8 md:h-8 fill-stone-900 text-stone-900 animate-pulse mt-4 md:mt-8" strokeWidth={0} />
            </div>

            <div className="font-serif italic text-lg md:text-2xl text-stone-800 font-medium tracking-wide mt-8 md:mt-12 leading-relaxed">
                <p>Nail Artist & Coach.</p>
                <p className="mt-2 text-stone-700">Spécialiste de la pose de gel et du Nail Art à domicile sur Créteil et Paris Sud.</p>
            </div>

            <p className="font-sans text-sm md:text-base text-stone-700 mt-6 max-w-2xl mx-auto leading-relaxed opacity-90 px-4">
                L’expertise et la créativité au bout de vos doigts. Depuis plusieurs années, je vous accompagne pour sublimer vos mains avec passion. De la pose classique au Nail Art le plus sophistiqué, je mise sur des finitions parfaites et un accueil personnalisé. Ma spécialité : la pose américaine et les designs tendances.
            </p>

            <div className="w-12 h-0.5 bg-stone-900/20 mx-auto mt-8 mb-8"></div>

        </div>

      </div>
    </div>
  );
};