
import React, { useState } from 'react';
import { Plus, PanelLeft, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
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
      <div className={`w-14 border-r flex flex-col h-screen ${
        isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-[#f7f7f8] border-gray-200'
      }`}>
        <div className="p-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleCollapse}
            className={`w-full h-10 p-0 ${
              isDarkMode 
                ? 'hover:bg-gray-700 text-gray-300' 
                : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            <PanelLeft className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex-1" />
        <div className="p-2 space-y-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleTheme}
            className={`w-full h-10 p-0 ${
              isDarkMode 
                ? 'hover:bg-gray-700 text-gray-300' 
                : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`w-full h-10 p-0 ${
              isDarkMode 
                ? 'hover:bg-gray-700 text-gray-300' 
                : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-64 border-r flex flex-col h-screen ${
      isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-[#f7f7f8] border-gray-200'
    }`}>
      <SidebarHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onCreateNewChat={createNewChat}
        onCreateNewProject={createNewProject}
        isDarkMode={isDarkMode}
      />

      <ScrollArea className="flex-1 px-3">
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

      <SidebarFooter
        isDarkMode={isDarkMode}
        onToggleTheme={onToggleTheme}
        onToggleCollapse={onToggleCollapse}
      />
    </div>
  );
};

export default ChatSidebar;
