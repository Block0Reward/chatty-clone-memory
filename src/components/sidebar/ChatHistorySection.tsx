
import React from 'react';
import { Button } from '@/components/ui/button';

interface Chat {
  id: string;
  title: string;
  timestamp: string;
}

interface ChatHistorySectionProps {
  chats: Chat[];
  isDarkMode: boolean;
}

const ChatHistorySection: React.FC<ChatHistorySectionProps> = ({
  chats,
  isDarkMode
}) => {
  const timeGroups = ['Today', 'Yesterday', 'Previous 7 Days'];

  return (
    <div className="pt-4">
      {timeGroups.map((timeGroup) => {
        const groupChats = chats.filter(chat => chat.timestamp === timeGroup);
        
        if (groupChats.length === 0) return null;

        return (
          <div key={timeGroup}>
            <div className={`text-xs font-medium mb-2 px-2 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {timeGroup}
            </div>
            {groupChats.map((chat) => (
              <Button
                key={chat.id}
                variant="ghost"
                className={`w-full justify-start text-sm h-8 px-2 mb-0.5 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-100' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex-1 text-left truncate">
                  <div className="truncate">{chat.title}</div>
                </div>
              </Button>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ChatHistorySection;
