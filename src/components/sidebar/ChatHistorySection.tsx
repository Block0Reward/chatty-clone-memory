
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, ChevronRight } from 'lucide-react';
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
  const [showProjectSubmenu, setShowProjectSubmenu] = useState<string | null>(null);
  const timeGroups = ['Today', 'Yesterday', 'Previous 7 Days'];

  // Sample projects for the submenu
  const projects = [
    { id: 'project1', name: 'My friend' },
    { id: 'project2', name: 'Korea' },
    { id: 'project3', name: 'My workout' },
    { id: 'project4', name: 'Ideas' },
    { id: 'project5', name: 'Onchains' },
  ];

  const handleRenameChat = (chatId: string) => {
    console.log('Rename chat:', chatId);
    // TODO: Implement rename functionality
  };

  const handleAddChatToProject = (chatId: string, projectId: string) => {
    console.log('Add chat to project:', chatId, projectId);
    setShowProjectSubmenu(null);
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
                      className={`w-48 p-1 z-50 ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-600 shadow-lg' 
                          : 'bg-white border-gray-200 shadow-lg'
                      }`} 
                      align="start"
                    >
                      <Button
                        variant="ghost"
                        className={`w-full justify-start text-sm h-8 px-2 ${
                          isDarkMode 
                            ? 'text-gray-200 hover:bg-gray-700 hover:text-white' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => handleRenameChat(chat.id)}
                      >
                        Rename
                      </Button>
                      
                      <div 
                        className="relative"
                        onMouseEnter={() => setShowProjectSubmenu(chat.id)}
                        onMouseLeave={() => setShowProjectSubmenu(null)}
                      >
                        <Button
                          variant="ghost"
                          className={`w-full justify-between text-sm h-8 px-2 ${
                            isDarkMode 
                              ? 'text-gray-200 hover:bg-gray-700 hover:text-white' 
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          Add to project
                          <ChevronRight className="h-3 w-3" />
                        </Button>
                        
                        {/* Project submenu */}
                        {showProjectSubmenu === chat.id && (
                          <div 
                            className={`absolute left-full top-0 ml-1 w-48 p-1 rounded-md border z-50 ${
                              isDarkMode 
                                ? 'bg-gray-800 border-gray-600 shadow-lg' 
                                : 'bg-white border-gray-200 shadow-lg'
                            }`}
                          >
                            {projects.map((project) => (
                              <Button
                                key={project.id}
                                variant="ghost"
                                className={`w-full justify-start text-sm h-8 px-2 ${
                                  isDarkMode 
                                    ? 'text-gray-200 hover:bg-gray-700 hover:text-white' 
                                    : 'text-gray-700 hover:bg-gray-100'
                                }`}
                                onClick={() => handleAddChatToProject(chat.id, project.id)}
                              >
                                {project.name}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <Button
                        variant="ghost"
                        className={`w-full justify-start text-sm h-8 px-2 ${
                          isDarkMode 
                            ? 'text-gray-200 hover:bg-gray-700 hover:text-white' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => handleArchiveChat(chat.id)}
                      >
                        Archive
                      </Button>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start text-sm h-8 px-2 ${
                          isDarkMode 
                            ? 'text-red-400 hover:text-red-300 hover:bg-red-900/20' 
                            : 'text-red-600 hover:text-red-700 hover:bg-red-50'
                        }`}
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
