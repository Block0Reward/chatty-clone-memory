
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

      {/* New Chat Button */}
      <div className="px-3 pb-3">
        <Button 
          onClick={onCreateNewChat}
          className={`w-full h-11 text-sm font-normal justify-start border transition-all duration-200 hover:scale-[1.02] focus:scale-[1.02] focus:ring-2 focus:ring-offset-2 ${
            isDarkMode 
              ? 'bg-gray-800 hover:bg-gray-700 text-gray-200 border-gray-600 hover:border-gray-500 focus:ring-gray-500' 
              : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow focus:ring-gray-400'
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
          className={`w-full h-11 text-sm font-normal justify-start border transition-all duration-200 hover:scale-[1.02] focus:scale-[1.02] focus:ring-2 focus:ring-offset-2 ${
            isDarkMode 
              ? 'bg-gray-800 hover:bg-gray-700 text-gray-200 border-gray-600 hover:border-gray-500 focus:ring-gray-500' 
              : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow focus:ring-gray-400'
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
