import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { FAQ } from './components/FAQ';
import { Coaching } from './components/Coaching';
import { Gallery } from './components/Gallery';
import { Collaboration } from './components/Collaboration';
import { Footer } from './components/Footer';
import { ASSETS } from './constants';

const App = () => {
  return (
    <div className="min-h-screen text-charcoal font-sans relative selection:bg-charcoal selection:text-white">
      {/* Background Image Layer */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
            backgroundImage: `url('${ASSETS.BACKGROUND}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            // Fallback color si l'image ne charge pas
            backgroundColor: '#D6D3CD'
        }}
      />
      
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <FAQ />
        <Coaching />
        <Collaboration />
        <Gallery />
      </main>
      <Footer />
      
      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
};

export default App;