
import React, { useState } from 'react';
import { ChevronDown, Cpu } from 'lucide-react';
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

  const buttonBaseClasses = `w-full h-10 justify-start text-sm font-normal transition-all duration-200 hover:shadow-sm focus:ring-2 focus:ring-offset-2 ${
    isDarkMode 
      ? 'text-gray-300 hover:bg-gray-800/50 hover:border-gray-600 focus:ring-gray-500 border-gray-700' 
      : 'text-gray-700 hover:bg-gray-50 hover:border-gray-300 focus:ring-gray-400 border-gray-200'
  }`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={buttonBaseClasses}
        >
          <Cpu className="h-4 w-4 mr-3" />
          <span className="flex-1 text-left truncate">{selectedModel}</span>
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className={`w-56 shadow-lg z-50 ${
          isDarkMode
            ? 'bg-gray-800 border-gray-600'
            : 'bg-white border-gray-200'
        }`}
        align="start"
        sideOffset={4}
      >
        {models.map((model) => (
          <DropdownMenuItem
            key={model.id}
            className={`cursor-pointer p-3 transition-colors duration-150 ${
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
