
import React from 'react';
import { ChevronDown, ChevronRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  name: string;
  chats: Array<{
    id: string;
    title: string;
    timestamp: string;
  }>;
}

interface ProjectSectionProps {
  projects: Project[];
  expandedFolders: string[];
  onToggleFolder: (folderId: string) => void;
  isDarkMode: boolean;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  projects,
  expandedFolders,
  onToggleFolder,
  isDarkMode
}) => {
  return (
    <div className="space-y-1">
      {projects.map((project) => (
        <div key={project.id}>
          <Button
            variant="ghost"
            onClick={() => onToggleFolder(project.id)}
            className={`w-full justify-start text-sm font-medium h-8 px-2 transition-all duration-200 hover:scale-[1.02] focus:ring-2 focus:ring-offset-2 ${
              isDarkMode 
                ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-100 focus:ring-gray-500' 
                : 'text-gray-700 hover:bg-gray-100 focus:ring-gray-400'
            }`}
          >
            {expandedFolders.includes(project.id) ? (
              <ChevronDown className="h-3 w-3 mr-1 transition-transform duration-200" />
            ) : (
              <ChevronRight className="h-3 w-3 mr-1 transition-transform duration-200" />
            )}
            {project.name}
          </Button>
          
          {expandedFolders.includes(project.id) && project.chats.length > 0 && (
            <div className="ml-4 space-y-0.5 animate-in slide-in-from-top-1 duration-200">
              {project.chats.map((chat) => (
                <Button
                  key={chat.id}
                  variant="ghost"
                  className={`w-full justify-start text-sm h-8 px-2 transition-all duration-200 hover:scale-[1.02] focus:ring-2 focus:ring-offset-2 ${
                    isDarkMode 
                      ? 'text-gray-400 hover:bg-gray-800 hover:text-gray-200 focus:ring-gray-500' 
                      : 'text-gray-600 hover:bg-gray-100 focus:ring-gray-400'
                  }`}
                >
                  <MessageSquare className="h-3 w-3 mr-2 flex-shrink-0" />
                  <div className="flex-1 text-left truncate">
                    <div className="truncate">{chat.title}</div>
                  </div>
                </Button>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* See more button */}
      <Button
        variant="ghost"
        className={`w-full justify-start text-sm h-8 px-2 transition-all duration-200 hover:scale-[1.02] focus:ring-2 focus:ring-offset-2 ${
          isDarkMode 
            ? 'text-gray-400 hover:bg-gray-800 hover:text-gray-200 focus:ring-gray-500' 
            : 'text-gray-600 hover:bg-gray-100 focus:ring-gray-400'
        }`}
      >
        ...&nbsp;&nbsp;See more
      </Button>
    </div>
  );
};

export default ProjectSection;
