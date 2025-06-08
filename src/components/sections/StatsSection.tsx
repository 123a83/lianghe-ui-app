import type { StatCardData } from '@/types';
import StatCard from '@/components/ui/StatCard';

interface StatsSectionProps {
  stats: StatCardData[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <div className="px-5 mb-8">
      <div className="flex items-center gap-3 py-6 text-xl font-extrabold text-white">
        <div className="p-2.5 bg-blue-500/20 rounded-full animate-float">
          <i className="fas fa-chart-line text-blue-500 text-xl" />
        </div>
        <span>量合区数据中心</span>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent ml-4" />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.id} data={stat} />
        ))}
      </div>
    </div>
  );
} 