'use client';

import { useState, useEffect } from 'react';

export default function StatusBar() {
  const [currentTime, setCurrentTime] = useState('12:00');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black/90 backdrop-blur-xl px-5 py-2.5 flex justify-between items-center text-sm font-semibold text-white border-b border-cyan-300/30 relative overflow-hidden">
      {/* 背景光效 */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-shimmer" />
      
      <span className="relative z-10">{currentTime}</span>
      
      <div className="flex gap-2 items-center relative z-10">
        <i className="fas fa-signal text-green-400 text-xs animate-pulse-glow" />
        <i className="fas fa-wifi text-green-400 text-xs animate-pulse-glow" />
        <i className="fas fa-battery-full text-green-400 text-xs animate-pulse-glow" />
      </div>
    </div>
  );
} 