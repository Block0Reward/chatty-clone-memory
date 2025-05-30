
import React from 'react';
import { Search, Pen, FolderPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
  return (
    <>
      {/* Search */}
      <div className="p-3">
        <div className="relative">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-400'
          }`} />
          <Input
            placeholder="Search chats"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`pl-9 h-9 text-sm ${
              isDarkMode 
                ? 'bg-gray-800 border-gray-600 text-gray-200 placeholder:text-gray-400' 
                : 'bg-white border-gray-200'
            }`}
          />
        </div>
      </div>

      {/* New Chat Button - Updated to match New Project button style */}
      <div className="px-3 pb-3">
        <Button 
          onClick={onCreateNewChat}
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
          variant="outline" 
          onClick={onCreateNewProject}
          className={`w-full h-11 text-sm font-normal justify-start border ${
            isDarkMode 
              ? 'bg-gray-800 hover:bg-gray-700 text-gray-200 border-gray-600 hover:border-gray-500' 
              : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow'
          }`}
        >
          <FolderPlus className="h-4 w-4 mr-3" />
          New project
        </Button>
      </div>
    </>
  );
};

export default SidebarHeader;
