import type { StatCardData } from '@/types';
import { formatNumber } from '@/utils/format';

interface StatCardProps {
  data: StatCardData;
}

export default function StatCard({ data }: StatCardProps) {
  return (
    <div className="bg-gradient-to-br from-blue-500/12 to-cyan-500/8 border border-cyan-300/40 rounded-2xl p-6 text-center backdrop-blur-lg relative overflow-hidden transition-all duration-300 hover:scale-105 hover:border-cyan-300/60 hover:shadow-xl hover:shadow-blue-500/25 group">
      {/* 顶部渐变条 */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 animate-flow" />
      
      {/* 卡片内容 */}
      <div className="relative z-10">
        <div className="text-xs text-gray-400 mb-2.5 flex items-center justify-center gap-1.5 font-semibold uppercase tracking-wide">
          <i className={`${data.icon} text-blue-500`} />
          {data.label}
        </div>
        
        <div className="text-3xl font-extrabold text-cyan-400 animate-pulse-glow mb-3">
          {formatNumber(data.value)}
          <span className="text-lg text-blue-500 ml-1.5 font-semibold">{data.unit}</span>
        </div>
        
        {/* 进度条 */}
        <div className="w-full h-1.5 bg-white/15 rounded-full mt-3 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-cyan-500/50"
            style={{ 
              width: `${data.progress}%`,
              backgroundSize: '200% 100%',
              animation: 'flow 3s ease-in-out infinite'
            }}
          />
        </div>
      </div>
      
      {/* 悬停光效 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
} 