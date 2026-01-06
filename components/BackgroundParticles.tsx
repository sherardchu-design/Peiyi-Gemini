import React from 'react';

export const BackgroundParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dark textured background */}
      <div className="absolute inset-0 bg-[#1a1a1a] opacity-100"></div>
      
      {/* Spotlights */}
      <div className="absolute inset-0 opacity-30 mix-blend-screen animate-spotlight">
        <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[150%] bg-gradient-to-br from-purple-900/40 via-transparent to-transparent rotate-12 blur-3xl"></div>
        <div className="absolute top-[-50%] right-[-20%] w-[80%] h-[150%] bg-gradient-to-bl from-pink-900/40 via-transparent to-transparent -rotate-12 blur-3xl"></div>
      </div>

      {/* Film Grain overlay effect (simulated with noise) */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
      }}></div>
    </div>
  );
};