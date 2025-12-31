import React, { useState } from 'react';
import { Briefcase, Sparkles, Check, Mail, ExternalLink, Copy } from 'lucide-react';

export const Collaboration: React.FC = () => {
    const [collabForm, setCollabForm] = useState({ type: 'Marque', name: '', email: '', message: '' });
    const [collabStatus, setCollabStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const generateMailtoLink = () => {
        const subject = encodeURIComponent(`Proposition Collab - ${collabForm.type} - ${collabForm.name}`);
        const body = encodeURIComponent(
            `Nom/Marque: ${collabForm.name}\n` +
            `Email: ${collabForm.email}\n` +
            `Type de projet: ${collabForm.type}\n\n` +
            `Message :\n${collabForm.message}`
        );
        return `mailto:shelley.gervais88@gmail.com?subject=${subject}&body=${body}`;
    };

    const generateGmailLink = () => {
        const subject = encodeURIComponent(`Proposition Collab - ${collabForm.type} - ${collabForm.name}`);
        const body = encodeURIComponent(
            `Nom/Marque: ${collabForm.name}\n` +
            `Email: ${collabForm.email}\n` +
            `Type de projet: ${collabForm.type}\n\n` +
            `Message :\n${collabForm.message}`
        );
        return `https://mail.google.com/mail/?view=cm&fs=1&to=shelley.gervais88@gmail.com&su=${subject}&body=${body}`;
    };

    const copyToClipboard = () => {
         const text = `Email: shelley.gervais88@gmail.com\n\nNom: ${collabForm.name}\nMessage: ${collabForm.message}`;
         navigator.clipboard.writeText(text);
         alert("Détails copiés !");
    };

    const handleCollabSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setCollabStatus('submitting');
        
        // On simule juste le traitement, sans forcer l'ouverture
        setTimeout(() => {
            setCollabStatus('success');
        }, 800);
    };

    return (
        <section id="collaboration" className="py-24 relative flex items-center justify-center">
            
            <div className="max-w-2xl mx-auto w-full px-6 relative z-10">
                <div className="bg-white/40 backdrop-blur-xl rounded-[2.5rem] shadow-xl border border-white/60 overflow-hidden p-8 md:p-12 transition-all hover:shadow-2xl hover:bg-white/50">
                    
                    {collabStatus === 'success' ? (
                        <div className="flex flex-col items-center justify-center text-center py-6 animate-in fade-in zoom-in duration-500">
                            <div className="w-16 h-16 bg-charcoal text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-charcoal/20">
                                <Check size={32} />
                            </div>
                            <h3 className="font-serif italic text-3xl text-charcoal mb-4">Message Prêt !</h3>
                            <p className="font-sans text-charcoal/70 max-w-xs mx-auto mb-6 text-sm">
                                Choisissez comment envoyer votre proposition à Shelley :
                            </p>
                            
                            <div className="flex flex-col w-full max-w-xs gap-3 mb-8">
                                <a 
                                    href={generateGmailLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-widest px-4 py-3 bg-red-800 text-white rounded-lg hover:bg-red-900 transition-colors shadow-md"
                                >
                                    <Mail size={14} /> Ouvrir via Gmail
                                </a>

                                <a 
                                    href={generateMailtoLink()}
                                    className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-widest px-4 py-3 bg-charcoal text-white rounded-lg hover:bg-black transition-colors shadow-md"
                                >
                                    <ExternalLink size={14} /> App Mail par défaut
                                </a>
                            </div>
                            
                            <div className="bg-white/50 p-4 rounded-lg border border-charcoal/10 mb-6 w-full max-w-xs flex flex-col gap-2">
                                <p className="text-[10px] text-charcoal/50 uppercase">Ou copier manuellement</p>
                                <p className="font-bold text-charcoal select-all text-sm">shelley.gervais88@gmail.com</p>
                                <button 
                                    type="button"
                                    onClick={copyToClipboard}
                                    className="text-[10px] uppercase flex items-center justify-center gap-1 text-charcoal/60 hover:text-charcoal mt-1"
                                >
                                    <Copy size={10} /> Copier le texte
                                </button>
                            </div>

                            <button 
                                onClick={() => {
                                    setCollabStatus('idle');
                                    setCollabForm({ type: 'Marque', name: '', email: '', message: '' });
                                }}
                                className="text-xs uppercase tracking-widest border-b border-charcoal/30 pb-1 hover:border-charcoal transition-colors"
                            >
                                Nouvelle demande
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="mb-10 text-center">
                                <div className="inline-flex items-center justify-center p-3 bg-charcoal rounded-full mb-4 shadow-sm text-greige">
                                    <Sparkles size={18} strokeWidth={1.5} />
                                </div>
                                <h2 className="font-serif italic font-medium text-4xl md:text-5xl text-charcoal mb-2">Collab & Partenariat</h2>
                                <p className="font-gothic text-3xl md:text-4xl text-charcoal/80 mt-2">Créons ensemble</p>
                            </div>

                            <form onSubmit={handleCollabSubmit} className="space-y-6">
                                
                                {/* Type Selector - Ajout de flex-wrap pour les petits écrans */}
                                <div className="flex flex-wrap md:flex-nowrap bg-white/40 p-1.5 rounded-2xl border border-white/50">
                                    {['Marque', 'Evénement', 'Projet'].map(type => (
                                        <button 
                                            key={type}
                                            type="button"
                                            onClick={() => setCollabForm({...collabForm, type: type})}
                                            className={`flex-1 py-3 px-2 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 whitespace-nowrap ${collabForm.type === type ? 'bg-charcoal text-white shadow-md' : 'text-charcoal/40 hover:text-charcoal hover:bg-white/40'}`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>

                                <div className="space-y-4">
                                    <div className="group">
                                        <input required type="text" className="w-full p-4 bg-white/60 rounded-xl border border-transparent focus:border-charcoal/20 focus:bg-white focus:ring-0 outline-none transition-all font-serif placeholder-charcoal/40 text-charcoal" 
                                            placeholder="Nom du Contact / Marque"
                                            value={collabForm.name} onChange={e => setCollabForm({...collabForm, name: e.target.value})}
                                        />
                                    </div>

                                    <div className="group">
                                        <input required type="email" className="w-full p-4 bg-white/60 rounded-xl border border-transparent focus:border-charcoal/20 focus:bg-white focus:ring-0 outline-none transition-all font-serif placeholder-charcoal/40 text-charcoal" 
                                            placeholder="Email Professionnel"
                                            value={collabForm.email} onChange={e => setCollabForm({...collabForm, email: e.target.value})}
                                        />
                                    </div>

                                    <div className="group">
                                        <textarea required rows={5} className="w-full p-4 bg-white/60 rounded-xl border border-transparent focus:border-charcoal/20 focus:bg-white focus:ring-0 outline-none transition-all text-sm font-sans placeholder-charcoal/40 text-charcoal resize-none" 
                                            placeholder="Détails de la collaboration..."
                                            value={collabForm.message} onChange={e => setCollabForm({...collabForm, message: e.target.value})}
                                        />
                                    </div>
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={collabStatus === 'submitting'}
                                    className="w-full py-5 bg-charcoal text-white font-medium uppercase tracking-widest text-xs rounded-xl hover:bg-black transition-all flex items-center justify-center gap-2 shadow-lg shadow-charcoal/10 hover:shadow-charcoal/20 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
                                >
                                    {collabStatus === 'submitting' ? 'Préparation...' : 'Soumettre la proposition'} 
                                    {!collabStatus.startsWith('submit') && <Briefcase size={14} />}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};