import React, { useState, useEffect } from 'react';
import ChatInterface from '../components/ChatInterface';
import ChatSidebar from '../components/ChatSidebar';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`flex h-screen ${isDarkMode ? 'dark' : ''}`}>
      <ChatSidebar
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />
      <div className="flex-1 flex flex-col">
        <ChatInterface isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Index;
