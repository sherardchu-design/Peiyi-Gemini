import React, { useState } from 'react';
import { Clapperboard, Play } from 'lucide-react';

interface LoginProps {
  onLogin: (password: string) => boolean;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [isClapping, setIsClapping] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsClapping(true);
    
    // Small delay to let the animation play
    setTimeout(() => {
        const success = onLogin(input);
        if (!success) {
          setError(true);
          setIsClapping(false);
        }
    }, 400);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-4 font-sans">
      
      {/* Clapperboard Container */}
      <div className="relative w-full max-w-md animate-fade-in group">
        
        {/* Clapper Top (The stick) */}
        <div className={`relative z-20 origin-bottom-left transition-transform duration-300 ${isClapping ? 'rotate-[-15deg]' : 'rotate-0'}`}>
            <div className="h-12 w-full bg-clapper-stripes rounded-t-lg border-b-4 border-white shadow-lg"></div>
        </div>

        {/* Clapper Body */}
        <div className="bg-cinema-dark border-4 border-white rounded-b-lg p-6 shadow-2xl relative">
            
            {/* Header Text */}
            <div className="text-center mb-8 border-b-2 border-white/20 pb-4">
                <h1 className="text-4xl text-white font-hand tracking-wider mb-1">
                    珮伊の专属 Gemini
                </h1>
                <p className="text-cinema-accent font-mono text-sm uppercase tracking-[0.2em]">
                    Production No. 2026
                </p>
            </div>

            {/* Form Fields styled like Slate Metadata */}
            <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-2 gap-4">
                    {/* Date Field (Static) */}
                    <div className="relative">
                        <label className="block text-xs text-white/60 uppercase mb-1 font-mono">Date</label>
                        <div className="w-full bg-transparent border-b-2 border-white text-white font-hand text-xl py-1 text-center">
                            {new Date().toLocaleDateString()}
                        </div>
                    </div>
                    
                    {/* Scene Field (Label) */}
                    <div className="relative">
                        <label className="block text-xs text-white/60 uppercase mb-1 font-mono">Scene</label>
                        <div className="w-full bg-transparent border-b-2 border-white text-white font-hand text-xl py-1 text-center">
                            LOGIN
                        </div>
                    </div>
                </div>

                {/* Password Field as "Take" */}
                <div className="relative mt-4">
                    <label className="block text-xs text-cinema-accent uppercase mb-1 font-mono">
                        Password (Take)
                    </label>
                    <input
                        type="password"
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                            setError(false);
                        }}
                        className={`w-full bg-white/10 border-2 rounded p-3 text-center text-white placeholder-white/30 focus:outline-none focus:border-cinema-accent font-hand text-2xl tracking-widest transition-colors
                            ${error ? 'border-red-500 animate-pulse' : 'border-white'}
                        `}
                        placeholder="ACTION..."
                        autoFocus
                    />
                    {error && (
                        <p className="absolute -bottom-6 w-full text-center text-xs text-red-400 font-mono">
                            CUT! Wrong password. Try again.
                        </p>
                    )}
                </div>

                {/* Action Button */}
                <button
                    type="submit"
                    className="w-full mt-8 bg-cinema-accent hover:bg-pink-600 text-white font-bold py-3 px-4 rounded transform transition hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 uppercase tracking-widest"
                >
                    <Play className="w-5 h-5 fill-current" />
                    Action
                </button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center opacity-40">
                <Clapperboard className="w-6 h-6 mx-auto mb-2" />
                <span className="text-[10px] font-mono">DIRECTED BY PEIYI</span>
            </div>
        </div>
      </div>
    </div>
  );
};