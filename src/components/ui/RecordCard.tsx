'use client';

import { useState, useEffect } from 'react';
import type { RecordData } from '@/types';
import { formatNumber } from '@/utils/format';

interface RecordCardProps {
  data: RecordData;
}

export default function RecordCard({ data }: RecordCardProps) {
  const [formattedDate, setFormattedDate] = useState(data.date);

  useEffect(() => {
    // 只在客户端格式化日期
    const date = new Date(data.date);
    const formatted = date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    setFormattedDate(formatted);
  }, [data.date]);

  const getStatusConfig = (status: RecordData['status']) => {
    switch (status) {
      case 'completed':
        return {
          bg: 'bg-green-500/25',
          text: 'text-green-400',
          border: 'border-green-500/40',
          icon: 'fas fa-check-circle',
          label: '已确认'
        };
      case 'processing':
        return {
          bg: 'bg-yellow-500/25',
          text: 'text-yellow-400',
          border: 'border-yellow-500/40',
          icon: 'fas fa-spinner fa-spin',
          label: '处理中'
        };
      default:
        return {
          bg: 'bg-gray-500/25',
          text: 'text-gray-400',
          border: 'border-gray-500/40',
          icon: 'fas fa-clock',
          label: '待处理'
        };
    }
  };

  const statusConfig = getStatusConfig(data.status);
  const isGain = data.type === 'gain';

  return (
    <div className="bg-gradient-to-br from-blue-500/12 via-cyan-500/6 to-purple-600/4 border border-cyan-300/40 rounded-2xl p-5 mb-4 backdrop-blur-lg relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-cyan-300/60 hover:shadow-xl hover:shadow-blue-500/20 group">
      {/* 顶部渐变条 */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      
      <div className="relative z-10">
        {/* 记录头部 */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2.5 text-cyan-400 font-bold text-sm">
            <div className="p-2.5 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-full shadow-lg shadow-blue-500/30 animate-pulse">
              <i className={`${isGain ? 'fas fa-plus-circle' : 'fas fa-minus-circle'} text-blue-500 text-lg`} />
            </div>
            <span>{isGain ? '量值获取' : '量值消耗'}</span>
          </div>
          
          <div className="text-right">
            <div className={`text-3xl font-extrabold ${isGain ? 'text-green-400' : 'text-red-400'} animate-pulse-glow`}>
              {isGain ? '+' : '-'}{formatNumber(data.amount)}
              <span className="text-base text-blue-500 opacity-90 font-semibold ml-1">{data.unit}</span>
            </div>
          </div>
        </div>
        
        {/* 详情信息 */}
        {data.details && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            {Object.entries(data.details).map(([key, value]) => (
              <div key={key} className="text-center p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-blue-500/10 hover:border-cyan-300/30 transition-all duration-200">
                <div className="text-xs text-gray-400 mb-1.5 uppercase tracking-wide font-semibold">{key}</div>
                <div className="text-sm text-white font-bold">{value}</div>
              </div>
            ))}
          </div>
        )}
        
        {/* 时间和状态 */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/15">
          <div className="text-xs text-cyan-400 opacity-90 font-medium">
            <i className="fas fa-clock mr-2" />
            {formattedDate}
          </div>
          
          <div className={`
            inline-flex items-center gap-1.5 px-3 py-1.5 ${statusConfig.bg} ${statusConfig.text} 
            border ${statusConfig.border} rounded-full text-xs font-bold shadow-lg
          `}>
            <i className={statusConfig.icon} />
            {statusConfig.label}
          </div>
        </div>
      </div>
      
      {/* 悬停光效 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
} 