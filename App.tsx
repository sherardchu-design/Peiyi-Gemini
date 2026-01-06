import React, { useState, useEffect } from 'react';
import { Login } from './components/Login';
import { ChatInterface } from './components/ChatInterface';
import { BackgroundParticles } from './components/BackgroundParticles';

const PASSWORD_KEY = 'peiyi2026';
const SESSION_KEY = 'peiyi_auth_session';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if previously logged in this session
    const storedAuth = sessionStorage.getItem(SESSION_KEY);
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (password: string) => {
    if (password === PASSWORD_KEY) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return <div className="h-screen w-screen bg-cinema-black flex items-center justify-center text-cinema-accent animate-pulse font-movie text-2xl">
      Loading...
    </div>;
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-col font-sans text-cinema-white bg-cinema-black">
      {/* Background decorations */}
      <BackgroundParticles />

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {!isAuthenticated ? (
          <Login onLogin={handleLogin} />
        ) : (
          <ChatInterface onLogout={handleLogout} />
        )}
      </div>
    </div>
  );
};

export default App;