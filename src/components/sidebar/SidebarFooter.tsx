
import React from 'react';
import { Sun, Moon, PanelLeftClose } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarFooterProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onToggleCollapse: () => void;
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({
  isDarkMode,
  onToggleTheme,
  onToggleCollapse
}) => {
  return (
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
  );
};

export default SidebarFooter;
