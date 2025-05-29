
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const MemoryDropdown: React.FC = () => {
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
          className="bg-white border-gray-200 text-gray-700 hover:bg-gray-50 h-10 px-4 text-sm font-medium"
        >
          Memory
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-white border border-gray-200 shadow-lg">
        {memoryOptions.map((option) => (
          <DropdownMenuItem
            key={option.id}
            className="cursor-pointer hover:bg-gray-50 p-3 text-sm"
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
