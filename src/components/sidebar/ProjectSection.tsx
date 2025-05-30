
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
            className={`w-full justify-start text-sm font-medium h-8 px-2 ${
              isDarkMode 
                ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-100' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {expandedFolders.includes(project.id) ? (
              <ChevronDown className="h-3 w-3 mr-1" />
            ) : (
              <ChevronRight className="h-3 w-3 mr-1" />
            )}
            {project.name}
          </Button>
          
          {expandedFolders.includes(project.id) && project.chats.length > 0 && (
            <div className="ml-4 space-y-0.5">
              {project.chats.map((chat) => (
                <Button
                  key={chat.id}
                  variant="ghost"
                  className={`w-full justify-start text-sm h-8 px-2 ${
                    isDarkMode 
                      ? 'text-gray-400 hover:bg-gray-800 hover:text-gray-200' 
                      : 'text-gray-600 hover:bg-gray-100'
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
        className={`w-full justify-start text-sm h-8 px-2 ${
          isDarkMode 
            ? 'text-gray-400 hover:bg-gray-800 hover:text-gray-200' 
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        ...&nbsp;&nbsp;See more
      </Button>
    </div>
  );
};

export default ProjectSection;
