'use client';

import { useState } from 'react';
import type { RecordData } from '@/types';
import RecordCard from '@/components/ui/RecordCard';

interface RecordsSectionProps {
  records: RecordData[];
  onLoadMore?: () => void;
}

export default function RecordsSection({ records, onLoadMore }: RecordsSectionProps) {
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // 模拟加载
    onLoadMore?.();
    setLoading(false);
  };

  return (
    <div className="px-5 pb-32">
      <div className="flex items-center gap-3 py-5 text-lg font-bold text-white">
        <div className="p-2 bg-blue-500/20 rounded-full animate-float">
          <i className="fas fa-history text-blue-500 text-lg" />
        </div>
        <span>量值记录（最近10条）</span>
      </div>
      
      <div className="max-h-[450px] overflow-y-auto pr-2 space-y-0 scrollbar-thin">
        {records.map((record) => (
          <RecordCard key={record.id} data={record} />
        ))}
        
        <button
          onClick={handleLoadMore}
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border-2 border-dashed border-cyan-300/40 rounded-xl p-4 text-blue-500 text-sm font-bold cursor-pointer backdrop-blur-sm relative overflow-hidden transition-all duration-300 hover:border-cyan-300/60 hover:bg-gradient-to-r hover:from-blue-500/25 hover:to-cyan-500/25 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          {/* 按钮光效 */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          
          <div className="flex items-center justify-center gap-2 relative z-10">
            <i className={`fas ${loading ? 'fa-spinner fa-spin' : 'fa-chevron-down'}`} />
            {loading ? '加载中...' : '加载更多记录'}
          </div>
        </button>
      </div>
    </div>
  );
} 