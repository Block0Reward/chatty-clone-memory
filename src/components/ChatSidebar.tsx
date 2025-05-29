import React, { useState } from 'react';
import { Search, Plus, ChevronDown, ChevronRight, MessageSquare, PanelLeftClose, PanelLeft, FolderPlus, Moon, Sun, Pen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

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
      {/* Search */}
      <div className="p-3">
        <div className="relative">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-400'
          }`} />
          <Input
            placeholder="Search chats"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`pl-9 h-9 text-sm ${
              isDarkMode 
                ? 'bg-gray-800 border-gray-600 text-gray-200 placeholder:text-gray-400' 
                : 'bg-white border-gray-200'
            }`}
          />
        </div>
      </div>

      {/* New Chat Button - Updated to match ChatGPT exactly */}
      <div className="px-3 pb-3">
        <Button 
          className={`w-full h-11 text-sm font-normal justify-start border ${
            isDarkMode 
              ? 'bg-gray-800 hover:bg-gray-700 text-gray-200 border-gray-600 hover:border-gray-500' 
              : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow'
          }`}
          variant="outline"
        >
          <Pen className="h-4 w-4 mr-3" />
          New chat
        </Button>
      </div>

      {/* Project Actions */}
      <div className={`px-3 py-2 space-y-2 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <Button 
          variant="ghost" 
          onClick={createNewProject}
          className={`w-full justify-start text-sm font-medium h-8 ${
            isDarkMode 
              ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-100' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <FolderPlus className="h-4 w-4 mr-2" />
          New project
        </Button>
      </div>

      {/* Projects Section */}
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-1">
          {projects.map((project) => (
            <div key={project.id}>
              <Button
                variant="ghost"
                onClick={() => toggleFolder(project.id)}
                className={`w-full justify-start text-sm font-medium h-8 px-2 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-100' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {expandedFolders.includes(project.id) ? (
                  <ChevronDown className="h-3 w-3 mr-1" />
                ) : (
                  <ChevronRight className="h-3 w-3 mr-1" />
                )}
                {project.name}
              </Button>
              
              {expandedFolders.includes(project.id) && project.chats.length > 0 && (
                <div className="ml-4 space-y-0.5">
                  {project.chats.map((chat) => (
                    <Button
                      key={chat.id}
                      variant="ghost"
                      className={`w-full justify-start text-sm h-8 px-2 ${
                        isDarkMode 
                          ? 'text-gray-400 hover:bg-gray-800 hover:text-gray-200' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <MessageSquare className="h-3 w-3 mr-2 flex-shrink-0" />
                      <div className="flex-1 text-left truncate">
                        <div className="truncate">{chat.title}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* See more button */}
          <Button
            variant="ghost"
            className={`w-full justify-start text-sm h-8 px-2 ${
              isDarkMode 
                ? 'text-gray-400 hover:bg-gray-800 hover:text-gray-200' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            ...&nbsp;&nbsp;See more
          </Button>

          {/* Chat History Section */}
          <div className="pt-4">
            <div className={`text-xs font-medium mb-2 px-2 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Today
            </div>
            {allChats.filter(chat => chat.timestamp === 'Today').map((chat) => (
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

            <div className={`text-xs font-medium mb-2 mt-4 px-2 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Yesterday
            </div>
            {allChats.filter(chat => chat.timestamp === 'Yesterday').map((chat) => (
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

            <div className={`text-xs font-medium mb-2 mt-4 px-2 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Previous 7 Days
            </div>
            {allChats.filter(chat => chat.timestamp === 'Previous 7 Days').map((chat) => (
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
        </div>
      </ScrollArea>

      {/* Footer with theme toggle and collapse */}
      <div className={`p-3 border-t space-y-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <Button
          variant="ghost"
          onClick={onToggleTheme}
          className={`w-full justify-start text-sm h-8 ${
            isDarkMode 
              ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-100' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {isDarkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
          {isDarkMode ? 'Light mode' : 'Dark mode'}
        </Button>
        <Button
          variant="ghost"
          onClick={onToggleCollapse}
          className={`w-full justify-start text-sm h-8 ${
            isDarkMode 
              ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-100' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <PanelLeftClose className="h-4 w-4 mr-2" />
          Close sidebar
        </Button>
      </div>
    </div>
  );
};

export default ChatSidebar;
