
import React, { useState } from 'react';
import { Search, Plus, ChevronDown, ChevronRight, MessageSquare, PanelLeftClose, PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ChatSidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ isCollapsed, onToggleCollapse }) => {
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['recent']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFolder = (folderId: string) => {
    setExpandedFolders(prev => 
      prev.includes(folderId) 
        ? prev.filter(id => id !== folderId)
        : [...prev, folderId]
    );
  };

  const folders = [
    {
      id: 'recent',
      name: 'Recent',
      chats: [
        { id: '1', title: 'React Components Discussion', timestamp: 'Today' },
        { id: '2', title: 'TypeScript Best Practices', timestamp: 'Yesterday' },
        { id: '3', title: 'UI Design Patterns', timestamp: '2 days ago' },
      ]
    },
    {
      id: 'projects',
      name: 'Projects',
      chats: [
        { id: '4', title: 'E-commerce App Development', timestamp: '1 week ago' },
        { id: '5', title: 'API Integration Guide', timestamp: '2 weeks ago' },
      ]
    },
    {
      id: 'learning',
      name: 'Learning',
      chats: [
        { id: '6', title: 'Machine Learning Basics', timestamp: '1 month ago' },
        { id: '7', title: 'Data Structures & Algorithms', timestamp: '1 month ago' },
      ]
    }
  ];

  if (isCollapsed) {
    return (
      <div className="w-14 bg-[#f7f7f8] border-r border-gray-200 flex flex-col h-screen">
        <div className="p-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleCollapse}
            className="w-full h-10 p-0 hover:bg-gray-100"
          >
            <PanelLeft className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex-1" />
        <div className="p-2">
          <Button
            variant="ghost"
            size="sm"
            className="w-full h-10 p-0 hover:bg-gray-100"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-64 bg-[#f7f7f8] border-r border-gray-200 flex flex-col h-screen">
      {/* Header */}
      <div className="p-3 border-b border-gray-200">
        <Button 
          className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 h-11 text-sm font-medium justify-start"
          variant="outline"
        >
          <Plus className="h-4 w-4 mr-2" />
          New chat
        </Button>
      </div>

      {/* Search */}
      <div className="p-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search chats"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-white border-gray-200 h-9 text-sm"
          />
        </div>
      </div>

      {/* Library */}
      <div className="px-3 py-1">
        <Button variant="ghost" className="w-full justify-start text-sm font-medium text-gray-700 h-8">
          Library
        </Button>
      </div>

      {/* Chat History */}
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-1">
          {folders.map((folder) => (
            <div key={folder.id}>
              <Button
                variant="ghost"
                onClick={() => toggleFolder(folder.id)}
                className="w-full justify-start text-sm font-medium text-gray-700 h-8 px-2"
              >
                {expandedFolders.includes(folder.id) ? (
                  <ChevronDown className="h-3 w-3 mr-1" />
                ) : (
                  <ChevronRight className="h-3 w-3 mr-1" />
                )}
                {folder.name}
              </Button>
              
              {expandedFolders.includes(folder.id) && (
                <div className="ml-4 space-y-0.5">
                  {folder.chats.map((chat) => (
                    <Button
                      key={chat.id}
                      variant="ghost"
                      className="w-full justify-start text-sm text-gray-600 h-8 px-2 hover:bg-gray-100"
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
        </div>
      </ScrollArea>

      {/* Collapse Button */}
      <div className="p-3 border-t border-gray-200">
        <Button
          variant="ghost"
          onClick={onToggleCollapse}
          className="w-full justify-start text-sm text-gray-700 h-8"
        >
          <PanelLeftClose className="h-4 w-4 mr-2" />
          Close sidebar
        </Button>
      </div>
    </div>
  );
};

export default ChatSidebar;
