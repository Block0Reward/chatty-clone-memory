
import React, { useState } from 'react';
import { X, FileText, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Agent {
  id: string;
  name: string;
  status: 'active' | 'waiting' | 'inactive';
}

interface Process {
  id: string;
  name: string;
  status: 'finished' | 'waiting' | 'active';
  timestamp: string;
}

interface AgentsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

const AgentsSidebar: React.FC<AgentsSidebarProps> = ({ isOpen, onClose, isDarkMode }) => {
  const [showLogs, setShowLogs] = useState(false);

  const agents: Agent[] = [
    { id: '1', name: 'Twitter', status: 'active' },
    { id: '2', name: 'YouTube', status: 'waiting' },
    { id: '3', name: 'Research', status: 'inactive' },
    { id: '4', name: 'Coding', status: 'active' },
    { id: '5', name: 'System Monitoring', status: 'inactive' },
  ];

  const processes: Process[] = [
    { id: '1', name: 'Twitter data analysis', status: 'finished', timestamp: '2 min ago' },
    { id: '2', name: 'YouTube video processing', status: 'waiting', timestamp: '5 min ago' },
    { id: '3', name: 'Research paper review', status: 'active', timestamp: '1 min ago' },
    { id: '4', name: 'Code compilation', status: 'finished', timestamp: '10 min ago' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-500';
      case 'waiting': return 'text-yellow-500';
      case 'inactive': return 'text-red-500';
      case 'finished': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    const baseClass = "h-3 w-3 rounded-full";
    switch (status) {
      case 'active': return `${baseClass} bg-green-500`;
      case 'waiting': return `${baseClass} bg-yellow-500`;
      case 'inactive': return `${baseClass} bg-red-500`;
      case 'finished': return `${baseClass} bg-blue-500`;
      default: return `${baseClass} bg-gray-500`;
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed right-0 top-0 h-full w-64 z-50 border-l transform transition-transform duration-200 ease-in-out ${
      isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-[#f7f7f8] border-gray-200'
    }`}>
      {/* Header */}
      <div className={`p-3 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex items-center justify-between">
          <h2 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {showLogs ? 'Process Logs' : 'Agents'}
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className={`h-8 w-8 p-0 ${
              isDarkMode 
                ? 'hover:bg-gray-700 text-gray-300' 
                : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 h-full">
        <ScrollArea className="h-full px-3">
          {!showLogs ? (
            // Agents View
            <div className="py-3 space-y-2">
              {agents.map((agent) => (
                <div
                  key={agent.id}
                  className={`flex items-center justify-between p-2 rounded-md transition-colors ${
                    isDarkMode 
                      ? 'hover:bg-gray-800' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <span className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {agent.name}
                  </span>
                  <div className="flex items-center space-x-2">
                    <Lightbulb className={`h-4 w-4 ${getStatusColor(agent.status)}`} />
                    <div className={getStatusIcon(agent.status)} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Logs View
            <div className="py-3 space-y-2">
              {processes.map((process) => (
                <div
                  key={process.id}
                  className={`p-2 rounded-md border ${
                    isDarkMode 
                      ? 'border-gray-700 bg-gray-800/50' 
                      : 'border-gray-200 bg-white/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      {process.name}
                    </span>
                    <div className={getStatusIcon(process.status)} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs ${getStatusColor(process.status)}`}>
                      {process.status}
                    </span>
                    <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {process.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </div>

      {/* Footer */}
      <div className={`p-3 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <Button
          variant="ghost"
          onClick={() => setShowLogs(!showLogs)}
          className={`w-full justify-start text-sm h-8 ${
            isDarkMode 
              ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-100' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <FileText className="h-4 w-4 mr-2" />
          {showLogs ? 'Show Agents' : 'Show Logs'}
        </Button>
      </div>
    </div>
  );
};

export default AgentsSidebar;
