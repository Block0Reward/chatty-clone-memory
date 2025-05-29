
import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface ChatHistoryProps {
  messages: Message[];
  isDarkMode?: boolean;
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ messages, isDarkMode = false }) => {
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);

  const copyToClipboard = async (content: string, messageId: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedMessageId(messageId);
      setTimeout(() => setCopiedMessageId(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (messages.length === 0) {
    return (
      <div className={`flex-1 flex items-center justify-center ${
        isDarkMode ? 'text-gray-400' : 'text-gray-500'
      }`}>
        <div className="text-center">
          <h2 className={`text-2xl font-semibold mb-2 ${
            isDarkMode ? 'text-gray-200' : 'text-gray-800'
          }`}>
            How can I help you today?
          </h2>
          <p className="text-sm">Start a conversation by typing a message below.</p>
        </div>
      </div>
    );
  }

  return (
    <ScrollArea className="flex-1 px-4">
      <div className="max-w-3xl mx-auto py-6 space-y-6">
        <TooltipProvider>
          {messages.map((message) => (
            <div key={message.id} className="group">
              <div className={`flex gap-4 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    message.type === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-green-500 text-white'
                  }`}>
                    {message.type === 'user' ? 'U' : 'AI'}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className={`rounded-2xl px-4 py-3 ${
                      message.type === 'user'
                        ? isDarkMode 
                          ? 'bg-[#2c313a] text-gray-100'
                          : 'bg-[#f7f7f8] text-gray-900'
                        : isDarkMode
                          ? 'bg-gray-800 text-gray-100'
                          : 'bg-gray-100 text-gray-900'
                    }`}>
                      <div className="text-sm leading-relaxed whitespace-pre-wrap">
                        {message.content}
                      </div>
                    </div>
                    
                    {/* Copy Button */}
                    <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(message.content, message.id)}
                            className={`h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                              isDarkMode
                                ? 'hover:bg-gray-700 text-gray-400 hover:text-gray-200'
                                : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
                            }`}
                          >
                            {copiedMessageId === message.id ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{copiedMessageId === message.id ? 'Copied!' : 'Copy to clipboard'}</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </TooltipProvider>
      </div>
    </ScrollArea>
  );
};

export default ChatHistory;
