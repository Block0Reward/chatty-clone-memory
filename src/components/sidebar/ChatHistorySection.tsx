
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface Chat {
  id: string;
  title: string;
  timestamp: string;
}

interface ChatHistorySectionProps {
  chats: Chat[];
  isDarkMode: boolean;
  activeChat?: string;
}

const ChatHistorySection: React.FC<ChatHistorySectionProps> = ({
  chats,
  isDarkMode,
  activeChat
}) => {
  const [hoveredChat, setHoveredChat] = useState<string | null>(null);
  const timeGroups = ['Today', 'Yesterday', 'Previous 7 Days'];

  const handleRenameChat = (chatId: string) => {
    console.log('Rename chat:', chatId);
    // TODO: Implement rename functionality
  };

  const handleAddChatToProject = (chatId: string) => {
    console.log('Add chat to project:', chatId);
    // TODO: Implement add to project functionality
  };

  const handleArchiveChat = (chatId: string) => {
    console.log('Archive chat:', chatId);
    // TODO: Implement archive functionality
  };

  const handleDeleteChat = (chatId: string) => {
    console.log('Delete chat:', chatId);
    // TODO: Implement delete functionality
  };

  return (
    <div className="pt-4">
      {timeGroups.map((timeGroup) => {
        const groupChats = chats.filter(chat => chat.timestamp === timeGroup);
        
        if (groupChats.length === 0) return null;

        return (
          <div key={timeGroup} className="animate-in fade-in-0 duration-300">
            <div className={`text-xs font-medium mb-2 px-2 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {timeGroup}
            </div>
            {groupChats.map((chat) => (
              <div
                key={chat.id}
                className="relative group"
                onMouseEnter={() => setHoveredChat(chat.id)}
                onMouseLeave={() => setHoveredChat(null)}
              >
                <Button
                  variant="ghost"
                  className={`w-full justify-start text-sm h-8 px-2 mb-0.5 transition-all duration-200 hover:scale-[1.02] focus:ring-2 focus:ring-offset-2 ${
                    activeChat === chat.id
                      ? isDarkMode
                        ? 'bg-gray-700/70 text-gray-100'
                        : 'bg-gray-200/70 text-gray-900'
                      : isDarkMode 
                        ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-100 focus:ring-gray-500' 
                        : 'text-gray-700 hover:bg-gray-100 focus:ring-gray-400'
                  }`}
                >
                  <div className="flex-1 text-left truncate">
                    <div className="truncate">{chat.title}</div>
                  </div>
                </Button>
                
                {/* Three dots menu for chat */}
                {hoveredChat === chat.id && (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                          isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MoreHorizontal className="h-3 w-3" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent 
                      className={`w-48 p-1 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`} 
                      align="start"
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sm h-8 px-2"
                        onClick={() => handleRenameChat(chat.id)}
                      >
                        Rename
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sm h-8 px-2"
                        onClick={() => handleAddChatToProject(chat.id)}
                      >
                        Add to project
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sm h-8 px-2"
                        onClick={() => handleArchiveChat(chat.id)}
                      >
                        Archive
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sm h-8 px-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-950"
                        onClick={() => handleDeleteChat(chat.id)}
                      >
                        Delete
                      </Button>
                    </PopoverContent>
                  </Popover>
                )}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ChatHistorySection;
