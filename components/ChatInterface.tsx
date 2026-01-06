import React from 'react';
import { LogOut, Clapperboard } from 'lucide-react';

interface ChatInterfaceProps {
  onLogout: () => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ onLogout }) => {
  return (
    <div className="flex flex-col h-full w-full bg-cinema-dark">
      {/* Cinema Header */}
      <header className="flex-none h-16 bg-cinema-black border-b-4 border-white flex items-center justify-between z-20 relative overflow-hidden">
        
        {/* Diagonal Stripes Background for Header */}
        <div className="absolute inset-0 bg-clapper-stripes opacity-20 pointer-events-none"></div>

        {/* Branding */}
        <div className="relative z-10 flex items-center px-4 space-x-3 bg-cinema-black/80 h-full backdrop-blur-sm">
            <div className="p-1.5 rounded bg-cinema-accent text-white transform -rotate-6">
                <Clapperboard className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-hand text-white pt-1 tracking-wide">
                珮伊の专属 Gemini
            </h1>
        </div>

        {/* Logout */}
        <div className="relative z-10 px-4 h-full flex items-center bg-cinema-black/80 backdrop-blur-sm">
            <button 
                onClick={onLogout}
                className="group flex items-center gap-2 px-3 py-1.5 rounded border border-white/20 hover:border-cinema-accent hover:bg-white/5 transition-all text-sm font-mono text-white/80 hover:text-white"
                title="Cut / Logout"
            >
                <span>CUT</span>
                <LogOut className="w-4 h-4 group-hover:text-cinema-accent" />
            </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden w-full flex flex-col bg-white">
        {/* Iframe Container */}
        <div className="flex-1 w-full h-full relative">
            <iframe
                src="https://udify.app/chatbot/3GHTKiJAdShhHyUl"
                style={{ width: '100%', height: '100%' }}
                frameBorder="0"
                // Removed 'microphone' from allow list as requested
                allow="" 
                title="Dify Chatbot"
                className="absolute inset-0 w-full h-full"
            />
        </div>
      </main>
    </div>
  );
};