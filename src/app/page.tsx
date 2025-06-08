'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import UserInfo from '@/components/ui/UserInfo';
import Header from '@/components/ui/Header';
import Notification from '@/components/ui/Notification';
import StatsSection from '@/components/sections/StatsSection';
import RecordsSection from '@/components/sections/RecordsSection';
import BottomActions from '@/components/layout/BottomActions';
import { mockUserData, mockNotification } from '@/lib/mockData';

// 动态导入StatusBar，禁用SSR
const StatusBar = dynamic(() => import('@/components/ui/StatusBar'), {
  ssr: false,
  loading: () => (
    <div className="bg-black/90 backdrop-blur-xl px-5 py-2.5 flex justify-between items-center text-sm font-semibold text-white border-b border-cyan-300/30 relative overflow-hidden">
      <span className="relative z-10">12:00</span>
      <div className="flex gap-2 items-center relative z-10">
        <i className="fas fa-signal text-green-400 text-xs" />
        <i className="fas fa-wifi text-green-400 text-xs" />
        <i className="fas fa-battery-full text-green-400 text-xs" />
      </div>
    </div>
  ),
});

export default function LiangHePage() {
  const [userData] = useState(mockUserData);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGetValue = () => {
    // 模拟获取量值
    console.log('获取量值');
    // 这里可以添加获取量值的逻辑
  };

  const handleSupport = () => {
    // 模拟联系客服
    console.log('联系客服');
    // 这里可以添加联系客服的逻辑
  };

  const handleLoadMoreRecords = () => {
    // 模拟加载更多记录
    console.log('加载更多记录');
    // 这里可以添加加载更多记录的逻辑
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white font-sans relative overflow-hidden">
      {/* 动态背景效果 - 只在客户端渲染时添加动画 */}
      <div className={`fixed inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/10 to-purple-600/5 pointer-events-none ${mounted ? 'animate-background-pulse' : ''}`} />
      <div className="fixed inset-0 bg-gradient-radial from-cyan-500/15 via-transparent to-purple-600/10 pointer-events-none opacity-80" />
      
      {/* 主要内容 */}
      <div className="relative z-10">
        <StatusBar />
        <UserInfo registrationCount={userData.registrationCount} />
        <Header />
        <Notification data={mockNotification} />
        
        <main className="pb-32">
          <StatsSection stats={userData.stats} />
          <RecordsSection 
            records={userData.records} 
            onLoadMore={handleLoadMoreRecords} 
          />
        </main>
        
        <BottomActions 
          onGetValue={handleGetValue}
          onSupport={handleSupport}
        />
      </div>
    </div>
  );
}
