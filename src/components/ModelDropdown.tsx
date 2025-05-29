
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const ModelDropdown: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState('GPT-4');

  const models = [
    { id: 'gpt-4', name: 'GPT-4', description: 'More capable model' },
    { id: 'gpt-3.5', name: 'GPT-3.5', description: 'Faster responses' },
    { id: 'claude', name: 'Claude', description: 'Anthropic model' },
    { id: 'gemini', name: 'Gemini', description: 'Google model' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-white border-gray-200 text-gray-700 hover:bg-gray-50 h-10 px-4 text-sm font-medium"
        >
          {selectedModel}
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg">
        {models.map((model) => (
          <DropdownMenuItem
            key={model.id}
            className="cursor-pointer hover:bg-gray-50 p-3"
            onClick={() => setSelectedModel(model.name)}
          >
            <div>
              <div className="font-medium text-gray-900">{model.name}</div>
              <div className="text-sm text-gray-500">{model.description}</div>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModelDropdown;
