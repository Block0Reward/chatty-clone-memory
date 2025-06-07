
import React, { useState, useEffect } from 'react';
import ChatInterface from '../components/ChatInterface';
import ChatSidebar from '../components/ChatSidebar';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAgentsSidebarOpen, setIsAgentsSidebarOpen] = useState(false);

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

  // Listen for agents sidebar state changes
  useEffect(() => {
    const handleAgentsSidebarChange = () => {
      // This will be updated by the ChatSidebar component
      const agentsSidebar = document.querySelector('[data-agents-sidebar]');
      setIsAgentsSidebarOpen(!!agentsSidebar);
    };

    // Check periodically for sidebar state (simple approach)
    const interval = setInterval(handleAgentsSidebarChange, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex h-screen ${isDarkMode ? 'dark' : ''}`}>
      <ChatSidebar
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />
      <div className="flex-1 flex flex-col">
        <ChatInterface 
          isDarkMode={isDarkMode} 
          isAgentsSidebarOpen={isAgentsSidebarOpen}
        />
      </div>
    </div>
  );
};

export default Index;
