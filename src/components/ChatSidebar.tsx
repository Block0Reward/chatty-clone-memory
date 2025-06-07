
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
            <div className="flex items-center space-x-2">
              <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </span>
              <Switch
                checked={isDarkMode}
                onCheckedChange={onToggleTheme}
              />
            </div>
            
            <SystemMonitor isDarkMode={isDarkMode} />
          </div>
        </div>

        {/* Header with action buttons */}
        <div className="flex-shrink-0">
          <SidebarHeader
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onCreateNewChat={createNewChat}
            onCreateNewProject={createNewProject}
            isDarkMode={isDarkMode}
            showSearch={false}
          />
        </div>

        {/* Agents Button */}
        <div className={`px-3 pb-3`}>
          <Button
            variant="ghost"
            className={`${buttonBaseClasses} ${isAgentsSidebarOpen ? 'bg-primary/20 text-primary' : ''}`}
            onClick={() => setIsAgentsSidebarOpen(!isAgentsSidebarOpen)}
          >
            <Users className="h-4 w-4 mr-3 flex-shrink-0" />
            Agents
          </Button>
        </div>

        {/* Search */}
        <div className={`px-3 pb-3 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="relative">
            <input
              placeholder="Search chats"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full h-9 pl-9 pr-3 text-sm rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-offset-2 ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-600 text-gray-200 placeholder:text-gray-400 focus:ring-gray-500' 
                  : 'bg-white border-gray-200 focus:ring-gray-400'
              }`}
            />
            <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-colors duration-200 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-400'
            }`}>
              🔍
            </div>
          </div>
        </div>

        {/* Scrollable middle section with spacing */}
        <div className="flex-1 min-h-0 pt-6">
          <ScrollArea className="h-full px-3">
            <ProjectSection
              projects={projects}
              expandedFolders={expandedFolders}
              onToggleFolder={toggleFolder}
              isDarkMode={isDarkMode}
              activeChat={activeChat}
              activeProject={activeProject}
            />

            <div className="mt-8">
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
