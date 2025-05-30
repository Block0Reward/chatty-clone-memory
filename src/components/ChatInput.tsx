
import React, { useState, useRef, useEffect } from 'react';
import { Plus, Globe, Mic, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  isDarkMode?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled = false, isDarkMode = false }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      // Reset height to auto to get the correct scrollHeight
      textareaRef.current.style.height = 'auto';
      // Set height based on scrollHeight with min and max constraints
      const newHeight = Math.min(Math.max(textareaRef.current.scrollHeight, 40), 200);
      textareaRef.current.style.height = `${newHeight}px`;
    }
  }, [message]);

  const handleSubmit = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
      // Reset textarea height after clearing
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = '40px';
      }
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
    <div className={`border-t ${isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
      <div className="max-w-3xl mx-auto p-4">
        <div className={`relative rounded-3xl shadow-sm ${
          isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'
        } border`}>
          <div className="flex items-end p-3 gap-3">
            {/* Left side buttons */}
            <div className="flex items-center gap-1 flex-shrink-0">
              {/* File Upload Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleFileUpload}
                className={`p-2 h-8 w-8 rounded-full flex-shrink-0 ${
                  isDarkMode 
                    ? 'hover:bg-gray-700 text-gray-300 hover:text-gray-100' 
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-800'
                }`}
              >
                <Plus className="h-4 w-4" />
              </Button>

              {/* Web Search Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleWebSearch}
                className={`p-2 h-8 w-8 rounded-full flex-shrink-0 ${
                  isDarkMode 
                    ? 'hover:bg-gray-700 text-gray-300 hover:text-gray-100' 
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-800'
                }`}
              >
                <Globe className="h-4 w-4" />
              </Button>
            </div>

            {/* Text Input */}
            <div className="flex-1 min-w-0">
              <Textarea
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Message ChatGPT..."
                className={`border-0 resize-none bg-transparent text-sm focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[40px] max-h-[200px] overflow-y-auto rounded-3xl px-4 py-2 ${
                  isDarkMode 
                    ? 'placeholder:text-gray-400 text-gray-200' 
                    : 'placeholder:text-gray-400'
                }`}
                rows={1}
                style={{
                  height: '40px',
                  lineHeight: '1.5',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                }}
                disabled={disabled}
              />
            </div>

            {/* Right side buttons */}
            <div className="flex items-end gap-1 flex-shrink-0">
              {/* Voice Input Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleVoiceInput}
                className={`p-2 h-8 w-8 rounded-full ${
                  isDarkMode 
                    ? 'hover:bg-gray-700 text-gray-300 hover:text-gray-100' 
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-800'
                }`}
              >
                <Mic className="h-4 w-4" />
              </Button>

              {/* Send Button */}
              <Button
                onClick={handleSubmit}
                disabled={!message.trim() || disabled}
                size="sm"
                className={`p-2 h-8 w-8 rounded-full disabled:opacity-50 ${
                  isDarkMode
                    ? 'bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 text-gray-300 hover:text-gray-100'
                    : 'bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 text-gray-600 hover:text-gray-800'
                }`}
                variant="ghost"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Footer Text */}
        <div className={`text-center text-xs mt-3 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          ChatGPT can make mistakes. Check important info.
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
