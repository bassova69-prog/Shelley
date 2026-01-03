import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICE_CATEGORIES, ASSETS } from '../constants';

export const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
        
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="bg-charcoal/10 absolute inset-0 blur-3xl rounded-full transform scale-75 opacity-30"></div>
          <h2 className="font-serif italic font-medium text-6xl md:text-8xl text-charcoal relative z-10 drop-shadow-md tracking-tight">
            Tarifs
          </h2>
        </div>

        {/* IMAGE TARIFS 
            - Rétablissement du crop demandé initialement.
            - Haut : -mt-[28%] 
            - Bas : -mb-[10%]
        */}
        <div className="w-full mb-12 flex justify-center">
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-white/40 bg-white/30 backdrop-blur-sm transform hover:scale-[1.01] transition-transform duration-500">
                <img 
                    src={ASSETS.PRICING} 
                    alt="Carte des tarifs Shelley Nails" 
                    className="w-full h-auto object-contain max-w-4xl -mt-[28%] -mb-[10%]" 
                    loading="lazy"
                />
            </div>
        </div>

        {/* Info Categories (Restent en dessous) */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
                {SERVICE_CATEGORIES.filter(cat => cat.type === 'info').map((cat, idx) => (
                <div key={idx} className="bg-charcoal text-greige p-8 rounded-2xl border border-charcoal shadow-lg relative overflow-hidden group">
                    {/* Decorative background element for cards */}
                    <div className="absolute -right-10 -bottom-10 opacity-10 transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
                            <span className="font-gothic text-9xl text-white">S</span>
                    </div>

                    <h3 className="font-gothic text-2xl mb-4 text-white/90 relative z-10">{cat.category}</h3>
                        <ul className="space-y-4 relative z-10">
                        {cat.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                                {item.name && item.name !== cat.category && (
                                    <h4 className="font-bold text-sm uppercase tracking-wider mb-2 text-greige-dark">{item.name}</h4>
                                )}
                                <p className="text-sm font-sans leading-relaxed text-greige/80 mb-3">{item.details}</p>
                                {item.action && (
                                    <a href={item.action.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-greige/30 pb-1 hover:border-greige transition-colors text-white">
                                        {item.action.label} <ArrowUpRight size={12}/>
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                ))}
        </div>

      </div>
    </section>
  );
};