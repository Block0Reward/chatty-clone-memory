
import React from 'react';
import { Button } from '@/components/ui/button';

interface SidebarFooterProps {
  isDarkMode: boolean;
  children?: React.ReactNode;
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({
  isDarkMode,
  children
}) => {
  return (
    <div className={`p-3 border-t space-y-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      {children}
    </div>
  );
};

export default SidebarFooter;
