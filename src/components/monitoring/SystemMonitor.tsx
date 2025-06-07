
import React, { useState, useEffect } from 'react';
import { Cpu, Zap, HardDrive } from 'lucide-react';

interface SystemStats {
  cpu: number;
  gpu: number;
  ram: number;
}

interface SystemMonitorProps {
  isDarkMode: boolean;
}

const SystemMonitor: React.FC<SystemMonitorProps> = ({ isDarkMode }) => {
  const [stats, setStats] = useState<SystemStats>({ cpu: 16, gpu: 24, ram: 16 });

  useEffect(() => {
    // Simulate real-time monitoring data
    const interval = setInterval(() => {
      setStats({
        cpu: Math.floor(Math.random() * 100),
        gpu: Math.floor(Math.random() * 100),
        ram: Math.floor(Math.random() * 100),
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getUsageColor = (usage: number) => {
    if (usage < 35) return 'text-green-500';
    if (usage < 80) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-1">
        <Cpu className="h-4 w-4" />
        <span className={`text-sm font-bold ${getUsageColor(stats.cpu)}`}>
          {stats.cpu}
        </span>
      </div>
      <div className="flex items-center space-x-1">
        <Zap className="h-4 w-4" />
        <span className={`text-sm font-bold ${getUsageColor(stats.gpu)}`}>
          {stats.gpu}
        </span>
      </div>
      <div className="flex items-center space-x-1">
        <HardDrive className="h-4 w-4" />
        <span className={`text-sm font-bold ${getUsageColor(stats.ram)}`}>
          {stats.ram}
        </span>
      </div>
    </div>
  );
};

export default SystemMonitor;
