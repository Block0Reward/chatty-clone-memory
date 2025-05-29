
import React, { useState } from 'react';
import { Plus, Search, Mic, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled = false }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleFileUpload = () => {
    console.log('File upload clicked');
    // TODO: Add file upload logic here
  };

  const handleWebSearch = () => {
    console.log('Web search clicked');
    // TODO: Add web search logic here
  };

  const handleVoiceInput = () => {
    console.log('Voice input clicked');
    // TODO: Add voice input logic here
  };

  return (
    <div className="border-t border-gray-200 bg-white">
      <div className="max-w-3xl mx-auto p-4">
        <div className="relative bg-white border border-gray-200 rounded-3xl shadow-sm">
          <div className="flex items-end p-3 gap-3">
            {/* File Upload Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleFileUpload}
              className="p-2 h-8 w-8 rounded-full hover:bg-gray-100 flex-shrink-0"
            >
              <Plus className="h-4 w-4" />
            </Button>

            {/* Text Input */}
            <div className="flex-1 min-h-[20px] max-h-32">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Message ChatGPT..."
                className="border-0 resize-none bg-transparent text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 min-h-[20px]"
                rows={1}
                style={{
                  height: 'auto',
                  minHeight: '20px',
                  maxHeight: '128px',
                }}
                disabled={disabled}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1 flex-shrink-0">
              {/* Web Search Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleWebSearch}
                className="p-2 h-8 w-8 rounded-full hover:bg-gray-100"
              >
                <Search className="h-4 w-4" />
              </Button>

              {/* Voice Input Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleVoiceInput}
                className="p-2 h-8 w-8 rounded-full hover:bg-gray-100"
              >
                <Mic className="h-4 w-4" />
              </Button>

              {/* Send Button */}
              <Button
                onClick={handleSubmit}
                disabled={!message.trim() || disabled}
                size="sm"
                className="p-2 h-8 w-8 rounded-full bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:opacity-50"
                variant="ghost"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Footer Text */}
        <div className="text-center text-xs text-gray-500 mt-3">
          ChatGPT can make mistakes. Check important info.
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
