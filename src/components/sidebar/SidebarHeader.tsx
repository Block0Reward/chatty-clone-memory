
import React from 'react';
import { Search, Pen, FolderPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import MemoryDropdown from '../MemoryDropdown';

interface SidebarHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCreateNewChat: () => void;
  onCreateNewProject: () => void;
  isDarkMode: boolean;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  searchQuery,
  onSearchChange,
  onCreateNewChat,
  onCreateNewProject,
  isDarkMode
}) => {
  const buttonBaseClasses = `w-full h-10 justify-start text-sm font-normal px-3 py-2 rounded-lg transition-all duration-200 hover:shadow-sm focus:ring-2 focus:ring-offset-2 ${
    isDarkMode 
      ? 'text-gray-300 bg-gray-800/30 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600 focus:ring-gray-500' 
      : 'text-gray-700 bg-gray-50/50 hover:bg-gray-100/80 border border-gray-200/50 hover:border-gray-300 focus:ring-gray-400'
  }`;

  return (
    <div className="p-3 space-y-3">
      {/* Action Buttons Group */}
      <div className="space-y-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              onClick={onCreateNewChat}
              variant="ghost"
              className={buttonBaseClasses}
            >
              <Pen className="h-4 w-4 mr-3 flex-shrink-0" />
              New chat
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Start a new conversation</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              onClick={onCreateNewProject}
              className={buttonBaseClasses}
            >
              <FolderPlus className="h-4 w-4 mr-3 flex-shrink-0" />
              New project
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Create a new project</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div>
              <MemoryDropdown isDarkMode={isDarkMode} />
            </div>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Manage AI memory</p>
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Search */}
      <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
        <div className="relative">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-colors duration-200 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-400'
          }`} />
          <Input
            placeholder="Search chats"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`pl-9 h-9 text-sm transition-all duration-200 focus:ring-2 focus:ring-offset-2 ${
              isDarkMode 
                ? 'bg-gray-800 border-gray-600 text-gray-200 placeholder:text-gray-400 focus:ring-gray-500' 
                : 'bg-white border-gray-200 focus:ring-gray-400'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
