
import React, { useState } from 'react';
import { Pen, FolderPlus, Users, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import SidebarHeader from './sidebar/SidebarHeader';
import ProjectSection from './sidebar/ProjectSection';
import ChatHistorySection from './sidebar/ChatHistorySection';
import SystemMonitor from './monitoring/SystemMonitor';
import AgentsSidebar from './agents/AgentsSidebar';

interface ChatSidebarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ 
  isDarkMode, 
  onToggleTheme 
}) => {
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['project1']);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeChat, setActiveChat] = useState<string>('1');
  const [activeProject, setActiveProject] = useState<string>('project1');
  const [isAgentsSidebarOpen, setIsAgentsSidebarOpen] = useState(false);

  const toggleFolder = (folderId: string) => {
    setExpandedFolders(prev => 
      prev.includes(folderId) 
        ? prev.filter(id => id !== folderId)
        : [...prev, folderId]
    );
  };

  const createNewProject = () => {
    console.log('Creating new project...');
  };

  const createNewChat = () => {
    console.log('Creating new chat...');
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

  return (
    <>
      <div className={`w-64 border-r flex flex-col h-screen ${
        isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-[#f7f7f8] border-gray-200'
      }`}>
        {/* System Monitor */}
        <SystemMonitor isDarkMode={isDarkMode} />

        {/* Header with search and action buttons */}
        <div className="flex-shrink-0">
          <SidebarHeader
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onCreateNewChat={createNewChat}
            onCreateNewProject={createNewProject}
            isDarkMode={isDarkMode}
          />
        </div>

        {/* Scrollable middle section */}
        <div className="flex-1 min-h-0">
          <ScrollArea className="h-full px-3">
            <ProjectSection
              projects={projects}
              expandedFolders={expandedFolders}
              onToggleFolder={toggleFolder}
              isDarkMode={isDarkMode}
              activeChat={activeChat}
              activeProject={activeProject}
            />

            <ChatHistorySection
              chats={allChats}
              isDarkMode={isDarkMode}
              activeChat={activeChat}
            />
          </ScrollArea>
        </div>

        {/* Footer with action buttons */}
        <div className={`p-3 border-t space-y-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <Button
            variant="ghost"
            onClick={() => setIsAgentsSidebarOpen(true)}
            className={`w-full justify-start text-sm h-8 transition-all duration-200 hover:scale-[1.02] focus:ring-2 focus:ring-offset-2 ${
              isDarkMode 
                ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-100 focus:ring-gray-500' 
                : 'text-gray-700 hover:bg-gray-100 focus:ring-gray-400'
            }`}
          >
            <Users className="h-4 w-4 mr-2" />
            Agents
          </Button>
          
          <Button
            variant="ghost"
            onClick={onToggleTheme}
            className={`w-full justify-center text-sm h-8 p-0 transition-all duration-200 hover:scale-[1.02] focus:ring-2 focus:ring-offset-2 ${
              isDarkMode 
                ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-100 focus:ring-gray-500' 
                : 'text-gray-700 hover:bg-gray-100 focus:ring-gray-400'
            }`}
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Agents Sidebar */}
      <AgentsSidebar
        isOpen={isAgentsSidebarOpen}
        onClose={() => setIsAgentsSidebarOpen(false)}
        isDarkMode={isDarkMode}
      />
    </>
  );
};

export default ChatSidebar;
