
import React, { useState } from 'react';
import ChatSidebar from './ChatSidebar';
import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const ChatInterface: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m your AI assistant. How can I help you today?',
      timestamp: new Date().toISOString(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: `I understand you said: "${content}". This is a demo response. In a real implementation, you would connect this to your AI backend here.`,
        timestamp: new Date().toISOString(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Sidebar */}
      <ChatSidebar 
        isCollapsed={isCollapsed} 
        onToggleCollapse={handleToggleCollapse}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
      />
      
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat History */}
        <ChatHistory messages={messages} isDarkMode={isDarkMode} />

        {/* Chat Input */}
        <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default ChatInterface;
