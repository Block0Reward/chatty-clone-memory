
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ModelDropdownProps {
  isDarkMode?: boolean;
}

const ModelDropdown: React.FC<ModelDropdownProps> = ({ isDarkMode = false }) => {
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
          className={`h-10 px-4 text-sm font-medium ${
            isDarkMode
              ? 'bg-gray-800 border-gray-600 text-gray-200 hover:bg-gray-700'
              : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          {selectedModel}
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`w-56 shadow-lg ${
        isDarkMode
          ? 'bg-gray-800 border-gray-600'
          : 'bg-white border-gray-200'
      }`}>
        {models.map((model) => (
          <DropdownMenuItem
            key={model.id}
            className={`cursor-pointer p-3 ${
              isDarkMode
                ? 'hover:bg-gray-700 text-gray-200'
                : 'hover:bg-gray-50'
            }`}
            onClick={() => setSelectedModel(model.name)}
          >
            <div>
              <div className={`font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                {model.name}
              </div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {model.description}
              </div>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModelDropdown;
