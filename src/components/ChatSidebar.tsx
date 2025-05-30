
import React, { useState } from 'react';
import { PanelLeft, Sun, Moon, Pen, FolderPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import SidebarHeader from './sidebar/SidebarHeader';
import ProjectSection from './sidebar/ProjectSection';
import ChatHistorySection from './sidebar/ChatHistorySection';
import SidebarFooter from './sidebar/SidebarFooter';

interface ChatSidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ 
  isCollapsed, 
  onToggleCollapse, 
  isDarkMode, 
  onToggleTheme 
}) => {
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['project1']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFolder = (folderId: string) => {
    setExpandedFolders(prev => 
      prev.includes(folderId) 
        ? prev.filter(id => id !== folderId)
        : [...prev, folderId]
    );
  };

  const createNewProject = () => {
    console.log('Creating new project...');
    // TODO: Add your project creation logic here
  };

  const createNewChat = () => {
    console.log('Creating new chat...');
    // TODO: Add your new chat creation logic here
  };

  const projects = [
    {
      id: 'project1',
      name: 'New project',
      chats: [
        { id: '1', title: 'Fasted Strength Training Advice', timestamp: 'Today' },
      ]
    },
    {
      id: 'project2', 
      name: 'My friend',
      chats: []
    },
    {
      id: 'project3',
      name: 'Korea',
      chats: []
    },
    {
      id: 'project4',
      name: 'My workout',
      chats: []
    },
    {
      id: 'project5',
      name: 'Ideas',
      chats: []
    },
    {
      id: 'project6',
      name: 'My personal life coach an...',
      chats: []
    }
  ];

  const allChats = [
    { id: '2', title: 'Chat Dashboard UI Design', timestamp: 'Yesterday' },
    { id: '3', title: 'Import Export Error Fix', timestamp: 'Yesterday' },
    { id: '4', title: 'AI Brain Architecture Plan', timestamp: 'Previous 7 Days' },
    { id: '5', title: 'Paederus Dermatitis Assessm...', timestamp: 'Previous 7 Days' },
    { id: '6', title: 'Euler Protocol Risk Summary', timestamp: 'Previous 7 Days' },
    { id: '7', title: 'Itchy Skin Reaction', timestamp: 'Previous 7 Days' },
  ];

  if (isCollapsed) {
    return (
      <TooltipProvider>
        <div className={`w-14 border-r flex flex-col h-screen transition-all duration-200 ease-in-out ${
          isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-[#f7f7f8] border-gray-200'
        }`}>
          <div className="p-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onToggleCollapse}
                  className={`w-full h-10 p-0 transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-offset-2 ${
                    isDarkMode 
                      ? 'hover:bg-gray-700 text-gray-300 focus:ring-gray-500' 
                      : 'hover:bg-gray-100 text-gray-600 focus:ring-gray-400'
                  }`}
                >
                  <PanelLeft className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Expand sidebar</p>
              </TooltipContent>
            </Tooltip>
          </div>
          
          {/* Action buttons in collapsed view */}
          <div className="px-2 space-y-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={createNewChat}
                  className={`w-full h-10 p-0 transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-offset-2 ${
                    isDarkMode 
                      ? 'hover:bg-gray-700 text-gray-300 focus:ring-gray-500' 
                      : 'hover:bg-gray-100 text-gray-600 focus:ring-gray-400'
                  }`}
                >
                  <Pen className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>New chat</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={createNewProject}
                  className={`w-full h-10 p-0 transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-offset-2 ${
                    isDarkMode 
                      ? 'hover:bg-gray-700 text-gray-300 focus:ring-gray-500' 
                      : 'hover:bg-gray-100 text-gray-600 focus:ring-gray-400'
                  }`}
                >
                  <FolderPlus className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>New project</p>
              </TooltipContent>
            </Tooltip>
          </div>
          
          <div className="flex-1" />
          
          <div className="p-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onToggleTheme}
                  className={`w-full h-10 p-0 transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-offset-2 ${
                    isDarkMode 
                      ? 'hover:bg-gray-700 text-gray-300 focus:ring-gray-500' 
                      : 'hover:bg-gray-100 text-gray-600 focus:ring-gray-400'
                  }`}
                >
                  {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{isDarkMode ? 'Light mode' : 'Dark mode'}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </TooltipProvider>
    );
  }

  return (
    <div className={`w-64 border-r flex flex-col h-screen transition-all duration-200 ease-in-out ${
      isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-[#f7f7f8] border-gray-200'
    }`}>
      {/* Fixed Header - Action buttons and search */}
      <div className="flex-shrink-0">
        <SidebarHeader
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onCreateNewChat={createNewChat}
          onCreateNewProject={createNewProject}
          isDarkMode={isDarkMode}
        />
      </div>

      {/* Scrollable middle section - Projects and chat history */}
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full px-3">
          <ProjectSection
            projects={projects}
            expandedFolders={expandedFolders}
            onToggleFolder={toggleFolder}
            isDarkMode={isDarkMode}
          />

          <ChatHistorySection
            chats={allChats}
            isDarkMode={isDarkMode}
          />
        </ScrollArea>
      </div>

      {/* Fixed Footer - Theme toggle and collapse */}
      <div className="flex-shrink-0">
        <SidebarFooter
          isDarkMode={isDarkMode}
          onToggleTheme={onToggleTheme}
          onToggleCollapse={onToggleCollapse}
        />
      </div>
    </div>
  );
};

export default ChatSidebar;
