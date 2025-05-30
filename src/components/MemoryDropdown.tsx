
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Brain, Clock, Zap, Archive, BookOpen, ChevronDown } from 'lucide-react';

interface MemoryDropdownProps {
  isDarkMode?: boolean;
}

const MemoryDropdown: React.FC<MemoryDropdownProps> = ({ isDarkMode = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const memoryOptions = [
    { 
      id: 'short-term', 
      name: 'Short Term', 
      icon: Clock,
      description: 'Recent conversation context'
    },
    { 
      id: 'transit', 
      name: 'Transit', 
      icon: Zap,
      description: 'Temporary working memory'
    },
    { 
      id: 'long-term', 
      name: 'Long Term', 
      icon: Brain,
      description: 'Persistent memories'
    },
    { 
      id: 'archive', 
      name: 'Archive', 
      icon: Archive,
      description: 'Stored conversations'
    },
    { 
      id: 'knowledge-base', 
      name: 'Knowledge Base', 
      icon: BookOpen,
      description: 'Reference materials'
    },
  ];

  const handleMemoryAction = (optionId: string) => {
    console.log(`Memory action: ${optionId}`);
    // TODO: Add your memory management logic here
  };

  const buttonBaseClasses = `w-full h-10 justify-start text-sm font-normal px-3 py-2 rounded-lg transition-all duration-200 ${
    isDarkMode 
      ? 'text-gray-300 bg-gray-800/40 hover:bg-gray-700/60 border-0' 
      : 'text-gray-700 bg-gray-100/60 hover:bg-gray-200/80 border-0'
  }`;

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={buttonBaseClasses}
        >
          <Brain className="h-4 w-4 mr-3 flex-shrink-0" />
          <span className="flex-1 text-left">Memory</span>
          <ChevronDown className={`h-4 w-4 ml-2 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className={`w-64 shadow-lg border-0 rounded-lg animate-in fade-in-0 zoom-in-95 duration-200 z-50 ${
          isDarkMode
            ? 'bg-gray-800 border-gray-600'
            : 'bg-white border-gray-200'
        }`}
        align="start"
        sideOffset={4}
      >
        {memoryOptions.map((option) => {
          const IconComponent = option.icon;
          return (
            <DropdownMenuItem
              key={option.id}
              className={`cursor-pointer p-3 text-sm transition-all duration-150 hover:scale-[1.02] focus:scale-[1.02] ${
                isDarkMode
                  ? 'hover:bg-gray-700 text-gray-200 focus:bg-gray-700'
                  : 'hover:bg-gray-50 focus:bg-gray-50'
              }`}
              onClick={() => handleMemoryAction(option.id)}
            >
              <div className="flex items-start space-x-3">
                <IconComponent className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <div className="font-medium">{option.name}</div>
                  <div className={`text-xs mt-0.5 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {option.description}
                  </div>
                </div>
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MemoryDropdown;
