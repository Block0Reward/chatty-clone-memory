
import React, { useState } from 'react';
import { Users, Sun, Moon, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switch';
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

  const buttonBaseClasses = `w-full h-10 justify-start text-sm font-normal px-3 py-2 rounded-lg transition-all duration-200 ${
    isDarkMode 
      ? 'text-gray-300 bg-gray-800/40 hover:bg-gray-700/60 border-0' 
      : 'text-gray-700 bg-gray-100/60 hover:bg-gray-200/80 border-0'
  }`;

  return (
    <>
      <div className={`w-64 border-r flex flex-col h-screen ${
        isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-[#f7f7f8] border-gray-200'
      }`}>
        {/* Top row: Theme Toggle and System Monitor */}
        <div className={`p-3 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleTheme}
              className={`h-8 w-8 rounded-lg ${
                isDarkMode 
                  ? 'text-gray-300 hover:bg-gray-700/60' 
                  : 'text-gray-700 hover:bg-gray-200/80'
              }`}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            <SystemMonitor isDarkMode={isDarkMode} />
          </div>
        </div>

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

        {/* Agents Button */}
        <div className={`px-3 pb-3 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              className={buttonBaseClasses}
            >
              <Users className="h-4 w-4 mr-3 flex-shrink-0" />
              Agents
            </Button>
            <Switch
              checked={isAgentsSidebarOpen}
              onCheckedChange={setIsAgentsSidebarOpen}
              className="ml-2"
            />
          </div>
        </div>

        {/* Scrollable middle section with spacing */}
        <div className="flex-1 min-h-0 pt-4">
          <ScrollArea className="h-full px-3">
            <ProjectSection
              projects={projects}
              expandedFolders={expandedFolders}
              onToggleFolder={toggleFolder}
              isDarkMode={isDarkMode}
              activeChat={activeChat}
              activeProject={activeProject}
            />

            <div className="mt-6">
              <ChatHistorySection
                chats={allChats}
                isDarkMode={isDarkMode}
                activeChat={activeChat}
              />
            </div>
          </ScrollArea>
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
