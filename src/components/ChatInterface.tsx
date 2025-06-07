
import React, { useState } from 'react';
import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface ChatInterfaceProps {
  isDarkMode: boolean;
  isAgentsSidebarOpen?: boolean;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ isDarkMode, isAgentsSidebarOpen = false }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m your AI assistant. How can I help you today?',
      timestamp: new Date().toISOString(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

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
    <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
      isAgentsSidebarOpen ? 'mr-64' : 'mr-0'
    }`}>
      {/* Chat History */}
      <ChatHistory messages={messages} isDarkMode={isDarkMode} />

      {/* Chat Input */}
      <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} isDarkMode={isDarkMode} />
    </div>
  );
};

export default ChatInterface;
