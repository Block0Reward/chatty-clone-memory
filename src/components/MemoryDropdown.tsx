
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface MemoryDropdownProps {
  isDarkMode?: boolean;
}

const MemoryDropdown: React.FC<MemoryDropdownProps> = ({ isDarkMode = false }) => {
  const memoryOptions = [
    { id: 'short-term', name: 'Short Term' },
    { id: 'transit', name: 'Transit' },
    { id: 'long-term', name: 'Long Term' },
    { id: 'archive', name: 'Archive' },
    { id: 'knowledge-base', name: 'Knowledge Base' },
  ];

  const handleMemoryAction = (optionId: string) => {
    console.log(`Memory action: ${optionId}`);
    // TODO: Add your memory management logic here
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`h-10 px-4 text-sm font-medium ${
            isDarkMode
              ? 'bg-gray-800 border-gray-600 text-gray-200 hover:bg-gray-700'
              : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          Memory
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`w-48 shadow-lg ${
        isDarkMode
          ? 'bg-gray-800 border-gray-600'
          : 'bg-white border-gray-200'
      }`}>
        {memoryOptions.map((option) => (
          <DropdownMenuItem
            key={option.id}
            className={`cursor-pointer p-3 text-sm ${
              isDarkMode
                ? 'hover:bg-gray-700 text-gray-200'
                : 'hover:bg-gray-50'
            }`}
            onClick={() => handleMemoryAction(option.id)}
          >
            {option.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MemoryDropdown;
