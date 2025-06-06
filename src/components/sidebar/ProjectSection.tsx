
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, MessageSquare, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface Project {
  id: string;
  name: string;
  chats: Array<{
    id: string;
    title: string;
    timestamp: string;
  }>;
}

interface ProjectSectionProps {
  projects: Project[];
  expandedFolders: string[];
  onToggleFolder: (folderId: string) => void;
  isDarkMode: boolean;
  activeChat?: string;
  activeProject?: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  projects,
  expandedFolders,
  onToggleFolder,
  isDarkMode,
  activeChat,
  activeProject
}) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [hoveredChat, setHoveredChat] = useState<string | null>(null);
  const [showProjectSubmenu, setShowProjectSubmenu] = useState<string | null>(null);

  const handleRenameProject = (projectId: string) => {
    console.log('Rename project:', projectId);
    // TODO: Implement rename functionality
  };

  const handleDeleteProject = (projectId: string) => {
    console.log('Delete project:', projectId);
    // TODO: Implement delete functionality
  };

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
    <div className="space-y-1">
      {projects.map((project) => (
        <div key={project.id}>
          {/* Project Folder */}
          <div
            className="relative group"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <Button
              variant="ghost"
              onClick={() => onToggleFolder(project.id)}
              className={`w-full justify-start text-sm font-medium h-8 px-2 transition-all duration-200 hover:scale-[1.02] focus:ring-2 focus:ring-offset-2 ${
                activeProject === project.id
                  ? isDarkMode
                    ? 'bg-gray-700/70 text-gray-100'
                    : 'bg-gray-200/70 text-gray-900'
                  : isDarkMode 
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-100 focus:ring-gray-500' 
                    : 'text-gray-700 hover:bg-gray-100 focus:ring-gray-400'
              }`}
            >
              {expandedFolders.includes(project.id) ? (
                <ChevronDown className="h-3 w-3 mr-1 transition-transform duration-200" />
              ) : (
                <ChevronRight className="h-3 w-3 mr-1 transition-transform duration-200" />
              )}
              <span className="flex-1 text-left truncate">{project.name}</span>
            </Button>
            
            {/* Three dots menu for project */}
            {hoveredProject === project.id && (
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
                    onClick={() => handleRenameProject(project.id)}
                  >
                    Rename
                  </Button>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-sm h-8 px-2 ${
                      isDarkMode 
                        ? 'text-red-400 hover:text-red-300 hover:bg-red-900/20' 
                        : 'text-red-600 hover:text-red-700 hover:bg-red-50'
                    }`}
                    onClick={() => handleDeleteProject(project.id)}
                  >
                    Delete
                  </Button>
                </PopoverContent>
              </Popover>
            )}
          </div>
          
          {/* Project Chats */}
          {expandedFolders.includes(project.id) && project.chats.length > 0 && (
            <div className="ml-4 space-y-0.5 animate-in slide-in-from-top-1 duration-200">
              {project.chats.map((chat) => (
                <div
                  key={chat.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredChat(chat.id)}
                  onMouseLeave={() => setHoveredChat(null)}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-sm h-8 px-2 transition-all duration-200 hover:scale-[1.02] focus:ring-2 focus:ring-offset-2 ${
                      activeChat === chat.id
                        ? isDarkMode
                          ? 'bg-gray-700/70 text-gray-100'
                          : 'bg-gray-200/70 text-gray-900'
                        : isDarkMode 
                          ? 'text-gray-400 hover:bg-gray-800 hover:text-gray-200 focus:ring-gray-500' 
                          : 'text-gray-600 hover:bg-gray-100 focus:ring-gray-400'
                    }`}
                  >
                    <MessageSquare className="h-3 w-3 mr-2 flex-shrink-0" />
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
                              {projects.map((proj) => (
                                <Button
                                  key={proj.id}
                                  variant="ghost"
                                  className={`w-full justify-start text-sm h-8 px-2 ${
                                    isDarkMode 
                                      ? 'text-gray-200 hover:bg-gray-700 hover:text-white' 
                                      : 'text-gray-700 hover:bg-gray-100'
                                  }`}
                                  onClick={() => handleAddChatToProject(chat.id, proj.id)}
                                >
                                  {proj.name}
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
          )}
        </div>
      ))}

      {/* See more button */}
      <Button
        variant="ghost"
        className={`w-full justify-start text-sm h-8 px-2 transition-all duration-200 hover:scale-[1.02] focus:ring-2 focus:ring-offset-2 ${
          isDarkMode 
            ? 'text-gray-400 hover:bg-gray-800 hover:text-gray-200 focus:ring-gray-500' 
            : 'text-gray-600 hover:bg-gray-100 focus:ring-gray-400'
        }`}
      >
        ...&nbsp;&nbsp;See more
      </Button>
    </div>
  );
};

export default ProjectSection;
